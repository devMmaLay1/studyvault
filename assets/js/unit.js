// ══════════════════════════════════════
// StudyVault — unit.js
// unit.html logic
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const uid = getParam('uid');
    
    if (!uid) {
        window.location.href = 'index.html';
        return;
    }
    
    const context = getUnitById(uid);
    
    if (!context) {
        window.location.href = 'index.html';
        return;
    }
    
    // Add to recent units
    addRecentUnit(uid);
    
    renderBreadcrumbNav(context);
    renderUnitHeader(context);
    renderUnitSummary(context);
    renderExamQuestions(context);
    initRecallMode(context.unit.id);
    renderNotesPanel(context);
    renderUnitNavigation(context);
    
    // Initialize scroll effects (progress bar + floating back button)
    // Combined into one listener for better performance
    initScrollEffects(context);
});

// ─── READING PROGRESS BAR ───
function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        
        // Guard against division by zero on very short pages
        if (total <= 0) {
            progressBar.style.width = '0%';
            return;
        }
        
        const progress = (scrolled / total) * 100;
        progressBar.style.width = progress + '%';
    });
}

// ─── FLOATING BACK BUTTON ───
function initFloatingBackButton(context) {
    const backBtn = document.getElementById('back-btn');
    if (!backBtn) return;
    
    // Set the correct module URL
    backBtn.href = 'module.html?mid=' + context.module.id;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });
}

// ─── OPTIMIZED: COMBINED SCROLL HANDLER ───
// Combines progress bar and back button into one listener for better performance
function initScrollEffects(context) {
    const progressBar = document.getElementById('reading-progress');
    const backBtn = document.getElementById('back-btn');
    
    if (!progressBar || !backBtn) return;
    
    // Set the correct module URL for back button
    backBtn.href = 'module.html?mid=' + context.module.id;
    
    // Single scroll listener for both features
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update progress bar
        if (total > 0) {
            progressBar.style.width = (scrolled / total) * 100 + '%';
        }
        
        // Toggle back button visibility
        // .toggle(class, condition) adds class if true, removes if false
        backBtn.classList.toggle('visible', scrolled > 150);
    });
}

// ─── BREADCRUMB ───
function renderBreadcrumbNav(context) {
    const container = document.getElementById('breadcrumb');
    if (!container) return;
    
    const items = [
        { label: 'Home', url: 'index.html' },
        { label: context.level.label, url: 'level.html?lid=' + context.level.id },
        { label: context.semester.label, url: 'semester.html?sid=' + context.semester.id },
        { label: context.course.code, url: 'course.html?cid=' + context.course.id },
        { label: context.module.title, url: 'module.html?mid=' + context.module.id },
        { label: context.unit.title, url: null }
    ];
    
    container.innerHTML = renderBreadcrumb(items);
}

