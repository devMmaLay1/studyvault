// ══════════════════════════════════════
// Interactive Lesson — CIT108 M2 U3 Flowcharts
// Prototype content (section-by-section)
// ══════════════════════════════════════

const lesson_CIT108_m2_u3 = {
    unitId: "CIT108_m2_u3",
    courseCode: "CIT108",
    moduleTitle: "Role of Algorithms in Problem Solving",
    unitTitle: "Flowcharts",
    passThreshold: 0.7,
    sections: [
        // ─── Section 1: Introduction & outcomes ───
        {
            id: "s1_intro",
            title: "1. Introduction & learning outcomes",
            concepts: ["flowchart_definition", "unit_outcomes"],
            teach: [
                {
                    conceptId: "flowchart_definition",
                    title: "What is a flowchart?",
                    diagramId: "intro_simple_flow",
                    default: "<p>A <strong>flowchart</strong> is a diagram that shows an <strong>algorithm</strong>, <strong>workflow</strong>, or <strong>process</strong>. Steps appear as boxes; order appears as <strong>arrows</strong> between them.</p><p>It is a <strong>visual solution model</strong> for a problem — used to analyse, design, document, or manage processes in many fields (business, manufacturing, software, etc.).</p>",
                    simpler: "<p>Think of a flowchart as a <strong>map of steps</strong>: what happens first, what happens next, and where decisions split the path (yes/no).</p><p>Because it is visual, people often understand it faster than long paragraphs.</p>",
                    analogy: "<p><strong>Life example:</strong> Making garri — soak cassava → grind → press → fry. Each step is a box; arrows show you cannot fry before grinding.</p><p><strong>Exam tip:</strong> Flowcharts help find <strong>bottlenecks</strong> and <strong>flaws</strong> in a process.</p>",
                    commonMistake: "<p>Students sometimes say flowchart = only for programming. Wrong — it is used in <strong>business, manufacturing, and documentation</strong> too.</p>"
                },
                {
                    conceptId: "unit_outcomes",
                    title: "What you should achieve (ILO)",
                    default: "<p>After this unit you should be able to:</p><ul><li>Understand basic flowchart concepts</li><li>Apply symbols and notation to create flowcharts</li><li>Differentiate common flowchart <strong>types</strong> and where they apply</li><li>Know design <strong>considerations</strong></li><li>Solve simple flowcharting problems</li></ul>",
                    simpler: "<p>Master <strong>symbols</strong>, <strong>types</strong>, <strong>rules</strong>, and practice drawing simple problems (light bulb, sum of numbers, bonus, etc.).</p>",
                    analogy: "",
                    commonMistake: ""
                }
            ],
            faq: [
                { keys: ["what is flowchart", "define flowchart", "meaning of flowchart"], answer: "A flowchart is a diagram showing steps (boxes) and order (arrows) for an algorithm, workflow, or process." },
                { keys: ["alternative names", "other names"], answer: "Also called: process flowchart, process map, process chart, workflow diagram, business flow diagram, and similar names." },
                { keys: ["why use flowchart", "benefit of diagram"], answer: "Visualises what is going on, helps understanding, and can reveal flaws, bottlenecks, and less-obvious features." }
            ],
            microCheck: {
                conceptId: "flowchart_definition",
                question: "A flowchart shows steps as ___ and order as ___.",
                acceptable: ["boxes arrows", "boxes and arrows", "box arrow"],
                hint: "Two words: shapes for steps, lines for order."
            },
            gateQuiz: [
                { id: "s1_q1", conceptId: "flowchart_definition", skill: "definition", format: "tf", question: "A flowchart can only be used in software engineering.", correct: false, explanation: "False. Flowcharts are used in business, manufacturing, documentation, and many other fields." },
                { id: "s1_q2", conceptId: "flowchart_definition", skill: "definition", format: "mcq", question: "What do arrows in a flowchart mainly show?", options: ["Data storage", "Order / flow of control", "Document type", "Colour theme"], correct: 1, explanation: "Arrows show the order of program flow or control between steps." },
                { id: "s1_q3", conceptId: "unit_outcomes", skill: "recall", format: "fill", question: "Flowcharts use various kinds of ___ connected by arrows.", acceptable: ["boxes", "box", "symbols"], explanation: "Steps are shown as boxes (of various kinds) connected by arrows." }
            ]
        },

        // ─── Section 2: Concept (3.1) ───
        {
            id: "s2_concept",
            title: "2. Concept of flowcharts",
            concepts: ["visual_language", "stakeholders"],
            teach: [
                {
                    conceptId: "visual_language",
                    title: "Flowcharts as a universal visual language",
                    diagramId: "registration_flow",
                    default: "<p>A well-made flowchart breaks <strong>big ideas</strong> into small, bite-sized visual pieces. Knowing flowcharts is like having a <strong>universal language</strong> to communicate with stakeholders or any audience — visuals are often easier than words alone.</p>",
                    simpler: "<p>Big problem → small steps → draw them → everyone sees the same picture.</p>",
                    analogy: "<p><strong>Life example:</strong> Explaining how to register courses to a friend — a simple drawn flow (login → select courses → pay) is clearer than a long speech.</p>",
                    commonMistake: "<p>Do not pack one box with a whole paragraph. Fewer words per box = better readability (you will see this again in design rules).</p>"
                }
            ],
            faq: [
                { keys: ["universal language", "communicate"], answer: "Flowcharts let you communicate processes visually to different stakeholders (technical or non-technical)." },
                { keys: ["bite sized", "big ideas"], answer: "Good flowcharts split complex processes into small visual steps." }
            ],
            microCheck: {
                conceptId: "visual_language",
                question: "True or false: Flowcharts are only useful for programmers.",
                acceptable: ["false", "f", "no"],
                hint: "Think about business and manufacturing uses."
            },
            gateQuiz: [
                { id: "s2_q1", conceptId: "visual_language", skill: "application", format: "mcq", question: "Why are flowcharts valuable in business diagrams?", options: ["They replace all written documentation", "Visuals are typically easier to understand than words alone", "They remove the need for decisions", "They must use five colours"], correct: 1, explanation: "Visual communication helps diverse audiences grasp processes quickly." },
                { id: "s2_q2", conceptId: "visual_language", skill: "definition", format: "yesno", question: "Can flowcharts be used in manufacturing?", correct: true, explanation: "Yes — the unit lists manufacturing as a key application area." },
                { id: "s2_q3", conceptId: "visual_language", skill: "application", format: "theory", question: "In one sentence: what does a well-made flowchart do to a big idea?", modelAnswer: "It breaks a big idea into small bite-sized visual pieces/steps.", keywords: ["break", "small", "visual", "steps", "pieces"], explanation: "Core idea: decompose complexity into visual steps." }
            ]
        },

        // ─── Section 3: Basic symbols ───
        {
            id: "s3_basic_symbols",
            title: "3. Basic flowchart symbols",
            introDiagram: "basic_symbols_legend",
            concepts: ["terminator", "process", "decision", "io", "arrow"],
            teach: [
                {
                    conceptId: "terminator",
                    title: "Start / End (Terminator)",
                    default: "<p><strong>Shape:</strong> Rounded terminal (oval/stadium). <strong>Role:</strong> Where flow <strong>starts</strong> and <strong>ends</strong>. Every flowchart needs clear start and end.</p><p><em>See the symbol chart above — blue rounded shape.</em></p>",
                    simpler: "<p>Start = Begin. End = Stop. One entry, one exit point for the whole chart.</p>",
                    analogy: "<p>Like \"Open WhatsApp\" (start) and \"Close app\" (end) on a phone routine chart.</p>",
                    commonMistake: "<p>Forgetting terminators — examiners expect clear START and END.</p>"
                },
                {
                    conceptId: "process",
                    title: "Process (Action)",
                    default: "<p><strong>Shape:</strong> Rectangle. <strong>Role:</strong> A <strong>process</strong>, <strong>action</strong>, or <strong>single step</strong> (e.g. Calculate sum, Print result).</p>",
                    simpler: "<p>Rectangle = \"do something\" — one action per box when possible.</p>",
                    analogy: "<p>\"Add two numbers\" or \"Assign bonus\" — action boxes.</p>",
                    commonMistake: "<p>Putting a yes/no question inside a rectangle — decisions use the <strong>diamond</strong>, not the rectangle.</p>"
                },
                {
                    conceptId: "decision",
                    title: "Decision",
                    diagramId: "light_bulb_flow",
                    default: "<p><strong>Shape:</strong> Diamond. <strong>Role:</strong> Branching — usually <strong>yes/no</strong> or <strong>true/false</strong>. Answer splits path into <strong>two branches</strong>.</p>",
                    simpler: "<p>Diamond = question. Two roads out: Yes and No (label each arrow).</p>",
                    analogy: "<p>\"Is salary ≥ N6,000?\" → Yes: 6% bonus path; No: fixed N250 path (ABC bonus problem).</p>",
                    commonMistake: "<p>Leaving decision branches unlabeled — always mark Yes/No or True/False on arrows.</p>"
                },
                {
                    conceptId: "io",
                    title: "Input / Output",
                    diagramId: "symbols_in_action",
                    default: "<p><strong>Shape:</strong> Parallelogram. <strong>Role:</strong> <strong>Input</strong> or <strong>output</strong> of data (read values, print results).</p>",
                    simpler: "<p>Parallelogram = data going in or coming out.</p>",
                    analogy: "<p>Input: Read a, b, c for quadratic roots. Output: Print sum of 1 to 100.</p>",
                    commonMistake: "<p>Confusing process rectangle with parallelogram — if data is entering/leaving, use parallelogram.</p>"
                },
                {
                    conceptId: "arrow",
                    title: "Arrow (flow line)",
                    default: "<p><strong>Role:</strong> Shows <strong>order of flow</strong> / control between symbols. Direction matters (usually top-to-bottom or left-to-right).</p>",
                    simpler: "<p>Arrows tell you what happens next.</p>",
                    analogy: "",
                    commonMistake: "<p>Arrow pointing backward with no loop logic — can confuse readers unless it is an intentional loop.</p>"
                }
            ],
            faq: [
                { keys: ["terminator", "start end", "oval"], answer: "Terminator (Start/End) — oval/rounded shape; marks where flow begins and ends." },
                { keys: ["rectangle", "process", "action"], answer: "Rectangle = Process/Action — one step or operation." },
                { keys: ["diamond", "decision"], answer: "Diamond = Decision — yes/no or true/false; splits into two branches." },
                { keys: ["parallelogram", "input output"], answer: "Parallelogram = Input/Output (data symbol)." },
                { keys: ["five symbols", "common symbols"], answer: "Start/End, Process, Decision, Input/Output, Arrow — know all five for exams." }
            ],
            microCheck: {
                conceptId: "decision",
                question: "Which shape is used for a yes/no question?",
                acceptable: ["diamond", "decision"],
                hint: "Four-sided shape, not rectangle."
            },
            gateQuiz: [
                { id: "s3_q1", conceptId: "terminator", skill: "definition", format: "mcq", question: "The Terminator symbol indicates:", options: ["A calculation step", "Start and end of flow", "Data input only", "A document"], correct: 1, explanation: "Terminator marks where the flow starts and ends." },
                { id: "s3_q2", conceptId: "process", skill: "definition", format: "fill", question: "A single action or operation is shown with a ___ (shape name or symbol type).", acceptable: ["rectangle", "process", "action"], explanation: "Process/Action uses a rectangle." },
                { id: "s3_q3", conceptId: "decision", skill: "application", format: "mcq", question: "A diamond symbol typically has how many main outgoing paths for yes/no?", options: ["One", "Two", "Three", "None"], correct: 1, explanation: "Yes/no decisions split into two branches." },
                { id: "s3_q4", conceptId: "io", skill: "definition", format: "tf", question: "Input/Output is represented by a parallelogram.", correct: true, explanation: "True — parallelogram is the data (I/O) symbol." },
                { id: "s3_q5", conceptId: "decision", skill: "trap", format: "mcq", question: "Where should you put \"Print the sum\"?", options: ["Diamond", "Parallelogram or Process (output action)", "Terminator only", "Document symbol only"], correct: 1, explanation: "Printing is an output/action — parallelogram (I/O) or process box depending on convention; not a diamond." }
            ]
        },

        // ─── Section 4: Intermediate symbols ───
        {
            id: "s4_advanced_symbols",
            title: "4. Intermediate & advanced symbols",
            concepts: ["document", "data_storage", "connectors"],
            teach: [
                {
                    conceptId: "document",
                    title: "Document symbols",
                    diagramId: "document_data_row",
                    default: "<p>Show <strong>documents</strong> in the process — e.g. \"create an invoice\", \"review testing paperwork\". Single or multiple document icons indicate extra reference points.</p>",
                    simpler: "<p>When paperwork or a report is created or reviewed, use document symbols.</p>",
                    analogy: "<p>After TMA submission → \"file stored in portal\" could be a document step in an admin flowchart.</p>",
                    commonMistake: "<p>Using document symbol for every rectangle — only when a document is actually involved.</p>"
                },
                {
                    conceptId: "data_storage",
                    title: "Data symbols",
                    default: "<p>Clarify <strong>where data is stored</strong> that the flowchart references (database, file, etc.).</p>",
                    simpler: "<p>Data symbol answers: where does this information live?</p>",
                    analogy: "",
                    commonMistake: ""
                },
                {
                    conceptId: "connectors",
                    title: "Merging & connecting (multi-page)",
                    default: "<p><strong>Connector symbols</strong> link flowcharts that span <strong>multiple pages</strong> — agreed symbols make long processes easier to follow.</p>",
                    simpler: "<p>When one page is not enough, connectors continue flow on the next page.</p>",
                    analogy: "<p>Like \"continued on page 2\" in a booklet.</p>",
                    commonMistake: "<p>Breaking charts across pages without connectors — readers get lost.</p>"
                }
            ],
            faq: [
                { keys: ["document symbol", "invoice"], answer: "Document icons show steps involving creating or reviewing paperwork (invoice, testing docs, etc.)." },
                { keys: ["connector", "multiple pages", "multi page"], answer: "Merging/connector symbols connect flow across multiple pages." },
                { keys: ["intermediate", "advanced symbols"], answer: "Beyond basic five: documents, data storage, I/O variants, connectors, and other symbols in figures 2-3-1 to 2-3-5." }
            ],
            microCheck: {
                conceptId: "connectors",
                question: "Connectors are mainly used when a flowchart spans multiple ___.",
                acceptable: ["pages", "page"],
                hint: "Long processes do not fit on one sheet."
            },
            gateQuiz: [
                { id: "s4_q1", conceptId: "document", skill: "definition", format: "yesno", question: "Document symbols can indicate \"create an invoice\".", correct: true, explanation: "Yes — that is a typical document step example from the unit." },
                { id: "s4_q2", conceptId: "data_storage", skill: "definition", format: "mcq", question: "Data symbols in a flowchart mainly show:", options: ["Font choice", "Where data is stored", "Start/end only", "Swimlanes"], correct: 1, explanation: "They clarify storage location for referenced data." },
                { id: "s4_q3", conceptId: "connectors", skill: "application", format: "fill", question: "Merging and connector symbols help when flowcharts span multiple ___.", acceptable: ["pages", "page"], explanation: "Multi-page processes need connectors." }
            ]
        },

        // ─── Section 5: Common types (3.3) ───
        {
            id: "s5_types",
            title: "5. Common flowchart types",
            concepts: ["process_fc", "workflow", "swimlane", "data_fc"],
            teach: [
                {
                    conceptId: "process_fc",
                    title: "Process flowchart",
                    diagramId: "intro_simple_flow",
                    default: "<p><strong>Most versatile</strong> — applies to almost anything. Maps roles, manufacturing inputs, project scope, or even \"how you wake up\". May use <strong>BPMN</strong> notation in organisations.</p>",
                    simpler: "<p>General-purpose \"how something gets done\" chart.</p>",
                    analogy: "<p>Morning routine: Alarm → Brush teeth → Eat → Leave — process flowchart.</p>",
                    commonMistake: "<p>Thinking process flowchart is only for factories — it is the default type for many situations.</p>"
                },
                {
                    conceptId: "workflow",
                    title: "Workflow chart",
                    default: "<p>Shows how a <strong>business or process functions</strong> — e.g. customer renewing a policy on a website. Used to train staff, find problems, create SOPs, show high-level operations.</p>",
                    simpler: "<p>How work moves through a business process over time.</p>",
                    analogy: "<p>NOUN course registration workflow from login to confirmation.</p>",
                    commonMistake: "<p>Confusing workflow with data flow — workflow focuses on tasks/roles; data flowchart on how data is processed.</p>"
                },
                {
                    conceptId: "swimlane",
                    title: "Swimlane flowchart",
                    diagramId: "swimlane_tma",
                    default: "<p>Shows <strong>multiple flows side by side</strong> in <strong>lanes</strong> (departments, teams, roles). Great when collaboration crosses groups. <strong>Keep lanes simple</strong> — too many lanes defeats the purpose.</p>",
                    simpler: "<p>Each lane = who does what; shows when teams interact.</p>",
                    analogy: "<p>Lane 1: Student submits TMA. Lane 2: Tutor marks. Lane 3: System records grade.</p>",
                    commonMistake: "<p>Adding five or six swimlanes when two or three would be clearer.</p>"
                },
                {
                    conceptId: "data_fc",
                    title: "Data flowchart / DFD",
                    diagramId: "data_flow_simple",
                    default: "<p>Shows <strong>how data is processed</strong> — common in system/software design but applies to any information flow (e.g. sales funnel, consumer behaviour).</p>",
                    simpler: "<p>Tracks data movement and transformation, not just tasks.</p>",
                    analogy: "<p>Sales funnel: visitor → lead → customer — data about behaviour moving through stages.</p>",
                    commonMistake: "<p>Using swimlane when you only need to show data paths — pick the right type.</p>"
                }
            ],
            faq: [
                { keys: ["four types", "common types", "versatile"], answer: "Four popular types: Process, Workflow, Swimlane, Data flowchart — process is most versatile." },
                { keys: ["swimlane", "lanes"], answer: "Swimlane = parallel lanes for departments/roles; shows collaboration; avoid too many lanes." },
                { keys: ["bpmn"], answer: "BPMN (Business Process Modelling Notation) is sometimes used with process flow diagrams." },
                { keys: ["software flowchart"], answer: "In software: show navigation, code structure, data flow, or algorithms." }
            ],
            microCheck: {
                conceptId: "swimlane",
                question: "Swimlane diagrams use categories called lanes (true/false)?",
                acceptable: ["true", "t", "yes"],
                hint: "Think \"swim\" lanes in a pool — separate tracks."
            },
            gateQuiz: [
                { id: "s5_q1", conceptId: "process_fc", skill: "definition", format: "mcq", question: "Which flowchart type is described as most versatile?", options: ["Swimlane only", "Process flowchart", "Document symbol", "Terminator"], correct: 1, explanation: "Process flowchart applies to virtually anything." },
                { id: "s5_q2", conceptId: "workflow", skill: "application", format: "tf", question: "Workflow charts can be used to train new employees.", correct: true, explanation: "True — listed as a workflow chart use." },
                { id: "s5_q3", conceptId: "swimlane", skill: "definition", format: "mcq", question: "Swimlane flowcharts are best when:", options: ["You need no collaboration", "Multiple teams/departments interact", "You only have one step", "You must avoid all text"], correct: 1, explanation: "Lanes show different actors and when they interact." },
                { id: "s5_q4", conceptId: "data_fc", skill: "definition", format: "fill", question: "A data flowchart shows how ___ is processed.", acceptable: ["data", "information"], explanation: "Focus is on data/information flow." },
                { id: "s5_q5", conceptId: "swimlane", skill: "trap", format: "yesno", question: "More swimlanes always make a chart clearer.", correct: false, explanation: "No — too many lanes complicate the chart; keep it simple." }
            ]
        },

        // ─── Section 6: Uses & design rules ───
        {
            id: "s6_design",
            title: "6. Areas of use & design considerations",
            concepts: ["areas_use", "design_rules"],
            teach: [
                {
                    conceptId: "areas_use",
                    title: "Where flowcharts are used (3.4)",
                    default: "<p><strong>Sales & marketing:</strong> sales process, opportunities, pricing, policies.</p><p><strong>Manufacturing:</strong> ingredients/inputs, process dependencies, bottlenecks, quality checks.</p><p><strong>Business operations:</strong> onboarding, order fulfilment, project milestones.</p>",
                    simpler: "<p>Sell → Make → Run the business — flowcharts fit all three areas.</p>",
                    analogy: "<p>Manufacturing garri: inputs → process steps → quality check before packaging.</p>",
                    commonMistake: "<p>Listing only IT uses — exam questions often mention sales, manufacturing, and operations explicitly.</p>"
                },
                {
                    conceptId: "design_rules",
                    title: "Design considerations (3.5)",
                    diagramId: "flow_direction",
                    default: "<p><strong>Style:</strong> Flow top-to-bottom or left-to-right; keep on one page when possible; consistent sizing/spacing; include a <strong>chart key</strong>; use <strong>no more than three colours</strong>.</p><p><strong>Text:</strong> One font; <strong>fewer words</strong> per box — use detailed docs as backup.</p><p><strong>Audience:</strong> Match technical level to who will read it; keep straightforward when possible.</p>",
                    simpler: "<p>Easy to follow beats fancy. Key + few colours + short labels.</p>",
                    analogy: "<p>Like a clean WhatsApp status — short text, clear order, not rainbow chaos.</p>",
                    commonMistake: "<p>Using many colours and long sentences in boxes — harder to read and against unit guidance.</p>"
                }
            ],
            faq: [
                { keys: ["three colours", "colours", "colors"], answer: "Use no more than three colours — fewer colours make flow easier to follow." },
                { keys: ["direction", "left to right", "top to bottom"], answer: "Charts should generally flow left-to-right or top-to-bottom." },
                { keys: ["chart key", "legend"], answer: "Include a chart key so readers understand your symbols." },
                { keys: ["manufacturing", "bottleneck"], answer: "In manufacturing, flowcharts show inputs, dependencies, bottlenecks, and quality processes." }
            ],
            microCheck: {
                conceptId: "design_rules",
                question: "How many colours should you use at most (number)?",
                acceptable: ["3", "three"],
                hint: "Unit says no more than..."
            },
            gateQuiz: [
                { id: "s6_q1", conceptId: "design_rules", skill: "recall", format: "mcq", question: "Recommended maximum number of colours:", options: ["1", "3", "10", "Unlimited"], correct: 1, explanation: "No more than three colours." },
                { id: "s6_q2", conceptId: "design_rules", skill: "application", format: "tf", question: "Flowcharts should usually flow right-to-left only.", correct: false, explanation: "False — use left-to-right or top-to-bottom." },
                { id: "s6_q3", conceptId: "areas_use", skill: "definition", format: "mcq", question: "In manufacturing, flowcharts can help show:", options: ["Only font sizes", "Dependencies and bottlenecks", "Only swimlanes", "Nothing useful"], correct: 1, explanation: "They illustrate dependencies, bottlenecks, and standardisation." },
                { id: "s6_q4", conceptId: "design_rules", skill: "recall", format: "yesno", question: "You should include a chart key for standard symbols.", correct: true, explanation: "Yes — helps readers understand symbols used." }
            ]
        },

        // ─── Section 7: Algorithm vs flowchart & advantages ───
        {
            id: "s7_compare",
            title: "7. Algorithm vs flowchart & advantages",
            concepts: ["algo_vs_fc", "advantages"],
            teach: [
                {
                    conceptId: "algo_vs_fc",
                    title: "Differences (3.7)",
                    diagramId: "algo_vs_flowchart_visual",
                    default: "<table><tr><th>Algorithm</th><th>Flowchart</th></tr><tr><td>Step-by-step logical procedure (often English steps)</td><td>Diagrammatic representation using boxes and arrows</td></tr><tr><td>Good for small problems</td><td>Good for detailed/complex programs</td></tr><tr><td>Can be inadequate for very complex programs alone</td><td>More adequate for complex programs visually</td></tr></table>",
                    simpler: "<p><strong>Algorithm</strong> = words/steps. <strong>Flowchart</strong> = picture of those steps.</p>",
                    analogy: "<p>Recipe written in text (algorithm) vs picture chart on the kitchen wall (flowchart).</p>",
                    commonMistake: "<p>Saying they are the same thing — a flowchart <strong>represents</strong> an algorithm; it is not identical to it.</p>"
                },
                {
                    conceptId: "advantages",
                    title: "Advantages of flowcharts (3.8)",
                    diagramId: "bonus_salary_flow",
                    default: "<ul><li>Logic shown <strong>pictorially</strong> — easier to check</li><li><strong>Communication</strong> to other users</li><li><strong>Compact</strong> record of solution</li><li>Break problem into <strong>parts</strong> that can connect to a master chart</li><li><strong>Permanent record</strong> for later consultation</li></ul><p><em>Diagram below: exam-style decision flow (ABC bonus).</em></p>",
                    simpler: "<p>See, share, save, split, and revisit — five big wins.</p>",
                    analogy: "<p>Before exam revision, one flowchart page beats rereading 10 pages of notes.</p>",
                    commonMistake: "<p>Only memorising \"communication\" — list at least three advantages in exams.</p>"
                }
            ],
            faq: [
                { keys: ["difference algorithm", "algorithm vs flowchart", "algo vs"], answer: "Algorithm = step-by-step procedure in words; Flowchart = visual diagram with symbols and arrows. Flowcharts better for complex detail; algorithms fine for small problems." },
                { keys: ["advantages", "benefits of flowchart"], answer: "Pictorial logic, communication, compact record, break into parts/master chart, permanent record." },
                { keys: ["conclusion", "draw flowchart steps"], answer: "Identify tasks/decisions → write in order → use correct symbols → check/challenge for accuracy and efficiency." }
            ],
            microCheck: {
                conceptId: "algo_vs_fc",
                question: "An algorithm is usually written in step-by-step ___ (language type).",
                acceptable: ["english", "words", "text", "descriptions"],
                hint: "Not boxes and arrows."
            },
            gateQuiz: [
                { id: "s7_q1", conceptId: "algo_vs_fc", skill: "compare", format: "mcq", question: "A flowchart is best described as:", options: ["Only English sentences", "Diagrammatic representation of an algorithm", "A programming language", "A database"], correct: 1, explanation: "Flowchart = visual/diagrammatic form of an algorithm." },
                { id: "s7_q2", conceptId: "advantages", skill: "recall", format: "tf", question: "Flowcharts provide a permanent record of a solution.", correct: true, explanation: "True — listed as an advantage." },
                { id: "s7_q3", conceptId: "advantages", skill: "recall", format: "theory", question: "List any three advantages of flowcharts.", modelAnswer: "Pictorial logic, communication, compact record, break into parts, permanent record.", keywords: ["pictorial", "communication", "compact", "parts", "permanent", "record", "check"], explanation: "Give any three from the unit list." },
                { id: "s7_q4", conceptId: "algo_vs_fc", skill: "compare", format: "yesno", question: "For very complex programs, flowcharts alone are always worse than algorithms.", correct: false, explanation: "False — the unit says flowcharts prove more adequate for complex programs; algorithms can be inadequate alone." },
                { id: "s7_q5", conceptId: "advantages", skill: "application", format: "fill", question: "Flowcharts allow the problem solver to break the problem into ___ that can connect to a master chart.", acceptable: ["parts", "part", "pieces", "sections"], explanation: "Modular parts linked in a master chart." }
            ]
        }
    ]
};

// Register in global lessons map (loaded by lesson-engine.js)
if (typeof window !== "undefined") {
    window.StudyVaultLessons = window.StudyVaultLessons || {};
    window.StudyVaultLessons["CIT108_m2_u3"] = lesson_CIT108_m2_u3;
}
