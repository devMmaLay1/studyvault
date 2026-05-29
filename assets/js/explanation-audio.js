// ══════════════════════════════════════
// StudyVault — Explanation Audio Engine
// Human-cadence text-to-speech using Web Speech API
// ══════════════════════════════════════

(function () {
    'use strict';

    // ─── STATE ───
    var state = {
        playing: false,
        paused: false,
        queue: [],          // Array of { text, type, conceptIndex }
        currentIndex: 0,
        currentUtterance: null,
        voice: null,
        rate: 0.92,
        voicesLoaded: false
    };

    // ─── PAUSE DURATIONS (milliseconds) ───
    var PAUSE = {
        sentence: 280,      // Between sentences (like breathing)
        concept: 650,        // Between concept blocks (let it sink in)
        section: 800,        // Between major sections (new topic)
        comma: 0             // Commas handled naturally by the engine
    };

    // ─── VOICE SELECTION ───
    // Prioritise natural/neural voices to avoid robotic sound
    function selectBestVoice() {
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        if (!voices.length) return null;

        // Priority keywords — neural and natural voices sound human
        var priorityKeywords = ['natural', 'neural', 'enhanced', 'premium'];
        var goodKeywords = ['google', 'microsoft', 'samantha', 'zira', 'david', 'mark', 'jenny', 'guy', 'aria', 'siri'];

        var englishVoices = voices.filter(function (v) {
            return v.lang && v.lang.toLowerCase().startsWith('en');
        });

        if (!englishVoices.length) {
            englishVoices = voices;
        }

        // Tier 1: Neural/Natural voices
        for (var i = 0; i < englishVoices.length; i++) {
            var name = englishVoices[i].name.toLowerCase();
            for (var j = 0; j < priorityKeywords.length; j++) {
                if (name.indexOf(priorityKeywords[j]) !== -1) {
                    return englishVoices[i];
                }
            }
        }

        // Tier 2: Known high-quality voices
        for (var i = 0; i < englishVoices.length; i++) {
            var name = englishVoices[i].name.toLowerCase();
            for (var j = 0; j < goodKeywords.length; j++) {
                if (name.indexOf(goodKeywords[j]) !== -1) {
                    return englishVoices[i];
                }
            }
        }

        // Tier 3: Any English voice that is not a "compact" or low-quality one
        for (var i = 0; i < englishVoices.length; i++) {
            var name = englishVoices[i].name.toLowerCase();
            if (name.indexOf('compact') === -1 && name.indexOf('espeak') === -1) {
                return englishVoices[i];
            }
        }

        // Fallback: first English voice
        return englishVoices[0] || voices[0];
    }

    function loadVoices() {
        state.voice = selectBestVoice();
        state.voicesLoaded = true;
    }

    // Voices may load asynchronously
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    }

    // ─── SCRIPT COMPILER ───
    // Turns a section's concept data into a human-readable spoken script
    // Split into sentence-level chunks for natural pausing
    function compileSectionScript(section, sectionIndex, totalSections) {
        var queue = [];
        var sectionNum = sectionIndex + 1;

        // Opening
        queue.push({
            text: 'Section ' + sectionNum + ' of ' + totalSections + '. ' + section.title + '.',
            type: 'section',
            conceptIndex: -1
        });

        if (section.intro) {
            splitSentences(section.intro).forEach(function (s) {
                queue.push({ text: s, type: 'sentence', conceptIndex: -1 });
            });
        }

        // Concepts
        if (section.concepts && section.concepts.length) {
            section.concepts.forEach(function (concept, cIndex) {
                // Concept title
                queue.push({
                    text: 'Concept ' + (cIndex + 1) + '. ' + concept.title + '.',
                    type: 'concept',
                    conceptIndex: cIndex
                });

                // Definition
                if (concept.definition) {
                    queue.push({
                        text: 'The definition is:',
                        type: 'sentence',
                        conceptIndex: cIndex
                    });
                    splitSentences(concept.definition).forEach(function (s) {
                        queue.push({ text: s, type: 'sentence', conceptIndex: cIndex });
                    });
                }

                // Simple explanation
                if (concept.simple) {
                    queue.push({
                        text: 'To explain it simply:',
                        type: 'concept',
                        conceptIndex: cIndex
                    });
                    splitSentences(concept.simple).forEach(function (s) {
                        queue.push({ text: s, type: 'sentence', conceptIndex: cIndex });
                    });
                }

                // Example
                if (concept.example) {
                    queue.push({
                        text: 'Here is an everyday example.',
                        type: 'concept',
                        conceptIndex: cIndex
                    });
                    splitSentences(concept.example).forEach(function (s) {
                        queue.push({ text: s, type: 'sentence', conceptIndex: cIndex });
                    });
                }

                // Analogy
                if (concept.analogy) {
                    queue.push({
                        text: 'Think of it like this.',
                        type: 'concept',
                        conceptIndex: cIndex
                    });
                    splitSentences(concept.analogy).forEach(function (s) {
                        queue.push({ text: s, type: 'sentence', conceptIndex: cIndex });
                    });
                }

                // Recap
                if (concept.recap) {
                    queue.push({
                        text: 'In one sentence:',
                        type: 'concept',
                        conceptIndex: cIndex
                    });
                    queue.push({
                        text: concept.recap,
                        type: 'sentence',
                        conceptIndex: cIndex
                    });
                }

                // Key terms
                if (concept.points && concept.points.length) {
                    queue.push({
                        text: 'Key terms to remember.',
                        type: 'concept',
                        conceptIndex: cIndex
                    });
                    concept.points.forEach(function (point) {
                        queue.push({
                            text: point.term + ' means ' + point.meaning,
                            type: 'sentence',
                            conceptIndex: cIndex
                        });
                    });
                }
            });
        }

        // Section recap
        if (section.sectionRecap && section.sectionRecap.length) {
            queue.push({
                text: 'Quick section recap.',
                type: 'section',
                conceptIndex: -1
            });
            section.sectionRecap.forEach(function (item) {
                queue.push({ text: item, type: 'sentence', conceptIndex: -1 });
            });
        }

        // Final message
        if (section.finalMessage) {
            queue.push({
                text: section.finalMessage,
                type: 'section',
                conceptIndex: -1
            });
        }

        queue.push({
            text: 'End of section. Great job!',
            type: 'section',
            conceptIndex: -1
        });

        return queue;
    }

    // ─── SENTENCE SPLITTER ───
    // Splits text at sentence boundaries for natural pauses
    function splitSentences(text) {
        if (!text) return [];
        var parts = text.match(/[^.?!:]+[.?!:]?/g) || [text];
        var result = [];
        for (var i = 0; i < parts.length; i++) {
            var trimmed = parts[i].trim();
            if (trimmed.length > 0) {
                result.push(trimmed);
            }
        }
        return result.length ? result : [text];
    }

    // ─── PLAYBACK ENGINE ───
    function speakNext() {
        if (!state.playing || state.paused) return;
        if (state.currentIndex >= state.queue.length) {
            stopAudio();
            return;
        }

        var item = state.queue[state.currentIndex];
        var prevItem = state.currentIndex > 0 ? state.queue[state.currentIndex - 1] : null;

        // Determine pause duration based on transition type
        var pauseDuration = 0;
        if (prevItem) {
            if (item.type === 'section') {
                pauseDuration = PAUSE.section;
            } else if (item.type === 'concept' || item.type === 'diagram-step') {
                pauseDuration = PAUSE.concept;
            } else {
                pauseDuration = PAUSE.sentence;
            }
        }

        // Highlight the active concept and the specific sentence span
        highlightActiveSentence(state.currentIndex);
        highlightConcept(item.conceptIndex);

        // If this is a diagram step, reveal that specific step element
        if (item.diagramStep) {
            revealDiagramStep(item.diagramStep.diagram, item.diagramStep.step);
        }

        // Update mini player progress
        updateMiniPlayerProgress();

        // Wait for the pause, then speak
        setTimeout(function () {
            if (!state.playing || state.paused) return;

            var utterance = new SpeechSynthesisUtterance(item.text);
            utterance.rate = state.rate;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            if (state.voice) {
                utterance.voice = state.voice;
            }

            utterance.onend = function () {
                state.currentIndex++;
                speakNext();
            };

            utterance.onerror = function (e) {
                // Skip errors caused by cancel() calls
                if (e.error === 'canceled' || e.error === 'interrupted') return;
                state.currentIndex++;
                speakNext();
            };

            state.currentUtterance = utterance;
            window.speechSynthesis.speak(utterance);
        }, pauseDuration);
    }

    // ─── SENTENCE HIGHLIGHTING ───
    function highlightActiveSentence(index) {
        // Remove active class from all sentence elements
        var activeSpans = document.querySelectorAll('.audio-sentence-active');
        for (var i = 0; i < activeSpans.length; i++) {
            activeSpans[i].classList.remove('audio-sentence-active');
        }

        // Add active class to the current span
        var currentSpan = document.getElementById('audio-s-' + index);
        if (currentSpan) {
            currentSpan.classList.add('audio-sentence-active');

            // Gently scroll to the sentence if it is not in the viewport
            if (!isElementInViewport(currentSpan)) {
                currentSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // ─── CONCEPT HIGHLIGHTING ───
    function highlightConcept(conceptIndex) {
        // Remove all existing highlights
        var highlighted = document.querySelectorAll('.concept-section.audio-active');
        for (var i = 0; i < highlighted.length; i++) {
            highlighted[i].classList.remove('audio-active');
        }

        // Highlight the recap card when conceptIndex is -1 and we're near the end
        if (conceptIndex === -1 && state.currentIndex > 0) {
            var recapCard = document.querySelector('.section-recap-card');
            if (recapCard && state.currentIndex >= state.queue.length - 5) {
                recapCard.classList.add('audio-active');
            }
            return;
        }

        if (conceptIndex >= 0) {
            var target = document.getElementById('concept-' + (conceptIndex + 1));
            if (target) {
                target.classList.add('audio-active');
            }
        }
    }

    // ─── DIAGRAM MOTION GRAPHICS (STEP-BY-STEP) ───
    function revealDiagramStep(diagramId, stepNum) {
        var diagram = document.querySelector('.explain-diagram[data-diagram="' + diagramId + '"]');
        if (!diagram) return;

        // Enter audio mode (hides all steps, ready for progressive reveal)
        diagram.classList.add('diagram-audio-mode');

        // Reveal only this specific step element
        var stepEl = diagram.querySelector('[data-step="' + stepNum + '"]');
        if (stepEl) {
            stepEl.classList.add('step-visible');
        }

        // Scroll to the diagram on first step reveal
        if (stepNum <= 1) {
            setTimeout(function() {
                if (!isElementInViewport(diagram)) {
                    diagram.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 200);
        }
    }

    function resetAllDiagramAnimations() {
        var diagrams = document.querySelectorAll('.explain-diagram.diagram-audio-mode');
        for (var i = 0; i < diagrams.length; i++) {
            // Exit audio mode — diagram returns to static (fully visible)
            diagrams[i].classList.remove('diagram-audio-mode');
            // Clear all per-step reveals
            var steps = diagrams[i].querySelectorAll('.step-visible');
            for (var j = 0; j < steps.length; j++) {
                steps[j].classList.remove('step-visible');
            }
        }
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7
        );
    }

    // ─── PUBLIC CONTROLS ───
    function playAudio(section, sectionIndex, totalSections) {
        if (!window.speechSynthesis) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }

        // If paused, resume
        if (state.paused && state.playing) {
            state.paused = false;
            window.speechSynthesis.resume();
            updatePlayerUI();
            var container = document.querySelector('.explanation-container');
            if (container) {
                container.classList.add('audio-playing');
            }
            return;
        }

        // Fresh start
        window.speechSynthesis.cancel();
        state.queue = (window.StudyVaultAudioQueue && window.StudyVaultAudioQueue.length)
            ? window.StudyVaultAudioQueue
            : compileSectionScript(section, sectionIndex, totalSections);
        state.currentIndex = 0;
        state.playing = true;
        state.paused = false;

        var container = document.querySelector('.explanation-container');
        if (container) {
            container.classList.add('audio-playing');
        }

        showMiniPlayer();
        updatePlayerUI();
        speakNext();
    }

    function pauseAudio() {
        if (!state.playing) return;
        state.paused = true;
        window.speechSynthesis.pause();
        updatePlayerUI();
        var container = document.querySelector('.explanation-container');
        if (container) {
            container.classList.remove('audio-playing');
        }
    }

    function stopAudio() {
        window.speechSynthesis.cancel();
        state.playing = false;
        state.paused = false;
        state.currentIndex = 0;
        state.currentUtterance = null;
        updatePlayerUI();
        hideMiniPlayer();

        // Clear all highlights
        var highlighted = document.querySelectorAll('.audio-active');
        for (var i = 0; i < highlighted.length; i++) {
            highlighted[i].classList.remove('audio-active');
        }

        var sentenceHighlights = document.querySelectorAll('.audio-sentence-active');
        for (var i = 0; i < sentenceHighlights.length; i++) {
            sentenceHighlights[i].classList.remove('audio-sentence-active');
        }

        var container = document.querySelector('.explanation-container');
        if (container) {
            container.classList.remove('audio-playing');
        }

        // Reset all diagram animations so they can replay
        resetAllDiagramAnimations();
    }

    function togglePlayPause(section, sectionIndex, totalSections) {
        if (state.playing && !state.paused) {
            pauseAudio();
        } else if (state.playing && state.paused) {
            playAudio(section, sectionIndex, totalSections);
        } else {
            playAudio(section, sectionIndex, totalSections);
        }
    }

    function setRate(newRate) {
        state.rate = newRate;
        // Update the rate label if it exists
        var label = document.getElementById('audio-rate-label');
        if (label) {
            label.textContent = newRate.toFixed(2) + '×';
        }
    }

    // ─── MINI PLAYER UI ───
    function renderMiniPlayer() {
        // Don't render if speechSynthesis isn't supported
        if (!window.speechSynthesis) return;

        var existing = document.getElementById('audio-mini-player');
        if (existing) return;

        var player = document.createElement('div');
        player.id = 'audio-mini-player';
        player.className = 'audio-mini-player';
        player.innerHTML =
            '<div class="audio-mini-inner">' +
                '<button id="audio-play-btn" class="audio-ctrl-btn audio-play" title="Play / Pause" type="button">' +
                    '<i data-lucide="play" class="icon-sm"></i>' +
                '</button>' +
                '<button id="audio-stop-btn" class="audio-ctrl-btn audio-stop" title="Stop" type="button">' +
                    '<i data-lucide="square" class="icon-sm"></i>' +
                '</button>' +
                '<div class="audio-mini-info">' +
                    '<span id="audio-status-text" class="audio-status-text">Ready to listen</span>' +
                    '<div class="audio-progress-mini">' +
                        '<div id="audio-progress-bar" class="audio-progress-fill"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="audio-speed-control">' +
                    '<button id="audio-speed-down" class="audio-speed-btn" title="Slower" type="button">' +
                        '<i data-lucide="minus" class="icon-xs"></i>' +
                    '</button>' +
                    '<span id="audio-rate-label" class="audio-rate-label">' + state.rate.toFixed(2) + '×</span>' +
                    '<button id="audio-speed-up" class="audio-speed-btn" title="Faster" type="button">' +
                        '<i data-lucide="plus" class="icon-xs"></i>' +
                    '</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(player);

        // Render icons in the new player
        if (window.lucide) {
            lucide.createIcons({ nodes: [player] });
        }
    }

    function showMiniPlayer() {
        var player = document.getElementById('audio-mini-player');
        if (player) {
            player.classList.add('visible');
        }
    }

    function hideMiniPlayer() {
        var player = document.getElementById('audio-mini-player');
        if (player) {
            player.classList.remove('visible');
        }
    }

    function updatePlayerUI() {
        var playBtn = document.getElementById('audio-play-btn');
        var statusText = document.getElementById('audio-status-text');
        var heroBtn = document.getElementById('audio-hero-btn');

        if (playBtn) {
            // Swap the icon
            var iconName = (state.playing && !state.paused) ? 'pause' : 'play';
            playBtn.innerHTML = '<i data-lucide="' + iconName + '" class="icon-sm"></i>';
            playBtn.classList.toggle('playing', state.playing && !state.paused);

            if (window.lucide) {
                lucide.createIcons({ nodes: [playBtn] });
            }
        }

        if (statusText) {
            if (state.playing && !state.paused) {
                statusText.textContent = 'Listening...';
            } else if (state.paused) {
                statusText.textContent = 'Paused';
            } else {
                statusText.textContent = 'Ready to listen';
            }
        }

        // Update hero button
        if (heroBtn) {
            if (state.playing && !state.paused) {
                heroBtn.classList.add('playing');
                heroBtn.classList.remove('paused');
                heroBtn.setAttribute('title', 'Pause Audio');
                heroBtn.setAttribute('aria-label', 'Pause Audio');
            } else if (state.paused) {
                heroBtn.classList.remove('playing');
                heroBtn.classList.add('paused');
                heroBtn.setAttribute('title', 'Resume Audio');
                heroBtn.setAttribute('aria-label', 'Resume Audio');
            } else {
                heroBtn.classList.remove('playing');
                heroBtn.classList.remove('paused');
                heroBtn.setAttribute('title', 'Listen to Section');
                heroBtn.setAttribute('aria-label', 'Listen to Section');
            }
        }
    }

    function updateMiniPlayerProgress() {
        var bar = document.getElementById('audio-progress-bar');
        if (bar && state.queue.length) {
            var percent = Math.round((state.currentIndex / state.queue.length) * 100);
            bar.style.width = percent + '%';
        }
    }

    // ─── INITIALISER ───
    // Called by explanation.js after rendering the section
    function initAudioPlayer(section, sectionIndex, totalSections) {
        if (!window.speechSynthesis) return;

        // Build the mini player DOM
        renderMiniPlayer();

        // Wire up mini player controls
        var playBtn = document.getElementById('audio-play-btn');
        var stopBtn = document.getElementById('audio-stop-btn');
        var speedDown = document.getElementById('audio-speed-down');
        var speedUp = document.getElementById('audio-speed-up');

        if (playBtn) {
            playBtn.onclick = function () {
                togglePlayPause(section, sectionIndex, totalSections);
            };
        }

        if (stopBtn) {
            stopBtn.onclick = function () {
                stopAudio();
            };
        }

        if (speedDown) {
            speedDown.onclick = function () {
                var newRate = Math.max(0.5, state.rate - 0.1);
                setRate(parseFloat(newRate.toFixed(2)));
            };
        }

        if (speedUp) {
            speedUp.onclick = function () {
                var newRate = Math.min(2.0, state.rate + 0.1);
                setRate(parseFloat(newRate.toFixed(2)));
            };
        }

        // Stop audio when navigating away
        window.addEventListener('beforeunload', function () {
            stopAudio();
        });
    }

    // ─── EXPOSE PUBLIC API ───
    window.StudyVaultAudio = {
        init: initAudioPlayer,
        play: playAudio,
        pause: pauseAudio,
        stop: stopAudio,
        toggle: togglePlayPause,
        setRate: setRate,
        getState: function () { return state; }
    };

})();