// ─── UNIT HEADER ───
function renderUnitHeader(context) {
    const container = document.getElementById('unit-header');
    if (!container) return;
    
    const reviewed = isReviewed(context.unit.id);
    const checkIcon = reviewed ? 'check-circle' : 'circle';
    const buttonText = reviewed ? 'Reviewed' : 'Mark as Reviewed';

    let lessonLinkHtml = '';
    if (context.unit.id === 'CIT108_m2_u3') {
        lessonLinkHtml = '<a href="lesson.html?uid=' + context.unit.id + '" class="btn btn-primary" style="margin-right:0.5rem">' +
            '<i data-lucide="graduation-cap" class="icon-sm"></i> Interactive lesson (beta)' +
            '</a>';
    }

    // Load existing quiz score badge
    var scoreBadgeHtml = '<span id="unit-quiz-score-badge" style="display:none;margin-left:8px;"></span>';
    if (typeof getQuizScore === 'function') {
        var saved = getQuizScore(context.unit.id);
        if (saved) {
            var cls = saved.pct >= 80 ? 'tma-perfect' : saved.pct >= 60 ? 'tma-good' : 'tma-low';
            scoreBadgeHtml = '<span id="unit-quiz-score-badge" class="tma-badge ' + cls + '" style="margin-left:8px;">' +
                '<i data-lucide="clipboard-check" class="icon-xs"></i> Quiz: ' + saved.correct + '/' + saved.total + ' (' + saved.pct + '%)' +
                '</span>';
        }
    }
    
    container.innerHTML = '<div class="unit-header-content">' +
        '<div class="unit-meta">' +
        '<span class="unit-meta-badge">' + context.course.code + '</span>' +
        '<span class="unit-meta-sep">›</span>' +
        '<span class="unit-meta-text">' + context.module.title + '</span>' +
        '</div>' +
        '<h1>' + context.unit.title + '</h1>' +
        '<div class="unit-header-actions">' +
        lessonLinkHtml +
        '<button id="reviewed-toggle" class="btn-reviewed ' + (reviewed ? 'active' : '') + '" onclick="toggleReviewed(\'' + context.unit.id + '\')">' +
        '<span class="btn-reviewed-icon"><i data-lucide="' + checkIcon + '" class="icon-sm"></i></span>' +
        '<span class="btn-reviewed-text">' + buttonText + '</span>' +
        '</button>' +
        scoreBadgeHtml +
        '</div>' +
        '</div>';
    
    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// ─── TOGGLE REVIEWED ───
function toggleReviewed(uid) {
    const currentState = isReviewed(uid);
    const newState = !currentState;
    markReviewed(uid, newState);
    
    // Update button
    const btn = document.getElementById('reviewed-toggle');
    if (btn) {
        const checkIcon = newState ? 'check-circle' : 'circle';
        const buttonText = newState ? 'Reviewed' : 'Mark as Reviewed';
        
        btn.className = 'btn-reviewed ' + (newState ? 'active' : '');
        btn.innerHTML = '<span class="btn-reviewed-icon"><i data-lucide="' + checkIcon + '" class="icon-sm"></i></span>' +
            '<span class="btn-reviewed-text">' + buttonText + '</span>';
        
        // Re-initialize icons
        if (window.lucide) {
            lucide.createIcons();
        }
        
        // Pulse animation when marking as reviewed
        if (newState && window.StudyVaultAnimations) {
            // Add a subtle pulse to the button itself
            btn.style.animation = 'none';
            setTimeout(() => {
                btn.style.animation = 'pulseBadge 1.5s ease-out';
            }, 10);
        }
    }
}

// ─── UNIT SUMMARY ───
function renderUnitSummary(context) {
    const container = document.getElementById('unit-summary');
    if (!container) return;
    
    if (context.unit.summary && context.unit.summary.trim()) {
        container.innerHTML = '<div class="summary-content">' +
            '<h2>Summary</h2>' +
            '<div class="summary-body">' + context.unit.summary + '</div>' +
            '</div>';
    } else {
        container.innerHTML = '<div class="summary-empty">' +
            '<div class="summary-empty-icon"><i data-lucide="file-text" class="icon-xl icon-muted"></i></div>' +
            '<h3>No summary yet</h3>' +
            '<p>This unit doesn\'t have a summary yet. You can add one by editing the <code>data.js</code> file.</p>' +
            '<p class="text-muted mt-2">Path: <code>academicData.levels[...].semesters[...].courses[...].modules[...].units[...].summary</code></p>' +
            '</div>';
        
        // Initialize icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

// ─── RECALL MODE ───
function initRecallMode(unitId) {
    const recallBtn = document.getElementById('recallBtn');
    const revealBtn = document.getElementById('revealBtn');
    const summaryPanel = document.getElementById('unit-summary');
    const recallPanel = document.getElementById('recall-panel');
    const recallInput = document.getElementById('recallInput');
    const recallCompare = document.getElementById('recallCompare');
    const recallOutput = document.getElementById('recallOutput');
    const confidencePrompt = document.getElementById('confidencePrompt');
    const confSavedMsg = document.getElementById('confSavedMsg');
    const confButtons = confidencePrompt ? Array.from(confidencePrompt.querySelectorAll('.conf-btn')) : [];
    const voiceBtn = document.getElementById('voiceBtn');
    const voiceBtnLabel = document.getElementById('voiceBtnLabel');
    const voiceSupportMsg = document.getElementById('voiceSupportMsg');
    const voiceInterim = document.getElementById('voiceInterim');
    const voiceError = document.getElementById('voiceError');

    if (!recallBtn || !revealBtn || !summaryPanel || !recallPanel || !recallInput || !recallCompare || !recallOutput ||
        !confidencePrompt || !confSavedMsg || !voiceBtn || !voiceBtnLabel || !voiceSupportMsg || !voiceInterim || !voiceError) {
        return;
    }

    if (window.lucide) {
        lucide.createIcons();
    }

    const SpeechRecognitionCtor = window.webkitSpeechRecognition;
    let recognition = null;
    let voiceState = 'idle';
    let silenceTimer = null;
    let heardAnySpeech = false;

    function clearSilenceTimer() {
        if (silenceTimer) {
            clearTimeout(silenceTimer);
            silenceTimer = null;
        }
    }

    function showVoiceError(message) {
        voiceError.textContent = message;
        voiceError.classList.remove('hidden');
    }

    function clearVoiceError() {
        voiceError.textContent = '';
        voiceError.classList.add('hidden');
    }

    function clearInterim() {
        voiceInterim.textContent = '';
        voiceInterim.classList.add('hidden');
    }

    function setVoiceState(nextState, errorMessage) {
        voiceState = nextState;
        const listening = nextState === 'listening';

        voiceBtn.classList.toggle('listening', listening);
        voiceBtn.setAttribute('aria-pressed', listening ? 'true' : 'false');
        voiceBtnLabel.textContent = listening ? 'Stop' : 'Speak';

        if (nextState === 'error' && errorMessage) {
            showVoiceError(errorMessage);
        }
    }

    function appendTranscript(text) {
        const clean = text.trim();
        if (!clean) return;

        const existing = recallInput.value;
        const joiner = existing && !/\s$/.test(existing) ? '\n' : '';
        recallInput.value = existing + joiner + clean;
    }

    function resetSilenceTimer() {
        clearSilenceTimer();
        if (voiceState !== 'listening') return;

        silenceTimer = setTimeout(function() {
            if (voiceState !== 'listening' || !recognition) return;

            if (!heardAnySpeech) {
                setVoiceState('error', 'Nothing heard. Try again.');
            }

            // Required stop point #2: silence timeout.
            try {
                recognition.stop();
            } catch {}
        }, 5000);
    }

    if (typeof SpeechRecognitionCtor === 'function') {
        recognition = new SpeechRecognitionCtor();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            clearVoiceError();
            setVoiceState('listening');
            resetSilenceTimer();
        };

        recognition.onresult = function(event) {
            let interimText = '';
            let finalText = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                const transcript = (result[0] && result[0].transcript ? result[0].transcript : '').trim();
                if (!transcript) continue;

                heardAnySpeech = true;
                if (result.isFinal) {
                    finalText += transcript + ' ';
                } else {
                    interimText += transcript + ' ';
                }
            }

            if (interimText.trim()) {
                voiceInterim.textContent = 'hearing you... ' + interimText.trim();
                voiceInterim.classList.remove('hidden');
            } else {
                clearInterim();
            }

            if (finalText.trim()) {
                appendTranscript(finalText);
                clearInterim();
            }

            resetSilenceTimer();
        };

        recognition.onerror = function(event) {
            clearSilenceTimer();

            if (event.error === 'aborted') {
                setVoiceState('idle');
                return;
            }

            let message = 'Voice input unavailable right now.';
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed' || event.error === 'audio-capture') {
                message = 'Microphone access denied. Check browser settings.';
            } else if (event.error === 'no-speech') {
                message = 'Nothing heard. Try again.';
            } else if (event.error === 'network') {
                message = 'Voice input unavailable offline.';
            }

            clearInterim();
            setVoiceState('error', message);
        };

        recognition.onend = function() {
            clearSilenceTimer();
            if (voiceState !== 'error') {
                setVoiceState('idle');
            }
        };
    } else {
        voiceBtn.classList.add('hidden');
        voiceSupportMsg.textContent = 'Voice input requires Chrome or Edge.';
        voiceSupportMsg.classList.remove('hidden');
    }

    voiceBtn.addEventListener('click', function() {
        if (!recognition) return;

        if (voiceState === 'listening') {
            clearSilenceTimer();
            // Required stop point #1: user clicks stop.
            try {
                recognition.stop();
            } catch {}
            return;
        }

        clearVoiceError();
        clearInterim();
        heardAnySpeech = false;

        try {
            recognition.start();
        } catch {
            setVoiceState('error', 'Voice input unavailable right now.');
        }
    });

    window.addEventListener('beforeunload', function() {
        clearSilenceTimer();
        if (recognition) {
            // Required stop point #3: page unload.
            try {
                recognition.stop();
            } catch {}
        }
    });

    recallPanel.classList.add('hidden');

    recallBtn.addEventListener('click', function() {
        summaryPanel.classList.add('hidden');
        recallPanel.classList.remove('hidden');
        recallBtn.classList.add('hidden');
        recallCompare.classList.add('hidden');
        confidencePrompt.classList.add('hidden');
        confSavedMsg.classList.add('hidden');
        confSavedMsg.textContent = '';
        revealBtn.classList.remove('hidden');
        clearVoiceError();
        clearInterim();

        confButtons.forEach(function(button) {
            button.disabled = false;
            button.classList.remove('conf-selected');
        });

        recallInput.focus();
        recallPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    revealBtn.addEventListener('click', function() {
        summaryPanel.classList.remove('hidden');
        recallBtn.classList.remove('hidden');

        const typed = recallInput.value.trim();
        recallOutput.textContent = typed || '(nothing written)';
        recallCompare.classList.remove('hidden');
        confidencePrompt.classList.remove('hidden');
        confSavedMsg.classList.add('hidden');

        summaryPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    confButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const confidence = btn.dataset.conf;
            saveReview(unitId, confidence);

            confButtons.forEach(function(button) {
                button.disabled = true;
                button.classList.remove('conf-selected');
            });
            btn.classList.add('conf-selected');

            const reviewedBtn = document.getElementById('reviewed-toggle');
            if (reviewedBtn) {
                reviewedBtn.className = 'btn-reviewed active';
                reviewedBtn.innerHTML = '<span class="btn-reviewed-icon"><i data-lucide="check-circle" class="icon-sm"></i></span>' +
                    '<span class="btn-reviewed-text">Reviewed</span>';
                if (window.lucide) {
                    lucide.createIcons();
                }
            }

            const messages = {
                hard: 'Saved - this unit will come up again soon.',
                medium: 'Saved - review again in a few days.',
                easy: 'Saved - great recall. Review again in about a week.'
            };

            confSavedMsg.textContent = messages[confidence] || 'Saved.';
            confSavedMsg.classList.remove('hidden');
        });
    });
}

