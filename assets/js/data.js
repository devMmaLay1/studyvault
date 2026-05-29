// ══════════════════════════════════════
// StudyVault — data.js
// All academic content lives here.
// Structure: levels → semesters → courses → modules → units
// ══════════════════════════════════════

const academicData = {
    levels: [
        // ═══════════════════════════════════
        // 100 LEVEL
        // ═══════════════════════════════════
        {
            id: "100L",
            label: "100 Level",
            semesters: [
                {
                    id: "100L_sem1",
                    label: "1st Semester",
                    courses: []
                },
                {
                    id: "100L_sem2",
                    label: "2nd Semester",
                    courses: [

                        // ─── CIT104: Introduction to Computers ───
                        {
                            id: "CIT104",
                            code: "CIT104",
                            title: "Introduction to Computers",
                            modules: [
                                {
                                    id: "CIT104_m1",
                                    title: "Understanding the Computer",
                                    units: [
                                        { id: "CIT104_m1_u1", title: "Basic Concepts", summary: `<h3>CIT104 - Unit 1: Basic Concepts</h3>
<h4>1. What This Unit Is About</h4>
<p>This unit introduces the basic ideas needed to understand computers. It explains what a computer is, what data and information mean, the methods of data processing, the characteristics of a computer, and the parts of the computing system.</p>

<h4>2. Definition of a Computer</h4>
<p>A computer is a tool or machine used for processing data to give required information.</p>
<p>A computer can take input data through the keyboard, store the data, process it in the Central Processing Unit (CPU), and give out the result on the screen or Visual Display Unit (VDU).</p>

<h4>3. Data and Information</h4>
<table>
  <thead><tr><th>Term</th><th>Simple Meaning</th><th>Examples From the Unit</th></tr></thead>
  <tbody>
    <tr><td><strong>Data</strong></td><td>Facts about a person, object, or place.</td><td>Name, age, complexion, school, class, height.</td></tr>
    <tr><td><strong>Information</strong></td><td>Processed data or a meaningful statement.</td><td>Net pay of workers, examination results, list of successful candidates.</td></tr>
  </tbody>
</table>

<h4>4. Main Data Processing Flow</h4>
<p><strong>Input</strong> means data enters the computer. <strong>Processing</strong> means the computer works on the data. <strong>Output</strong> means the computer gives the result as information.</p>

<h4>5. Methods of Data Processing</h4>
<table>
  <thead><tr><th>Method</th><th>Tools or Machines</th><th>Main Idea</th></tr></thead>
  <tbody>
    <tr><td><strong>Manual method</strong></td><td>Chalk, wall, pen, pencil.</td><td>Uses much human effort and can be slow, tiring, and affected by human errors.</td></tr>
    <tr><td><strong>Mechanical method</strong></td><td>Typewriter, roneo machines, adding machines.</td><td>Uses machines but can be routine, noisy, hazardous, error prone, and untidy.</td></tr>
    <tr><td><strong>Computer method</strong></td><td>Computer.</td><td>Processes data steadily and continuously, stores data and instructions, corrects errors neatly, and produces neat output reports.</td></tr>
  </tbody>
</table>

<h4>6. Characteristics of a Computer</h4>
<ul>
  <li><strong>Speed:</strong> The computer can manipulate large data at incredible speed.</li>
  <li><strong>Accuracy:</strong> Its accuracy is very high and consistent.</li>
  <li><strong>Storage:</strong> It has internal and external storage facilities for data and instructions.</li>
  <li><strong>Automatic:</strong> Once a program is in memory, it can run automatically when opened.</li>
  <li><strong>Reliability:</strong> It does not suffer tiredness or lack of concentration.</li>
  <li><strong>Flexibility:</strong> It can perform tasks once they can be reduced to logical steps.</li>
</ul>

<h4>7. The Computing System</h4>
<p>The computing system is made up of the computer system, the user, and the environment in which the computer is operated.</p>
<ul>
  <li><strong>Computer system:</strong> Made up of hardware and software.</li>
  <li><strong>Hardware:</strong> Made up of input unit, processing unit, and output unit.</li>
  <li><strong>Software:</strong> Series of instructions that enable the computer to perform tasks.</li>
  <li><strong>Computer users:</strong> The people who operate the computer.</li>
  <li><strong>Computing environment:</strong> The building and support items around the computer, such as furniture, voltage stabiliser, UPS, fans, and air conditioners.</li>
</ul>

<h4>8. Final Exam Memory</h4>
<p>A computer accepts data, processes it, and produces information. The computer method is better than manual and mechanical methods because it improves speed, neatness, accuracy, reliability, and storage.</p>` },
                                        {
                                            id: "CIT104_m1_u2",
                                            title: "Historical Overview of the Computer",
                                            summary: `<h3>UNIT 2 - A Historical Overview of the Computer (Solid Exam Summary)</h3>
<h4>1. Simple Meaning</h4>
<p>This unit explains how computers developed over time, from early calculating tools to modern powerful computers, through different generations of computer technology.</p>

<h4>2. Key Development Stages</h4>
<h5>Early Computing Devices</h5>
<p>These were manual or mechanical tools used for calculation.</p>
<ul>
  <li><strong>Abacus</strong> - earliest calculating device.</li>
  <li><strong>Jacquard Loom (1805)</strong> - used punched cards.</li>
  <li><strong>Charles Babbage Analytical Engine (1834)</strong> - first idea of a programmable computer.</li>
</ul>
<p><strong>Important:</strong> Charles Babbage is known as the Father of the Computer.</p>

<h4>3. Computer Generations (Most Important Part for Exam)</h4>

<h5>First Generation (1937-1953)</h5>
<p><strong>Technology:</strong> Vacuum Tubes</p>
<ul>
  <li>Very large and expensive.</li>
  <li>Generated a lot of heat.</li>
  <li>Programming in machine language.</li>
  <li>Used vacuum tubes.</li>
</ul>
<p><strong>Important computers:</strong> Atanasoff-Berry Computer, Colossus, ENIAC, EDVAC, UNIVAC.</p>
<p><strong>Key exam fact:</strong> ENIAC is the first general-purpose electronic computer.</p>

<h5>Second Generation (1954-1962)</h5>
<p><strong>Technology:</strong> Transistors</p>
<ul>
  <li>Smaller computers.</li>
  <li>Faster and more reliable.</li>
  <li>Less heat generation.</li>
  <li>Magnetic core memory and high-level languages introduced.</li>
</ul>
<p><strong>Languages:</strong> FORTRAN, ALGOL, COBOL.</p>
<p><strong>Examples:</strong> IBM 704, IBM 7094.</p>

<h5>Third Generation (1963-1972)</h5>
<p><strong>Technology:</strong> Integrated Circuits (IC)</p>
<ul>
  <li>Smaller and faster computers.</li>
  <li>Better reliability.</li>
  <li>Operating systems, time sharing, parallel processing, and pipelining emerged.</li>
</ul>
<p><strong>Examples:</strong> IBM 360, CDC 6600.</p>

<h5>Fourth Generation (1972-1984)</h5>
<p><strong>Technology:</strong> LSI and VLSI</p>
<ul>
  <li>Microprocessors developed.</li>
  <li>Personal computers (PCs) became common.</li>
  <li>Semiconductor memory replaced core memory.</li>
</ul>
<p><strong>Important technologies:</strong> C programming language, UNIX operating system.</p>
<p><strong>Examples:</strong> CRAY supercomputers, personal computers.</p>

<h5>Fifth Generation (1984-1990)</h5>
<p><strong>Main idea:</strong> Parallel Processing</p>
<ul>
  <li>Multiple processors working together.</li>
  <li>Development of LAN and WAN networks.</li>
  <li>Distributed computing systems.</li>
</ul>
<p><strong>Architecture types:</strong> shared memory systems, distributed memory systems, SIMD processors.</p>

<h5>Sixth Generation (1990 - Present)</h5>
<p><strong>Main idea:</strong> Massive parallel computing and advanced networking.</p>
<ul>
  <li>Very powerful processors.</li>
  <li>Parallel supercomputers and advanced workstations.</li>
  <li>Rapid growth of computer networks.</li>
  <li>Goal: teraflop computing power.</li>
</ul>

<h4>4. Quick Comparison of Generations (Super Important)</h4>
<table>
  <thead>
    <tr>
      <th>Generation</th>
      <th>Main Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1st</td><td>Vacuum Tubes</td></tr>
    <tr><td>2nd</td><td>Transistors</td></tr>
    <tr><td>3rd</td><td>Integrated Circuits</td></tr>
    <tr><td>4th</td><td>Microprocessors (LSI/VLSI)</td></tr>
    <tr><td>5th</td><td>Parallel Processing</td></tr>
    <tr><td>6th</td><td>Massive Parallel Systems and Advanced Networks</td></tr>
  </tbody>
</table>`
                                        },
                                        { id: "CIT104_m1_u3", title: "Classification of Computers", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT104_m2",
                                    title: "Computer Hardware",
                                    units: [
                                        { id: "CIT104_m2_u1", title: "Hardware Components (1)", summary: "" },
                                        { id: "CIT104_m2_u2", title: "Hardware Components (2)- Peripheral Devices", summary: "" },
                                        { id: "CIT104_m2_u3", title: "Auxiliary Equipment", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT104_m3",
                                    title: "Computer Software",
                                    units: [
                                        { id: "CIT104_m3_u1", title: "Computer Software (1)", summary: "" },
                                        { id: "CIT104_m3_u2", title: "Computer Software (2)", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT104_m4",
                                    title: "Programming the Computer",
                                    units: [
                                        { id: "CIT104_m4_u1", title: "Computer Languages", summary: "" },
                                        { id: "CIT104_m4_u2", title: "Basic Principles of Computer Programming", summary: "" },
                                        { id: "CIT104_m4_u3", title: "Flowcharts and Algorithms", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT104_m5",
                                    title: "Computer Application Programming",
                                    units: [
                                        { id: "CIT104_m5_u1", title: "Programming in Visual Basic (1)", summary: "" },
                                        { id: "CIT104_m5_u2", title: "Visual Basic Project Window", summary: "" },
                                        { id: "CIT104_m5_u3", title: "Creating Menu Applications", summary: "" },
                                        { id: "CIT104_m5_u4", title: "Analysing Visual Basic Data", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT104_m6",
                                    title: "Areas of Application of Computers",
                                    units: [
                                        { id: "CIT104_m6_u1", title: "Application of Computers in Education", summary: "" },
                                        { id: "CIT104_m6_u2", title: "Application of Computers in Business and Industry", summary: "" },
                                        { id: "CIT104_m6_u3", title: "Application of Computers in Government, Military, etc", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT104_m7",
                                    title: "Threats to the Computer",
                                    units: [
                                        { id: "CIT104_m7_u1", title: "Computer Virus", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── CIT108: Problem Solving Strategies ───
                        {
                            id: "CIT108",
                            code: "CIT108",
                            tmaScore: { score: 26, total: 30 },
                            title: "Problem Solving Strategies",
                            modules: [
                                {
                                    id: "CIT108_m1",
                                    title: "Problem Solving Strategies",
                                    units: [
                                        { id: "CIT108_m1_u1", title: "Roadmap to Solving Problems: Typical Strategies", summary: `<h3>CIT108 — Unit 1: Roadmap to Solving Problems: Typical Strategies</h3>

<h4>Core Idea</h4>
<p>Problem-solving strategies are structured plans used to find solutions to challenges. Different problems require different strategies, and mastering several of them makes you a more effective and efficient problem solver.</p>

<h4>Key Definitions</h4>
<table>
  <thead><tr><th>Term</th><th>Simple Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Problem-solving strategy</strong></td><td>A plan used to find a solution or overcome a challenge. Each strategy has its own action steps.</td></tr>
    <tr><td><strong>Algorithm</strong></td><td>A step-by-step formula that produces the same correct result every time it is followed exactly — like a recipe.</td></tr>
    <tr><td><strong>Heuristic</strong></td><td>A mental shortcut or "rule of thumb" used to make quick decisions. Saves time but may not always give the best result.</td></tr>
    <tr><td><strong>Means-Ends Analysis</strong></td><td>Breaking a big goal into smaller sub-goals and solving each step to move closer to the final solution.</td></tr>
    <tr><td><strong>Trial and Error</strong></td><td>Trying different solutions one by one and eliminating those that don't work until one does.</td></tr>
    <tr><td><strong>Functional Fixedness</strong></td><td>A mental block where you can only see a problem in one way, preventing creative solutions.</td></tr>
    <tr><td><strong>Mental Set</strong></td><td>The tendency to only use solutions that worked in the past, even when better alternatives exist.</td></tr>
    <tr><td><strong>Well-defined problem</strong></td><td>A problem with clear goals, a defined solution path and an expected answer.</td></tr>
    <tr><td><strong>Ill-defined problem</strong></td><td>A problem with unclear goals, no obvious solution path and no single correct answer.</td></tr>
  </tbody>
</table>

<h4>Problem-Solving Strategies Overview</h4>

<!-- STRATEGY MAP DIAGRAM -->
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:12px;padding:20px;margin:16px 0;">
  <div style="text-align:center;font-family:var(--font-display);font-weight:700;font-size:15px;color:var(--text);margin-bottom:16px;">Problem-Solving Strategies</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;">
    <div style="background:rgba(45,91,227,0.08);border:1.5px solid rgba(45,91,227,0.3);border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:700;color:var(--accent);font-size:13px;margin-bottom:4px;">Trial & Error</div>
      <p style="font-size:11px;color:var(--text-muted);margin:0;">Try options, eliminate what fails</p>
    </div>
    <div style="background:rgba(22,163,74,0.08);border:1.5px solid rgba(22,163,74,0.3);border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:4px;">Algorithm</div>
      <p style="font-size:11px;color:var(--text-muted);margin:0;">Exact steps → same result every time</p>
    </div>
    <div style="background:rgba(217,119,6,0.08);border:1.5px solid rgba(217,119,6,0.3);border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:700;color:#d97706;font-size:13px;margin-bottom:4px;">Heuristic</div>
      <p style="font-size:11px;color:var(--text-muted);margin:0;">Mental shortcut / rule of thumb</p>
    </div>
    <div style="background:rgba(147,51,234,0.08);border:1.5px solid rgba(147,51,234,0.3);border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:700;color:#9333ea;font-size:13px;margin-bottom:4px;">Means-Ends Analysis</div>
      <p style="font-size:11px;color:var(--text-muted);margin:0;">Break goal into smaller sub-goals</p>
    </div>
    <div style="background:rgba(220,38,38,0.08);border:1.5px solid rgba(220,38,38,0.3);border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:700;color:#dc2626;font-size:13px;margin-bottom:4px;">Past Experience</div>
      <p style="font-size:11px;color:var(--text-muted);margin:0;">Adapt solutions from similar past problems</p>
    </div>
    <div style="background:rgba(6,182,212,0.08);border:1.5px solid rgba(6,182,212,0.3);border-radius:8px;padding:12px;text-align:center;">
      <div style="font-weight:700;color:#0891b2;font-size:13px;margin-bottom:4px;">Decision Matrix</div>
      <p style="font-size:11px;color:var(--text-muted);margin:0;">Rank solutions by weighted factors</p>
    </div>
  </div>
</div>

<h4>Algorithm vs Heuristic — Side by Side</h4>
<table>
  <thead><tr><th>Feature</th><th>Algorithm</th><th>Heuristic</th></tr></thead>
  <tbody>
    <tr><td><strong>Definition</strong></td><td>Exact step-by-step formula</td><td>General mental shortcut / rule of thumb</td></tr>
    <tr><td><strong>Result</strong></td><td>Always produces the correct result</td><td>May not always give the best result</td></tr>
    <tr><td><strong>Speed</strong></td><td>Can be slow for complex problems</td><td>Fast — saves time and energy</td></tr>
    <tr><td><strong>Example</strong></td><td>Google search ranking formula</td><td>"If it's raining, carry an umbrella"</td></tr>
    <tr><td><strong>Reliability</strong></td><td>Highly reliable</td><td>Less reliable — approximate</td></tr>
  </tbody>
</table>

<h4>5 Conditions That Trigger Heuristic Use</h4>
<ul>
  <li>Too much information to process</li>
  <li>Limited time to make a decision</li>
  <li>The decision is unimportant</li>
  <li>Very little information is available</li>
  <li>An appropriate heuristic comes to mind immediately</li>
</ul>

<h4>Means-Ends Analysis — Tower of Hanoi</h4>
<p>The Tower of Hanoi is the classic example of means-ends analysis. The goal is to move all disks from one rod to another following 3 rules:</p>
<ul>
  <li>Only one disk can be moved at a time</li>
  <li>A larger disk cannot be placed on top of a smaller disk</li>
  <li>Each move takes the top disk from one stack to another</li>
</ul>

<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:16px;margin:12px 0;text-align:center;">
  <div style="font-family:var(--font-mono);font-size:14px;font-weight:700;color:var(--accent);margin-bottom:8px;">Minimum Moves Formula</div>
  <div style="font-size:22px;font-weight:800;font-family:var(--font-display);color:var(--text);">2ⁿ − 1</div>
  <div style="font-size:13px;color:var(--text-muted);margin-top:6px;">where n = number of disks</div>
  <div style="font-size:13px;color:var(--text-secondary);margin-top:8px;">Example: 14 disks → 2¹⁴ − 1 = <strong>16,383 moves</strong></div>
</div>

<h4>Tower of Hanoi Solution Approaches</h4>
<table>
  <thead><tr><th>Approach</th><th>Simple Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Iterative</strong></td><td>Move smallest piece over one, then next piece — alternate in a pattern</td></tr>
    <tr><td><strong>Recursive</strong></td><td>Break into sub-problems, solve each the same way, combine solutions</td></tr>
    <tr><td><strong>Non-recursive</strong></td><td>Use mathematical regularities in move patterns</td></tr>
    <tr><td><strong>Binary/Gray-code</strong></td><td>Represent disk moves in binary notation</td></tr>
    <tr><td><strong>Graphical</strong></td><td>Visual pyramid graph where nodes = disk positions, edges = moves</td></tr>
  </tbody>
</table>

<h4>Decision Matrix — Factors for Ranking Solutions</h4>
<p>Assign a weighted score of <strong>0–10</strong> to each solution for each factor. The solution with the highest total wins.</p>
<ul>
  <li>Timeliness &nbsp;·&nbsp; Risk &nbsp;·&nbsp; Manageability &nbsp;·&nbsp; Expense &nbsp;·&nbsp; Practicality &nbsp;·&nbsp; Effectiveness</li>
</ul>

<h4>Roadblocks to Effective Problem Solving</h4>
<table>
  <thead><tr><th>Roadblock</th><th>What It Means</th></tr></thead>
  <tbody>
    <tr><td><strong>Functional Fixedness</strong></td><td>Seeing a problem only in its usual way — blocks creative solutions</td></tr>
    <tr><td><strong>Mental Set</strong></td><td>Only using solutions that worked before — leads to inflexibility</td></tr>
    <tr><td><strong>Irrelevant Information</strong></td><td>Focusing on misleading details that distract from the real solution</td></tr>
    <tr><td><strong>Assumptions</strong></td><td>Making incorrect assumptions about constraints that limit your options</td></tr>
  </tbody>
</table>

<p class="callout callout-danger">⚠️ <strong>Common Exam Traps:</strong><br>
• Algorithm = always correct result &nbsp;|&nbsp; Heuristic = quick but not always best<br>
• Trial and error is NOT the most time-efficient strategy<br>
• Tower of Hanoi formula is <strong>2ⁿ − 1</strong> (not 2ⁿ or n²)<br>
• Functional fixedness ≠ Mental set — fixedness is about HOW you see the problem; mental set is about WHICH solutions you try<br>
• Well-defined = clear goals &nbsp;|&nbsp; Ill-defined = unclear goals</p>

<p class="callout callout-info">💡 <strong>Memory Aid — TAHMP</strong> (main strategies):<br>
<strong>T</strong>rial and Error &nbsp;·&nbsp; <strong>A</strong>lgorithm &nbsp;·&nbsp; <strong>H</strong>euristic &nbsp;·&nbsp; <strong>M</strong>eans-Ends Analysis &nbsp;·&nbsp; <strong>P</strong>ast Experience</p>` },
                                        { id: "CIT108_m1_u2", title: "The Problem Solving Process", summary: `<h3>CIT108 — Unit 2: The Problem Solving Process</h3>

<h4>Core Idea</h4>
<p>Solving problems with a computer follows a clear 7-step process — from understanding the problem all the way to evaluating the final solution. Every step matters.</p>

<h4>The Computer as a Model of Computation</h4>

<!-- INPUT → PROCESS → OUTPUT DIAGRAM -->
<div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin:20px 0;font-size:13px;">
  <div style="background:rgba(45,91,227,0.1);border:2px solid var(--accent);border-radius:10px;padding:14px 20px;text-align:center;min-width:100px;">
    <div style="font-size:20px;margin-bottom:4px;">⌨️</div>
    <div style="font-weight:700;color:var(--accent);">INPUT</div>
    <div style="font-size:11px;color:var(--text-muted);">Keyboard, mouse,<br>file, network</div>
  </div>
  <div style="font-size:24px;color:var(--text-muted);">→</div>
  <div style="background:rgba(22,163,74,0.1);border:2px solid #16a34a;border-radius:10px;padding:14px 20px;text-align:center;min-width:100px;">
    <div style="font-size:20px;margin-bottom:4px;">⚙️</div>
    <div style="font-weight:700;color:#16a34a;">PROCESS</div>
    <div style="font-size:11px;color:var(--text-muted);">CPU computes<br>the solution</div>
  </div>
  <div style="font-size:24px;color:var(--text-muted);">→</div>
  <div style="background:rgba(217,119,6,0.1);border:2px solid #d97706;border-radius:10px;padding:14px 20px;text-align:center;min-width:100px;">
    <div style="font-size:20px;margin-bottom:4px;">🖥️</div>
    <div style="font-weight:700;color:#d97706;">OUTPUT</div>
    <div style="font-size:11px;color:var(--text-muted);">Screen, printer,<br>file, sound</div>
  </div>
</div>
<p class="callout callout-info">💡 For complex problems, the Input → Process → Output cycle repeats multiple times, producing <strong>intermediate results</strong> along the way.</p>

<h4>The 7-Step Problem Solving Process</h4>

<!-- 7 STEPS DIAGRAM -->
<div style="display:flex;flex-direction:column;gap:0;margin:16px 0;">

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(45,91,227,0.06);border:1.5px solid rgba(45,91,227,0.2);border-radius:10px 10px 0 0;">
    <div style="background:var(--accent);color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</div>
    <div>
      <div style="font-weight:700;color:var(--accent);font-size:14px;">Understand the Problem</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">Know your inputs, outputs and what is missing. Ask: What data do I have? What format? What result do I need?</p>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(22,163,74,0.06);border:1.5px solid rgba(22,163,74,0.2);border-top:none;">
    <div style="background:#16a34a;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</div>
    <div>
      <div style="font-weight:700;color:#16a34a;font-size:14px;">Formulate a Model</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">Find or create a formula/model that transforms your input into the desired output. Example: Average = (x₁+x₂+...+xₙ)/n</p>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(217,119,6,0.06);border:1.5px solid rgba(217,119,6,0.2);border-top:none;">
    <div style="background:#d97706;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</div>
    <div>
      <div style="font-weight:700;color:#d97706;font-size:14px;">Develop an Algorithm</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">Write a precise step-by-step plan using pseudocode or a flowchart. Test it mentally with sample data before moving on.</p>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(147,51,234,0.06);border:1.5px solid rgba(147,51,234,0.2);border-top:none;">
    <div style="background:#9333ea;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</div>
    <div>
      <div style="font-weight:700;color:#9333ea;font-size:14px;">Write the Program</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">Translate the algorithm into actual code using a programming language. This is called "coding" or "implementing".</p>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(220,38,38,0.06);border:1.5px solid rgba(220,38,38,0.2);border-top:none;">
    <div style="background:#dc2626;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</div>
    <div>
      <div style="font-weight:700;color:#dc2626;font-size:14px;">Test the Program</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">Run the program with multiple test cases — including edge cases. Each test with fixed input data is called a <strong>test case</strong>.</p>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(6,182,212,0.06);border:1.5px solid rgba(6,182,212,0.2);border-top:none;">
    <div style="background:#0891b2;color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">6</div>
    <div>
      <div style="font-weight:700;color:#0891b2;font-size:14px;">Evaluate the Solution</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">Check if the solution actually solves the original problem correctly and efficiently. Does it handle all cases?</p>
    </div>
  </div>

  <div style="display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(45,91,227,0.06);border:1.5px solid rgba(45,91,227,0.2);border-top:none;border-radius:0 0 10px 10px;">
    <div style="background:var(--accent);color:white;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">7</div>
    <div>
      <div style="font-weight:700;color:var(--accent);font-size:14px;">Iterate if Needed</div>
      <p style="font-size:13px;color:var(--text-secondary);margin:4px 0 0;">If the solution is not satisfactory, go back to an earlier step and improve it. Problem solving is often a cycle, not a straight line.</p>
    </div>
  </div>

</div>

<h4>Step 1 — Understanding the Problem: Key Questions</h4>
<table>
  <thead><tr><th>Question to Ask</th><th>Why It Matters</th></tr></thead>
  <tbody>
    <tr><td>What input data is available?</td><td>You need to know what you're working with</td></tr>
    <tr><td>What format is the data in?</td><td>Numbers vs letters require different formulas</td></tr>
    <tr><td>What data is missing?</td><td>Missing data affects your calculation</td></tr>
    <tr><td>What output is needed?</td><td>Determines what your program must produce</td></tr>
    <tr><td>What format should the output be?</td><td>Number, letter grade, chart — all different</td></tr>
  </tbody>
</table>

<h4>Step 2 — Formulating a Model: Average Grade Example</h4>
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:16px;margin:12px 0;">
  <p style="font-size:13px;color:var(--text-secondary);margin:0 0 10px;"><strong>If input is numeric (0–100):</strong></p>
  <div style="font-family:var(--font-mono);font-size:15px;font-weight:700;color:var(--accent);text-align:center;padding:8px;">Average₁ = (x₁ + x₂ + ... + xₙ) / n</div>
  <p style="font-size:13px;color:var(--text-secondary);margin:10px 0 6px;"><strong>If input is letter grades (A+, B, C–, etc.):</strong></p>
  <p style="font-size:13px;color:var(--text-secondary);margin:0;">First convert letters to numbers (A+=12, A=11, B+=9 ... F=0), then:</p>
  <div style="font-family:var(--font-mono);font-size:15px;font-weight:700;color:#16a34a;text-align:center;padding:8px;">Average₂ = (y₁ + y₂ + ... + yₙ) / n &nbsp; (result: 0–12)</div>
</div>

<h4>Step 3 — Algorithm: Pseudocode vs Flowchart</h4>
<table>
  <thead><tr><th>Feature</th><th>Pseudocode</th><th>Flowchart</th></tr></thead>
  <tbody>
    <tr><td>Format</td><td>Written text (English-like)</td><td>Visual diagram with shapes</td></tr>
    <tr><td>Ease of writing</td><td>Fast and easy</td><td>Slow — hard to draw neatly</td></tr>
    <tr><td>Fits on a page</td><td>Yes — easily</td><td>Can get very large</td></tr>
    <tr><td>Close to real code</td><td>Yes — easy to convert</td><td>Less direct</td></tr>
    <tr><td>Preferred for</td><td>Algorithm development</td><td>Visual communication</td></tr>
  </tbody>
</table>

<h4>5 Pseudocode Control Structures</h4>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin:16px 0;">
  <div style="background:rgba(45,91,227,0.08);border:1.5px solid rgba(45,91,227,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:var(--accent);font-size:13px;margin-bottom:4px;">SEQUENCE</div>
    <p style="font-size:11px;color:var(--text-muted);margin:0;">Steps listed in order, one after another</p>
  </div>
  <div style="background:rgba(22,163,74,0.08);border:1.5px solid rgba(22,163,74,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#16a34a;font-size:13px;margin-bottom:4px;">CONDITION</div>
    <p style="font-size:11px;color:var(--text-muted);margin:0;">IF...THEN...ELSE — do one thing or another</p>
  </div>
  <div style="background:rgba(217,119,6,0.08);border:1.5px solid rgba(217,119,6,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#d97706;font-size:13px;margin-bottom:4px;">REPETITION</div>
    <p style="font-size:11px;color:var(--text-muted);margin:0;">REPEAT...UNTIL — loop until condition met</p>
  </div>
  <div style="background:rgba(147,51,234,0.08);border:1.5px solid rgba(147,51,234,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#9333ea;font-size:13px;margin-bottom:4px;">STORAGE</div>
    <p style="font-size:11px;color:var(--text-muted);margin:0;">x ← value — store data for later use</p>
  </div>
  <div style="background:rgba(220,38,38,0.08);border:1.5px solid rgba(220,38,38,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#dc2626;font-size:13px;margin-bottom:4px;">TRANSFER</div>
    <p style="font-size:11px;color:var(--text-muted);margin:0;">GOTO — jump to a specific step</p>
  </div>
</div>

<h4>Worked Example — Average Grade Algorithm</h4>
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:16px;font-family:var(--font-mono);font-size:13px;line-height:2;margin:12px 0;">
  <span style="color:var(--text-muted);">Algorithm: DisplayGrades</span><br>
  1. <span style="color:#2d5be3;">SET</span> sum = 0<br>
  2. <span style="color:#9333ea;">LOAD</span> all grades x₁, x₂, ..., xₙ from file<br>
  3. <span style="color:#16a34a;">REPEAT</span> n times {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;4. <span style="color:#9333ea;">GET</span> grade xᵢ<br>
  &nbsp;&nbsp;&nbsp;&nbsp;5. <span style="color:#2d5be3;">ADD</span> xᵢ to sum<br>
  }<br>
  6. <span style="color:#2d5be3;">COMPUTE</span> average = sum / n<br>
  7. <span style="color:#16a34a;">PRINT</span> average
</div>

<h4>Step 5 — Test Cases</h4>
<p>Each time you test an algorithm with a fixed set of input data, it is called a <strong>test case</strong>.</p>
<table>
  <thead><tr><th>Test Case</th><th>Input</th><th>Expected Output</th></tr></thead>
  <tbody>
    <tr><td>Normal case</td><td>n=5, grades: 92,37,43,12,71</td><td>Average = 51</td></tr>
    <tr><td>All same</td><td>n=3, grades: 1,1,1</td><td>Average = 1</td></tr>
    <tr><td>Edge case</td><td>n=0 (no grades)</td><td>Average = 0</td></tr>
  </tbody>
</table>

<p class="callout callout-danger">⚠️ <strong>Exam Traps:</strong><br>
• The FIRST step is <strong>Understand the Problem</strong> — not writing code<br>
• Pseudocode is preferred over flowcharts for algorithm development — faster and closer to real code<br>
• A <strong>test case</strong> = testing with a fixed set of input data — not the same as debugging<br>
• The model/formula step comes <strong>before</strong> writing the algorithm<br>
• Problem solving is a <strong>cycle</strong> — you may need to go back and repeat steps</p>

<p class="callout callout-info">💡 <strong>Memory Aid — UFADWTE</strong> (7 steps):<br>
<strong>U</strong>nderstand → <strong>F</strong>ormulate → <strong>A</strong>lgorithm → <strong>D</strong>evelop code → <strong>W</strong>rite program → <strong>T</strong>est → <strong>E</strong>valuate</p>` },
                                        { id: "CIT108_m1_u3", title: "Computational Approaches to Problem Solving", summary: "<h3>Overview</h3><p>Unit 3 discusses different computational strategies used to solve problems efficiently in computer science. Each approach has a different method of finding solutions depending on the nature of the problem.</p><h3>Main Computational Approaches</h3><ul><li>Brute-Force Approach</li><li>Divide-and-Conquer Approach</li><li>Dynamic Programming Approach</li><li>Greedy Algorithm Approach</li><li>Randomized Approach</li></ul><h3>1. Brute-Force Approach</h3><p><strong>Definition:</strong> The Brute-Force approach is a problem-solving technique that tries all possible solutions until the correct one is found. It is also known as exhaustive search.</p><p><strong>Characteristics:</strong></p><ul><li>Simple and straightforward</li><li>Does not attempt to reduce operations</li><li>Checks every candidate solution</li><li>Guaranteed to find a solution if one exists</li></ul><p><strong>Example:</strong> A 4-digit padlock with digits from 0-9. Total combinations: 10⁴ = 10,000. Worst case → the algorithm must try all 10,000 combinations.</p><p><strong>Disadvantage:</strong> Very slow and inefficient for large problems.</p><h3>2. Divide-and-Conquer Approach</h3><p><strong>Definition:</strong> Divide-and-Conquer is a strategy that solves problems recursively by dividing them into smaller sub-problems and combining their solutions.</p><p><strong>Three Main Steps:</strong></p><ol><li><strong>Divide</strong> - Break the problem into smaller sub-problems</li><li><strong>Conquer</strong> - Solve each sub-problem recursively until reaching the base case</li><li><strong>Combine</strong> - Merge the solutions of the sub-problems to obtain the final solution</li></ol><p><strong>Important Terms:</strong></p><ul><li><strong>Recursion:</strong> A method where a function calls itself to solve smaller instances of the same problem</li><li><strong>Base Case:</strong> The condition where recursion stops because the problem cannot be divided further</li></ul><p><strong>Example:</strong> Merge Sort Algorithm - Divide array into two halves, recursively sort each half, merge the sorted halves.</p><p><strong>Advantages:</strong> Reduces complex problems into smaller easier problems, helps design efficient algorithms, uses memory cache effectively, suitable for parallel processing.</p><p><strong>Disadvantages:</strong> Recursive calls can create overhead and slow execution, can be more complex than simple iterative solutions.</p><h3>3. Dynamic Programming Approach</h3><p><strong>Definition:</strong> Dynamic Programming is a technique that solves problems by breaking them into overlapping sub-problems and storing the results so they are not recomputed.</p><p><strong>Key Idea:</strong> Avoid calculating the same sub-problem multiple times.</p><p><strong>Important Concepts:</strong></p><ul><li><strong>Overlapping Sub-Problems:</strong> Sub-problems that occur repeatedly during computation</li><li><strong>Memoization:</strong> Storing results of solved sub-problems in memory for reuse</li><li><strong>Bottom-Up Approach:</strong> Dynamic programming typically solves smallest problems first and builds toward larger ones</li></ul><p><strong>Example:</strong> Fibonacci Series - F(0) = 0, F(1) = 1, F(2) = F(1) + F(0), F(3) = F(2) + F(1). Dynamic programming stores previously computed Fibonacci numbers to avoid recomputation.</p><p><strong>Usage:</strong> Widely used in optimization problems, where the goal is to find the best solution among many possibilities.</p><p><strong>Recursion vs Dynamic Programming:</strong> Dynamic programming is often applied to recursive problems, but not all recursive algorithms can use dynamic programming. Dynamic programming requires overlapping sub-problems.</p><h3>4. Greedy Algorithm Approach</h3><p><strong>Definition:</strong> A Greedy algorithm selects the best immediate (locally optimal) choice at each step, hoping it leads to the overall best solution.</p><p><strong>Important Concepts:</strong></p><ul><li><strong>Local Optimum:</strong> Best choice for the current step</li><li><strong>Global Optimum:</strong> Best solution for the entire problem</li></ul><p>Greedy algorithms choose local optimum, which may or may not lead to the global optimum.</p><p><strong>Advantages:</strong> Simple to implement, efficient and fast, requires minimal computation.</p><p><strong>Limitation:</strong> Does not always guarantee the best global solution.</p><p><strong>Greedy vs Dynamic Programming:</strong> Greedy algorithms make decisions based on immediate benefit, while dynamic programming carefully evaluates all sub-problems to ensure optimal results. Dynamic programming guarantees optimal solutions, but greedy algorithms may not.</p><h3>5. Randomized Approach</h3><p><strong>Definition:</strong> A Randomized algorithm uses random numbers during execution to make decisions. The behavior of the algorithm depends on input data and random number generator.</p><p><strong>Characteristics:</strong></p><ul><li>Same input may produce different outputs on different runs</li><li>Helps avoid worst-case scenarios</li><li>Useful when determining the optimal choice is too expensive</li></ul><p><strong>Applications:</strong> Computer security, computer games, game theory, fair decision systems.</p><h3>Key Takeaway</h3><p>Different problems require different computational approaches. Choosing the correct algorithmic strategy is essential for solving problems efficiently.</p><h3>Quick Revision</h3><ul><li><strong>Brute Force</strong> → try all possible solutions</li><li><strong>Divide and Conquer</strong> → divide → conquer → combine</li><li><strong>Dynamic Programming</strong> → reuse overlapping sub-problem results</li><li><strong>Greedy Algorithm</strong> → choose locally optimal solution</li><li><strong>Randomized Algorithm</strong> → make decisions using random numbers</li></ul>" }
                                    ]
                                },
                                {
                                    id: "CIT108_m2",
                                    title: "Role of Algorithms in Problem Solving",
                                    units: [
                                        { id: "CIT108_m2_u1", title: "Abstraction as a Problem Solving Tool", summary: "<h3>Definition of Abstraction</h3><p>Abstraction is a fundamental concept in computer science that involves:</p><ul><li>Creating well-defined interfaces to hide the inner workings of computer programs from users</li><li>Identifying general characteristics needed to solve a problem while filtering out unnecessary information</li><li>Simplifying a process by providing what you need and hiding useless details you don't care about</li></ul><p><strong>Key Point:</strong> Abstraction is widely used to <strong>simplify things that are very complex</strong>. Without proper abstraction, we may end up with the wrong solution to the problem we are trying to solve.</p><h3>How to Abstract</h3><ol><li>Ignore characteristics that are NOT needed</li><li>Concentrate ONLY on characteristics that ARE needed</li><li>Remove specific detail and patterns that will not help in solving the problem</li></ol><h3>The 5 Types of Abstraction</h3><h4>1. Representational Abstraction</h4><p><strong>Meaning:</strong> Removing unnecessary details from a real world object or situation to create a simpler version.</p><ul><li>The simpler version is directed at solving a particular problem</li><li><strong>Example:</strong> A metro transport map removes actual distances, buildings and trees — only stations and routes remain</li><li><strong>Computing example:</strong> A flight simulator includes plane weight (relevant) but excludes seat upholstery material (irrelevant)</li></ul><h4>2. Abstraction by Generalisation</h4><p><strong>Meaning:</strong> Grouping things together based on their common characteristics.</p><ul><li>Identifying that some objects are \"kinds of\" more generic objects</li><li>Fundamental technique used in Object Oriented Programming (OOP)</li><li><strong>Example:</strong> A cocker spaniel is a kind of dog. Dogs and cats both belong to the order Carnivora</li><li><strong>Benefit:</strong> Allows code to be developed and shared between objects</li></ul><h4>3. Procedural Abstraction</h4><p><strong>Meaning:</strong> Represents a computational method that is generalised as far as possible.</p><ul><li>A procedure should not be tied to one specific use case</li><li><strong>Example:</strong> Instead of <code>calculate_chopping_board_area()</code>, use <code>calculate_area(side1, side2)</code> which works for ANY shape</li><li><strong>Key aspect:</strong> Computational method</li></ul><h4>4. Functional Abstraction</h4><p><strong>Meaning:</strong> The implementation detail of the computational method is hidden.</p><ul><li>A function is treated as a <strong>black box</strong></li><li>Input goes in → processing happens (hidden) → output comes out</li><li><strong>Example:</strong> Python's <code>print()</code> function — you know what it does but not how it works internally</li><li>Built-in functions in programming languages are examples of functional abstraction</li></ul><h4>5. Data Abstraction</h4><p><strong>Meaning:</strong> Separates the way a compound data object is used from the details of how it is constructed.</p><ul><li><strong>Example:</strong> A Stack is an Abstract Data Type (ADT) with three operations:<ul><li><strong>Push</strong> — add an item to the stack</li><li><strong>Pop</strong> — remove an item from the stack</li><li><strong>Peek</strong> — look at the item at the top of the stack</li></ul></li><li>A stack is a <strong>Last In First Out (LIFO)</strong> data structure</li><li>You can use a stack without knowing how it is implemented internally</li></ul><h3>Summary Table</h3><table border=\"1\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%; border-collapse:collapse;\"><tr><th>Type</th><th>Simple Meaning</th><th>Key Word</th><th>Example</th></tr><tr><td>Representational</td><td>Remove unnecessary details</td><td>Simplify</td><td>Transport map</td></tr><tr><td>Generalisation</td><td>Group by common features</td><td>Group/Common</td><td>Dog, Cat = Carnivora</td></tr><tr><td>Procedural</td><td>Make procedures general</td><td>Computational method</td><td>calculate_area()</td></tr><tr><td>Functional</td><td>Hide how function works</td><td>Black Box</td><td>print() in Python</td></tr><tr><td>Data</td><td>Separate use from construction</td><td>LIFO/ADT/Stack</td><td>Push, Pop, Peek</td></tr></table>" },
                                        { id: "CIT108_m2_u2", title: "Algorithms", summary: `<h3>CIT108 — Unit 2: Algorithms</h3>

<h4>Definition</h4>
<p>An <strong>algorithm</strong> is a finite set of well-defined instructions written in human readable language for solving a given problem in a finite number of steps.</p>

<h4>6 Steps of Algorithm Development</h4>
<ul>
  <li><strong>1. Identify Input</strong> — what data goes in</li>
  <li><strong>2. Identify Output</strong> — what result comes out</li>
  <li><strong>3. Identify Processing Operations</strong> — what steps transform input to output</li>
  <li><strong>4. Processing Definiteness</strong> — steps must be clear and unambiguous</li>
  <li><strong>5. Processing Finiteness</strong> — must terminate (come to an end)</li>
  <li><strong>6. Possessing Effectiveness</strong> — steps must be practical and doable</li>
</ul>

<h4>5 Characteristics of an Algorithm</h4>
<table>
  <thead><tr><th>Characteristic</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Precision</strong></td><td>Steps are exactly and accurately defined</td></tr>
    <tr><td><strong>Uniqueness</strong></td><td>Same input always gives same output</td></tr>
    <tr><td><strong>Finiteness</strong></td><td>Always stops after a finite number of steps</td></tr>
    <tr><td><strong>Input</strong></td><td>Receives at least one input</td></tr>
    <tr><td><strong>Output</strong></td><td>Produces at least one output</td></tr>
  </tbody>
</table>

<h4>Representation of Algorithms</h4>
<ul>
  <li><strong>Flowchart</strong> — visual diagram (covered in Unit 3)</li>
  <li><strong>Pseudocode</strong> — structured English-like code (covered in Unit 4)</li>
</ul>

<h4>Algorithm Efficiency Types</h4>
<table>
  <thead><tr><th>Type</th><th>Meaning</th><th>Efficiency</th></tr></thead>
  <tbody>
    <tr><td><strong>Constant</strong></td><td>Fixed time regardless of input size</td><td>Very good</td></tr>
    <tr><td><strong>Logarithmic</strong></td><td>Grows very slowly</td><td><strong style="color:#16a34a">Most efficient ✅</strong></td></tr>
    <tr><td><strong>Linear</strong></td><td>Grows equally with input</td><td>Good</td></tr>
    <tr><td><strong>Quadratic</strong></td><td>Grows by n²</td><td>Poor</td></tr>
    <tr><td><strong>Exponential</strong></td><td>Grows extremely fast</td><td><strong style="color:#dc2626">Least efficient ❌</strong></td></tr>
  </tbody>
</table>

<h4>Two Efficiency Measures</h4>
<ul>
  <li><strong>Runtime Complexity</strong> — time taken to complete</li>
  <li><strong>Space Complexity</strong> — memory used while running</li>
</ul>

<h4>Sub-Algorithms</h4>
<ul>
  <li><strong>Function</strong> — a sub-algorithm that <strong>returns a value</strong></li>
  <li><strong>Procedure</strong> — a sub-algorithm that <strong>returns no value</strong></li>
</ul>

<h4>Advantages vs Disadvantages</h4>
<table>
  <thead><tr><th>Advantages ✅</th><th>Disadvantages ❌</th></tr></thead>
  <tbody>
    <tr><td>Effective communication</td><td>Time consuming for complex problems</td></tr>
    <tr><td>Easy debugging</td><td>Difficult to understand complex logic</td></tr>
    <tr><td>Efficient coding</td><td></td></tr>
    <tr><td>Language independent</td><td></td></tr>
  </tbody>
</table>

<p class="callout callout-info">💡 Writing an algorithm is considered the <strong>first step</strong> to programming.</p>` },
                                        { id: "CIT108_m2_u3", title: "Flowcharts", summary: `<h3>CIT108 — Unit 3: Flowcharts</h3>

<h4>Core Idea</h4>
<p>A <strong>flowchart</strong> is a diagram that represents an algorithm, workflow or process using boxes of various shapes connected by arrows to show the order of steps.</p>

<h4>Why Flowcharts Matter</h4>
<ul>
  <li>Breaks big ideas into small visual steps — a <strong>universal language</strong></li>
  <li>Easier to understand than written words</li>
  <li>Used in business, manufacturing, software engineering and more</li>
  <li>Helps find flaws, bottlenecks and hidden problems in a process</li>
</ul>

<h4>Basic Flowchart Symbols</h4>

<!-- SYMBOL DIAGRAM -->
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0;">

  <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:16px;text-align:center;">
    <div style="width:60px;height:30px;background:#2d5be3;border-radius:15px;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;">
      <span style="color:white;font-size:11px;font-weight:700;">START/END</span>
    </div>
    <strong style="color:var(--text);font-size:13px;">Terminator</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0;">Oval/Rounded rectangle. Shows where the flow starts and ends.</p>
  </div>

  <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:16px;text-align:center;">
    <div style="width:60px;height:30px;background:#16a34a;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;">
      <span style="color:white;font-size:11px;font-weight:700;">PROCESS</span>
    </div>
    <strong style="color:var(--text);font-size:13px;">Action Symbol</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0;">Rectangle. Represents a process, action or single step.</p>
  </div>

  <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:16px;text-align:center;">
    <div style="width:0;height:0;border-left:30px solid transparent;border-right:30px solid transparent;border-bottom:52px solid #d97706;margin:0 auto 10px;"></div>
    <strong style="color:var(--text);font-size:13px;">Decision</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0;">Diamond. A yes/no or true/false question that splits the path into two branches.</p>
  </div>

  <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:16px;text-align:center;">
    <div style="width:60px;height:30px;background:#9333ea;transform:skewX(-15deg);margin:0 auto 10px;display:flex;align-items:center;justify-content:center;">
      <span style="color:white;font-size:11px;font-weight:700;transform:skewX(15deg);">I/O</span>
    </div>
    <strong style="color:var(--text);font-size:13px;">Input/Output</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0;">Parallelogram. Used to input or output data.</p>
  </div>

  <div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:16px;text-align:center;">
    <div style="display:flex;align-items:center;justify-content:center;margin:0 auto 10px;gap:4px;">
      <div style="width:40px;height:2px;background:#dc2626;"></div>
      <div style="width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:10px solid #dc2626;"></div>
    </div>
    <strong style="color:var(--text);font-size:13px;">Arrow</strong>
    <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0;">Shows the order and direction of program flow.</p>
  </div>

</div>

<h4>4 Common Types of Flowcharts</h4>

<!-- FLOWCHART TYPES DIAGRAM -->
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:10px;padding:20px;margin:16px 0;">
  <div style="text-align:center;margin-bottom:16px;">
    <span style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--text);">Flowchart Types</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">
    <div style="background:rgba(45,91,227,0.08);border:1.5px solid rgba(45,91,227,0.25);border-radius:8px;padding:14px;">
      <div style="font-weight:700;color:#2d5be3;font-size:13px;margin-bottom:6px;">1. Process Flowchart</div>
      <p style="font-size:12px;color:var(--text-secondary);margin:0;">Most versatile. Maps roles, steps and responsibilities. Used for almost anything.</p>
    </div>
    <div style="background:rgba(22,163,74,0.08);border:1.5px solid rgba(22,163,74,0.25);border-radius:8px;padding:14px;">
      <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:6px;">2. Workflow Chart</div>
      <p style="font-size:12px;color:var(--text-secondary);margin:0;">Shows how a business or process functions. Good for training and SOPs.</p>
    </div>
    <div style="background:rgba(217,119,6,0.08);border:1.5px solid rgba(217,119,6,0.25);border-radius:8px;padding:14px;">
      <div style="font-weight:700;color:#d97706;font-size:13px;margin-bottom:6px;">3. Swimlane Chart</div>
      <p style="font-size:12px;color:var(--text-secondary);margin:0;">Shows multiple flows side by side. Great for cross-department processes.</p>
    </div>
    <div style="background:rgba(147,51,234,0.08);border:1.5px solid rgba(147,51,234,0.25);border-radius:8px;padding:14px;">
      <div style="font-weight:700;color:#9333ea;font-size:13px;margin-bottom:6px;">4. Data Flowchart</div>
      <p style="font-size:12px;color:var(--text-secondary);margin:0;">Shows how data moves through a system. Used in software design and analysis.</p>
    </div>
  </div>
</div>

<h4>Algorithm vs Flowchart</h4>
<table>
  <thead><tr><th>Algorithm</th><th>Flowchart</th></tr></thead>
  <tbody>
    <tr><td>Step-by-step written instructions</td><td>Diagrammatic representation of an algorithm</td></tr>
    <tr><td>Uses English-like descriptions</td><td>Uses boxes, symbols and arrows</td></tr>
    <tr><td>Good for small, simple problems</td><td>Good for complex, detailed programs</td></tr>
    <tr><td>Inadequate for complex programs</td><td>Adequate for complex programs</td></tr>
  </tbody>
</table>

<h4>Sample Flowchart — Square of a Number</h4>

<!-- SAMPLE FLOWCHART DIAGRAM -->
<div style="display:flex;flex-direction:column;align-items:center;gap:0;margin:20px 0;font-size:13px;">
  <div style="background:#2d5be3;color:white;padding:8px 24px;border-radius:20px;font-weight:700;">START</div>
  <div style="width:2px;height:20px;background:var(--border);"></div>
  <div style="background:rgba(147,51,234,0.1);border:1.5px solid #9333ea;padding:8px 20px;transform:skewX(-10deg);font-weight:600;color:#9333ea;">
    <span style="transform:skewX(10deg);display:block;">Input N</span>
  </div>
  <div style="width:2px;height:20px;background:var(--border);"></div>
  <div style="background:rgba(22,163,74,0.1);border:1.5px solid #16a34a;padding:8px 20px;font-weight:600;color:#16a34a;">Square = N × N</div>
  <div style="width:2px;height:20px;background:var(--border);"></div>
  <div style="background:rgba(147,51,234,0.1);border:1.5px solid #9333ea;padding:8px 20px;transform:skewX(-10deg);font-weight:600;color:#9333ea;">
    <span style="transform:skewX(10deg);display:block;">Output Square</span>
  </div>
  <div style="width:2px;height:20px;background:var(--border);"></div>
  <div style="background:#dc2626;color:white;padding:8px 24px;border-radius:20px;font-weight:700;">END</div>
</div>

<h4>Sample Flowchart — Decision (Biggest of Two Numbers)</h4>

<!-- DECISION FLOWCHART -->
<div style="display:flex;flex-direction:column;align-items:center;gap:0;margin:20px 0;font-size:13px;">
  <div style="background:#2d5be3;color:white;padding:8px 24px;border-radius:20px;font-weight:700;">START</div>
  <div style="width:2px;height:16px;background:var(--border);"></div>
  <div style="background:rgba(147,51,234,0.1);border:1.5px solid #9333ea;padding:8px 20px;transform:skewX(-10deg);font-weight:600;color:#9333ea;">
    <span style="transform:skewX(10deg);display:block;">Input A, B</span>
  </div>
  <div style="width:2px;height:16px;background:var(--border);"></div>
  <div style="position:relative;width:120px;height:60px;display:flex;align-items:center;justify-content:center;">
    <div style="width:0;height:0;border-left:60px solid transparent;border-right:60px solid transparent;border-bottom:60px solid rgba(217,119,6,0.15);position:absolute;top:0;"></div>
    <div style="width:0;height:0;border-left:58px solid transparent;border-right:58px solid transparent;border-bottom:58px solid rgba(217,119,6,0.3);position:absolute;top:1px;"></div>
    <span style="position:relative;z-index:1;font-weight:700;color:#d97706;font-size:12px;">A &gt; B?</span>
  </div>
  <div style="display:flex;gap:60px;align-items:flex-start;margin-top:4px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:11px;color:#16a34a;font-weight:700;">YES</span>
      <div style="width:2px;height:16px;background:var(--border);"></div>
      <div style="background:rgba(22,163,74,0.1);border:1.5px solid #16a34a;padding:6px 14px;font-weight:600;color:#16a34a;font-size:12px;">Print A is biggest</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:11px;color:#dc2626;font-weight:700;">NO</span>
      <div style="width:2px;height:16px;background:var(--border);"></div>
      <div style="background:rgba(220,38,38,0.1);border:1.5px solid #dc2626;padding:6px 14px;font-weight:600;color:#dc2626;font-size:12px;">Print B is biggest</div>
    </div>
  </div>
  <div style="width:2px;height:16px;background:var(--border);margin-top:8px;"></div>
  <div style="background:#dc2626;color:white;padding:8px 24px;border-radius:20px;font-weight:700;">END</div>
</div>

<h4>Areas Where Flowcharts Are Used</h4>
<table>
  <thead><tr><th>Area</th><th>How Flowcharts Help</th></tr></thead>
  <tbody>
    <tr><td><strong>Sales & Marketing</strong></td><td>Map sales process, guide pricing decisions, document policies</td></tr>
    <tr><td><strong>Manufacturing</strong></td><td>Show inputs, illustrate production process, quality assurance</td></tr>
    <tr><td><strong>Business Operations</strong></td><td>Onboard employees, document order processes, identify milestones</td></tr>
    <tr><td><strong>Software Engineering</strong></td><td>Show user navigation, describe code structure, visualize algorithms</td></tr>
  </tbody>
</table>

<h4>Design Considerations</h4>
<table>
  <thead><tr><th>Category</th><th>Rule</th></tr></thead>
  <tbody>
    <tr><td><strong>Direction</strong></td><td>Flow left-to-right or top-to-bottom</td></tr>
    <tr><td><strong>Pages</strong></td><td>Keep on one page when possible</td></tr>
    <tr><td><strong>Colours</strong></td><td>Use no more than 3 colours</td></tr>
    <tr><td><strong>Font</strong></td><td>Stick to one font, make it readable</td></tr>
    <tr><td><strong>Words</strong></td><td>Fewer words the better</td></tr>
    <tr><td><strong>Key</strong></td><td>Always include a chart key/legend</td></tr>
  </tbody>
</table>

<h4>Advantages of Flowcharts</h4>
<ul>
  <li>Shows logic of a problem in pictorial form — easy to check</li>
  <li>Good means of communication to other users</li>
  <li>Compact way to record an algorithm solution</li>
  <li>Allows breaking a problem into parts that connect into a master chart</li>
  <li>Permanent record of the solution for future reference</li>
</ul>

<p class="callout callout-warning">⚠️ <strong>Exam Traps:</strong><br>
• Algorithm = written steps &nbsp;|&nbsp; Flowchart = diagram of those steps<br>
• Decision symbol = <strong>Diamond</strong> (not rectangle)<br>
• Input/Output symbol = <strong>Parallelogram</strong> (not rectangle)<br>
• Start/End symbol = <strong>Oval/Rounded rectangle</strong> (Terminator)<br>
• Swimlane ≠ Workflow — swimlane shows <strong>multiple parallel flows</strong></p>

<p class="callout callout-info">💡 <strong>Memory Aid — TPDIA</strong> (basic symbols):<br>
<strong>T</strong>erminator → <strong>P</strong>rocess → <strong>D</strong>ecision → <strong>I</strong>nput/Output → <strong>A</strong>rrow</p>` },
                                        { id: "CIT108_m2_u4", title: "Pseudocode", summary: `<h3>CIT108 — Unit 4: Pseudocode</h3>

<h4>Core Idea</h4>
<p>Pseudocode is a plain English description of an algorithm that lets programmers plan and communicate logic without worrying about the syntax rules of any specific programming language.</p>

<h4>Key Definitions</h4>
<table>
  <thead><tr><th>Term</th><th>Simple Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Pseudocode</strong></td><td>A human-readable, syntax-free description of an algorithm written in plain English using programming-like keywords.</td></tr>
    <tr><td><strong>Algorithm</strong></td><td>A step-by-step set of instructions for solving a problem.</td></tr>
    <tr><td><strong>Construct / Keyword</strong></td><td>A reserved word in pseudocode (always UPPERCASE) that controls the flow of the algorithm.</td></tr>
    <tr><td><strong>Syntax</strong></td><td>The strict grammar rules of a programming language. Pseudocode has NO syntax.</td></tr>
    <tr><td><strong>Documentation</strong></td><td>Written explanation of how a program works. Pseudocode can serve as a starting point for documentation.</td></tr>
  </tbody>
</table>

<h4>Where Pseudocode Sits — The Development Flow</h4>

<!-- CONCEPT FLOW DIAGRAM -->
<div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin:20px 0;font-size:13px;">
  <div style="background:rgba(45,91,227,0.1);border:2px solid var(--accent);border-radius:8px;padding:10px 16px;text-align:center;font-weight:700;color:var(--accent);">💡 Idea</div>
  <div style="font-size:20px;color:var(--text-muted);">→</div>
  <div style="background:rgba(217,119,6,0.1);border:2px solid #d97706;border-radius:8px;padding:10px 16px;text-align:center;font-weight:700;color:#d97706;">📊 Flowchart</div>
  <div style="font-size:20px;color:var(--text-muted);">→</div>
  <div style="background:rgba(147,51,234,0.15);border:2px solid #9333ea;border-radius:8px;padding:10px 16px;text-align:center;font-weight:700;color:#9333ea;">📝 Pseudocode</div>
  <div style="font-size:20px;color:var(--text-muted);">→</div>
  <div style="background:rgba(22,163,74,0.1);border:2px solid #16a34a;border-radius:8px;padding:10px 16px;text-align:center;font-weight:700;color:#16a34a;">💻 Real Code</div>
</div>
<p style="text-align:center;font-size:13px;color:var(--text-muted);">Pseudocode is the bridge between flowchart and actual code</p>

<h4>5 Reasons for Using Pseudocode</h4>
<table>
  <thead><tr><th>#</th><th>Reason</th><th>Simple Explanation</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>Better readability</strong></td><td>Non-programmers (managers, mathematicians) can understand it</td></tr>
    <tr><td>2</td><td><strong>Ease up code construction</strong></td><td>Converting pseudocode to real code is faster and easier</td></tr>
    <tr><td>3</td><td><strong>Middle point between flowchart and code</strong></td><td>Smooths the transition from idea → flowchart → code</td></tr>
    <tr><td>4</td><td><strong>Start point for documentation</strong></td><td>Can be used as a docstring at the start of a code file</td></tr>
    <tr><td>5</td><td><strong>Easier bug detection</strong></td><td>Easier to find and fix errors before writing actual code</td></tr>
  </tbody>
</table>

<h4>The 6 Main Constructs (Always UPPERCASE)</h4>

<!-- CONSTRUCTS DIAGRAM -->
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin:16px 0;">
  <div style="background:rgba(45,91,227,0.08);border:1.5px solid rgba(45,91,227,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:var(--accent);font-size:14px;margin-bottom:6px;">SEQUENCE</div>
    <p style="font-size:12px;color:var(--text-secondary);margin:0;">Linear steps done one after another</p>
  </div>
  <div style="background:rgba(22,163,74,0.08);border:1.5px solid rgba(22,163,74,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#16a34a;font-size:14px;margin-bottom:6px;">WHILE</div>
    <p style="font-size:12px;color:var(--text-secondary);margin:0;">Loop with condition at the <strong>beginning</strong></p>
  </div>
  <div style="background:rgba(217,119,6,0.08);border:1.5px solid rgba(217,119,6,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#d97706;font-size:14px;margin-bottom:6px;">REPEAT-UNTIL</div>
    <p style="font-size:12px;color:var(--text-secondary);margin:0;">Loop with condition at the <strong>bottom</strong></p>
  </div>
  <div style="background:rgba(220,38,38,0.08);border:1.5px solid rgba(220,38,38,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#dc2626;font-size:14px;margin-bottom:6px;">FOR</div>
    <p style="font-size:12px;color:var(--text-secondary);margin:0;">Another way of looping (fixed iterations)</p>
  </div>
  <div style="background:rgba(147,51,234,0.08);border:1.5px solid rgba(147,51,234,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#9333ea;font-size:14px;margin-bottom:6px;">IF-THEN-ELSE</div>
    <p style="font-size:12px;color:var(--text-secondary);margin:0;">Conditional — changes flow based on a condition</p>
  </div>
  <div style="background:rgba(6,182,212,0.08);border:1.5px solid rgba(6,182,212,0.3);border-radius:8px;padding:12px;text-align:center;">
    <div style="font-family:var(--font-mono);font-weight:700;color:#0891b2;font-size:14px;margin-bottom:6px;">CASE</div>
    <p style="font-size:12px;color:var(--text-secondary);margin:0;">Generalised form of IF-THEN-ELSE (multiple conditions)</p>
  </div>
</div>

<h4>Common Keywords by Category</h4>
<table>
  <thead><tr><th>Category</th><th>Keywords</th></tr></thead>
  <tbody>
    <tr><td><strong>Input</strong></td><td><code>READ, OBTAIN, GET</code></td></tr>
    <tr><td><strong>Output</strong></td><td><code>PRINT, DISPLAY, SHOW, WRITE</code></td></tr>
    <tr><td><strong>Compute</strong></td><td><code>COMPUTE, CALCULATE, DETERMINE</code></td></tr>
    <tr><td><strong>Initialise</strong></td><td><code>SET, INIT</code></td></tr>
    <tr><td><strong>Add / Subtract</strong></td><td><code>INCREMENT, DECREMENT</code></td></tr>
    <tr><td><strong>Call function</strong></td><td><code>CALL</code></td></tr>
    <tr><td><strong>Exception</strong></td><td><code>EXCEPTION, WHEN</code></td></tr>
  </tbody>
</table>

<h4>7 Rules for Writing Pseudocode</h4>
<ul>
  <li><strong>1.</strong> Always <strong>CAPITALIZE</strong> the initial keyword (WHILE, IF, FOR, etc.)</li>
  <li><strong>2.</strong> Have only <strong>one statement per line</strong></li>
  <li><strong>3.</strong> Use <strong>indentation</strong> to show hierarchy and nested constructs</li>
  <li><strong>4.</strong> Always end multiline sections with <strong>END keywords</strong> (ENDIF, ENDWHILE, ENDFOR)</li>
  <li><strong>5.</strong> Keep statements <strong>programming language independent</strong></li>
  <li><strong>6.</strong> Use the <strong>naming domain of the problem</strong>, not implementation (e.g. "Append last name to first name" not "name = first + last")</li>
  <li><strong>7.</strong> Keep it <strong>simple, concise and readable</strong></li>
</ul>

<h4>Worked Example — Multiply Two Numbers</h4>
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:16px;font-family:var(--font-mono);font-size:14px;line-height:2;margin:12px 0;">
  <span style="color:#9333ea;">READ</span> num1, num2<br>
  <span style="color:#2d5be3;">SET</span> product <span style="color:var(--text-muted);">to</span> num1 * num2<br>
  <span style="color:#16a34a;">WRITE</span> product
</div>

<h4>Worked Example — IF-THEN-ELSE (Check number is 5 or 6)</h4>
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:16px;font-family:var(--font-mono);font-size:14px;line-height:2;margin:12px 0;">
  <span style="color:#9333ea;">READ</span> isfive<br>
  <span style="color:#d97706;">IF</span> (isfive = 5) <span style="color:#d97706;">THEN</span><br>
  &nbsp;&nbsp;<span style="color:#16a34a;">WRITE</span> <span style="color:#dc2626;">"your number is 5"</span><br>
  <span style="color:#d97706;">ELSE IF</span> (isfive = 6) <span style="color:#d97706;">THEN</span><br>
  &nbsp;&nbsp;<span style="color:#16a34a;">WRITE</span> <span style="color:#dc2626;">"your number is 6"</span><br>
  <span style="color:#d97706;">ELSE</span><br>
  &nbsp;&nbsp;<span style="color:#16a34a;">WRITE</span> <span style="color:#dc2626;">"your number is not 5 or 6"</span><br>
  <span style="color:#d97706;">END IF</span>
</div>

<h4>Worked Example — WHILE Loop (Multiples of 5)</h4>
<div style="background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:16px;font-family:var(--font-mono);font-size:14px;line-height:2;margin:12px 0;">
  <span style="color:#2d5be3;">SET</span> x <span style="color:var(--text-muted);">to</span> 1<br>
  <span style="color:#16a34a;">WHILE</span> (x &lt; 20)<br>
  &nbsp;&nbsp;<span style="color:#9333ea;">WRITE</span> x * 5<br>
  &nbsp;&nbsp;<span style="color:#2d5be3;">ADD</span> 1 <span style="color:var(--text-muted);">to</span> x<br>
  <span style="color:#16a34a;">END WHILE</span>
</div>

<h4>Algorithm vs Pseudocode vs Flowchart</h4>
<table>
  <thead><tr><th>Feature</th><th>Algorithm</th><th>Pseudocode</th><th>Flowchart</th></tr></thead>
  <tbody>
    <tr><td>Format</td><td>Numbered steps</td><td>Plain English + keywords</td><td>Diagram with shapes</td></tr>
    <tr><td>Syntax</td><td>None</td><td>None</td><td>None</td></tr>
    <tr><td>Best for</td><td>Simple problems</td><td>Complex logic planning</td><td>Visual representation</td></tr>
    <tr><td>Compiled?</td><td>No</td><td>No</td><td>No</td></tr>
  </tbody>
</table>

<p class="callout callout-danger">⚠️ <strong>Common Exam Traps:</strong><br>
• Pseudocode has NO syntax — it <strong>cannot be compiled or interpreted</strong> by a computer<br>
• WHILE checks condition at the <strong>beginning</strong> — REPEAT-UNTIL checks at the <strong>bottom</strong><br>
• CASE is the <strong>generalised form</strong> of IF-THEN-ELSE (not the same thing)<br>
• Keywords must always be in <strong>UPPERCASE</strong><br>
• Pseudocode is <strong>language independent</strong> — never use Python/Java syntax in pseudocode</p>

<p class="callout callout-info">💡 <strong>Memory Aid — SWRFIC</strong> (6 main constructs):<br>
<strong>S</strong>EQUENCE &nbsp;·&nbsp; <strong>W</strong>HILE &nbsp;·&nbsp; <strong>R</strong>EPEAT-UNTIL &nbsp;·&nbsp; <strong>F</strong>OR &nbsp;·&nbsp; <strong>I</strong>F-THEN-ELSE &nbsp;·&nbsp; <strong>C</strong>ASE</p>` }
                                    ]
                                },
                                {
                                    id: "CIT108_m3",
                                    title: "Implementation Strategies",
                                    units: [
                                        { id: "CIT108_m3_u1", title: "Recursion", summary: "" },
                                        { id: "CIT108_m3_u2", title: "Control Structure: Selection and Iteration", summary: "" },
                                        { id: "CIT108_m3_u3", title: "Decomposition and Modularisation", summary: "" },
                                        { id: "CIT108_m3_u4", title: "Testing and Debugging", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── CIT191: Computer Laboratory I ───
                        {
                            id: "CIT191",
                            code: "CIT191",
                            title: "Computer Laboratory I",
                            modules: [
                                {
                                    id: "CIT191_m1",
                                    title: "Computer Hardware",
                                    units: [
                                        { id: "CIT191_m1_u1", title: "Hardware Components (1)", summary: "" },
                                        { id: "CIT191_m1_u2", title: "Hardware Components (2) – Peripheral Devices", summary: "" },
                                        { id: "CIT191_m1_u3", title: "Auxiliary Equipment", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT191_m2",
                                    title: "Computer Networking",
                                    units: [
                                        { id: "CIT191_m2_u1", title: "Network Cables", summary: "" },
                                        { id: "CIT191_m2_u2", title: "Network Devices", summary: "" },
                                        { id: "CIT191_m2_u3", title: "Network Internet Protocols Addressing", summary: "" },
                                        { id: "CIT191_m2_u4", title: "Local Area Network", summary: "" },
                                        { id: "CIT191_m2_u5", title: "Basic Network Command", summary: "" }
                                    ]
                                },
                                {
                                    id: "CIT191_m3",
                                    title: "Computer Programming",
                                    units: [
                                        { id: "CIT191_m3_u1", title: "Programming in Visual Basic", summary: "" },
                                        { id: "CIT191_m3_u2", title: "Visual Basic Project Window", summary: "" },
                                        { id: "CIT191_m3_u3", title: "Creating Menu Applications", summary: "" },
                                        { id: "CIT191_m3_u4", title: "Analyzing Visual Basic Data", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── MTH101: Elementary Mathematics I ───
                        {
                            id: "MTH101",
                            code: "MTH101",
                            tmaScore: { score: 27, total: 30 },
                            title: "Elementary Mathematics I",
                            modules: [
                                {
                                    id: "MTH101_m1",
                                    title: "Set Theory",
                                    units: [
                                        { 
                                            id: "MTH101_m1_u1", 
                                            title: "Elementary Sets Theory", 
                                            summary: `<h3>MTH101 — UNIT 1: ELEMENTARY SET THEORY 🎯</h3>
<p><strong>EXAM MASTER SUMMARY (NOUN 100L)</strong></p>

<h4>SECTION 1 — DEFINITIONS (Must Memorize!)</h4>

<h5>What is a Set?</h5>
<p>A set is a <strong>well-defined collection of objects</strong>.</p>
<ul>
  <li>❌ NOT a set → "collection of beautiful girls in NOUN" (arguable!)</li>
  <li>✅ IS a set → "collection of all rivers in Nigeria" (no argument!)</li>
</ul>
<p><strong>Key word:</strong> WELL-DEFINED = no arguments, no ambiguity</p>

<h5>Notation</h5>
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Example</th>
      <th>How to read</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Listing/Tabular</td>
      <td>A = {1, 2, 3}</td>
      <td>List all elements in { }</td>
    </tr>
    <tr>
      <td>Set-Builder</td>
      <td>A = {x | x is odd, x ≤ 9}</td>
      <td>"Set of all x SUCH THAT..."</td>
    </tr>
  </tbody>
</table>
<p>The | or : symbol = "such that"</p>

<h5>Membership</h5>
<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Meaning</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>x ∈ A</td>
      <td>x belongs to A</td>
      <td>3 ∈ {1,2,3} ✅</td>
    </tr>
    <tr>
      <td>x ∉ A</td>
      <td>x does not belong to A</td>
      <td>5 ∉ {1,2,3} ✅</td>
    </tr>
  </tbody>
</table>

<h5>Finite vs Infinite</h5>
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Rule</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Finite</td>
      <td>Counting has an endpoint</td>
      <td>English alphabet, days of week</td>
    </tr>
    <tr>
      <td>Infinite</td>
      <td>Counting NEVER ends</td>
      <td>{1,2,3,...}, even numbers</td>
    </tr>
  </tbody>
</table>
<p>⚠️ <strong>EXAM TRAP:</strong> Difficult to count ≠ Infinite!</p>
<ul>
  <li>Grains of sand = FINITE ✅</li>
  <li>Atoms in universe = FINITE ✅</li>
  <li>Natural numbers = INFINITE ✅</li>
  <li>The "..." dots at end of set = usually INFINITE</li>
</ul>

<h5>Equality of Sets (A = B)</h5>
<p><strong>THREE GOLDEN RULES:</strong></p>
<ol>
  <li>Same members = Equal</li>
  <li>Order does NOT matter → {1,2,3} = {3,2,1} ✅</li>
  <li>Repetition does NOT matter → {1,1,2} = {1,2} ✅</li>
</ol>
<p><strong>Solving with equations:</strong></p>
<p>A = {x | x² = 9} → solve: 3×3=9 ✅ and -3×-3=9 ✅<br>
Therefore A = {3,-3}</p>
<p>Remember: negative × negative = POSITIVE!</p>

<h5>Null Set (∅)</h5>
<p>A set with NO elements at all</p>
<ul>
  <li>Symbol: ∅ or { }</li>
  <li>A set is NULL when conditions are impossible to satisfy:</li>
  <li>{x | x is positive AND negative} = ∅ (impossible!)</li>
  <li>{x | x² = 4, x is odd} = ∅ (solutions 2,-2 are both EVEN!)</li>
  <li>{x | x is a 1000 year old student} = ∅ (impossible!)</li>
</ul>

<h4>SECTION 2 — SUBSETS (Very Important!)</h4>

<h5>Basic Subsets</h5>
<p>A ⊂ B means every element of A is found in B</p>
<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>A ⊂ B</td><td>A is a subset of B</td></tr>
    <tr><td>B ⊃ A</td><td>B is a superset of A</td></tr>
    <tr><td>A ⊄ B</td><td>A is NOT a subset of B</td></tr>
  </tbody>
</table>
<p><strong>Two Special Rules (Always True):</strong></p>
<ul>
  <li>∅ ⊂ A → Null set is subset of EVERY set</li>
  <li>A ⊂ A → Every set is a subset of itself</li>
</ul>

<h5>Proper Subsets</h5>
<p>A is a proper subset of B if: A ⊂ B AND A ≠ B</p>
<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A={1,2} and B={1,2,3,4}</td>
      <td>A is PROPER subset ✅</td>
    </tr>
    <tr>
      <td>A={1,2} and B={1,2}</td>
      <td>A is subset but NOT proper ✅</td>
    </tr>
  </tbody>
</table>

<h5>Comparability</h5>
<table>
  <thead>
    <tr>
      <th>Situation</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A ⊂ B OR B ⊂ A</td>
      <td>Comparable</td>
    </tr>
    <tr>
      <td>A ⊄ B AND B ⊄ A</td>
      <td>NOT Comparable</td>
    </tr>
  </tbody>
</table>
<p>⚠️ <strong>BIGGEST EXAM TRAP:</strong><br>
Sharing SOME elements ≠ Comparable! ALL elements of one set must be in the other!</p>
<p><strong>Example:</strong> A={1,2} and B={2,3}</p>
<ul>
  <li>1∈A but 1∉B → A ⊄ B</li>
  <li>3∈B but 3∉A → B ⊄ A</li>
  <li>Therefore: NOT COMPARABLE ✅</li>
</ul>
<p><strong>Theorem 1.1:</strong> If A⊂B and B⊂C then A⊂C<br>
(Mangoes ⊂ Fruits ⊂ Food → Mangoes ⊂ Food)</p>

<h5>Sets of Sets (Family of Sets)</h5>
<p><strong>Simple rule:</strong></p>
<ul>
  <li>Element has { } = it IS a set</li>
  <li>Element has no { } = it is NOT a set</li>
</ul>
<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{1,2},{3,4},{5,6}}</td>
      <td>✅ Family of sets (ALL have { })</td>
    </tr>
    <tr>
      <td>{2,{1,3},4,{2,5}}</td>
      <td>❌ NOT a family (2 and 4 have no { })</td>
    </tr>
  </tbody>
</table>

<h5>Universal Set (U)</h5>
<p>The set that contains ALL other sets under discussion</p>
<p>Changes based on context!</p>
<ul>
  <li>Studying numbers → U = All Real Numbers</li>
  <li>Studying football clubs → U = All football clubs</li>
  <li>Every other set is a SUBSET of U</li>
</ul>

<h5>Power Set (2^S)</h5>
<p>The family of ALL possible subsets of S</p>
<p><strong>Formula:</strong> If S has n elements → Power set has 2^n subsets</p>
<table>
  <thead>
    <tr>
      <th>n elements</th>
      <th>2^n subsets</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td></tr>
    <tr><td>2</td><td>4</td></tr>
    <tr><td>3</td><td>8</td></tr>
    <tr><td>4</td><td>16</td></tr>
    <tr><td>5</td><td>32</td></tr>
  </tbody>
</table>
<p><strong>TWO things ALWAYS in every power set:</strong></p>
<ul>
  <li>∅ (empty set)</li>
  <li>S itself (the original set)</li>
</ul>
<p><strong>How to list — go GROUP BY GROUP:</strong></p>
<p>S = {a,b,c}</p>
<ul>
  <li>0 elements → ∅</li>
  <li>1 element → {a},{b},{c}</li>
  <li>2 elements → {a,b},{a,c},{b,c}</li>
  <li>3 elements → {a,b,c}</li>
  <li>Total = 8 = 2³ ✅</li>
</ul>

<h5>Disjoint Sets</h5>
<p>Two sets are disjoint if they share NO elements in common</p>
<table>
  <thead>
    <tr>
      <th>Situation</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No common elements</td>
      <td>Disjoint</td>
    </tr>
    <tr>
      <td>Even ONE common element</td>
      <td>NOT Disjoint</td>
    </tr>
  </tbody>
</table>
<p><strong>Examples:</strong></p>
<ul>
  <li>{1,2,3} and {4,5,6} → Disjoint ✅</li>
  <li>{a,b,c} and {c,d,e} → NOT Disjoint (c is common!)</li>
  <li>Even numbers and Odd numbers → Disjoint ✅</li>
</ul>

<h4>SECTION 3 — VENN DIAGRAMS</h4>
<p><strong>Three Cases:</strong></p>
<ul>
  <li><strong>Case 1 — A ⊂ B:</strong> Circle A sits COMPLETELY inside circle B</li>
  <li><strong>Case 2 — Disjoint:</strong> Two circles COMPLETELY separate</li>
  <li><strong>Case 3 — Overlap:</strong> Circles partially overlap — shared elements in the MIDDLE</li>
</ul>
<p><strong>How to place elements:</strong></p>
<p>A = {1,2,3,4} and B = {3,4,5,6}</p>
<ul>
  <li>A only → 1,2 (left region)</li>
  <li>Both (overlap) → 3,4 (middle region)</li>
  <li>B only → 5,6 (right region)</li>
</ul>

<h4>SECTION 4 — AXIOMS (Know the Names!)</h4>
<table>
  <thead>
    <tr>
      <th>Axiom</th>
      <th>What it means</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Axiom of Extension</td>
      <td>Two sets are equal if they have exactly the same elements (= Equality of Sets)</td>
    </tr>
    <tr>
      <td>Axiom of Specification</td>
      <td>You can form a new set from any set using a condition P(x) (= Set-Builder Notation)</td>
    </tr>
  </tbody>
</table>

<h4>SECTION 5 — ALL SYMBOLS QUICK REFERENCE</h4>
<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>{ }</td><td>Set brackets</td></tr>
    <tr><td>| or :</td><td>Such that</td></tr>
    <tr><td>x ∈ A</td><td>x belongs to A</td></tr>
    <tr><td>x ∉ A</td><td>x does not belong to A</td></tr>
    <tr><td>A ⊂ B</td><td>A is a subset of B</td></tr>
    <tr><td>A ⊄ B</td><td>A is NOT a subset of B</td></tr>
    <tr><td>B ⊃ A</td><td>B is a superset of A</td></tr>
    <tr><td>A = B</td><td>A equals B</td></tr>
    <tr><td>A ≠ B</td><td>A does not equal B</td></tr>
    <tr><td>∅</td><td>Null/empty set</td></tr>
    <tr><td>U</td><td>Universal set</td></tr>
    <tr><td>2^S</td><td>Power set of S</td></tr>
  </tbody>
</table>

<h4>SECTION 6 — TOP 10 EXAM QUESTIONS & ANSWERS</h4>

<p><strong>Q1. Is "the collection of fast cars in Nigeria" a set?</strong><br>
NO — "fast" is not well-defined. People will argue about what counts as fast.</p>

<p><strong>Q2. Write A = {2,4,6,8,10} in set-builder notation</strong><br>
A = {x | x is an even number, x ≤ 10}</p>

<p><strong>Q3. Let A = {1,2,3,4,5}. Is 3 ∈ A? Is 6 ∈ A?</strong><br>
3 ∈ A ✅ (3 is in the set)<br>
6 ∉ A ✅ (6 is not in the set)</p>

<p><strong>Q4. Is {x | x is a multiple of 3} finite or infinite?</strong><br>
INFINITE — multiples of 3 go on forever (3,6,9,12,...)</p>

<p><strong>Q5. Are A={1,1,2,3} and B={3,2,1} equal?</strong><br>
YES — repetition and order don't matter. Both contain {1,2,3}</p>

<p><strong>Q6. Is A={x | x²=16, x is odd} a null set?</strong><br>
YES — x²=16 gives x=4 and x=-4, both are EVEN. No odd solution exists. A=∅</p>

<p><strong>Q7. A={1,2} and B={1,2,3,4}. Is A a proper subset of B?</strong><br>
YES — A⊂B ✅ and A≠B ✅ therefore A is a proper subset</p>

<p><strong>Q8. How many subsets does S={a,b,c,d} have?</strong><br>
2⁴ = 16 subsets</p>

<p><strong>Q9. Are A={1,2,3} and B={4,5,6} comparable?</strong><br>
NO — A⊄B and B⊄A. They share no elements at all.</p>

<p><strong>Q10. Draw a Venn diagram for A={p,q,r} and B={r,s,t}</strong><br>
A only → p,q (left circle)<br>
Both → r (overlap/middle)<br>
B only → s,t (right circle)</p>

<h4>SECTION 7 — COMMON MISTAKES TO AVOID ⚠️</h4>
<ul>
  <li>❌ Saying a set is infinite just because it's hard to count</li>
  <li>❌ Saying sets are comparable just because they share SOME elements</li>
  <li>❌ Forgetting ∅ when listing power set subsets</li>
  <li>❌ Forgetting the original set S when listing power set subsets</li>
  <li>❌ Saying {1,1,2} ≠ {1,2} — repetition doesn't matter!</li>
  <li>❌ Confusing "subset" with "proper subset" — proper means A≠B too!</li>
  <li>❌ Forgetting that ∅ is a subset of EVERY set</li>
  <li>❌ Writing set-builder notation without the "such that" symbol | or :</li>
</ul>

<p><strong>Study hard and good luck! 💪</strong></p>` 
                                        },
                                        { 
                                            id: "MTH101_m1_u2", 
                                            title: "Basic Set Operations", 
                                            summary: `<h3>MTH101 — Unit 2: Basic Set Operations</h3>
<p><strong>Exam Summary, Practice Questions & Full Solutions</strong></p>

<h4>Section 1 — Overview</h4>
<p>Set operations work just like arithmetic operations on numbers, but instead of producing a new number, they produce a new set.</p>
<table>
  <thead>
    <tr>
      <th>Operation</th>
      <th>Symbol</th>
      <th>What it does</th>
      <th>Arithmetic Equivalent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Union</td>
      <td>A∪B</td>
      <td>ALL elements from both sets</td>
      <td>Addition (A + B)</td>
    </tr>
    <tr>
      <td>Intersection</td>
      <td>A∩B</td>
      <td>ONLY elements common to both</td>
      <td>No direct equivalent</td>
    </tr>
    <tr>
      <td>Difference</td>
      <td>A − B</td>
      <td>Elements in A but NOT in B</td>
      <td>Subtraction (A − B)</td>
    </tr>
    <tr>
      <td>Complement</td>
      <td>A′</td>
      <td>All elements in U NOT in A</td>
      <td>No direct equivalent</td>
    </tr>
  </tbody>
</table>

<h4>Section 2 — Union (A∪B)</h4>
<h5>Definition</h5>
<p>The union of sets A and B is the set of ALL elements that belong to A or B or BOTH.</p>
<p><strong>Formal notation:</strong> A∪B = {x | x∈A or x∈B}</p>
<p><strong>Key rule:</strong> Repetition is ignored — shared elements appear only ONCE.</p>

<h5>Key Remarks</h5>
<ul>
  <li>A∪B = B∪A (Order does not matter — Commutative)</li>
  <li>A ⊂ (A∪B) and B ⊂ (A∪B) — both A and B are subsets of their union</li>
</ul>

<h5>Example</h5>
<p>Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}</p>
<p>A∪B = {1, 2, 3, 4, 5, 6}</p>
<p>Note: 3 and 4 appear in both sets but are written only once.</p>

<h4>Section 3 — Intersection (A∩B)</h4>
<h5>Definition</h5>
<p>The intersection of sets A and B is the set of elements COMMON to both A and B.</p>
<p><strong>Formal notation:</strong> A∩B = {x | x∈A and x∈B}</p>

<h5>Key Remarks</h5>
<ul>
  <li>A∩B = B∩A (Order does not matter — Commutative)</li>
  <li>(A∩B) ⊂ A and (A∩B) ⊂ B — intersection is a subset of both sets</li>
  <li>If A and B are disjoint, then A∩B = ∅ (null set)</li>
</ul>

<h5>Example</h5>
<p>Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}</p>
<p>A∩B = {3, 4}</p>
<p>Only 3 and 4 appear in both sets.</p>

<h4>Section 4 — Difference (A − B)</h4>
<h5>Definition</h5>
<p>The difference of sets A and B is elements that belong to A but do NOT belong to B.</p>
<p><strong>Formal notation:</strong> A − B = {x | x∈A, x∉B}</p>
<p><strong>IMPORTANT:</strong> A − B ≠ B − A — Order ALWAYS matters in Difference!</p>

<h5>Key Remarks</h5>
<ul>
  <li>(A − B) ⊂ A — the difference is always a subset of A</li>
  <li>(A−B), A∩B, and (B−A) are mutually disjoint</li>
  <li>A − B = A∩B′ — difference can be written using complement and intersection</li>
</ul>

<h5>Example</h5>
<p>Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}</p>
<p>A − B = {1, 2} (remove 3 and 4 because they are in B)</p>
<p>B − A = {5, 6} (remove 3 and 4 because they are in A)</p>

<h4>Section 5 — Complement (A′)</h4>
<h5>Definition</h5>
<p>The complement of A is the set of ALL elements in the Universal set U that do NOT belong to A.</p>
<p><strong>Formal notation:</strong> A′ = {x | x∈U, x∉A}</p>

<h5>Key Remarks</h5>
<ul>
  <li>A∪A′ = U — A and its complement together make the whole universal set</li>
  <li>A∩A′ = ∅ — A and its complement share nothing (disjoint)</li>
  <li>U′ = ∅ and ∅′ = U</li>
  <li>(A′)′ = A — complement of complement gives back original set</li>
  <li>A − B = A∩B′ — useful connection between difference and complement</li>
</ul>

<h5>Example</h5>
<p>Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {2, 4, 6, 8, 10}</p>
<p>A′ = {1, 3, 5, 7, 9}</p>
<p>A∪A′ = {1,2,3,4,5,6,7,8,9,10} = U ✔</p>
<p>A∩A′ = ∅ ✔</p>

<h4>Section 6 — Practice Questions</h4>
<p><em>Try all questions before checking the answers in Section 7!</em></p>

<h5>Part A — Identify the Operation</h5>
<p><strong>Q1.</strong> A teacher combines students who passed Maths and students who passed English into one list. What operation is this?</p>
<p><strong>Q2.</strong> A teacher wants only students who passed BOTH Maths AND English. What operation is this?</p>
<p><strong>Q3.</strong> A teacher wants students who passed Maths but NOT English. What operation is this?</p>
<p><strong>Q4.</strong> A teacher wants all students in the school who did NOT pass Maths. What operation is this?</p>

<h5>Part B — Computation</h5>
<p>Use these sets for Questions 5–12:</p>
<p>U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}<br>
A = {1, 2, 3, 4, 5}<br>
B = {3, 4, 5, 6, 7}</p>
<p><strong>Q5.</strong> Find A∪B</p>
<p><strong>Q6.</strong> Find A∩B</p>
<p><strong>Q7.</strong> Find A − B</p>
<p><strong>Q8.</strong> Find B − A</p>
<p><strong>Q9.</strong> Find A′</p>
<p><strong>Q10.</strong> Find B′</p>
<p><strong>Q11.</strong> Find A∪A′</p>
<p><strong>Q12.</strong> Verify that A − B = A∩B′ (show full working)</p>

<h5>Part C — True or False</h5>
<p><strong>Q13.</strong> A∪B = B∪A</p>
<p><strong>Q14.</strong> A − B = B − A</p>
<p><strong>Q15.</strong> A∩A′ = U</p>
<p><strong>Q16.</strong> If A and B are disjoint then A∩B = ∅</p>
<p><strong>Q17.</strong> (A′)′ = A</p>

<h5>Part D — Spot the Mistake</h5>
<p><strong>Q18.</strong> A student solved A∪B where A = {1,2,3} and B = {2,3,4,5} and got {1,2,2,3,3,4,5}. What is wrong and what is the correct answer?</p>
<p><strong>Q19.</strong> A student said A − B = B − A always. What is wrong with this?</p>

<h5>Part E — Mixed Challenge</h5>
<p>Use: U = {a,b,c,d,e,f,g,h}, A = {a,b,c,d}, B = {c,d,e,f}</p>
<p><strong>Q20.</strong> Find A∪B</p>
<p><strong>Q21.</strong> Find A∩B</p>
<p><strong>Q22.</strong> Find A − B</p>
<p><strong>Q23.</strong> Find B − A</p>
<p><strong>Q24.</strong> Find A′</p>
<p><strong>Q25.</strong> Find (A′)′ and explain why</p>

<h4>Section 7 — Full Answers & Solutions</h4>

<h5>Part A — Answers</h5>
<p><strong>Q1:</strong> Union — combining two lists into one</p>
<p><strong>Q2:</strong> Intersection — finding students common to both lists</p>
<p><strong>Q3:</strong> Difference — elements in Maths but NOT in English</p>
<p><strong>Q4:</strong> Complement — all students in U NOT in the Maths set</p>

<h5>Part B — Solutions</h5>
<p><strong>Q5 A∪B:</strong> {1, 2, 3, 4, 5, 6, 7} — all elements from both sets, no repetition</p>
<p><strong>Q6 A∩B:</strong> {3, 4, 5} — only elements appearing in BOTH sets</p>
<p><strong>Q7 A − B:</strong> {1, 2} — elements in A that are NOT in B (remove 3,4,5)</p>
<p><strong>Q8 B − A:</strong> {6, 7} — elements in B that are NOT in A (remove 3,4,5)</p>
<p><strong>Q9 A′:</strong> {6, 7, 8, 9, 10} — elements in U not in A</p>
<p><strong>Q10 B′:</strong> {1, 2, 8, 9, 10} — elements in U not in B</p>
<p><strong>Q11 A∪A′:</strong> {1,2,3,4,5,6,7,8,9,10} = U ✔ — proves A∪A′ = U</p>
<p><strong>Q12 — Verify A − B = A∩B′ (full working):</strong></p>
<p>Step 1: A − B = {1, 2} (elements in A not in B)<br>
Step 2: Find B′ = {1, 2, 8, 9, 10} (elements in U not in B)<br>
Step 3: A∩B′ = {1,2,3,4,5} ∩ {1,2,8,9,10} = {1, 2}</p>
<p><strong>Both give {1, 2} ∴ A − B = A∩B′ ✔</strong></p>

<h5>Part C — True or False</h5>
<p><strong>Q13:</strong> TRUE — A∪B = B∪A (Union is commutative like addition)</p>
<p><strong>Q14:</strong> FALSE — A − B ≠ B − A (Order matters in Difference)</p>
<p><strong>Q15:</strong> FALSE — A∩A′ = ∅ not U (A and complement share nothing)</p>
<p><strong>Q16:</strong> TRUE — Disjoint means no common elements, so intersection = ∅</p>
<p><strong>Q17:</strong> TRUE — Complement of complement returns the original set</p>

<h5>Part D — Spot the Mistake</h5>
<p><strong>Q18:</strong></p>
<p>Mistake: The student wrote 2 and 3 twice — repetition was NOT ignored.</p>
<p><strong>Correct answer: A∪B = {1, 2, 3, 4, 5}</strong></p>
<p><strong>Q19:</strong></p>
<p>Mistake: A − B takes elements from A not in B, while B − A takes elements from B not in A.</p>
<p><strong>These will almost always give different results. Order ALWAYS matters in Difference.</strong></p>

<h5>Part E — Mixed Challenge Solutions</h5>
<p>Sets: U = {a,b,c,d,e,f,g,h}, A = {a,b,c,d}, B = {c,d,e,f}</p>
<p><strong>Q20 A∪B:</strong> {a, b, c, d, e, f}</p>
<p><strong>Q21 A∩B:</strong> {c, d}</p>
<p><strong>Q22 A − B:</strong> {a, b} (remove c,d from A because they are in B)</p>
<p><strong>Q23 B − A:</strong> {e, f} (remove c,d from B because they are in A)</p>
<p><strong>Q24 A′:</strong> {e, f, g, h} (elements in U not in A)</p>
<p><strong>Q25 (A′)′:</strong></p>
<p>Step 1: A′ = {e, f, g, h}<br>
Step 2: (A′)′ = elements in U not in A′ = {a, b, c, d} = A</p>
<p><strong>Why: The complement of a complement always returns you to the original set. (A′)′ = A always.</strong></p>

<h4>Section 8 — Quick Reference Card</h4>
<table>
  <thead>
    <tr>
      <th>Rule</th>
      <th>Formula</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Union commutative</td>
      <td>A∪B = B∪A</td>
      <td>Order doesn't matter</td>
    </tr>
    <tr>
      <td>Intersection commutative</td>
      <td>A∩B = B∩A</td>
      <td>Order doesn't matter</td>
    </tr>
    <tr>
      <td>Difference NOT commutative</td>
      <td>A−B ≠ B−A</td>
      <td>Order ALWAYS matters</td>
    </tr>
    <tr>
      <td>Union with complement</td>
      <td>A∪A′ = U</td>
      <td>Together they make everything</td>
    </tr>
    <tr>
      <td>Intersection with complement</td>
      <td>A∩A′ = ∅</td>
      <td>They share nothing</td>
    </tr>
    <tr>
      <td>Universal complement</td>
      <td>U′ = ∅</td>
      <td>Complement of everything = nothing</td>
    </tr>
    <tr>
      <td>Null complement</td>
      <td>∅′ = U</td>
      <td>Complement of nothing = everything</td>
    </tr>
    <tr>
      <td>Double complement</td>
      <td>(A′)′ = A</td>
      <td>Two complements cancel out</td>
    </tr>
    <tr>
      <td>Difference via complement</td>
      <td>A−B = A∩B′</td>
      <td>Useful alternative formula</td>
    </tr>
    <tr>
      <td>Disjoint intersection</td>
      <td>A∩B = ∅</td>
      <td>If A and B share no elements</td>
    </tr>
  </tbody>
</table>

<p><strong>Good luck on your exam! You've got this! 🌟</strong></p>` 
                                        },
                                        { 
                                            id: "MTH101_m1_u3", 
                                            title: "Set of Numbers", 
                                            summary: `<h3>MTH101 — Unit 3: Set of Numbers</h3>
<p><strong>The Number Family Tree — Bags Inside Bags</strong></p>

<div style="background: var(--bg); border-left: 4px solid var(--accent); padding: 16px; border-radius: 8px; margin: 16px 0; font-family: var(--font-mono); font-size: 14px; line-height: 1.8;">
<strong style="color: var(--accent);">COMPLEX NUMBERS</strong> (biggest — a + bi, e.g. 3+2i)<br>
└── <strong style="color: #2563eb;">REAL NUMBERS ℝ</strong> (universal set — everything on the number line)<br>
&nbsp;&nbsp;&nbsp;&nbsp;├── <strong style="color: #16a34a;">RATIONAL NUMBERS ℚ</strong> (any p/q fraction)<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── <strong style="color: #d97706;">INTEGERS ℤ</strong> (...-2, -1, 0, 1, 2...)<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── NEGATIVE INTEGERS (-1, -2, -3...)<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── ZERO (0)<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <strong style="color: #dc2626;">NATURAL NUMBERS ℕ</strong> (1, 2, 3...)<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── PRIME NUMBERS (2, 3, 5, 7, 11...)<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── <strong style="color: #9333ea;">IRRATIONAL NUMBERS ℚ'</strong> (√2, √3, π...)
</div>

<p class="callout callout-warning">
<strong>Key relationship to memorise:</strong> <span style="font-family: var(--font-mono); font-size: 16px; font-weight: 700;">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</span><br>
(small bag inside bigger bag inside even bigger bag)
</p>

<h4>1. Types of Numbers — Simple Definitions</h4>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Simple meaning</th>
      <th>Nigerian example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: #dc2626;">Natural ℕ</strong></td>
      <td>Counting numbers 1, 2, 3…</td>
      <td>Counting oranges at the market</td>
    </tr>
    <tr>
      <td><strong style="color: #d97706;">Integers ℤ</strong></td>
      <td>Whole numbers including zero and negatives</td>
      <td>Bank balance: ₦500 or -₦200 (debt)</td>
    </tr>
    <tr>
      <td><strong style="color: #16a34a;">Rational ℚ</strong></td>
      <td>Any number written as p/q (fraction)</td>
      <td>Sharing ₦300 among 4 people = 300/4 = ₦75</td>
    </tr>
    <tr>
      <td><strong style="color: #9333ea;">Irrational ℚ'</strong></td>
      <td>Cannot write as p/q — decimal never stops, never repeats</td>
      <td>√2 = 1.41421356... like NEPA — no pattern!</td>
    </tr>
    <tr>
      <td><strong style="color: #2563eb;">Real ℝ</strong></td>
      <td>Every number on the number line</td>
      <td>Every number you will ever meet in MTH101</td>
    </tr>
    <tr>
      <td><strong style="color: #dc2626;">Prime</strong></td>
      <td>Only divisible by 1 and itself. <span style="background: #fee2e2; padding: 2px 6px; border-radius: 4px;">1 is NOT prime</span></td>
      <td>2, 3, 5, 7, 11, 13... (2 is the only even prime)</td>
    </tr>
  </tbody>
</table>

<h4>2. Closure — Does the Answer Stay in the Same Set?</h4>
<p><strong>Closed means:</strong> when you do the operation on two numbers from a set, the answer is still in that same set.</p>
<table>
  <thead>
    <tr>
      <th>Set</th>
      <th>Addition +</th>
      <th>Subtraction −</th>
      <th>Multiplication ×</th>
      <th>Division ÷</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: #dc2626;">Natural ℕ</strong></td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #dc2626; font-weight: 700;">✗ no (3−5=−2)</td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #dc2626; font-weight: 700;">✗ no (3÷5=0.6)</td>
    </tr>
    <tr>
      <td><strong style="color: #d97706;">Integers ℤ</strong></td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #dc2626; font-weight: 700;">✗ no (3÷7=0.43)</td>
    </tr>
    <tr>
      <td><strong style="color: #16a34a;">Rational ℚ</strong></td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes</td>
      <td style="color: #16a34a; font-weight: 700;">✓ yes**</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-danger" style="font-weight: 600;">
**Except dividing by zero — NEVER divide by zero!
</p>
<p class="callout callout-info">
<strong>Easy memory trick:</strong> each row gains one more ✓ as you go down.
</p>

<h4>3. Decimals — How to Tell Rational from Irrational</h4>
<table>
  <thead>
    <tr>
      <th>Decimal type</th>
      <th>Example</th>
      <th>Number type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Terminating</strong> (stops)</td>
      <td>3/8 = 0.375</td>
      <td style="color: #16a34a; font-weight: 700;">Rational</td>
    </tr>
    <tr>
      <td><strong>Non-terminating repeating</strong> (block repeats)</td>
      <td>2/11 = 0.1818…</td>
      <td style="color: #16a34a; font-weight: 700;">Rational</td>
    </tr>
    <tr>
      <td><strong>Non-terminating non-repeating</strong> (no pattern)</td>
      <td>π = 3.14159…</td>
      <td style="color: #9333ea; font-weight: 700;">Irrational</td>
    </tr>
  </tbody>
</table>

<h5>Converting Repeating Decimals to Fractions:</h5>
<ul>
  <li><strong style="color: #d97706;">1 repeating digit → put over 9</strong> → 0.777… = 7/9</li>
  <li><strong style="color: #d97706;">2 repeating digits → put over 99</strong> → 0.181818… = 18/99 = 2/11</li>
  <li><strong style="color: #d97706;">3 repeating digits → put over 999</strong></li>
</ul>

<h4>4. Inequalities — Ordering Numbers</h4>
<p><strong>Definition:</strong> a &lt; b means b − a is positive. On the number line, a is to the LEFT of b.</p>
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Simple meaning</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P1</td>
      <td>Two numbers: always a&lt;b, a=b, or b&lt;a</td>
      <td>Your score vs friend's score — one must be true</td>
    </tr>
    <tr>
      <td>P2</td>
      <td>If a&lt;b and b&lt;c, then a&lt;c</td>
      <td>Emeka younger than Tunde, Tunde younger than Bola → Emeka youngest</td>
    </tr>
    <tr>
      <td>P3</td>
      <td>Add same number to both sides — inequality stays</td>
      <td>₦200 &lt; ₦500. Both get ₦100 extra → ₦300 &lt; ₦600 still</td>
    </tr>
    <tr>
      <td>P4</td>
      <td>Multiply by positive — inequality stays</td>
      <td>2 &lt; 5, multiply by 3 → 6 &lt; 15 ✓</td>
    </tr>
    <tr>
      <td style="background: #fef3c7;"><strong style="color: #dc2626;">P5 ⚠️</strong></td>
      <td style="background: #fef3c7;"><strong style="color: #dc2626;">Multiply by NEGATIVE — inequality FLIPS!</strong></td>
      <td style="background: #fef3c7;">2 &lt; 5, multiply by −3 → −6 &gt; −15</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-danger" style="font-weight: 700; font-size: 15px;">
Golden rule: Multiplying or dividing by a negative number always FLIPS the inequality sign!<br>
&lt; becomes &gt; and &gt; becomes &lt;
</p>

<h4>5. Absolute Value — Distance from Zero</h4>
<p><strong>|x| = distance between x and zero.</strong> Always positive or zero — distance can never be negative!</p>
<ul>
  <li>If x is positive: <strong style="color: #16a34a;">|7| = 7</strong></li>
  <li>If x is negative: <strong style="color: #16a34a;">|−7| = 7</strong></li>
  <li>Zero: <strong>|0| = 0</strong></li>
  <li>Distance between two points: <strong style="color: #2563eb;">|a − b| = |b − a|</strong> (order doesn't matter)</li>
</ul>

<table>
  <thead>
    <tr>
      <th>Statement</th>
      <th>Meaning</th>
      <th>On number line</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>|x| &lt; 5</strong></td>
      <td>Within 5 steps of zero</td>
      <td style="color: #16a34a; font-weight: 700;">−5 &lt; x &lt; 5</td>
    </tr>
    <tr>
      <td><strong>|x| &lt; 3</strong></td>
      <td>Within 3 steps of zero</td>
      <td style="color: #16a34a; font-weight: 700;">−3 &lt; x &lt; 3</td>
    </tr>
    <tr>
      <td><strong>|x| &lt; n</strong></td>
      <td>Within n steps of zero</td>
      <td style="color: #16a34a; font-weight: 700;">−n &lt; x &lt; n</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-info">
<strong>Lagos Island example:</strong> if you can't walk more than 5 steps from zero, you must stay between −5 and 5!
</p>

<h4>6. Intervals — Sets of Numbers Between Two Points</h4>
<p class="callout callout-warning" style="font-weight: 700;">
The bracket rule — most important thing to memorise!
</p>
<table>
  <thead>
    <tr>
      <th>Bracket</th>
      <th>Type</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-size: 20px; font-weight: 700; color: #dc2626;">( )</td>
      <td><strong style="color: #dc2626;">OPEN</strong></td>
      <td>Endpoint NOT included — Door is open — number escapes!</td>
    </tr>
    <tr>
      <td style="font-size: 20px; font-weight: 700; color: #16a34a;">[ ]</td>
      <td><strong style="color: #16a34a;">CLOSED</strong></td>
      <td>Endpoint IS included — Door is closed — number trapped inside!</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Notation</th>
      <th>Type</th>
      <th>Meaning</th>
      <th>Nigerian example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>(2, 5)</strong></td>
      <td>Open</td>
      <td>2 and 5 excluded</td>
      <td>Age strictly between 16 and 25 — not 16 or 25 themselves</td>
    </tr>
    <tr>
      <td><strong>[2, 5]</strong></td>
      <td>Closed</td>
      <td>2 and 5 included</td>
      <td>Score from 40 to 100 including 40 and 100</td>
    </tr>
    <tr>
      <td><strong>(2, 5]</strong></td>
      <td>Open-Closed</td>
      <td>2 excluded, 5 included</td>
      <td>Danfo: weight above 40kg up to and including 100kg</td>
    </tr>
    <tr>
      <td><strong>[2, 5)</strong></td>
      <td>Closed-Open</td>
      <td>2 included, 5 excluded</td>
      <td>NOUN CAT: score at least 40 but less than 70</td>
    </tr>
  </tbody>
</table>

<h4>7. Infinite Intervals — Going On Forever</h4>
<table>
  <thead>
    <tr>
      <th>Notation</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>(1, ∞)</strong></td>
      <td>x &gt; 1 → all numbers above 1, not including 1</td>
    </tr>
    <tr>
      <td><strong>[2, ∞)</strong></td>
      <td>x ≥ 2 → all numbers above 2, including 2</td>
    </tr>
    <tr>
      <td><strong>(−∞, 3)</strong></td>
      <td>x &lt; 3 → all numbers below 3, not including 3</td>
    </tr>
    <tr>
      <td><strong>(−∞, 4]</strong></td>
      <td>x ≤ 4 → all numbers below 4, including 4</td>
    </tr>
    <tr>
      <td><strong>(−∞, ∞)</strong></td>
      <td>Every real number — the entire number line!</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-danger" style="font-weight: 700;">
Infinity ALWAYS uses ( ) — never [ ] — because you can never actually reach infinity!
</p>

<h4>8. Bounded and Unbounded Sets</h4>
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Meaning</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: #16a34a;">Bounded</strong></td>
      <td>Trapped inside a finite interval — has a wall on both sides</td>
      <td>{1, 1/2, 1/3…} fits inside [0,1] ✓</td>
    </tr>
    <tr>
      <td><strong style="color: #dc2626;">Unbounded</strong></td>
      <td>Goes on forever — no wall on at least one side</td>
      <td>{2, 4, 6, 8…} keeps going forever</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-info">
<strong>Key rule:</strong> Every finite set is always bounded!
</p>
<p class="callout callout-info">
<strong>Nigerian example:</strong> Bounded = your compound with a wall on all sides. Unbounded = Lagos lagoon — goes on forever!
</p>

<h4>Exam Tips — Things Most Students Get Wrong</h4>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Common mistake</th>
      <th>Correct rule</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #fef3c7;">
      <td>1</td>
      <td>Thinking 1 is a prime number</td>
      <td><strong style="color: #dc2626;">1 is NOT prime — excluded by definition</strong></td>
    </tr>
    <tr style="background: #fee2e2;">
      <td>2</td>
      <td>Forgetting to flip inequality when multiplying by negative</td>
      <td><strong style="color: #dc2626;">Negative number → always flip &lt; to &gt; or &gt; to &lt;</strong></td>
    </tr>
    <tr style="background: #fef3c7;">
      <td>3</td>
      <td>Thinking 0 is irrational because it doesn't look like a fraction</td>
      <td><strong style="color: #16a34a;">0 = 0/1 → rational. Ask CAN it be written as p/q, not does it LOOK like one</strong></td>
    </tr>
    <tr style="background: #fee2e2;">
      <td>4</td>
      <td>Putting [ ] on infinity</td>
      <td><strong style="color: #dc2626;">Infinity always gets ( ) — you can never reach it</strong></td>
    </tr>
    <tr style="background: #fef3c7;">
      <td>5</td>
      <td>Thinking integers are closed under division</td>
      <td><strong style="color: #dc2626;">3 ÷ 7 = 0.43 — breaks out of ℤ. Integers NOT closed under division</strong></td>
    </tr>
    <tr style="background: #fee2e2;">
      <td>6</td>
      <td>Confusing ℕ ⊂ ℤ ⊂ ℚ direction</td>
      <td><strong style="color: #16a34a;">Natural is smallest, inside Integers, inside Rational, inside Real</strong></td>
    </tr>
  </tbody>
</table>

<p class="callout callout-success" style="font-weight: 600; text-align: center; font-size: 16px;">
Study hard and good luck! 💪
</p>` 
                                        }
                                    ]
                                },
                                {
                                    id: "MTH101_m2",
                                    title: "Sequences, Series and Equations",
                                    units: [
                                        { id: "MTH101_m2_u1", title: "Real Sequence and Series", summary: "" },
                                        { id: "MTH101_m2_u2", title: "Quadratic Equations", summary: "" },
                                        { id: "MTH101_m2_u3", title: "Mathematical Induction", summary: "" }
                                    ]
                                },
                                {
                                    id: "MTH101_m3",
                                    title: "Complex Numbers and Trigonometry",
                                    units: [
                                        { id: "MTH101_m3_u1", title: "Complex Numbers", summary: "" },
                                        { id: "MTH101_m3_u2", title: "Circular Measure", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── MTH102: Elementary Mathematics II ───
                        {
                            id: "MTH102",
                            code: "MTH102",
                            tmaScore: { score: 28, total: 30 },
                            title: "Elementary Mathematics II",
                            modules: [
                                {
                                    id: "MTH102_m1",
                                    title: "Functions",
                                    units: [
                                        { id: "MTH102_m1_u1", title: "Functions and Graphs", summary: "" },
                                        { id: "MTH102_m1_u2", title: "Limits", summary: "" },
                                        { id: "MTH102_m1_u3", title: "Idea of Continuity", summary: "" }
                                    ]
                                },
                                {
                                    id: "MTH102_m2",
                                    title: "Calculus of Differentiation",
                                    units: [
                                        { id: "MTH102_m2_u1", title: "The Derivative as Limit of Rate of Change", summary: "" },
                                        { id: "MTH102_m2_u2", title: "Differentiation Technique", summary: "" }
                                    ]
                                },
                                {
                                    id: "MTH102_m3",
                                    title: "Calculus of Integration",
                                    units: [
                                        { id: "MTH102_m3_u1", title: "Integration", summary: "" },
                                        { id: "MTH102_m3_u2", title: "Definite Integrals", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── PHY102: Electricity, Magnetism and Modern Physics ───
                        {
                            id: "PHY102",
                            code: "PHY102",
                            tmaScore: { score: 28, total: 30 },
                            title: "Electricity, Magnetism and Modern Physics",
                            modules: [
                                {
                                    id: "PHY102_m1",
                                    title: "Electrostatics",
                                    units: [
                                        { id: "PHY102_m1_u1", title: "Electric Charge, Force and Field", summary: "" },
                                        { id: "PHY102_m1_u2", title: "Gauss's Law", summary: "" },
                                        { id: "PHY102_m1_u3", title: "Electric Potential", summary: "" },
                                        { id: "PHY102_m1_u4", title: "Potential for Continuous Charge Distribution and Energy", summary: "" },
                                        { id: "PHY102_m1_u5", title: "Dielectrics and Capacitors", summary: "" }
                                    ]
                                },
                                {
                                    id: "PHY102_m2",
                                    title: "Current Electricity",
                                    units: [
                                        { id: "PHY102_m2_u1", title: "Electric Current", summary: "" },
                                        { id: "PHY102_m2_u2", title: "Direct-Current Circuits and Instruments", summary: "" }
                                    ]
                                },
                                {
                                    id: "PHY102_m3",
                                    title: "Magnetism",
                                    units: [
                                        { id: "PHY102_m3_u1", title: "The Magnetic Field", summary: "" },
                                        { id: "PHY102_m3_u2", title: "Motion of Charge Particles in Electric and Magnetic Field", summary: "" },
                                        { id: "PHY102_m3_u3", title: "Electrolysis and Cells", summary: "" },
                                        { id: "PHY102_m3_u4", title: "Thermal Effects of Electric Currents and Electric Power", summary: "" },
                                        { id: "PHY102_m3_u5", title: "Magnetic Properties of Matter", summary: "" },
                                        { id: "PHY102_m3_u6", title: "Terrestrial Magnetism", summary: "" }
                                    ]
                                },
                                {
                                    id: "PHY102_m4",
                                    title: "Electromagnetic Induction and AC",
                                    units: [
                                        { id: "PHY102_m4_u1", title: "Electromagnetic Induction I", summary: "" },
                                        { id: "PHY102_m4_u2", title: "Electromagnetic Induction II", summary: "" },
                                        { id: "PHY102_m4_u3", title: "Alternating Current Theory I", summary: "" },
                                        { id: "PHY102_m4_u4", title: "Alternating Current Theory II", summary: "" },
                                        { id: "PHY102_m4_u5", title: "Thermoelectric, Photoelectric and Thermionic Effects", summary: "" }
                                    ]
                                },
                                {
                                    id: "PHY102_m5",
                                    title: "Modern Physics",
                                    units: [
                                        { id: "PHY102_m5_u1", title: "Modern Physics I", summary: "" },
                                        { id: "PHY102_m5_u2", title: "Modern Physics II", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── PHY191: General Physics Practical ───
                        {
                            id: "PHY191",
                            code: "PHY191",
                            title: "General Physics Practical I",
                            modules: [
                                {
                                    id: "PHY191_m1",
                                    title: "Practical Foundations",
                                    units: [
                                        { id: "PHY191_m1_u1", title: "Graphs", summary: "" },
                                        { id: "PHY191_m1_u2", title: "Errors in Measurement", summary: "" },
                                        { id: "PHY191_m1_u3", title: "Error Analysis", summary: "" }
                                    ]
                                },
                                {
                                    id: "PHY191_m2",
                                    title: "Mechanics Experiments",
                                    units: [
                                        { id: "PHY191_m2_u1", title: "Simple Pendulum", summary: "" },
                                        { id: "PHY191_m2_u2", title: "Spiral Spring", summary: "" },
                                        { id: "PHY191_m2_u3", title: "Force Board and Equilibrium", summary: "" },
                                        { id: "PHY191_m2_u4", title: "Moment of Inertia", summary: "" },
                                        { id: "PHY191_m2_u5", title: "Acceleration Due to Gravity", summary: "" }
                                    ]
                                },
                                {
                                    id: "PHY191_m3",
                                    title: "Heat and Properties of Matter",
                                    units: [
                                        { id: "PHY191_m3_u1", title: "Specific Heat Capacity", summary: "" },
                                        { id: "PHY191_m3_u2", title: "Hooke's Law", summary: "" },
                                        { id: "PHY191_m3_u3", title: "Viscosity", summary: "" },
                                        { id: "PHY191_m3_u4", title: "Surface Tension", summary: "" },
                                        { id: "PHY191_m3_u5", title: "Meter Bridge and Resistance", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── CHM191: Introductory Practical Chemistry ───
                        {
                            id: "CHM191",
                            code: "CHM191",
                            title: "Introductory Practical Chemistry I",
                            modules: [
                                {
                                    id: "CHM191_m1",
                                    title: "Quantitative Inorganic Analysis",
                                    units: [
                                        { id: "CHM191_m1_u1", title: "Apparatus and Experimental Techniques", summary: "" },
                                        { id: "CHM191_m1_u2", title: "Units of Measurement", summary: "" },
                                        { id: "CHM191_m1_u3", title: "Preparation of Standard Solutions", summary: "" },
                                        { id: "CHM191_m1_u4", title: "Preparation and Standardization of Non-Standard Solutions", summary: "" },
                                        { id: "CHM191_m1_u5", title: "Volumetric Analysis: Acid-Base Titration", summary: "" },
                                        { id: "CHM191_m1_u6", title: "Acid-Base Standardization of a Non-Standard Solution", summary: "" },
                                        { id: "CHM191_m1_u7", title: "Acid-Base Determination of Percent Purity", summary: "" },
                                        { id: "CHM191_m1_u8", title: "Acid-Base Back Titration", summary: "" },
                                        { id: "CHM191_m1_u9", title: "Acid-Base Double Indicator Method", summary: "" }
                                    ]
                                },
                                {
                                    id: "CHM191_m2",
                                    title: "Redox and Physical Chemistry",
                                    units: [
                                        { id: "CHM191_m2_u1", title: "Oxidation-Reduction Reactions", summary: "" },
                                        { id: "CHM191_m2_u2", title: "Redox Titration: KMnO4 as Oxidant I", summary: "" },
                                        { id: "CHM191_m2_u3", title: "Redox Titration: KMnO4 as Oxidant II", summary: "" },
                                        { id: "CHM191_m2_u4", title: "Redox Titration: Iodimetry", summary: "" },
                                        { id: "CHM191_m2_u5", title: "Redox Reactivity Series in Metals", summary: "" },
                                        { id: "CHM191_m2_u6", title: "Energy Effects in Chemical Reactions", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── BIO191: General Practical Biology ───
                        {
                            id: "BIO191",
                            code: "BIO191",
                            title: "General Practical Biology",
                            modules: [
                                {
                                    id: "BIO191_m1",
                                    title: "Laboratory Basics",
                                    units: [
                                        { id: "BIO191_m1_u1", title: "What Practical Work in Biology Involves", summary: "" },
                                        { id: "BIO191_m1_u2", title: "Laboratory Organization", summary: "" },
                                        { id: "BIO191_m1_u3", title: "Handling Common Laboratory Equipment", summary: "" },
                                        { id: "BIO191_m1_u4", title: "Microscopy, Microscope Handling and Maintenance", summary: "" },
                                        { id: "BIO191_m1_u5", title: "Making Microscopic Measurements and Microscope Care", summary: "" }
                                    ]
                                },
                                {
                                    id: "BIO191_m2",
                                    title: "Specimen Collection and Preparation",
                                    units: [
                                        { id: "BIO191_m2_u1", title: "Procuring Animal Materials", summary: "" },
                                        { id: "BIO191_m2_u2", title: "Procuring Plant Materials", summary: "" },
                                        { id: "BIO191_m2_u3", title: "Killing, Preserving and Mounting Animal Materials", summary: "" },
                                        { id: "BIO191_m2_u4", title: "External Features of Plants: Observing Similarities and Differences", summary: "" },
                                        { id: "BIO191_m2_u5", title: "Preparation of Temporary Slides", summary: "" }
                                    ]
                                },
                                {
                                    id: "BIO191_m3",
                                    title: "Microbiology and Physiology",
                                    units: [
                                        { id: "BIO191_m3_u1", title: "Preparation of Stains and Reagents", summary: "" },
                                        { id: "BIO191_m3_u2", title: "Techniques for Microbial Culture and Gram Staining", summary: "" },
                                        { id: "BIO191_m3_u3", title: "Demonstrating Physiological Processes in Plants", summary: "" },
                                        { id: "BIO191_m3_u4", title: "Demonstrating Physiological Processes in Animals", summary: "" },
                                        { id: "BIO191_m3_u5", title: "Preparation Required for Dissection", summary: "" }
                                    ]
                                },
                                {
                                    id: "BIO191_m4",
                                    title: "Dissection and Morphology",
                                    units: [
                                        { id: "BIO191_m4_u1", title: "Dissection of Insects: General Anatomy", summary: "" },
                                        { id: "BIO191_m4_u2", title: "Morphology of Lower Vertebrates", summary: "" },
                                        { id: "BIO191_m4_u3", title: "Dissection of Dogfish: General Anatomy", summary: "" },
                                        { id: "BIO191_m4_u4", title: "Dissection of Toad: Musculature and Alimentary Canal", summary: "" },
                                        { id: "BIO191_m4_u5", title: "Dissection of Toad: Arterial System", summary: "" }
                                    ]
                                }
                            ]
                        },

                        // ─── GST102: Use of English and Communication Skills II ───
                        {
                            id: "GST102",
                            code: "GST102",
                            tmaScore: { score: 26, total: 30 },
                            title: "Use of English and Communication Skills II",
                            modules: [
                                {
                                    id: "GST102_m1",
                                    title: "Writing Skills I",
                                    units: [
                                        { id: "GST102_m1_u1", title: "Writing Paragraphs: Topic Sentence and Coherence", summary: `<h3>GST102 — Unit 1: Writing Paragraphs: Topic Sentence and Coherence</h3>

<h4>Section 1 — Key Definitions</h4>
<table>
  <thead><tr><th>Term</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td><strong>Paragraph</strong></td><td>A piece of writing unified by a central, controlling idea or theme.</td></tr>
    <tr><td><strong>Topic</strong></td><td>The central idea or theme of a paragraph.</td></tr>
    <tr><td><strong>Topic Sentence</strong></td><td>The sentence that expresses the main idea of a paragraph. It can be a statement, a generalisation or a problem.</td></tr>
    <tr><td><strong>Coherence</strong></td><td>The quality that makes a paragraph flow smoothly and logically from one sentence to the next.</td></tr>
    <tr><td><strong>Transitional Devices</strong></td><td>Words and phrases that connect sentences and show the logical relationship between ideas.</td></tr>
  </tbody>
</table>

<h4>Section 2 — The Topic Sentence</h4>
<h5>4 Positions of a Topic Sentence</h5>
<table>
  <thead><tr><th>Position</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td><strong>Beginning</strong></td><td>Most common. Reader knows the topic immediately. Easier for the writer to maintain focus.</td></tr>
    <tr><td><strong>End</strong></td><td>All sentences build up to it. Makes the conclusion more effective and powerful.</td></tr>
    <tr><td><strong>Middle</strong></td><td>Less common and more difficult to write.</td></tr>
    <tr><td><strong>Implied</strong></td><td>Not directly stated but suggested within the paragraph.</td></tr>
  </tbody>
</table>
<p class="callout callout-warning">⚠️ <strong>Key Rule:</strong> Every sentence in a paragraph must relate back to the topic sentence. This gives the paragraph <strong>UNITY</strong>.</p>

<h4>Section 3 — Developing the Topic</h4>
<p>A topic sentence alone is not enough. You must expand it using:</p>
<ul>
  <li><strong>Examples</strong> — giving specific instances to support the idea</li>
  <li><strong>Elaboration</strong> — explaining the idea in more detail</li>
  <li><strong>Illustration</strong> — using a specific case to demonstrate the idea</li>
  <li><strong>Summary</strong> — wrapping up the main point at the end</li>
</ul>
<p class="callout callout-info">💡 <strong>The 3-Stage Development Pattern:</strong><br>
1. <strong>Topic Sentence</strong> — state your main idea<br>
2. <strong>Development</strong> — support it with examples, elaboration or illustration<br>
3. <strong>Summary</strong> — wrap it up</p>

<h4>Section 4 — Coherence</h4>
<p>A coherent paragraph moves the reader <strong>logically and smoothly</strong> from one idea to the next.</p>
<ul>
  <li>Arrange sentences in a logical order</li>
  <li>Make sure each sentence leads naturally to the next</li>
  <li>Use transitional devices to connect ideas</li>
</ul>

<h4>Section 5 — Transitional Devices</h4>
<table>
  <thead><tr><th>Purpose</th><th>Words / Phrases</th></tr></thead>
  <tbody>
    <tr><td><strong>Result</strong></td><td>therefore, thus, consequently, as a result, hence</td></tr>
    <tr><td><strong>Examples</strong></td><td>for example, for instance, specifically, as an illustration</td></tr>
    <tr><td><strong>Comparison</strong></td><td>similarly, likewise</td></tr>
    <tr><td><strong>Contrast</strong></td><td>but, yet, still, however, nevertheless, on the other hand</td></tr>
    <tr><td><strong>Addition</strong></td><td>moreover, furthermore, also, too, besides, in addition</td></tr>
    <tr><td><strong>Time</strong></td><td>now, later, meanwhile, since then, after that, before that time</td></tr>
    <tr><td><strong>Sequence</strong></td><td>first, second, third, then, next, finally</td></tr>
  </tbody>
</table>

<h4>Section 6 — The 4 Examples in the Unit</h4>
<table>
  <thead><tr><th>Example</th><th>Topic Sentence Position</th><th>Development Method</th><th>Key Point</th></tr></thead>
  <tbody>
    <tr><td><strong>Example 1</strong> (Animals)</td><td>Beginning</td><td>Examples</td><td>Hunter, farmer, fisherman, city dweller</td></tr>
    <tr><td><strong>Example 2</strong> (War)</td><td>End</td><td>Build-up</td><td>Only war has truly progressed in history</td></tr>
    <tr><td><strong>Example 3</strong> (Sea life)</td><td>Beginning</td><td>Elaboration + Illustration</td><td>Codfish example</td></tr>
    <tr><td><strong>Example 4</strong> (Man spreads)</td><td>Beginning</td><td>Transitional devices</td><td>Firstly, secondly, moreover, most important of all</td></tr>
  </tbody>
</table>

<h4>Section 7 — Formula for a Good Paragraph</h4>
<p class="callout callout-info">
<strong>Topic Sentence</strong> + <strong>Development</strong> + <strong>Coherence</strong> + <strong>Transitional Devices</strong> = A Good Paragraph<br><br>
Topic sentence = the <strong>PROMISE</strong><br>
Development = <strong>KEEPING</strong> the promise<br>
Coherence = <strong>LOGICAL ORDER</strong><br>
Transitional devices = <strong>ROAD SIGNS</strong>
</p>

<h4>Final Exam Tips</h4>
<ul>
  <li>Always identify the topic sentence <strong>first</strong> before answering any question on a paragraph</li>
  <li>Know your transitional devices <strong>by category</strong> — exam questions love to test this</li>
  <li>Remember the <strong>4 positions</strong> of a topic sentence — beginning, end, middle, implied</li>
  <li><strong>Unity</strong> = every sentence relates to the topic &nbsp;|&nbsp; <strong>Coherence</strong> = smooth logical flow — they are different!</li>
  <li>The most common topic sentence position is the <strong>beginning</strong> — always your safest answer if unsure</li>
</ul>` },
                                        { id: "GST102_m1_u2", title: "Development of Paragraphs: Illustration and Description", summary: "" },
                                        { id: "GST102_m1_u3", title: "Development of Paragraphs: Cause and Effect and Definitions", summary: "" },
                                        { id: "GST102_m1_u4", title: "Formal Letters: Stylistic Forms and Essential Parts", summary: "" },
                                        { id: "GST102_m1_u5", title: "Formal Letters: Complaints and Requests", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST102_m2",
                                    title: "Writing Skills II",
                                    units: [
                                        { id: "GST102_m2_u1", title: "Formal Letters: Jobs, Ordering Goods and Government Letters", summary: "" },
                                        { id: "GST102_m2_u2", title: "Writing Reports I: Reporting Events", summary: "" },
                                        { id: "GST102_m2_u3", title: "Writing Reports II: Reporting Experiments", summary: "" },
                                        { id: "GST102_m2_u4", title: "Writing Summaries I: Techniques of Summarizing", summary: `<h3>GST102 — Unit 4: Writing Summaries I</h3>

<h4>Definition</h4>
<p>A <strong>summary</strong> is a shorter version of a passage containing only essential points — no extra details, no repetition, no decoration.</p>
<p class="callout callout-warning">🏆 <strong>Golden Rule:</strong> "Details are necessary in full-scale writing but NOT in summaries."</p>

<h4>The 4 Techniques of Summarizing</h4>

<h5>Technique 1 — Remove Subordinate Clauses</h5>
<p>Remove clauses that only add <strong>extra information</strong> to the main clause. Keep the main clause — it carries the core meaning.</p>
<table>
  <thead><tr><th>Original</th><th>Summary</th></tr></thead>
  <tbody>
    <tr>
      <td>"The Nile flows gently in the first half of the year, but later on, <u>when the melting snows and rains on the mountains swell its tributaries</u>, it overflows."</td>
      <td>"The Nile flows gently in the first half of the year but later on it overflows."</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-info">💡 The underlined part is a subordinate clause — it adds detail but the sentence still makes sense without it.</p>

<h5>Technique 2 — Remove Descriptive Words</h5>
<p>Remove non-essential <strong>adjectives, adverbs</strong> and <strong>descriptive phrases</strong> that do not change the core meaning.</p>
<table>
  <thead><tr><th>Original</th><th>Summary</th></tr></thead>
  <tbody>
    <tr>
      <td>"The <u>tall handsome</u> doctor <u>carefully</u> treated the sick <u>feverish crying little</u> child in the <u>busy hospital ward</u>."</td>
      <td>"The doctor treated the sick child."</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-info">💡 Only "sick" is kept because it is medically relevant. All other descriptors are decoration.</p>

<h5>Technique 3 — Eliminate Repetition</h5>
<p>If an idea is said <strong>more than once</strong>, keep only one version — the clearest one.</p>
<table>
  <thead><tr><th>Original</th><th>Summary</th></tr></thead>
  <tbody>
    <tr>
      <td>"John is intelligent. He is smart and clever and his brilliance is known by everyone in the school."</td>
      <td>"John is intelligent."</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-info">💡 Intelligent, smart, clever, and brilliance all say the same thing — keep only one.</p>

<h5>Technique 4 — Replace Lists with Generalisations</h5>
<p>Replace a <strong>list of examples</strong> with one general statement using words like: <strong>various, several, many, a number of, different kinds of</strong></p>
<table>
  <thead><tr><th>Original</th><th>Summary</th></tr></thead>
  <tbody>
    <tr>
      <td>"They used stone implements for tilling the soil, flint for their weapons and copper for tools."</td>
      <td>"They learnt the art of tool-making with various materials."</td>
    </tr>
  </tbody>
</table>
<p class="callout callout-info">💡 Three specific materials → one general statement. Useful words: <strong>various, several, many, a number of</strong></p>

<h4>Quick Reference — All 4 Techniques</h4>
<table>
  <thead><tr><th>#</th><th>Technique</th><th>What to remove/replace</th></tr></thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Remove subordinate clauses</td><td>Clauses starting with: when, which, who, because, although, if…</td></tr>
    <tr><td><strong>2</strong></td><td>Remove descriptive words</td><td>Adjectives, adverbs, descriptive phrases that add no core meaning</td></tr>
    <tr><td><strong>3</strong></td><td>Eliminate repetition</td><td>Synonyms and ideas repeated in different words</td></tr>
    <tr><td><strong>4</strong></td><td>Replace lists with generalisations</td><td>Lists of examples → various / several / many / a number of</td></tr>
  </tbody>
</table>

<h4>Main Clause vs Subordinate Clause</h4>
<table>
  <thead><tr><th>Type</th><th>Definition</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Main clause</strong></td><td>Carries the core meaning. Can stand alone.</td><td>"The Nile overflows."</td></tr>
    <tr><td><strong>Subordinate clause</strong></td><td>Adds extra information. Cannot stand alone.</td><td>"when the melting snows swell its tributaries"</td></tr>
  </tbody>
</table>` },
                                        { id: "GST102_m2_u5", title: "Writing Summaries II: More on Techniques of Summarizing", summary: `<h3>GST102 — Unit 5: Writing Summaries II</h3>
<p><strong>More on Techniques of Summarizing</strong></p>

<h4>What This Unit Is About</h4>
<p>Unit 5 teaches you how to write good summaries <strong>practically</strong> by working through 3 real passages. It shows you what to keep, what to remove and how to connect ideas properly.</p>

<h4>The 3-Step Formula</h4>
<ul>
  <li><strong>Step 1</strong> — Isolate the main point in each paragraph</li>
  <li><strong>Step 2</strong> — Put them together as one flowing summary</li>
  <li><strong>Step 3</strong> — Check for repetition and fix connections</li>
</ul>

<h4>What to KEEP vs What to REMOVE</h4>
<table>
  <thead><tr><th>✅ KEEP</th><th>❌ REMOVE</th></tr></thead>
  <tbody>
    <tr><td>The main idea of each paragraph</td><td>Specific numbers and figures</td></tr>
    <tr><td>General statements</td><td>Long examples and details</td></tr>
    <tr><td>Topic sentences</td><td>Repeated words and ideas</td></tr>
    <tr><td>Linking words that connect ideas</td><td>Unnecessary names and individual opinions</td></tr>
  </tbody>
</table>

<h4>Linking Words to Know</h4>
<table>
  <thead><tr><th>Purpose</th><th>Words</th></tr></thead>
  <tbody>
    <tr><td><strong>Adding a point</strong></td><td>Also, Furthermore, In addition</td></tr>
    <tr><td><strong>Contrast</strong></td><td>However, But, Yet, Although</td></tr>
    <tr><td><strong>Result</strong></td><td>Therefore, Thus, As a result</td></tr>
    <tr><td><strong>Example</strong></td><td>For example, For instance</td></tr>
  </tbody>
</table>

<h4>Topic Sentence vs Main Idea</h4>
<table>
  <thead><tr><th>Term</th><th>Definition</th></tr></thead>
  <tbody>
    <tr><td><strong>Topic sentence</strong></td><td>One sentence already in the text that states the main idea</td></tr>
    <tr><td><strong>Main idea</strong></td><td>The key message of the paragraph — sometimes gathered from several sentences</td></tr>
  </tbody>
</table>

<h4>Abbreviation Rule</h4>
<p class="callout callout-info">
<strong>First mention</strong> — write full name then put short form in brackets<br>
<strong>After that</strong> — use only the short form<br><br>
Example: Integrated Pest Management (IPM) was developed in the 1970s. IPM combines natural methods...
</p>

<h4>The 3 Passages and Their Core Lessons</h4>
<table>
  <thead><tr><th>Passage</th><th>Core Lesson</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Passage 1 — IPM</strong></td>
      <td>Pests are resistant to chemicals so farmers developed IPM which combines natural methods to control pests without depending on chemicals.</td>
    </tr>
    <tr>
      <td><strong>Passage 2 — Earthworms</strong></td>
      <td>Earthworms naturally improve soil by producing high quality topsoil and making soil porous, absorbent and consistent. They only need moisture, darkness and food.</td>
    </tr>
    <tr>
      <td><strong>Passage 3 — Volcanoes</strong></td>
      <td>Volcanic eruptions affect the earth's climate, come in cycles, occur where the earth's crust is weak and are related to earthquakes.</td>
    </tr>
  </tbody>
</table>

<p class="callout callout-warning">🏆 <strong>One Line to Remember Everything:</strong><br>
Find the main idea, remove the unnecessary, connect what remains.</p>` }
                                    ]
                                },
                                {
                                    id: "GST102_m3",
                                    title: "Speaking and Listening",
                                    units: [
                                        { id: "GST102_m3_u1", title: "Letters and Sounds in English", summary: "" },
                                        { id: "GST102_m3_u2", title: "English Vowels and Consonants", summary: "" },
                                        { id: "GST102_m3_u3", title: "Interviews", summary: "" },
                                        { id: "GST102_m3_u4", title: "Seminar Presentation", summary: "" },
                                        { id: "GST102_m3_u5", title: "Public Speech Making", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST102_m4",
                                    title: "Grammar and Usage",
                                    units: [
                                        { id: "GST102_m4_u1", title: "Articles, Concord and Sentences", summary: `<h3>GST102 — Unit 1: Articles, Concord and Sentences</h3>

<h4>1. Articles (The Markers)</h4>
<p>Articles are words used before nouns to show if they are <strong>specific</strong> or <strong>general</strong>.</p>

<h5>Indefinite Articles (A, An)</h5>
<p>Used for <strong>non-specific</strong> things.</p>
<ul>
  <li><strong style="color: var(--accent);">A</strong> — used before a <strong>consonant sound</strong></li>
  <li><strong style="color: var(--accent);">An</strong> — used before a <strong>vowel sound</strong></li>
</ul>
<table>
  <thead>
    <tr><th>Article</th><th>Sound</th><th>Examples</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: var(--accent);">A</strong></td>
      <td>Consonant sound</td>
      <td>a boy, a university, a car</td>
    </tr>
    <tr>
      <td><strong style="color: var(--accent);">An</strong></td>
      <td>Vowel sound</td>
      <td>an apple, an honest man, an hour</td>
    </tr>
  </tbody>
</table>

<h5>Definite Article (The)</h5>
<p>Used for <strong>specific things</strong> that are already known or pointed out.</p>
<ul>
  <li>the sun, the moon (only one exists)</li>
  <li>the man in the car (specific, already identified)</li>
</ul>

<p class="callout callout-warning">
  ⚠️ <strong>Exam Trap:</strong> "Honest" and "Hour" start with <strong>H</strong> but take <strong>"AN"</strong> because the H is silent — the sound is a vowel!<br>
  ✅ an honest man &nbsp;&nbsp; ✅ an hour &nbsp;&nbsp; ❌ a honest man
</p>

<h4>2. Concord (The Agreement)</h4>
<p><strong>Definition:</strong> Concord is the grammatical agreement between the <strong style="color: var(--accent);">Subject</strong> and the <strong style="color: var(--accent);">Verb</strong> in a sentence. They must match in <strong>Number</strong> (Singular/Plural) and <strong>Person</strong> (1st, 2nd, 3rd).</p>

<h5>The Golden Rules</h5>
<table>
  <thead>
    <tr><th>Subject</th><th>Verb</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: #16a34a;">Singular Subject</strong></td>
      <td>Singular Verb</td>
      <td>He <em>is</em>, She <em>does</em>, It <em>has</em></td>
    </tr>
    <tr>
      <td><strong style="color: #dc2626;">Plural Subject</strong></td>
      <td>Plural Verb</td>
      <td>They <em>are</em>, We <em>do</em>, You <em>have</em></td>
    </tr>
    <tr>
      <td><strong style="color: #9333ea;">"I" Exception</strong></td>
      <td>am / do / have</td>
      <td>I <em>am</em>, I <em>do</em>, I <em>have</em></td>
    </tr>
  </tbody>
</table>

<h5>"There" Rule</h5>
<p>The verb matches the <strong>noun that comes after it</strong>, not "there".</p>
<ul>
  <li>There <strong style="color: #16a34a;">is</strong> a book. (singular — one book)</li>
  <li>There <strong style="color: #dc2626;">are</strong> books. (plural — many books)</li>
</ul>

<p class="callout callout-info">
  💡 <strong>Pro-Tip:</strong> In Concord, always identify the <strong>true subject</strong> first to decide if the verb should be singular or plural!
</p>

<h4>3. Sentence Types</h4>
<p>You will be tested on these from <strong>two perspectives</strong>:</p>

<h5>A. By Purpose (The "Job" of the sentence)</h5>
<table>
  <thead>
    <tr><th>Type</th><th>Job</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: var(--accent);">Assertive</strong></td>
      <td>Tells information (Statement)</td>
      <td>"I am a student."</td>
    </tr>
    <tr>
      <td><strong style="color: #16a34a;">Interrogative</strong></td>
      <td>Asks something</td>
      <td>"Are you a student?" (ends with ?)</td>
    </tr>
    <tr>
      <td><strong style="color: #d97706;">Imperative</strong></td>
      <td>Gives an order or command</td>
      <td>"Shut the door."</td>
    </tr>
    <tr>
      <td><strong style="color: #dc2626;">Exclamatory</strong></td>
      <td>Shows strong feeling</td>
      <td>"What a goal!" (ends with !)</td>
    </tr>
  </tbody>
</table>

<h5>B. By Structure (The "Build" of the sentence)</h5>
<table>
  <thead>
    <tr><th>Type</th><th>Structure</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: var(--accent);">Simple</strong></td>
      <td>One main idea / one verb</td>
      <td>"The boy ate."</td>
    </tr>
    <tr>
      <td><strong style="color: #16a34a;">Compound</strong></td>
      <td>Two ideas joined by <em>and, but, or</em></td>
      <td>"The boy ate and he slept."</td>
    </tr>
    <tr>
      <td><strong style="color: #d97706;">Complex</strong></td>
      <td>Main idea + clause with <em>who, which, that, because</em></td>
      <td>"The boy who ate is sleeping."</td>
    </tr>
    <tr>
      <td><strong style="color: #9333ea;">Compound-Complex</strong></td>
      <td>Mix of compound and complex</td>
      <td>"The boy ate and the girl, who was tired, slept."</td>
    </tr>
  </tbody>
</table>` },
                                        { id: "GST102_m4_u2", title: "Tenses", summary: `<h3>GST102 — Unit 2: Tenses</h3>

<h4>3.1 Simple Present vs Present Continuous</h4>
<table>
  <thead><tr><th>Tense</th><th>Formula</th><th>Signal Words</th></tr></thead>
  <tbody>
    <tr><td><strong style="color:var(--accent)">Simple Present</strong></td><td>verb / verb+s</td><td>always, every day, never</td></tr>
    <tr><td><strong style="color:var(--accent)">Present Continuous</strong></td><td>am/is/are + verb-ing</td><td>now, look, listen, at the moment</td></tr>
  </tbody>
</table>
<ul>
  <li>Simple Present = things you <strong>always</strong> do, or things that are <strong>always true</strong></li>
  <li>Present Continuous = something happening <strong>RIGHT NOW</strong></li>
</ul>

<p class="callout callout-danger"><strong>⚠️ State Verbs NEVER take -ing</strong> — they describe a condition, not a physical action.<br><br>
❌ I am knowing him &nbsp;→&nbsp; ✅ I know him<br>
❌ I am liking this food &nbsp;→&nbsp; ✅ I like this food<br>
❌ I am having a headache &nbsp;→&nbsp; ✅ I have a headache<br>
❌ I am wanting water &nbsp;→&nbsp; ✅ I want water<br><br>
<strong>Memory trick:</strong> Can you physically <em>watch</em> someone "know" something? No → state verb, no -ing.</p>

<h4>3.2 Ways of Expressing the Future</h4>
<table>
  <thead><tr><th>Type</th><th>Formula</th><th>When to Use</th></tr></thead>
  <tbody>
    <tr><td><strong>Simple Future</strong></td><td>shall/will + verb</td><td>General statements, offers made right now</td></tr>
    <tr><td><strong>Going to (Intention)</strong></td><td>am/is/are going to + verb</td><td>You have already decided</td></tr>
    <tr><td><strong>Going to (Evidence)</strong></td><td>am/is/are going to + verb</td><td>You can see proof right now</td></tr>
    <tr><td><strong>Present Continuous</strong></td><td>am/is/are + verb-ing</td><td>Fixed plan, already arranged</td></tr>
    <tr><td><strong>Simple Present</strong></td><td>verb/verb+s</td><td>Official timetable/schedule</td></tr>
  </tbody>
</table>
<p class="callout callout-warning"><strong>Schedule Trap:</strong> Official timetables use Simple Present even for future events.<br>
✅ "The examination begins next Monday." &nbsp;&nbsp; ✅ "The bus leaves at 7PM."</p>

<h4>3.3 The Simple Past Tense</h4>
<p>The action is <strong>completely finished</strong>. It happened in the past and ended in the past.</p>
<table>
  <thead><tr><th>Type</th><th>Present</th><th>Past</th></tr></thead>
  <tbody>
    <tr><td>Add -d or -ed</td><td>look / fill</td><td>looked / filled</td></tr>
    <tr><td>Add -t</td><td>dream / learn</td><td>dreamt / learnt</td></tr>
    <tr><td>Change letters</td><td>eat / teach / go</td><td>ate / taught / went</td></tr>
    <tr><td>No change</td><td>cut / hit / shut</td><td>cut / hit / shut</td></tr>
  </tbody>
</table>
<p class="callout callout-danger"><strong>⚠️ The DID Trap</strong> — When you use DID, the main verb returns to simple present form. DID already carries the past meaning.<br><br>
❌ Did you <u>went</u>? &nbsp;→&nbsp; ✅ Did you <u>go</u>?<br>
❌ I did not <u>finished</u>. &nbsp;→&nbsp; ✅ I did not <u>finish</u>.<br><br>
<strong>Memory trick:</strong> DID already paid the "past tax." The verb gets a refund — back to simple form.</p>

<h4>3.4 The Past Continuous Tense</h4>
<p>Something was <strong>in the middle of happening</strong> at a point in the past — not finished, still "moving."</p>
<p><strong>Formula:</strong> was/were + verb-ing</p>
<table>
  <thead><tr><th>Subject</th><th>Helper</th></tr></thead>
  <tbody>
    <tr><td>I / He / She / It</td><td>was + verb-ing</td></tr>
    <tr><td>You / We / They</td><td>were + verb-ing</td></tr>
  </tbody>
</table>
<p class="callout callout-info"><strong>Key Exam Pattern:</strong> Past Continuous is almost always paired with Simple Past to show an interruption.<br><br>
"I was reading <strong>when</strong> she called." &nbsp;&nbsp; "He was driving <strong>when</strong> the tyre burst."</p>

<h4>3.5 The Present Perfect Tense</h4>
<p>Something happened in the past, but it <strong>still matters RIGHT NOW</strong>. Past and present are connected.</p>
<p><strong>Formula:</strong> has/have + past participle (3rd form)</p>
<p class="callout callout-danger"><strong>⚠️ The "Ago" Trap</strong> — NEVER use Present Perfect with specific past time words.<br><br>
❌ I have seen him <u>yesterday</u>. &nbsp;→&nbsp; ✅ I saw him yesterday.<br>
❌ She has arrived <u>an hour ago</u>. &nbsp;→&nbsp; ✅ She arrived an hour ago.<br><br>
<strong>✅ Fine with Present Perfect:</strong> just, since, for, already, ever, never, yet</p>

<h4>3.6 The Present Perfect Continuous Tense</h4>
<p>An action <strong>started in the past and is STILL going on</strong> right now. Stresses how long it has been happening.</p>
<p><strong>Formula:</strong> has/have + been + verb-ing</p>
<table>
  <thead><tr><th>Tense</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Past Continuous</td><td>Was happening, now stopped</td><td>I was cooking when you came.</td></tr>
    <tr><td>Present Perfect Continuous</td><td>Started in past, STILL happening</td><td>I have been cooking since 3PM.</td></tr>
  </tbody>
</table>
<p class="callout callout-info">
<strong>for</strong> = length of time → "for two hours, for ten years"<br>
<strong>since</strong> = starting point → "since morning, since 2020, since I arrived"
</p>

<h4>3.7 The Past Perfect Tense</h4>
<p>When two things both happened in the past, the one that happened <strong>FIRST</strong> gets the Past Perfect.</p>
<p><strong>Formula:</strong> had + past participle (3rd form)</p>
<p class="callout callout-warning"><strong>The Sequence Rule:</strong><br>
PAST ←————————————→ NOW<br>
[had left] → [I arrived]<br>
First action = <strong>had + 3rd form</strong> &nbsp;&nbsp; Second action = <strong>Simple Past</strong><br><br>
"By the time I got to the bus stop, the bus <strong>had left</strong>."<br>
"She <strong>had eaten</strong> before he came."</p>

<h4>🏆 Master Summary Table</h4>
<table>
  <thead><tr><th>Section</th><th>Tense</th><th>Formula</th><th>Key Signal</th></tr></thead>
  <tbody>
    <tr><td>3.1</td><td>Simple Present</td><td>verb/verb+s</td><td>always, every day</td></tr>
    <tr><td>3.1</td><td>Present Continuous</td><td>am/is/are + ing</td><td>now, look, listen</td></tr>
    <tr><td>3.2</td><td>Future (various)</td><td>will/going to/leaves</td><td>tonight, tomorrow, schedule</td></tr>
    <tr><td>3.3</td><td>Simple Past</td><td>2nd form of verb</td><td>yesterday, ago, last</td></tr>
    <tr><td>3.4</td><td>Past Continuous</td><td>was/were + ing</td><td>at that time, when</td></tr>
    <tr><td>3.5</td><td>Present Perfect</td><td>has/have + 3rd form</td><td>just, since, for, already</td></tr>
    <tr><td>3.6</td><td>Pres. Perfect Cont.</td><td>has/have + been + ing</td><td>since, for (still ongoing)</td></tr>
    <tr><td>3.7</td><td>Past Perfect</td><td>had + 3rd form</td><td>before, by the time, when (first action)</td></tr>
  </tbody>
</table>` },
                                        { id: "GST102_m4_u3", title: "Gerunds and Participles", summary: `<h3>GST102 — Unit 3: Gerunds and Participles</h3>

<h4>1. Gerunds</h4>
<p>A <strong style="color: var(--accent)">gerund</strong> is a <strong>verb + ing that acts as a noun</strong> in a sentence.</p>
<table>
  <thead><tr><th>Position</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Subject</strong></td><td>Swimming is healthy.</td></tr>
    <tr><td><strong>Object / Complement</strong></td><td>I enjoy cooking.</td></tr>
    <tr><td><strong>After preposition</strong></td><td>He was jailed for stealing.</td></tr>
  </tbody>
</table>
<p class="callout callout-info"><strong>Key test:</strong> Replace the -ing word with a noun — if it works → GERUND ✅<br>
"I enjoy <u>cooking</u>" → "I enjoy <u>food</u>" ✅ → cooking is a gerund.</p>

<h4>2. -ing vs to Rule</h4>
<table>
  <thead><tr><th>Use <strong>-ing</strong> when…</th><th>Use <strong>to</strong> when…</th></tr></thead>
  <tbody>
    <tr><td>After prepositions (of, for, without, before)</td><td>After wish, want, hope, decide, advise, ask</td></tr>
    <tr><td>After stop, enjoy, avoid, finish, mind, regret</td><td>After promise, plan, fail, refuse</td></tr>
    <tr><td>Action <strong>already done</strong> (remember/stop + ing)</td><td>Action <strong>yet to be done</strong> (remember/stop + to)</td></tr>
  </tbody>
</table>

<h4>3. Participles</h4>
<p>Verb forms used as <strong>tenses</strong> or <strong>adjectives</strong>.</p>
<table>
  <thead><tr><th>Type</th><th>Formation</th><th>As Tense</th><th>As Adjective</th></tr></thead>
  <tbody>
    <tr>
      <td><strong style="color: var(--accent)">Present Participle</strong></td>
      <td>verb + ing</td>
      <td>She is running.</td>
      <td>A <em>loving</em> mother.</td>
    </tr>
    <tr>
      <td><strong style="color: #d97706">Past Participle</strong></td>
      <td>verb + ed / irregular</td>
      <td>It has been written.</td>
      <td>A <em>broken</em> heart.</td>
    </tr>
  </tbody>
</table>

<h4>4. Past Tense vs Past Participle</h4>
<table>
  <thead><tr><th>Past Tense</th><th>Past Participle</th></tr></thead>
  <tbody>
    <tr><td>Stands alone</td><td>Needs a helping verb</td></tr>
    <tr><td>He <strong>wrote</strong>.</td><td>He <strong>has written</strong>.</td></tr>
    <tr><td>She <strong>saw</strong>.</td><td>She <strong>has seen</strong>.</td></tr>
    <tr><td>They <strong>went</strong>.</td><td>They <strong>have gone</strong>.</td></tr>
  </tbody>
</table>
<p class="callout callout-warning">
<strong>Helping verb present</strong> = Past Participle ✅<br>
<strong>No helping verb</strong> = Past Tense ✅
</p>

<h4>5. Common Nigerian Errors</h4>
<table>
  <thead><tr><th>Wrong ❌</th><th>Correct ✅</th></tr></thead>
  <tbody>
    <tr>
      <td style="color: #dc2626">will be <u>consider</u></td>
      <td style="color: #16a34a">will be <u>considered</u></td>
    </tr>
    <tr>
      <td style="color: #dc2626">have been <u>inform</u></td>
      <td style="color: #16a34a">have been <u>informed</u></td>
    </tr>
    <tr>
      <td style="color: #dc2626">felt <u>unconcern</u></td>
      <td style="color: #16a34a">felt <u>unconcerned</u></td>
    </tr>
    <tr>
      <td style="color: #dc2626">a <u>defeat</u> life</td>
      <td style="color: #16a34a">a <u>defeated</u> life</td>
    </tr>
    <tr>
      <td style="color: #dc2626">got me <u>confuse</u></td>
      <td style="color: #16a34a">got me <u>confused</u></td>
    </tr>
  </tbody>
</table>
<p class="callout callout-danger"><strong>Rule:</strong> Always add <strong>-ed</strong> after helping verbs and when describing nouns!</p>` },
                                        { id: "GST102_m4_u4", title: "The Active, Passive and the Infinitive", summary: `<h3>GST102 — Unit 4: The Active Voice, Passive Voice &amp; The Infinitive</h3>

<h4>Phase 1 — The Active Voice</h4>
<p><strong>Definition:</strong> Active voice is when the subject performs the action directly on the object.</p>

<div style="font-family:var(--font-mono);background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:14px 18px;text-align:center;font-size:15px;font-weight:600;margin:14px 0;color:var(--text);">
  Subject (S) &nbsp;→&nbsp; Verb (V) &nbsp;→&nbsp; Object (O)
</div>

<ul>
  <li>John <strong>ate</strong> the yam</li>
  <li>She <strong>grabbed</strong> his hand</li>
  <li>Emeka <strong>bought</strong> a new phone</li>
</ul>

<p class="callout callout-info"><strong>How to identify Active Voice:</strong><br>
Ask — is the subject performing the action?<br>
✅ If YES = Active Voice<br>
✅ If you can reverse it into passive = it is Active Voice</p>

<h5>Complement Object Sentences (NOT Active)</h5>
<p>Some sentences look active but are NOT — their object cannot be reversed into passive.</p>
<ul>
  <li>She is a beautiful girl. <em>(describing)</em></li>
  <li>The boy is in the garden. <em>(location)</em></li>
  <li>Life is not a bed of roses. <em>(describing)</em></li>
</ul>
<p class="callout callout-warning">⚠️ <strong>Rule:</strong> If you cannot reverse it into passive = it is NOT active voice.</p>

<h4>Phase 2 — The Passive Voice</h4>
<p><strong>Definition:</strong> Passive voice is when the subject <em>receives</em> the action instead of performing it.</p>

<h5>How to Convert Active → Passive (3 Steps)</h5>
<ul>
  <li><strong>Step 1</strong> — Move the Object to the front</li>
  <li><strong>Step 2</strong> — Add the correct form of "be" (is/are/was/were/been)</li>
  <li><strong>Step 3</strong> — Change verb to past participle + add "by"</li>
</ul>

<h5>Pronoun Changes</h5>
<table>
  <thead><tr><th>Active</th><th>Passive</th></tr></thead>
  <tbody>
    <tr><td>He</td><td>Him</td></tr>
    <tr><td>She</td><td>Her</td></tr>
    <tr><td>They</td><td>Them</td></tr>
    <tr><td>I</td><td>Me</td></tr>
    <tr><td>We</td><td>Us</td></tr>
  </tbody>
</table>

<h5>Passive Across All Tenses</h5>
<table>
  <thead><tr><th>Tense</th><th>Formula</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Simple Present</strong></td><td>is/are + past participle</td><td>The food is eaten.</td></tr>
    <tr><td><strong>Simple Past</strong></td><td>was/were + past participle</td><td>The food was eaten.</td></tr>
    <tr><td><strong>Present Continuous</strong></td><td>is/are + being + past participle</td><td>The food is being eaten.</td></tr>
    <tr><td><strong>Present Perfect</strong></td><td>has/have + been + past participle</td><td>The food has been eaten.</td></tr>
    <tr><td><strong>Future</strong></td><td>will + be + past participle</td><td>The food will be eaten.</td></tr>
    <tr><td><strong>Modal</strong></td><td>can/must + be + past participle</td><td>The food can be eaten.</td></tr>
  </tbody>
</table>

<h5>When to Use Passive</h5>
<ul>
  <li>When the doer is <strong>unknown</strong> → "My phone was stolen."</li>
  <li>When the doer is <strong>not important</strong> → "The road was constructed in 1995."</li>
  <li><strong>Scientific writing</strong> → "The experiment was conducted three times."</li>
  <li><strong>Historical events</strong> → "Nigeria was colonised by Britain."</li>
</ul>

<p class="callout callout-danger">⚠️ <strong>Key Rule:</strong> Whatever modal verb (can/must/will/should) is in the active sentence — keep it exactly the same in the passive!<br><br>
❌ "You have been <u>inform</u>." &nbsp;→&nbsp; ✅ "You have been <strong>informed</strong>."<br>
❌ "Your case will be <u>consider</u>." &nbsp;→&nbsp; ✅ "Your case will be <strong>considered</strong>."</p>

<h4>Phase 3 — The Infinitive (to + verb)</h4>
<p><strong>Definition:</strong> An infinitive is <strong>"to" + base form</strong> of a verb.</p>
<ul>
  <li>I want <strong>to eat</strong></li>
  <li>She needs <strong>to study</strong></li>
  <li>He decided <strong>to leave</strong></li>
</ul>

<h5>Verbs that DROP "to" — Bossy Words</h5>
<table>
  <thead><tr><th>Verb</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Let</strong></td><td>She let me <strong>go</strong>. (NOT to go)</td></tr>
    <tr><td><strong>Make</strong></td><td>He made me <strong>cry</strong>. (NOT to cry)</td></tr>
    <tr><td><strong>Can/Could</strong></td><td>I can <strong>swim</strong>. (NOT to swim)</td></tr>
    <tr><td><strong>Would/Will</strong></td><td>I would <strong>help</strong>. (NOT to help)</td></tr>
  </tbody>
</table>

<h5>Verbs that KEEP "to"</h5>
<ul>
  <li>want, need, decide, seem, like, forget, try, refuse, plan, hope</li>
</ul>

<h5>Infinitive of Purpose</h5>
<p>Using "to" to explain <strong>WHY</strong> someone does something:</p>
<ul>
  <li>Emeka went to the market <strong>to buy</strong> tomatoes.</li>
  <li>She called me <strong>to inform</strong> me about the exam.</li>
  <li>The security man is there <strong>to protect</strong> the building.</li>
</ul>

<h5>The Too…To Pattern</h5>
<p class="callout callout-info"><strong>Formula:</strong> too + adjective + to + verb &nbsp;&nbsp; (meaning: so much that you can't)<br><br>
He is <strong>too tired to work</strong>. &nbsp;|&nbsp; The food is <strong>too hot to eat</strong>. &nbsp;|&nbsp; She is <strong>too busy to answer</strong> calls.</p>

<p class="callout callout-info">📝 <strong>Too…to has TWO forms:</strong><br><br>
<strong>Form 1 — General:</strong> too + adjective + to + verb<br>
&nbsp;&nbsp;&nbsp;&nbsp;"The food is <strong>too hot to eat</strong>."<br><br>
<strong>Form 2 — Specific person:</strong> too + adjective + for + person + to + verb<br>
&nbsp;&nbsp;&nbsp;&nbsp;"The food is <strong>too hot for me to eat</strong>."<br>
&nbsp;&nbsp;&nbsp;&nbsp;"He is <strong>too young for her to marry</strong>."<br>
&nbsp;&nbsp;&nbsp;&nbsp;"The question is <strong>too difficult for students to answer</strong>."
</p>

<p class="callout callout-danger">⚠️ <strong>The Common Nigerian Mistake — NEVER DO THIS IN EXAM:</strong><br><br>
❌ "I did not see him <u>to told</u> him." &nbsp;→&nbsp; ✅ "I did not see him <strong>to tell</strong> him."<br>
❌ "She decided <u>to went</u> to Abuja." &nbsp;→&nbsp; ✅ "She decided <strong>to go</strong> to Abuja."<br><br>
<strong>Rule: After "to" ALWAYS use the base form — NEVER past tense!</strong></p>

<h4>Final Exam Day Cheat Sheet</h4>
<table>
  <thead><tr><th>Topic</th><th>Key Rule</th></tr></thead>
  <tbody>
    <tr><td><strong>Active Voice</strong></td><td>Subject does the action → S + V + O → can be reversed to passive</td></tr>
    <tr><td><strong>Passive Voice</strong></td><td>Subject receives the action → be + past participle → keep modal verbs the same</td></tr>
    <tr><td><strong>Bossy Words (DROP "to")</strong></td><td>let, make, can, will, would, could, should</td></tr>
    <tr><td><strong>Keep "to" after</strong></td><td>want, need, decide, seem, like, forget, try</td></tr>
    <tr><td><strong>Too…to Pattern</strong></td><td>too + adjective + to + verb = so much that you can't</td></tr>
    <tr><td><strong>Infinitive Rule</strong></td><td>After "to" ALWAYS use base form — NEVER past tense</td></tr>
  </tbody>
</table>` },
                                        { id: "GST102_m4_u5", title: "Modal Auxiliaries", summary: `<h3>GST102 — Unit 5: Modal Auxiliaries</h3>

<h4>What Are Modal Auxiliaries?</h4>
<p>Modal auxiliaries are special helping verbs that work alongside the main verb to add extra meaning such as <strong>possibility, ability, permission, obligation,</strong> and <strong>politeness</strong>.</p>
<p class="callout callout-info">They include: <strong>can, could, may, might, must, have to, ought to, should, would</strong></p>

<h4>1. Can / Could</h4>
<p><strong>Meaning:</strong> Ability, Permission by rules, Asking permission informally</p>
<table>
  <thead><tr><th>Use</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Ability</td><td>I can swim well.</td></tr>
    <tr><td>Rules</td><td>You can't pick the ball in football.</td></tr>
    <tr><td>Permission</td><td>Can we go to the shops?</td></tr>
    <tr><td>Past ability</td><td>I couldn't do that job.</td></tr>
  </tbody>
</table>
<p class="callout callout-danger">⚠️ NEVER say "can be able to" — <strong>can</strong> already means <em>be able to</em><br>
❌ I can be able to go &nbsp;→&nbsp; ✅ I can go</p>

<h4>2. May / Might</h4>
<p><strong>Meaning:</strong> Possibility, Polite permission</p>
<table>
  <thead><tr><th>Modal</th><th>Strength</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>May</strong></td><td>Stronger possibility (~50%)</td><td>He may come.</td></tr>
    <tr><td><strong>Might</strong></td><td>Weaker possibility (&lt;50%)</td><td>He might come.</td></tr>
  </tbody>
</table>
<table>
  <thead><tr><th>Can vs May</th><th>Use</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Can</strong></td><td>Physical ability</td><td>Can you swim?</td></tr>
    <tr><td><strong>May</strong></td><td>Polite permission or possibility</td><td>May I come in? / It may rain.</td></tr>
  </tbody>
</table>
<p class="callout callout-info">💡 <strong>Key Rule:</strong> If you can replace the word with "perhaps" or "possibly" — use <strong>MAY</strong></p>

<h4>3. Must / Have To</h4>
<p><strong>Meaning:</strong> Obligation and compulsion</p>
<table>
  <thead><tr><th>Modal</th><th>Source of obligation</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Must</strong></td><td>Obligation from the <strong>SPEAKER</strong></td><td>"You must clean your boots." (I am ordering you)</td></tr>
    <tr><td><strong>Have to</strong></td><td>Obligation from <strong>external rules</strong></td><td>"You have to clean your boots in the army." (rules say so)</td></tr>
  </tbody>
</table>
<p class="callout callout-warning">⚠️ <strong>MUST has NO past or future form:</strong><br>
Past → I <strong>had to</strong> stop the car. &nbsp;&nbsp; Future → He <strong>will have to</strong> find a new job.<br>
❌ I musted / I will must</p>
<p class="callout callout-info">💡 <strong>Key Rule:</strong> Ask WHO is forcing the action?<br>
A person speaking directly = <strong>MUST</strong><br>
A rule, habit, or situation = <strong>HAVE TO</strong></p>

<h4>4. Ought To</h4>
<p><strong>Meaning:</strong> Moral duty, Reminding someone of responsibility</p>
<table>
  <thead><tr><th>Use</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Duty</td><td>You ought to send money to your parents.</td></tr>
    <tr><td>Neglected past duty</td><td>You ought to have applied last month — now it is too late.</td></tr>
  </tbody>
</table>
<p class="callout callout-warning">⚠️ <strong>Key Pattern for Neglected Duty:</strong><br>
OUGHT TO + HAVE + PAST PARTICIPLE = A duty that was neglected<br>
"You <strong>ought to have called</strong> me yesterday."</p>
<table>
  <thead><tr><th>Modal</th><th>Who forces it?</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Must</strong></td><td>Speaker commands</td><td>You must obey me.</td></tr>
    <tr><td><strong>Have to</strong></td><td>Law/rules force it</td><td>You have to pay tax.</td></tr>
    <tr><td><strong>Ought to</strong></td><td>Duty and conscience</td><td>You ought to obey him.</td></tr>
  </tbody>
</table>

<h4>5. Should</h4>
<p><strong>Meaning:</strong> Advice, Correct action, Sensible suggestion</p>
<table>
  <thead><tr><th>Use</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Duty</td><td>You should pay your debts.</td></tr>
    <tr><td>Correct action</td><td>You shouldn't tell lies.</td></tr>
    <tr><td>Advice</td><td>You should eat better to keep fit.</td></tr>
    <tr><td>Asking for advice</td><td>Should I go by taxi?</td></tr>
  </tbody>
</table>
<p class="callout callout-info">💡 <strong>Should vs Ought to:</strong><br>
Should = friendly advice = "it is a good idea"<br>
Ought to = moral duty = "it is your duty"</p>

<h5>Special Pattern — After Certain Verbs</h5>
<p>VERB + THAT + SUBJECT + SHOULD + BASE VERB</p>
<ul>
  <li>He suggested our postponing → He suggested that we <strong>should postpone</strong></li>
  <li>He recommended my buying → He recommended that I <strong>should buy</strong></li>
  <li>He insisted on my selling → He insisted that I <strong>should sell</strong></li>
</ul>
<p>Verbs that trigger this pattern: <strong>suggest, insist, recommend, arrange, be anxious</strong></p>

<h4>6. Would</h4>
<p><strong>Meaning:</strong> Politeness, Preference, Past habit, Insistence</p>
<table>
  <thead><tr><th>Use</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Polite request</td><td>Would you mind closing the door?</td></tr>
    <tr><td>Polite want</td><td>I would like water. (= polite "I want")</td></tr>
    <tr><td>Preference</td><td>I would rather fail than cheat.</td></tr>
    <tr><td>Past habit</td><td>They would wait for us every day. (= used to)</td></tr>
    <tr><td>Insistence</td><td>She would visit though we warned her. (insisted)</td></tr>
    <tr><td>Would have</td><td>He would have worked harder. (should have but didn't)</td></tr>
  </tbody>
</table>

<h4>Master Comparison Table</h4>
<table>
  <thead><tr><th>Modal</th><th>Authority</th><th>Strength</th><th>Main Job</th></tr></thead>
  <tbody>
    <tr><td><strong style="color:#dc2626">Must</strong></td><td>Speaker</td><td>Strongest</td><td>Command</td></tr>
    <tr><td><strong style="color:#d97706">Have to</strong></td><td>External rules</td><td>Strong</td><td>Obligation</td></tr>
    <tr><td><strong style="color:#d97706">Ought to</strong></td><td>Conscience</td><td>Moderate</td><td>Moral duty</td></tr>
    <tr><td><strong style="color:#16a34a">Should</strong></td><td>None</td><td>Mild</td><td>Advice</td></tr>
    <tr><td><strong style="color:var(--accent)">Can</strong></td><td>—</td><td>—</td><td>Ability</td></tr>
    <tr><td><strong style="color:var(--accent)">May</strong></td><td>—</td><td>—</td><td>Possibility/Permission</td></tr>
    <tr><td><strong style="color:#9333ea">Would</strong></td><td>—</td><td>—</td><td>Politeness/Habit</td></tr>
  </tbody>
</table>

<h4>The 3 Golden Exam Rules</h4>
<ul>
  <li><strong>WHO is forcing the action?</strong> → Helps pick between must / have to / ought to / should</li>
  <li><strong>Can you replace it with "perhaps"?</strong> → Use MAY</li>
  <li><strong>Is it about physical skill or power?</strong> → Use CAN</li>
</ul>

<h4>Common Mistakes to Avoid</h4>
<table>
  <thead><tr><th>Wrong ❌</th><th>Correct ✅</th><th>Reason</th></tr></thead>
  <tbody>
    <tr><td style="color:#dc2626">I can be able to go</td><td style="color:#16a34a">I can go</td><td>Can already means be able to</td></tr>
    <tr><td style="color:#dc2626">I musted stop</td><td style="color:#16a34a">I had to stop</td><td>Must has no past form</td></tr>
    <tr><td style="color:#dc2626">I will must go</td><td style="color:#16a34a">I will have to go</td><td>Must has no future form</td></tr>
    <tr><td style="color:#dc2626">Can I come in? (formal)</td><td style="color:#16a34a">May I come in?</td><td>May is used for polite permission</td></tr>
  </tbody>
</table>

<h4>The 4 Importance of Modal Auxiliaries</h4>
<ul>
  <li>They express <strong>probability</strong> — may / might</li>
  <li>They express <strong>ability</strong> — can / could</li>
  <li>They express <strong>obligation and orders</strong> — must / ought to / shall / should</li>
  <li>They signal <strong>politeness</strong> — would like / may I / could I</li>
</ul>` }
                                    ]
                                }
                            ]
                        },

                        // ─── GST104: Use of Library ───
                        {
                            id: "GST104",
                            code: "GST104",
                            tmaScore: { score: 30, total: 30 },
                            title: "Use of Library, Study Skills and ICT",
                            modules: [
                                {
                                    id: "GST104_m1",
                                    title: "Types of Library and Services",
                                    units: [
                                        { id: "GST104_m1_u1", title: "Types of Library", summary: "" },
                                        { id: "GST104_m1_u2", title: "Library Services", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST104_m2",
                                    title: "Research Techniques",
                                    units: [
                                        { id: "GST104_m2_u1", title: "Information Sources", summary: "" },
                                        { id: "GST104_m2_u2", title: "Literature Review", summary: "" },
                                        { id: "GST104_m2_u3", title: "Database Contents", summary: "" },
                                        { id: "GST104_m2_u4", title: "Open Educational Resources", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST104_m3",
                                    title: "Organization of Library Materials",
                                    units: [
                                        { id: "GST104_m3_u1", title: "Library Catalogues", summary: "" },
                                        { id: "GST104_m3_u2", title: "Classification Schemes", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST104_m4",
                                    title: "ICT Use in the Library",
                                    units: [
                                        { id: "GST104_m4_u1", title: "Digital Libraries", summary: "" },
                                        { id: "GST104_m4_u2", title: "Computer Based Literature Search", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST104_m5",
                                    title: "Good Reading Habit and Study Skills",
                                    units: [
                                        { id: "GST104_m5_u1", title: "Basic Study Techniques and Methods", summary: "" },
                                        { id: "GST104_m5_u2", title: "Developing Good Reading Habit", summary: "" },
                                        { id: "GST104_m5_u3", title: "Handling Examinations", summary: "" }
                                    ]
                                },
                                {
                                    id: "GST104_m6",
                                    title: "Copyright, Plagiarism and Referencing",
                                    units: [
                                        { id: "GST104_m6_u1", title: "Copyright Laws", summary: "" },
                                        { id: "GST104_m6_u2", title: "Plagiarism and Its Implications", summary: "" },
                                        { id: "GST104_m6_u3", title: "Harvard In-Text Citing and Referencing", summary: "" },
                                        { id: "GST104_m6_u4", title: "APA In-Text Citing and Referencing", summary: "" }
                                    ]
                                }
                            ]
                        }

                    ] // end courses
                } // end 100L_sem2
            ] // end semesters
        }, // end 100L

        // ═══════════════════════════════════
        // 200 LEVEL (placeholder)
        // ═══════════════════════════════════
        {
            id: "200L",
            label: "200 Level",
            semesters: [
                { id: "200L_sem1", label: "1st Semester", courses: [] },
                { id: "200L_sem2", label: "2nd Semester", courses: [] }
            ]
        },

        // ═══════════════════════════════════
        // 300 LEVEL (placeholder)
        // ═══════════════════════════════════
        {
            id: "300L",
            label: "300 Level",
            semesters: [
                { id: "300L_sem1", label: "1st Semester", courses: [] },
                { id: "300L_sem2", label: "2nd Semester", courses: [] }
            ]
        },

        // ═══════════════════════════════════
        // 400 LEVEL (placeholder)
        // ═══════════════════════════════════
        {
            id: "400L",
            label: "400 Level",
            semesters: [
                { id: "400L_sem1", label: "1st Semester", courses: [] },
                { id: "400L_sem2", label: "2nd Semester", courses: [] }
            ]
        }
    ]
};
