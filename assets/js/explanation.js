document.addEventListener('DOMContentLoaded', function() {
    window.StudyVaultAudioQueue = [];
    const uid = getParam('uid');
    if (!uid) {
        window.location.href = 'index.html';
        return;
    }

    const context = getUnitById(uid);
    const explanation = window.unitExplanations ? window.unitExplanations[uid] : null;

    if (!context || !explanation || !explanation.sections || !explanation.sections.length) {
        window.location.href = context ? 'unit.html?uid=' + uid : 'index.html';
        return;
    }

    const sectionIndex = getCurrentSectionIndex(explanation);
    const section = explanation.sections[sectionIndex];

    addRecentUnit(uid);
    document.title = section.title + ' - ' + context.unit.title;

    renderExplanationBreadcrumb(context, section);
    renderExplanationHero(context, explanation, section, sectionIndex);
    renderExplanationFlow(context, explanation, sectionIndex);
    renderExplanationContent(section, sectionIndex, explanation.sections.length);
    renderExplanationNavigation(context, explanation, sectionIndex);
    initExplanationScroll(context, sectionIndex, explanation.sections.length);

    // Initialise the audio player
    if (window.StudyVaultAudio) {
        StudyVaultAudio.init(section, sectionIndex, explanation.sections.length);
    }

    // Diagrams are now static by default (dual-mode system).
    // Audio mode is applied dynamically by explanation-audio.js only when playing.

    if (window.lucide) {
        lucide.createIcons();
    }
});

window.StudyVaultAudioQueue = [];

function registerAudioSentence(text, type, conceptIndex) {
    var index = window.StudyVaultAudioQueue.length;
    window.StudyVaultAudioQueue.push({
        text: text,
        type: type,
        conceptIndex: conceptIndex
    });
    return index;
}

function registerDiagramStep(text, conceptIndex, diagramId, stepNum) {
    var index = window.StudyVaultAudioQueue.length;
    window.StudyVaultAudioQueue.push({
        text: text,
        type: 'diagram-step',
        conceptIndex: conceptIndex,
        diagramStep: { diagram: diagramId, step: stepNum }
    });
    return index;
}

function wrapSentences(text, type, conceptIndex) {
    if (!text) return '';
    var parts = text.match(/[^.?!:]+[.?!:]?/g) || [text];
    var html = '';
    parts.forEach(function(part) {
        var trimmed = part.trim();
        if (trimmed.length > 0) {
            var idx = registerAudioSentence(trimmed, type, conceptIndex);
            html += '<span class="audio-sentence" id="audio-s-' + idx + '">' + trimmed + '</span> ';
        }
    });
    return html;
}


function getCurrentSectionIndex(explanation) {
    const raw = parseInt(getParam('section') || '1', 10);
    if (!Number.isFinite(raw)) return 0;
    return Math.min(Math.max(raw, 1), explanation.sections.length) - 1;
}

function getSectionUrl(uid, sectionNumber) {
    return 'explanation.html?uid=' + uid + '&section=' + sectionNumber;
}

function renderExplanationBreadcrumb(context, section) {
    const container = document.getElementById('breadcrumb');
    if (!container) return;

    const items = [
        { label: 'Home', url: 'index.html' },
        { label: context.level.label, url: 'level.html?lid=' + context.level.id },
        { label: context.semester.label, url: 'semester.html?sid=' + context.semester.id },
        { label: context.course.code, url: 'course.html?cid=' + context.course.id },
        { label: context.module.title, url: 'module.html?mid=' + context.module.id },
        { label: context.unit.title, url: 'unit.html?uid=' + context.unit.id },
        { label: section.title, url: null }
    ];

    container.innerHTML = renderBreadcrumb(items);
}