// ─── NOTES PANEL ───
function renderNotesPanel(context) {
    const container = document.getElementById('unit-notes');
    if (!container) return;
    
    const savedNote = getNote(context.unit.id);
    
    container.innerHTML = '<div class="notes-panel">' +
        '<div class="notes-header">' +
        '<h3>Your Notes</h3>' +
        '<span class="notes-hint">Private notes for this unit</span>' +
        '</div>' +
        '<textarea id="notes-textarea" class="notes-textarea" placeholder="Write your notes here...">' + savedNote + '</textarea>' +
        '<div class="notes-actions">' +
        '<button id="save-note-btn" class="btn btn-primary" onclick="saveUnitNote(\'' + context.unit.id + '\')">Save Note</button>' +
        '<span id="save-status" class="save-status"></span>' +
        '</div>' +
        '</div>';
}

// ─── SAVE NOTE ───
function saveUnitNote(uid) {
    const textarea = document.getElementById('notes-textarea');
    const statusEl = document.getElementById('save-status');
    
    if (!textarea || !statusEl) return;
    
    const noteText = textarea.value;
    saveNote(uid, noteText);
    
    // Show saved status
    statusEl.textContent = '✓ Saved!';
    statusEl.style.opacity = '1';
    
    // Fade out after 2 seconds
    setTimeout(function() {
        statusEl.style.opacity = '0';
    }, 2000);
}

