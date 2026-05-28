// ══════════════════════════════════════
// StudyVault — Flowchart diagrams (HTML/CSS)
// Used by interactive lessons via diagramId
// ══════════════════════════════════════

(function() {
    function vConnector() {
        return (
            '<div class="fc-v-connector" aria-hidden="true">' +
            '<div class="fc-line"></div><div class="fc-arrowhead"></div></div>'
        );
    }

    function terminator(text) {
        return '<div class="fc-node fc-terminator">' + text + "</div>";
    }

    function process(text) {
        return '<div class="fc-node fc-process">' + text + "</div>";
    }

    function decision(text) {
        return (
            '<div class="fc-decision-wrap">' +
            '<div class="fc-decision"><span class="fc-decision-text">' +
            text +
            "</span></div></div>"
        );
    }

    function parallelogram(text) {
        return (
            '<div class="fc-node fc-parallelogram"><span class="fc-para-text">' +
            text +
            "</span></div>"
        );
    }

    function document(text) {
        return '<div class="fc-node fc-document">' + text + "</div>";
    }

    function caption(text) {
        return '<p class="lesson-diagram-caption">' + text + "</p>";
    }

    function wrap(captionText, inner) {
        return (
            '<div class="lesson-diagram-wrap" role="img">' +
            (captionText ? caption(captionText) : "") +
            inner +
            "</div>"
        );
    }

    const diagrams = {
        /** Simple top-to-bottom flow for introduction */
        intro_simple_flow: function() {
            return wrap(
                "Example: a simple process flow",
                '<div class="fc-flow">' +
                terminator("START") +
                vConnector() +
                process("Understand the problem") +
                vConnector() +
                process("List steps / actions") +
                vConnector() +
                process("Draw boxes & arrows") +
                vConnector() +
                terminator("END") +
                "</div>"
            );
        },

        /** Course registration — visual language (section 2) */
        registration_flow: function() {
            return wrap(
                "Life example: course registration",
                '<div class="fc-flow">' +
                terminator("START") +
                vConnector() +
                process("Login to portal") +
                vConnector() +
                process("Select courses") +
                vConnector() +
                process("Pay fees") +
                vConnector() +
                terminator("END") +
                "</div>"
            );
        },

        /** All five basic symbols — legend */
        basic_symbols_legend: function() {
            return wrap(
                "Basic flowchart symbols (know these for exams)",
                '<div class="fc-legend">' +
                '<div class="fc-legend-item">' +
                terminator("Start / End") +
                '<span class="fc-legend-name">Terminator</span>' +
                '<span class="fc-legend-desc">Where flow begins & ends</span></div>' +
                '<div class="fc-legend-item">' +
                process("Process") +
                '<span class="fc-legend-name">Process</span>' +
                '<span class="fc-legend-desc">One action or step</span></div>' +
                '<div class="fc-legend-item">' +
                decision("Yes?") +
                '<span class="fc-legend-name">Decision</span>' +
                '<span class="fc-legend-desc">Diamond — branches Yes/No</span></div>' +
                '<div class="fc-legend-item">' +
                parallelogram("Input / Output") +
                '<span class="fc-legend-name">I/O</span>' +
                '<span class="fc-legend-desc">Parallelogram — data in/out</span></div>' +
                '<div class="fc-legend-item">' +
                '<span class="fc-h-connector" style="font-size:1.5rem">→</span>' +
                '<span class="fc-legend-name">Arrow</span>' +
                '<span class="fc-legend-desc">Order of flow / control</span></div>' +
                "</div>"
            );
        },

        /** Full mini chart using all symbol types */
        symbols_in_action: function() {
            return wrap(
                "Symbols working together: read two numbers & print sum",
                '<div class="fc-flow">' +
                terminator("START") +
                vConnector() +
                parallelogram("Input A, B") +
                vConnector() +
                process("Sum = A + B") +
                vConnector() +
                parallelogram("Print Sum") +
                vConnector() +
                terminator("END") +
                "</div>"
            );
        },

        /** Decision — non-functioning light bulb (unit sample) */
        light_bulb_flow: function() {
            return wrap(
                "Sample: non-functioning light bulb (from your unit)",
                '<div class="fc-flow">' +
                terminator("START") +
                vConnector() +
                process("Try switching ON") +
                vConnector() +
                decision("Bulb lights?") +
                '<div class="fc-branch-row">' +
                '<div class="fc-branch-col">' +
                '<span class="fc-branch-label">Yes</span>' +
                process("Bulb works") +
                "</div>" +
                '<div class="fc-branch-col">' +
                '<span class="fc-branch-label no">No</span>' +
                process("Replace bulb") +
                "</div></div>" +
                vConnector() +
                terminator("END") +
                "</div>"
            );
        },

        /** ABC bonus decision (exam-style) */
        bonus_salary_flow: function() {
            return wrap(
                "Sample: ABC bonus (salary ≥ N6,000?)",
                '<div class="fc-flow">' +
                terminator("START") +
                vConnector() +
                parallelogram("Input: Salary") +
                vConnector() +
                decision("Salary ≥ N6,000?") +
                '<div class="fc-branch-row">' +
                '<div class="fc-branch-col">' +
                '<span class="fc-branch-label">Yes</span>' +
                process("Bonus = 6% × salary") +
                "</div>" +
                '<div class="fc-branch-col">' +
                '<span class="fc-branch-label no">No</span>' +
                process("Bonus = N250") +
                "</div></div>" +
                vConnector() +
                parallelogram("Print bonus") +
                vConnector() +
                terminator("END") +
                "</div>"
            );
        },

        /** Document + data symbols hint */
        document_data_row: function() {
            return wrap(
                "Intermediate symbols: document & data (simplified)",
                '<div class="fc-flow-horizontal">' +
                document("Create invoice") +
                '<span class="fc-mini-arrow">→</span>' +
                '<div class="fc-node fc-process" style="min-width:90px">Store in DB</div>' +
                '<span class="fc-mini-arrow">→</span>' +
                document("Review report") +
                "</div>"
            );
        },

        /** Two-lane swimlane */
        swimlane_tma: function() {
            return wrap(
                "Swimlane idea: two roles side by side",
                '<div class="fc-swimlane-chart">' +
                '<div class="fc-lane">' +
                '<div class="fc-lane-header">Student</div>' +
                '<div class="fc-lane-body">' +
                process("Submit TMA") +
                '<span class="fc-mini-arrow">→</span>' +
                process("Wait") +
                "</div></div>" +
                '<div class="fc-lane">' +
                '<div class="fc-lane-header">Tutor</div>' +
                '<div class="fc-lane-body">' +
                process("Receive") +
                '<span class="fc-mini-arrow">→</span>' +
                process("Mark & grade") +
                "</div></div></div>"
            );
        },

        /** Process vs data flowchart concept */
        data_flow_simple: function() {
            return wrap(
                "Data flowchart: information moving through stages",
                '<div class="fc-flow-horizontal">' +
                parallelogram("Visitor") +
                '<span class="fc-mini-arrow">→</span>' +
                process("Lead") +
                '<span class="fc-mini-arrow">→</span>' +
                process("Customer") +
                '<span class="fc-mini-arrow">→</span>' +
                parallelogram("Sale data") +
                "</div>"
            );
        },

        /** Design direction visual */
        flow_direction: function() {
            return wrap(
                "Good direction: top-to-bottom (or left-to-right)",
                '<div class="fc-flow" style="max-width:200px">' +
                terminator("START") +
                vConnector() +
                process("Step 1") +
                vConnector() +
                process("Step 2") +
                vConnector() +
                process("Step 3") +
                vConnector() +
                terminator("END") +
                '<p style="font-size:0.7rem;color:#64748b;margin-top:0.5rem;text-align:center">↓ preferred flow</p>' +
                "</div>"
            );
        },

        /** Algorithm vs flowchart visual compare */
        algo_vs_flowchart_visual: function() {
            return wrap(
                "Algorithm (words) vs Flowchart (picture)",
                '<div class="fc-compare-visual">' +
                '<div class="fc-compare-box algo">' +
                "<strong>Algorithm</strong><br><br>" +
                "1. Start<br>2. Input A, B<br>3. Sum = A+B<br>4. Print Sum<br>5. Stop" +
                "</div>" +
                '<div class="fc-compare-box fc">' +
                "<strong>Flowchart</strong><br><br>" +
                '<div class="fc-flow" style="transform:scale(0.85);transform-origin:top center">' +
                terminator("Start") +
                vConnector() +
                parallelogram("A, B") +
                vConnector() +
                process("Sum") +
                vConnector() +
                terminator("End") +
                "</div></div></div>"
            );
        }
    };

    window.StudyVaultDiagrams = {
        render: function(diagramId) {
            if (!diagramId || !diagrams[diagramId]) {
                return "";
            }
            return diagrams[diagramId]();
        },
        has: function(diagramId) {
            return !!(diagramId && diagrams[diagramId]);
        }
    };
})();