function renderExplanationHero(context, explanation, section, sectionIndex) {
    const container = document.getElementById('explanation-hero');
    if (!container) return;

    const total = explanation.sections.length;
    const sectionNumber = sectionIndex + 1;
    const percent = Math.round((sectionNumber / total) * 100);

    const openIdx = registerAudioSentence('Section ' + sectionNumber + ' of ' + total + '. ' + section.title + '.', 'section', -1);

    container.innerHTML =
        '<div class="explanation-eyebrow">' + context.course.code + ' - ' + context.module.title + '</div>' +
        '<div class="section-progress-label">Section ' + sectionNumber + ' of ' + total + '</div>' +
        '<h1 class="audio-sentence" id="audio-s-' + openIdx + '">' + section.title + '</h1>' +
        '<p class="explanation-hero-text">' + wrapSentences(section.intro, 'sentence', -1) + '</p>' +
        '<div class="section-progress-track" aria-label="Section progress">' +
        '<span style="width:' + percent + '%"></span>' +
        '</div>' +
        '<div class="explanation-hero-actions">' +
        '<a href="unit.html?uid=' + context.unit.id + '" class="btn btn-secondary">' +
        '<i data-lucide="file-text" class="icon-sm"></i> Summary page' +
        '</a>' +
        '<a href="#explanation-content" class="btn btn-primary">' +
        '<i data-lucide="arrow-down" class="icon-sm"></i> Read this section' +
        '</a>' +
        (window.speechSynthesis ? '<button id="audio-hero-btn" class="audio-seamless-btn" type="button" aria-label="Listen to Section" title="Listen to Section">' +
        '<span class="audio-icon-wrapper">' +
        '<i data-lucide="volume-2" class="speaker-icon"></i>' +
        '<span class="sound-wave">' +
        '<span class="bar bar-1"></span>' +
        '<span class="bar bar-2"></span>' +
        '<span class="bar bar-3"></span>' +
        '<span class="bar bar-4"></span>' +
        '</span>' +
        '</span>' +
        '</button>' : '') +
        '</div>';

    // Wire hero button after rendering
    setTimeout(function() {
        var heroBtn = document.getElementById('audio-hero-btn');
        if (heroBtn && window.StudyVaultAudio) {
            heroBtn.addEventListener('click', function() {
                StudyVaultAudio.toggle(section, sectionIndex, explanation.sections.length);
            });
        }
    }, 0);
}

function renderExplanationFlow(context, explanation, activeIndex) {
    const container = document.getElementById('explanation-flow');
    if (!container) return;

    let html = '';
    explanation.sections.forEach(function(section, index) {
        const stateClass = index === activeIndex ? ' active' : index < activeIndex ? ' complete' : '';
        html += '<a href="' + getSectionUrl(context.unit.id, index + 1) + '" class="flow-step' + stateClass + '">' +
            '<span class="flow-step-number">' + (index + 1) + '</span>' +
            '<span class="flow-step-title">' + section.shortTitle + '</span>' +
            '</a>';
    });

    container.innerHTML = html;
}

function renderExplanationContent(section, sectionIndex, totalSections) {
    const container = document.getElementById('explanation-content');
    if (!container) return;

    let html = '';
    const renderedDiagrams = {};

    if (section.concepts && section.concepts.length) {
        section.concepts.forEach(function(concept, index) {
            var conceptTitleText = 'Concept ' + (index + 1) + '. ' + concept.title + '.';
            var conceptTitleIdx = registerAudioSentence(conceptTitleText, 'concept', index);

            html += '<article class="concept-section" id="concept-' + (index + 1) + '">' +
                '<div class="concept-kicker">Section ' + (sectionIndex + 1) + ' of ' + totalSections + ' - Concept ' + (index + 1) + '</div>' +
                '<h2><span class="audio-sentence" id="audio-s-' + conceptTitleIdx + '">' + concept.title + '</span></h2>';

            if (concept.definition) {
                html += '<p class="concept-definition">' + wrapSentences(concept.definition, 'sentence', index) + '</p>';
            }

            html += renderTeachingBlock('Explain it simply', concept.simple, 'lightbulb', index) +
                renderTeachingBlock('Everyday example', concept.example, 'hand', index) +
                renderTeachingBlock('Simple analogy', concept.analogy, 'link', index) +
                renderTeachingBlock('One-sentence recap', concept.recap, 'check-circle', index);

            if (concept.diagram && !renderedDiagrams[concept.diagram]) {
                html += renderDiagram(concept.diagram, index);
                renderedDiagrams[concept.diagram] = true;
            }

            if (concept.points && concept.points.length) {
                var termHeaderIdx = registerAudioSentence('Key terms to remember.', 'concept', index);
                html += '<div class="concept-points">' +
                    '<div class="concept-point" style="display:none;"><span class="audio-sentence" id="audio-s-' + termHeaderIdx + '">Key terms</span></div>';
                concept.points.forEach(function(point) {
                    var termText = point.term + ' means ' + point.meaning;
                    var termIdx = registerAudioSentence(termText, 'sentence', index);
                    html += '<div class="concept-point audio-sentence" id="audio-s-' + termIdx + '">' +
                        '<strong>' + point.term + '</strong>' +
                        '<span>' + point.meaning + '</span>' +
                        '</div>';
                });
                html += '</div>';
            }

            html += '</article>';
        });
    }

    html += renderSectionRecap(section);
    container.innerHTML = html;
}