// ─── UNIT NAVIGATION ───
function renderUnitNavigation(context) {
    const container = document.getElementById('unit-navigation');
    if (!container) return;
    
    // Find current unit index in module
    const currentIndex = context.module.units.findIndex(u => u.id === context.unit.id);
    const prevUnit = currentIndex > 0 ? context.module.units[currentIndex - 1] : null;
    const nextUnit = currentIndex < context.module.units.length - 1 ? context.module.units[currentIndex + 1] : null;
    
    let html = '<div class="unit-nav-container">';
    
    // Back to Module link
    html += '<a href="module.html?mid=' + context.module.id + '" class="btn btn-secondary">' +
        '<i data-lucide="arrow-left" class="icon-sm"></i>' +
        'Back to ' + context.module.title +
        '</a>';
    
    html += '<div class="unit-nav-buttons">';
    
    // Previous button
    if (prevUnit) {
        html += '<a href="unit.html?uid=' + prevUnit.id + '" class="btn-nav btn-nav-prev">' +
            '<span class="btn-nav-label"><i data-lucide="chevron-left" class="icon-xs"></i> Previous</span>' +
            '<span class="btn-nav-title">' + prevUnit.title + '</span>' +
            '</a>';
    } else {
        html += '<div class="btn-nav btn-nav-disabled">' +
            '<span class="btn-nav-label">Previous</span>' +
            '<span class="btn-nav-title">No previous unit</span>' +
            '</div>';
    }
    
    // Next button
    if (nextUnit) {
        html += '<a href="unit.html?uid=' + nextUnit.id + '" class="btn-nav btn-nav-next">' +
            '<span class="btn-nav-label">Next <i data-lucide="chevron-right" class="icon-xs"></i></span>' +
            '<span class="btn-nav-title">' + nextUnit.title + '</span>' +
            '</a>';
    } else {
        html += '<div class="btn-nav btn-nav-disabled">' +
            '<span class="btn-nav-label">Next</span>' +
            '<span class="btn-nav-title">No next unit</span>' +
            '</div>';
    }
    
    html += '</div></div>';
    
    container.innerHTML = html;
    
    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}


