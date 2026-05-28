// ══════════════════════════════════════
// StudyVault — lesson-engine.js
// Interactive lesson runner (prototype)
// ══════════════════════════════════════

(function() {
    const PASS_DEFAULT = 0.7;
    let lesson = null;
    let unitId = null;
    let sectionIndex = 0;
    let teachIndex = 0;
    let mode = "overview"; // overview | teach | gate | complete

    function storageKey(suffix) {
        return "lesson_" + unitId + "_" + suffix;
    }

    function loadProgress() {
        try {
            return JSON.parse(localStorage.getItem(storageKey("progress")) || "{}");
        } catch {
            return {};
        }
    }

    function saveProgress(data) {
        localStorage.setItem(storageKey("progress"), JSON.stringify(data));
    }

    function loadConceptStats() {
        try {
            return JSON.parse(localStorage.getItem(storageKey("conceptStats")) || "{}");
        } catch {
            return {};
        }
    }

    function saveConceptStats(stats) {
        localStorage.setItem(storageKey("conceptStats"), JSON.stringify(stats));
    }

    function recordConceptResult(conceptId, correct) {
        if (!conceptId) return;
        const stats = loadConceptStats();
        if (!stats[conceptId]) {
            stats[conceptId] = { correct: 0, wrong: 0 };
        }
        if (correct) stats[conceptId].correct++;
        else stats[conceptId].wrong++;
        saveConceptStats(stats);
    }

    function getPassedSections(progress) {
        return progress.passedSections || [];
    }

    function isSectionUnlocked(index, progress) {
        if (index === 0) return true;
        const passed = getPassedSections(progress);
        const prevId = lesson.sections[index - 1].id;
        return passed.indexOf(prevId) !== -1;
    }

    function normalizeText(s) {
        return (s || "").toLowerCase().trim().replace(/\s+/g, " ");
    }

    function matchFaq(query, faqList) {
        const q = normalizeText(query);
        if (!q || q.length < 2) return null;
        let best = null;
        let bestScore = 0;
        (faqList || []).forEach(function(item) {
            (item.keys || []).forEach(function(key) {
                const k = normalizeText(key);
                if (q.includes(k) || k.includes(q)) {
                    const score = k.length;
                    if (score > bestScore) {
                        bestScore = score;
                        best = item;
                    }
                }
            });
        });
        return best;
    }

    function checkMicroAnswer(input, micro) {
        const val = normalizeText(input);
        const accepts = micro.acceptable || [];
        return accepts.some(function(a) {
            const n = normalizeText(a);
            return val === n || val.includes(n) || n.includes(val);
        });
    }

    function checkTheoryAnswer(input, q) {
        const val = normalizeText(input);
        const keys = q.keywords || [];
        if (!keys.length) return val.length >= 8;
        let hits = 0;
        keys.forEach(function(k) {
            if (val.includes(normalizeText(k))) hits++;
        });
        return hits >= Math.min(2, keys.length);
    }

    function checkFillAnswer(input, q) {
        const val = normalizeText(input);
        const accepts = q.acceptable || (q.correct !== undefined ? [String(q.correct)] : []);
        return accepts.some(function(a) {
            return val === normalizeText(a) || val.includes(normalizeText(a));
        });
    }

    function getLesson() {
        const map = window.StudyVaultLessons || {};
        return map[unitId] || null;
    }

    function renderOverview() {
        mode = "overview";
        const progress = loadProgress();
        const passed = getPassedSections(progress);
        const container = document.getElementById("lesson-root");
        if (!container) return;

        let dots = "";
        lesson.sections.forEach(function(sec, i) {
            let cls = "lesson-progress-dot";
            if (passed.indexOf(sec.id) !== -1) cls += " done";
            else if (!isSectionUnlocked(i, progress)) cls += " locked";
            dots += '<span class="' + cls + '" title="' + sec.title + '"></span>';
        });

        let list = "";
        lesson.sections.forEach(function(sec, i) {
            const done = passed.indexOf(sec.id) !== -1;
            const unlocked = isSectionUnlocked(i, progress);
            const score = progress.scores && progress.scores[sec.id];
            list += "<li><span>" + (i + 1) + ". " + sec.title + "</span>";
            if (done) list += '<span class="status-pass">' + Math.round((score || 1) * 100) + "%</span>";
            else if (unlocked) list += '<span><button type="button" class="lesson-help-btn" data-start="' + i + '">Start</button></span>';
            else list += '<span class="status-lock">Locked</span>';
            list += "</li>";
        });

        const allDone = passed.length === lesson.sections.length;

        container.innerHTML =
            '<div class="lesson-card">' +
            '<div class="lesson-progress-bar">' + dots + "</div>" +
            "<p><strong>" + lesson.sections.length + " sections</strong> · Pass gate quiz (" +
            Math.round((lesson.passThreshold || PASS_DEFAULT) * 100) +
            "%+) to unlock the next.</p>" +
            '<ul class="lesson-section-list">' + list + "</ul>" +
            (allDone
                ? '<div class="lesson-complete-banner mt-3"><h2>Unit lesson complete</h2><p>You passed all sections. Review weak topics anytime.</p><button type="button" class="btn btn-primary" id="showWeakBtn">Review weak topics</button></div>'
                : "") +
            '<div class="lesson-nav"><a href="unit.html?uid=' +
            unitId +
            '" class="btn btn-secondary">Back to unit</a></div>' +
            "</div>";

        container.querySelectorAll("[data-start]").forEach(function(btn) {
            btn.addEventListener("click", function() {
                sectionIndex = parseInt(btn.getAttribute("data-start"), 10);
                teachIndex = 0;
                renderTeach();
            });
        });

        const weakBtn = document.getElementById("showWeakBtn");
        if (weakBtn) weakBtn.addEventListener("click", renderWeakReview);
    }

    function currentSection() {
        return lesson.sections[sectionIndex];
    }

    function renderDiagramHtml(block, sec) {
        if (!window.StudyVaultDiagrams) return "";
        if (block.diagramId) {
            return window.StudyVaultDiagrams.render(block.diagramId);
        }
        if (teachIndex === 0 && sec.introDiagram) {
            return window.StudyVaultDiagrams.render(sec.introDiagram);
        }
        return "";
    }

    function renderHelpBar(sec, conceptBlock) {
        return (
            '<div class="lesson-help-bar">' +
            '<button type="button" class="lesson-help-btn" data-help="simpler">Explain simpler</button>' +
            '<button type="button" class="lesson-help-btn" data-help="analogy">Another example</button>' +
            '<button type="button" class="lesson-help-btn" data-help="mistake">Common mistake</button>' +
            '<button type="button" class="lesson-help-btn" data-help="faq">Ask a question</button>' +
            "</div>" +
            '<div class="lesson-help-panel" id="helpPanel"></div>' +
            '<div class="lesson-faq-area hidden" id="faqArea">' +
            '<input type="text" class="lesson-faq-input" id="faqInput" placeholder="Type a question (e.g. what is a diamond?)">' +
            '<button type="button" class="lesson-help-btn" id="faqSearchBtn">Find answer</button>' +
            "</div>"
        );
    }

    function bindHelp(sec, block) {
        const panel = document.getElementById("helpPanel");
        const faqArea = document.getElementById("faqArea");
        if (!panel) return;

        document.querySelectorAll("[data-help]").forEach(function(btn) {
            btn.addEventListener("click", function() {
                const type = btn.getAttribute("data-help");
                panel.classList.add("visible");
                if (type === "faq") {
                    faqArea.classList.remove("hidden");
                    panel.innerHTML = "<p>Type a question below — we will match it to prepared answers.</p>";
                    return;
                }
                faqArea.classList.add("hidden");
                if (type === "simpler") panel.innerHTML = block.simpler || "<p>No simpler version yet.</p>";
                else if (type === "analogy") panel.innerHTML = block.analogy || "<p>No extra example yet.</p>";
                else if (type === "mistake") panel.innerHTML = block.commonMistake || "<p>No common mistake note yet.</p>";
            });
        });

        const faqBtn = document.getElementById("faqSearchBtn");
        const faqInput = document.getElementById("faqInput");
        if (faqBtn && faqInput) {
            faqBtn.addEventListener("click", function() {
                const match = matchFaq(faqInput.value, sec.faq);
                panel.classList.add("visible");
                if (match) panel.innerHTML = "<p><strong>Answer:</strong> " + match.answer + "</p>";
                else {
                    panel.innerHTML =
                        "<p>No exact match. Try: <strong>Explain simpler</strong>, <strong>Another example</strong>, or keywords like <em>terminator, diamond, swimlane</em>.</p>";
                }
            });
        }
    }

    function renderTeach() {
        mode = "teach";
        const sec = currentSection();
        const container = document.getElementById("lesson-root");
        if (!container || !sec) return;

        const blocks = sec.teach || [];
        if (teachIndex >= blocks.length) {
            renderGate();
            return;
        }

        const block = blocks[teachIndex];
        const progress = loadProgress();
        const passed = getPassedSections(progress);

        let dots = "";
        lesson.sections.forEach(function(s, i) {
            let cls = "lesson-progress-dot";
            if (passed.indexOf(s.id) !== -1) cls += " done";
            else if (i === sectionIndex) cls += " current";
            dots += '<span class="' + cls + '"></span>';
        });

        let microHtml = "";
        if (teachIndex === blocks.length - 1 && sec.microCheck) {
            microHtml =
                '<div class="lesson-micro-check" id="microCheck">' +
                "<p><strong>Quick check:</strong> " +
                sec.microCheck.question +
                "</p>" +
                '<input type="text" id="microInput" placeholder="Your answer">' +
                (sec.microCheck.hint ? '<p class="text-muted" style="font-size:0.85rem">' + sec.microCheck.hint + "</p>" : "") +
                '<button type="button" class="lesson-help-btn" id="microSubmit">Check</button>' +
                '<div class="lesson-feedback" id="microFeedback"></div>' +
                "</div>";
        }

        container.innerHTML =
            '<div class="lesson-card">' +
            '<div class="lesson-progress-bar">' + dots + "</div>" +
            "<p class=\"text-muted\">Section " +
            (sectionIndex + 1) +
            " of " +
            lesson.sections.length +
            " · Step " +
            (teachIndex + 1) +
            " of " +
            blocks.length +
            "</p>" +
            "<h2>" +
            sec.title +
            "</h2>" +
            '<div class="lesson-teach-block">' +
            "<h3>" +
            block.title +
            "</h3>" +
            '<div class="lesson-teach-default">' +
            block.default +
            "</div>" +
            renderDiagramHtml(block, sec) +
            renderHelpBar(sec, block) +
            microHtml +
            "</div>" +
            '<div class="lesson-nav">' +
            '<button type="button" class="btn btn-secondary" id="teachBack">Overview</button>' +
            '<button type="button" class="btn btn-primary" id="teachNext">Continue</button>' +
            "</div>" +
            "</div>";

        bindHelp(sec, block);

        document.getElementById("teachBack").addEventListener("click", renderOverview);
        document.getElementById("teachNext").addEventListener("click", function() {
            if (sec.microCheck && teachIndex === blocks.length - 1) {
                const fb = document.getElementById("microFeedback");
                if (fb && !fb.classList.contains("correct")) {
                    const ok = confirm("You have not passed the quick check yet. Continue anyway?");
                    if (!ok) return;
                }
            }
            teachIndex++;
            renderTeach();
        });

        const microSubmit = document.getElementById("microSubmit");
        if (microSubmit) {
            microSubmit.addEventListener("click", function() {
                const input = document.getElementById("microInput");
                const fb = document.getElementById("microFeedback");
                const ok = checkMicroAnswer(input.value, sec.microCheck);
                recordConceptResult(sec.microCheck.conceptId, ok);
                fb.textContent = ok ? "Correct! You can continue." : "Not quite — try again or use Explain simpler.";
                fb.className = "lesson-feedback " + (ok ? "correct" : "wrong");
            });
        }
    }

    function renderGate() {
        mode = "gate";
        const sec = currentSection();
        const container = document.getElementById("lesson-root");
        if (!container) return;

        const questions = sec.gateQuiz || [];
        let qHtml = "";
        questions.forEach(function(q, qi) {
            const label = (q.format || "mcq").toUpperCase();
            qHtml += '<div class="lesson-question" data-qindex="' + qi + '" data-qid="' + q.id + '">';
            qHtml += '<div class="lesson-q-label">' + label + "</div>";
            qHtml += '<div class="lesson-q-text">' + q.question + "</div>";

            if (q.format === "mcq") {
                qHtml += '<div class="lesson-options">';
                (q.options || []).forEach(function(opt, oi) {
                    qHtml +=
                        '<label class="lesson-option"><input type="radio" name="q' +
                        qi +
                        '" value="' +
                        oi +
                        '"> <span>' +
                        opt +
                        "</span></label>";
                });
                qHtml += "</div>";
            } else if (q.format === "tf" || q.format === "yesno") {
                qHtml +=
                    '<div class="lesson-options">' +
                    '<label class="lesson-option"><input type="radio" name="q' +
                    qi +
                    '" value="true"> True / Yes</label>' +
                    '<label class="lesson-option"><input type="radio" name="q' +
                    qi +
                    '" value="false"> False / No</label>' +
                    "</div>";
            } else if (q.format === "fill") {
                qHtml += '<input type="text" class="lesson-fill-input" data-fill="' + qi + '" placeholder="Type answer">';
            } else if (q.format === "theory") {
                qHtml += '<textarea class="lesson-theory-input" data-theory="' + qi + '" placeholder="Short answer in your own words"></textarea>';
            }

            qHtml += '<div class="lesson-q-explanation" data-exp="' + qi + '"></div></div>';
        });

        container.innerHTML =
            '<div class="lesson-card lesson-gate">' +
            "<h2>Section quiz</h2>" +
            "<p class=\"text-muted\">" +
            sec.title +
            " — score at least " +
            Math.round((lesson.passThreshold || PASS_DEFAULT) * 100) +
            "% to unlock the next section.</p>" +
            '<div class="lesson-gate-score" id="gateScore"></div>' +
            qHtml +
            '<div class="lesson-gate-actions">' +
            '<button type="button" class="btn btn-primary" id="submitGate">Submit answers</button>' +
            '<button type="button" class="btn btn-secondary" id="gateBack">Back to section</button>' +
            "</div>" +
            '<div id="gateResult"></div>' +
            "</div>";

        document.getElementById("gateBack").addEventListener("click", function() {
            teachIndex = 0;
            renderTeach();
        });

        document.getElementById("submitGate").addEventListener("click", function() {
            gradeGate(sec, questions);
        });
    }

    function gradeGate(sec, questions) {
        let correct = 0;
        questions.forEach(function(q, qi) {
            const el = document.querySelector('.lesson-question[data-qindex="' + qi + '"]');
            const exp = document.querySelector('[data-exp="' + qi + '"]');
            let ok = false;
            let userVal = "";

            if (q.format === "mcq") {
                const sel = document.querySelector('input[name="q' + qi + '"]:checked');
                userVal = sel ? sel.value : "";
                ok = parseInt(userVal, 10) === q.correct;
            } else if (q.format === "tf" || q.format === "yesno") {
                const sel = document.querySelector('input[name="q' + qi + '"]:checked');
                userVal = sel ? sel.value === "true" : null;
                ok = userVal === q.correct;
            } else if (q.format === "fill") {
                const inp = document.querySelector('[data-fill="' + qi + '"]');
                userVal = inp ? inp.value : "";
                ok = checkFillAnswer(userVal, q);
            } else if (q.format === "theory") {
                const inp = document.querySelector('[data-theory="' + qi + '"]');
                userVal = inp ? inp.value : "";
                ok = checkTheoryAnswer(userVal, q);
            }

            recordConceptResult(q.conceptId, ok);
            if (ok) correct++;
            else el.classList.add("answered-wrong");
            if (ok) el.classList.add("answered-correct");

            if (exp) {
                exp.classList.add("visible");
                let msg = q.explanation || "";
                if (q.format === "theory" && q.modelAnswer) msg += " <br><strong>Model:</strong> " + q.modelAnswer;
                exp.innerHTML = msg;
            }
        });

        const pct = questions.length ? correct / questions.length : 0;
        const threshold = lesson.passThreshold || PASS_DEFAULT;
        const passed = pct >= threshold;

        document.getElementById("gateScore").textContent =
            "Score: " + correct + " / " + questions.length + " (" + Math.round(pct * 100) + "%)";

        const resultEl = document.getElementById("gateResult");
        const progress = loadProgress();
        if (!progress.passedSections) progress.passedSections = [];
        if (!progress.scores) progress.scores = {};

        if (passed) {
            if (progress.passedSections.indexOf(sec.id) === -1) {
                progress.passedSections.push(sec.id);
            }
            progress.scores[sec.id] = pct;
            progress.lastSection = sec.id;
            saveProgress(progress);

            if (typeof saveReview === "function") {
                saveReview(unitId, pct >= 0.9 ? "easy" : pct >= threshold ? "medium" : "hard");
            }

            resultEl.innerHTML =
                '<div class="lesson-complete-banner mt-3">' +
                "<h3>Section passed!</h3>" +
                "<p>Next section unlocked.</p>" +
                '<button type="button" class="btn btn-primary" id="nextSectionBtn">Continue</button> ' +
                '<button type="button" class="btn btn-secondary" id="overviewBtn">Overview</button>' +
                "</div>";

            document.getElementById("nextSectionBtn").addEventListener("click", function() {
                if (sectionIndex < lesson.sections.length - 1) {
                    sectionIndex++;
                    teachIndex = 0;
                    renderTeach();
                } else {
                    renderOverview();
                }
            });
            document.getElementById("overviewBtn").addEventListener("click", renderOverview);
        } else {
            resultEl.innerHTML =
                '<div class="lesson-mistake-box mt-3">' +
                "<p><strong>Not yet passed.</strong> Review the explanations, use weak-topic review, then try again.</p>" +
                '<button type="button" class="btn btn-primary" id="retryGate">Retry quiz</button> ' +
                '<button type="button" class="btn btn-secondary" id="reteachBtn">Re-read section</button>' +
                "</div>";

            document.getElementById("retryGate").addEventListener("click", renderGate);
            document.getElementById("reteachBtn").addEventListener("click", function() {
                teachIndex = 0;
                renderTeach();
            });
        }
    }

    function renderWeakReview() {
        const stats = loadConceptStats();
        const weak = Object.keys(stats)
            .filter(function(id) {
                const s = stats[id];
                return s.wrong > s.correct;
            })
            .sort(function(a, b) {
                return stats[b].wrong - stats[a].wrong - (stats[b].correct - stats[a].correct);
            });

        const container = document.getElementById("lesson-root");
        if (!container) return;

        if (weak.length === 0) {
            container.innerHTML =
                '<div class="lesson-card"><p>No weak topics tracked yet — complete section quizzes first.</p>' +
                '<button type="button" class="btn btn-primary" id="backOv">Overview</button></div>';
            document.getElementById("backOv").addEventListener("click", renderOverview);
            return;
        }

        let html = "<h2>Your weak topics</h2><ul class=\"lesson-weak-list\">";
        weak.forEach(function(cid) {
            const s = stats[cid];
            html += "<li><strong>" + cid + "</strong> — " + s.wrong + " wrong, " + s.correct + " correct</li>";
        });
        html += "</ul><p class=\"text-muted\">Re-read sections that cover these concepts (optional).</p>";
        html += '<button type="button" class="btn btn-primary" id="backOv2">Back to overview</button>';

        container.innerHTML = '<div class="lesson-card">' + html + "</div>";
        document.getElementById("backOv2").addEventListener("click", renderOverview);
    }

    function init() {
        unitId = typeof getParam === "function" ? getParam("uid") : null;
        if (!unitId) {
            const root = document.getElementById("lesson-root");
            if (root) root.innerHTML = "<p>Missing unit id. Use lesson.html?uid=CIT108_m2_u3</p>";
            return;
        }

        lesson = getLesson();
        if (!lesson) {
            const root = document.getElementById("lesson-root");
            if (root) root.innerHTML = "<p>No interactive lesson found for <code>" + unitId + "</code>.</p>";
            return;
        }

        document.title = "Learn: " + lesson.unitTitle + " — StudyVault";

        const meta = document.getElementById("lesson-meta");
        if (meta) {
            meta.textContent = lesson.courseCode + " · " + lesson.moduleTitle;
        }
        const title = document.getElementById("lesson-title");
        if (title) title.textContent = lesson.unitTitle;

        renderOverview();
    }

    document.addEventListener("DOMContentLoaded", init);

    window.StudyVaultLessonEngine = {
        renderOverview: function() {
            renderOverview();
        }
    };
})();