function renderTeachingBlock(label, text, icon, conceptIndex) {
    if (!text) return '';
    var labelIdx = registerAudioSentence(label + '.', 'concept', conceptIndex);
    return '<div class="teach-block">' +
        '<div class="teach-label"><i data-lucide="' + icon + '" class="icon-sm"></i>' +
        '<span class="audio-sentence" id="audio-s-' + labelIdx + '">' + label + '</span>' +
        '</div>' +
        '<p>' + wrapSentences(text, 'sentence', conceptIndex) + '</p>' +
        '</div>';
}

function renderSectionRecap(section) {
    var recapHeaderIdx = registerAudioSentence('Quick section recap.', 'section', -1);
    let html = '<article class="section-recap-card">' +
        '<div class="concept-kicker">End of section</div>' +
        '<h2><span class="audio-sentence" id="audio-s-' + recapHeaderIdx + '">' + (section.finalMessage ? 'Full unit recap' : 'Quick section recap') + '</span></h2>' +
        '<ul class="recap-list">';

    section.sectionRecap.forEach(function(item) {
        var recapItemIdx = registerAudioSentence(item, 'sentence', -1);
        html += '<li class="audio-sentence" id="audio-s-' + recapItemIdx + '">' + item + '</li>';
    });

    html += '</ul>';

    if (section.finalMessage) {
        var finalMsgIdx = registerAudioSentence(section.finalMessage, 'section', -1);
        html += '<p class="final-message"><span class="audio-sentence" id="audio-s-' + finalMsgIdx + '">' + section.finalMessage + '</span></p>';
    }

    // End of section message
    var endIdx = registerAudioSentence('End of section. Great job!', 'section', -1);
    html += '<div style="display:none;"><span class="audio-sentence" id="audio-s-' + endIdx + '">End</span></div>';

    html += '</article>';
    return html;
}

function renderExplanationNavigation(context, explanation, sectionIndex) {
    const container = document.getElementById('explanation-navigation');
    if (!container) return;

    const total = explanation.sections.length;
    const prev = sectionIndex > 0 ? explanation.sections[sectionIndex - 1] : null;
    const next = sectionIndex < total - 1 ? explanation.sections[sectionIndex + 1] : null;

    let html = '<div class="section-nav-grid">';

    if (prev) {
        html += '<a href="' + getSectionUrl(context.unit.id, sectionIndex) + '" class="section-nav-card prev">' +
            '<span><i data-lucide="arrow-left" class="icon-sm"></i> Previous section</span>' +
            '<strong>' + prev.title + '</strong>' +
            '</a>';
    } else {
        html += '<a href="unit.html?uid=' + context.unit.id + '" class="section-nav-card prev">' +
            '<span><i data-lucide="file-text" class="icon-sm"></i> Back to summary</span>' +
            '<strong>' + context.unit.title + '</strong>' +
            '</a>';
    }

    if (next) {
        html += '<a href="' + getSectionUrl(context.unit.id, sectionIndex + 2) + '" class="section-nav-card next">' +
            '<span>Next section <i data-lucide="arrow-right" class="icon-sm"></i></span>' +
            '<strong>' + next.title + '</strong>' +
            '</a>';
    } else {
        html += '<a href="module.html?mid=' + context.module.id + '" class="section-nav-card next">' +
            '<span>Finish <i data-lucide="list" class="icon-sm"></i></span>' +
            '<strong>Back to module</strong>' +
            '</a>';
    }

    html += '</div>';
    container.innerHTML = html;
}