// ─── EXAM QUESTIONS ───
var currentUnitId = null;

function renderExamQuestions(context) {
    currentUnitId = context.unit.id;
    const container = document.getElementById('exam-questions');
    if (!container) return;
    
    // Check if exam questions exist for this unit
    if (typeof examQuestions === 'undefined' || !examQuestions[context.unit.id]) {
        container.innerHTML = '';
        return;
    }
    
    const questions = examQuestions[context.unit.id];
    
    let html = '<div class="exam-questions-container">' +
        '<div class="exam-questions-header">' +
        '<h2><i data-lucide="clipboard-list" class="icon-md"></i> Exam Past Questions</h2>' +
        '<p class="exam-questions-subtitle">Practice with real NOUN exam questions</p>' +
        '</div>';
    
    // Section A - Fill in the Blank
    if (questions.fbq && questions.fbq.length > 0) {
        html += '<div class="exam-section">' +
            '<div class="exam-section-header">' +
            '<h3>Section A — Fill in the Blank Questions (FBQ)</h3>' +
            '<span class="exam-section-count">' + questions.fbq.length + ' questions</span>' +
            '</div>' +
            '<div class="exam-questions-list">';
        
        questions.fbq.forEach(function(item, index) {
            html += '<div class="exam-question-item fbq-item">' +
                '<div class="exam-question-number">FBQ' + (index + 1) + '</div>' +
                '<div class="exam-question-content">' +
                '<p class="exam-question-text">' + item.q + '</p>' +
                '<div class="exam-answer hidden">' +
                '<strong>Answer:</strong> ' + item.a;
            
            // Add explanation if it exists
            if (item.explanation) {
                html += '<div class="exam-explanation">' +
                    '<strong>Explanation:</strong> ' + item.explanation +
                    '</div>';
            }
            
            html += '</div>' +
                '<button class="exam-toggle-btn" onclick="toggleAnswer(this)">Show Answer</button>' +
                '</div>' +
                '</div>';
        });
        
        html += '</div></div>';
    }
    
    // Section B - Multiple Choice
    if (questions.mcq && questions.mcq.length > 0) {
        const totalMCQ = questions.mcq.length;
        html += '<div class="exam-section" id="mcq-section">' +
            '<div class="exam-section-header">' +
            '<h3>Section B — Multiple Choice Questions (MCQ)</h3>' +
            '<div class="mcq-score-tracker" id="mcq-score-tracker">' +
            '<span class="score-answered" id="score-answered">0</span>' +
            '<span class="score-sep">/' + totalMCQ + '</span>' +
            '<span class="score-correct-count"> &nbsp;·&nbsp; <span id="score-correct">0</span> correct</span>' +
            '</div>' +
            '</div>' +
            '<div class="exam-questions-list">';
        
        questions.mcq.forEach(function(item, index) {
            // Split section label from question if present (format: "Section X — Label\n\nQuestion text")
            var qParts = item.q.split('\n\n');
            var sectionLabel = qParts.length > 1 ? qParts[0] : null;
            var questionText = qParts.length > 1 ? qParts.slice(1).join('\n\n') : item.q;
            var qId = 'mcq-' + index + '-' + Math.random().toString(36).substr(2, 5);

            html += '<div class="exam-question-item mcq-item" id="' + qId + '">' +
                '<div class="exam-question-number">MCQ' + (index + 1) + '</div>' +
                '<div class="exam-question-content">' +
                (sectionLabel ? '<span class="exam-section-label">' + sectionLabel + '</span>' : '') +
                '<p class="exam-question-text">' + questionText + '</p>' +
                '<div class="mcq-options">';
            
            item.options.forEach(function(option, optIndex) {
                const letter = String.fromCharCode(97 + optIndex);
                const isCorrect = optIndex === item.correct;
                html += '<div class="mcq-option" data-correct="' + isCorrect + '" onclick="selectMCQOption(this, \'' + qId + '\')">' +
                    '<span class="mcq-option-letter">' + letter + ')</span>' +
                    '<span class="mcq-option-text">' + option + '</span>' +
                    '<span class="mcq-option-icon"></span>' +
                    '</div>';
            });
            
            html += '</div>';

            // Explanation shown after answering
            if (item.explanation) {
                html += '<div class="exam-explanation hidden" id="' + qId + '-exp">' +
                    '<strong>Explanation:</strong> ' + item.explanation.replace(/\n/g, '<br>') +
                    '</div>';
            }

            html += '</div></div>';
        });
        
        html += '</div>' +
            '<div class="mcq-score-result hidden" id="mcq-score-result">' +
            '<div class="score-result-inner">' +
            '<div class="score-result-icon" id="score-result-icon">🎯</div>' +
            '<div class="score-result-text">' +
            '<div class="score-result-fraction" id="score-result-fraction"></div>' +
            '<div class="score-result-label" id="score-result-label"></div>' +
            '</div>' +
            '<div class="score-result-bar-wrap">' +
            '<div class="score-result-bar" id="score-result-bar"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    
    // Section C - Theory/Calculation
    if (questions.theory && questions.theory.length > 0) {
        html += '<div class="exam-section">' +
            '<div class="exam-section-header">' +
            '<h3>Section C — Theory/Calculation Questions</h3>' +
            '<span class="exam-section-count">' + questions.theory.length + ' questions</span>' +
            '</div>' +
            '<div class="exam-questions-list">';
        
        questions.theory.forEach(function(item, index) {
            html += '<div class="exam-question-item theory-item">' +
                '<div class="exam-question-number">Q' + (index + 1) + '</div>' +
                '<div class="exam-question-content">' +
                '<p class="exam-question-text">' + item.q.replace(/\n/g, '<br>') + '</p>' +
                '<div class="exam-answer hidden">' +
                '<strong>Answer:</strong><br>' + item.a.replace(/\n/g, '<br>') +
                '</div>' +
                '<button class="exam-toggle-btn" onclick="toggleAnswer(this)">Show Answer</button>' +
                '</div>' +
                '</div>';
        });
        
        html += '</div></div>';
    }
    
    // Section D - Tricky Questions
    if (questions.tricky && questions.tricky.length > 0) {
        html += '<div class="exam-section tricky-section">' +
            '<div class="exam-section-header">' +
            '<h3><i data-lucide="alert-triangle" class="icon-sm"></i> Section D — Tricky Exam Questions</h3>' +
            '<span class="exam-section-count">' + questions.tricky.length + ' questions</span>' +
            '</div>' +
            '<div class="exam-questions-list">';
        
        questions.tricky.forEach(function(item, index) {
            html += '<div class="exam-question-item tricky-item">' +
                '<div class="exam-question-number">⚠️</div>' +
                '<div class="exam-question-content">' +
                '<p class="exam-question-text">' + item.q + '</p>' +
                '<div class="exam-answer hidden">' +
                '<strong>Answer:</strong> ' + item.a +
                '</div>' +
                '<button class="exam-toggle-btn" onclick="toggleAnswer(this)">Show Answer</button>' +
                '</div>' +
                '</div>';
        });
        
        html += '</div></div>';
    }
    
    // Word Problems Section (if exists)
    if (questions.wordProblems && questions.wordProblems.length > 0) {
        html += '<div class="exam-section word-problems-section">' +
            '<div class="exam-section-header">' +
            '<h3><i data-lucide="calculator" class="icon-sm"></i> Word Problems (Survey/Venn Diagrams)</h3>' +
            '<span class="exam-section-count">' + questions.wordProblems.length + ' questions</span>' +
            '</div>' +
            '<div class="exam-questions-list">';
        
        questions.wordProblems.forEach(function(item, index) {
            html += '<div class="exam-question-item word-problem-item">' +
                '<div class="exam-question-number">WP' + (index + 1) + '</div>' +
                '<div class="exam-question-content">' +
                '<p class="exam-question-text">' + item.q + '</p>' +
                '<div class="exam-answer hidden">' +
                '<strong>Solution:</strong><br>' + item.a.replace(/\n/g, '<br>') +
                '</div>' +
                '<button class="exam-toggle-btn" onclick="toggleAnswer(this)">Show Solution</button>' +
                '</div>' +
                '</div>';
        });
        
        html += '</div></div>';
    }
    
    html += '</div>';
    
    container.innerHTML = html;
    
    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// ─── UPDATE SCORE BADGE IN HEADER ───
function updateUnitScoreBadge(uid, correct, total, pct) {
    var badge = document.getElementById('unit-quiz-score-badge');
    if (!badge) return;
    var cls = pct >= 80 ? 'tma-perfect' : pct >= 60 ? 'tma-good' : 'tma-low';
    badge.className = 'tma-badge ' + cls;
    badge.innerHTML = '<i data-lucide="clipboard-check" class="icon-xs"></i> Quiz: ' + correct + '/' + total + ' (' + pct + '%)';
    badge.style.display = 'inline-flex';
    if (window.lucide) lucide.createIcons();
}

// ─── TOGGLE ANSWER ───
function toggleAnswer(button) {
    const answerDiv = button.previousElementSibling;
    const isHidden = answerDiv.classList.contains('hidden');
    
    if (isHidden) {
        answerDiv.classList.remove('hidden');
        button.textContent = 'Hide Answer';
        button.classList.add('active');
    } else {
        answerDiv.classList.add('hidden');
        button.textContent = 'Show Answer';
        button.classList.remove('active');
    }
}

// ─── MCQ OPTION SELECTION ───
function selectMCQOption(clickedOption, qId) {
    const container = document.getElementById(qId);
    if (!container) return;

    // Already answered — don't allow re-selection
    if (container.classList.contains('mcq-answered')) return;
    container.classList.add('mcq-answered');

    const allOptions = container.querySelectorAll('.mcq-option');
    const isCorrect = clickedOption.dataset.correct === 'true';

    // Mark clicked option
    clickedOption.classList.add(isCorrect ? 'mcq-correct' : 'mcq-wrong');
    clickedOption.querySelector('.mcq-option-icon').textContent = isCorrect ? '✓' : '✗';

    // If wrong, reveal the correct option
    if (!isCorrect) {
        allOptions.forEach(function(opt) {
            if (opt.dataset.correct === 'true') {
                opt.classList.add('mcq-correct');
                opt.querySelector('.mcq-option-icon').textContent = '✓';
            }
        });
    }

    // Dim all other options
    allOptions.forEach(function(opt) {
        if (opt !== clickedOption && opt.dataset.correct !== 'true') {
            opt.classList.add('mcq-dimmed');
        }
    });

    // Show explanation if it exists
    var expEl = document.getElementById(qId + '-exp');
    if (expEl) {
        expEl.classList.remove('hidden');
    }

    // Update question number to show result
    var numEl = container.querySelector('.exam-question-number');
    if (numEl) {
        numEl.classList.add(isCorrect ? 'result-correct' : 'result-wrong');
    }

    // ── Update live score tracker ──
    var section = document.getElementById('mcq-section');
    if (!section) return;

    var allQuestions = section.querySelectorAll('.mcq-item');
    var answeredCount = section.querySelectorAll('.mcq-item.mcq-answered').length;
    var correctCount  = section.querySelectorAll('.mcq-item .mcq-option.mcq-correct').length;

    // Count only the user's correct picks (not the revealed correct answers on wrong picks)
    // A question is correct if the clicked option (mcq-wrong is absent) has mcq-correct
    correctCount = 0;
    section.querySelectorAll('.mcq-item.mcq-answered').forEach(function(q) {
        // If no wrong option exists in this question, the user got it right
        if (!q.querySelector('.mcq-option.mcq-wrong')) {
            correctCount++;
        }
    });

    var totalCount = allQuestions.length;

    var answeredEl = document.getElementById('score-answered');
    var correctEl  = document.getElementById('score-correct');
    if (answeredEl) answeredEl.textContent = answeredCount;
    if (correctEl)  correctEl.textContent  = correctCount;

    // ── Show final result card when all answered ──
    if (answeredCount === totalCount) {
        var pct = Math.round((correctCount / totalCount) * 100);
        var resultEl   = document.getElementById('mcq-score-result');
        var iconEl     = document.getElementById('score-result-icon');
        var fracEl     = document.getElementById('score-result-fraction');
        var labelEl    = document.getElementById('score-result-label');
        var barEl      = document.getElementById('score-result-bar');

        if (!resultEl) return;

        var grade, icon, barClass;
        if (pct === 100) {
            grade = 'Perfect score! Outstanding! 🏆';
            icon  = '🏆';
            barClass = 'bar-perfect';
        } else if (pct >= 80) {
            grade = 'Excellent! You\'re well prepared. 🌟';
            icon  = '🌟';
            barClass = 'bar-excellent';
        } else if (pct >= 60) {
            grade = 'Good effort. Review the ones you missed. 📖';
            icon  = '📖';
            barClass = 'bar-good';
        } else if (pct >= 40) {
            grade = 'Keep studying — you\'re getting there. 💪';
            icon  = '💪';
            barClass = 'bar-fair';
        } else {
            grade = 'Needs more revision. Go back to the summary! 📚';
            icon  = '📚';
            barClass = 'bar-low';
        }

        iconEl.textContent  = icon;
        fracEl.textContent  = correctCount + ' / ' + totalCount + ' correct  (' + pct + '%)';
        labelEl.textContent = grade;
        barEl.style.width   = pct + '%';
        barEl.className     = 'score-result-bar ' + barClass;

        resultEl.classList.remove('hidden');

        // ── Save score to localStorage ──
        if (typeof saveQuizScore === 'function') {
            saveQuizScore(currentUnitId, correctCount, totalCount);
        }

        // ── Auto-mark as reviewed if score ≥ 60% ──
        if (pct >= 60 && currentUnitId && typeof markReviewed === 'function') {
            markReviewed(currentUnitId, true);
            // Update the reviewed button in the header
            var reviewedBtn = document.getElementById('reviewed-toggle');
            if (reviewedBtn) {
                reviewedBtn.className = 'btn-reviewed active';
                reviewedBtn.innerHTML = '<span class="btn-reviewed-icon"><i data-lucide="check-circle" class="icon-sm"></i></span>' +
                    '<span class="btn-reviewed-text">Reviewed</span>';
                if (window.lucide) lucide.createIcons();
            }
        }

        // ── Update score badge in header ──
        updateUnitScoreBadge(currentUnitId, correctCount, totalCount, pct);

        // Smooth scroll to result
        setTimeout(function() {
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}