function initExplanationScroll(context, sectionIndex, totalSections) {
    const progressBar = document.getElementById('reading-progress');
    const backBtn = document.getElementById('back-btn');

    if (backBtn) {
        backBtn.href = 'unit.html?uid=' + context.unit.id;
    }

    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;

        if (progressBar && total > 0) {
            const pageProgress = (scrolled / total) * (1 / totalSections);
            const previousSections = sectionIndex / totalSections;
            progressBar.style.width = ((previousSections + pageProgress) * 100) + '%';
        }

        if (backBtn) {
            backBtn.classList.toggle('visible', scrolled > 150);
        }
    });
}

function renderDiagram(type, conceptIndex) {
    // ─── computerFlow: ANIMATED step-by-step narrated diagram ───
    if (type === 'computerFlow') {
        registerDiagramStep('Let us look at this diagram step by step.', conceptIndex, 'computerFlow', 0);
        registerDiagramStep('First, we have Input. Data enters the computer through the keyboard.', conceptIndex, 'computerFlow', 1);
        registerDiagramStep('The data then flows to the next stage.', conceptIndex, 'computerFlow', 2);
        registerDiagramStep('Next is Processing. The Central Processing Unit, the CPU, works on the data.', conceptIndex, 'computerFlow', 3);
        registerDiagramStep('The processed data then moves to the final stage.', conceptIndex, 'computerFlow', 4);
        registerDiagramStep('Finally, we have Output. The result appears on the screen.', conceptIndex, 'computerFlow', 5);
        registerDiagramStep('So, a computer receives input, processes it, and gives output.', conceptIndex, 'computerFlow', 6);

        return '<figure class="explain-diagram" data-diagram="computerFlow">' +
            '<div class="diagram-flow">' +
            '<div class="diagram-box box-blue diagram-anim" data-step="1"><span>1</span><strong>Input</strong><small>Data enters through the keyboard.</small></div>' +
            '<div class="diagram-arrow diagram-anim" data-step="2"></div>' +
            '<div class="diagram-box box-amber diagram-anim" data-step="3"><span>2</span><strong>Processing</strong><small>The CPU works on the data.</small></div>' +
            '<div class="diagram-arrow diagram-anim" data-step="4"></div>' +
            '<div class="diagram-box box-green diagram-anim" data-step="5"><span>3</span><strong>Output</strong><small>The result appears on the screen.</small></div>' +
            '</div>' +
            '<figcaption class="diagram-anim" data-step="6">A computer receives input, processes it, and gives output.</figcaption>' +
            '</figure>';
    }

    // ─── All other diagrams: static (no animation) ───
    const diagrams = {

        dataInfo:
            '<figure class="explain-diagram">' +
            '<div class="diagram-split">' +
            '<div class="diagram-box box-blue"><strong>Data</strong><small>Facts: name, age, school, class, height.</small></div>' +
            '<div class="diagram-arrow"></div>' +
            '<div class="diagram-box box-amber"><strong>Processing</strong><small>The facts are worked on.</small></div>' +
            '<div class="diagram-arrow"></div>' +
            '<div class="diagram-box box-green"><strong>Information</strong><small>Meaningful result: exam result or net pay.</small></div>' +
            '</div>' +
            '<figcaption>Data becomes information after processing.</figcaption>' +
            '</figure>',

        methods:
            '<figure class="explain-diagram">' +
            '<div class="method-lanes">' +
            '<div class="method-lane manual"><strong>Manual method</strong><small>Chalk, wall, pen, pencil.</small></div>' +
            '<div class="method-lane mechanical"><strong>Mechanical method</strong><small>Typewriter, roneo machine, adding machine.</small></div>' +
            '<div class="method-lane computer"><strong>Computer method</strong><small>Steady, continuous, neat processing.</small></div>' +
            '</div>' +
            '<figcaption>The unit lists three major methods of data processing.</figcaption>' +
            '</figure>',

        computerMethod:
            '<figure class="explain-diagram">' +
            '<div class="computer-method-grid">' +
            '<div><strong>Continuous</strong><small>Data can be steadily processed.</small></div>' +
            '<div><strong>Quiet</strong><small>Operations are practically not noisy.</small></div>' +
            '<div><strong>Stored</strong><small>Data and instructions can be stored.</small></div>' +
            '<div><strong>Corrected</strong><small>Errors can be corrected neatly.</small></div>' +
            '<div><strong>Neat output</strong><small>Reports can include graphs, diagrams, and pictures.</small></div>' +
            '<div><strong>Reliable</strong><small>Accuracy and reliability are enhanced.</small></div>' +
            '</div>' +
            '<figcaption>These are the features of the computer method in the unit.</figcaption>' +
            '</figure>',

        characteristics:
            '<figure class="explain-diagram">' +
            '<div class="character-grid">' +
            '<div><strong>Speed</strong><small>Very fast response.</small></div>' +
            '<div><strong>Accuracy</strong><small>High and consistent.</small></div>' +
            '<div><strong>Storage</strong><small>Holds data and instructions.</small></div>' +
            '<div><strong>Automatic</strong><small>Runs a program from memory.</small></div>' +
            '<div><strong>Reliability</strong><small>Does not get tired.</small></div>' +
            '<div><strong>Flexibility</strong><small>Works with logical steps.</small></div>' +
            '</div>' +
            '<figcaption>These are the six characteristics of a computer from the unit.</figcaption>' +
            '</figure>',

        computingSystem:
            '<figure class="explain-diagram">' +
            '<div class="tree-diagram">' +
            '<div class="tree-root">Computing system</div>' +
            '<div class="tree-branches three">' +
            '<div>Computer system</div>' +
            '<div>Users</div>' +
            '<div>Computing environment</div>' +
            '</div>' +
            '</div>' +
            '<figcaption>The computing system is the computer system, users, and environment together.</figcaption>' +
            '</figure>',

        hardware:
            '<figure class="explain-diagram">' +
            '<div class="hardware-map">' +
            '<div class="diagram-box box-blue"><strong>Input unit</strong><small>Keyboard, mouse, joystick, trackball, scanner.</small></div>' +
            '<div class="diagram-arrow"></div>' +
            '<div class="diagram-box box-purple"><strong>Processing unit</strong><small>ALU, control unit, main memory.</small></div>' +
            '<div class="diagram-arrow"></div>' +
            '<div class="diagram-box box-green"><strong>Output unit</strong><small>Monitor and printer.</small></div>' +
            '</div>' +
            '<figcaption>Hardware is grouped into input, processing, and output units.</figcaption>' +
            '</figure>',

        software:
            '<figure class="explain-diagram">' +
            '<div class="tree-diagram">' +
            '<div class="tree-root">Software</div>' +
            '<div class="tree-branches three">' +
            '<div>System software<br><small>Operating system</small></div>' +
            '<div>Utility software<br><small>Anti virus, Scandisk</small></div>' +
            '<div>Application software<br><small>Word processor, spreadsheet, statistical packages</small></div>' +
            '</div>' +
            '</div>' +
            '<figcaption>Software is made of programs, and programs are made of instructions.</figcaption>' +
            '</figure>',

        users:
            '<figure class="explain-diagram">' +
            '<div class="tree-diagram">' +
            '<div class="tree-root">Computer users</div>' +
            '<div class="tree-branches two">' +
            '<div>Expert users<br><small>Engineers, programmers, operators.</small></div>' +
            '<div>Casual users<br><small>End users, data entry clerks.</small></div>' +
            '</div>' +
            '</div>' +
            '<figcaption>Computer users are the people who operate the computer.</figcaption>' +
            '</figure>',

        environment:
            '<figure class="explain-diagram">' +
            '<div class="environment-map">' +
            '<div>Building</div>' +
            '<div>Furniture and fittings</div>' +
            '<div>Air conditioner</div>' +
            '<div>Auxiliary devices</div>' +
            '<div>Voltage stabilizer</div>' +
            '</div>' +
            '<figcaption>The computing environment is the place and support setup around the computer.</figcaption>' +
            '</figure>'
    };

    return diagrams[type] || '';
}
