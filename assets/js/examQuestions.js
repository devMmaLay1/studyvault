// ══════════════════════════════════════
// StudyVault — examQuestions.js
// Exam questions data for units
// ══════════════════════════════════════

const examQuestions = {
    "MTH101_m1_u1": {
        fbq: [
            { q: "A ______ is any well-defined class of objects", a: "Set" },
            { q: "The set {x | x is even} is read as ______", a: "A is the set of numbers x such that x is even" },
            { q: "A set is ___ if it consists of a specific number of elements", a: "Finite" },
            { q: "If in counting the different members of a set, the counting process does not come to an end, then the set is ____", a: "Infinite" },
            { q: "The ____ set is considered to be a subset of every set", a: "Empty/Null" },
            { q: "If A⊄B then there is at least ____ element in A that is not in B", a: "One" },
            { q: "The members of a family of sets are ____", a: "Sets" },
            { q: "In plane geometry, the universal set consists of all the ____ in the plane", a: "Points" },
            { q: "Let M = {a, b}, then 2^M = 4, the value of M is ___________", a: "2" },
            { q: "A = {1, 3, 7, 8} and B = {2, 4, 7, 9} are not disjoint since ____ is in both sets", a: "7" }
        ],
        mcq: [
            { q: "The vertical line \"|\" in {x | ...} is read as…", options: ["or", "such that", "and", "belongs to"], correct: 1 },
            { q: "Which of the following sets is not finite?", options: ["Months of the year", "{1,2,3,...,100}", "People on earth", "{x | x is even}"], correct: 3 },
            { q: "Two sets A and B are not comparable if…", options: ["A⊂B", "B⊂A", "A=B", "A⊄B and B⊄A"], correct: 3 },
            { q: "One of the following is NOT a family of sets:", options: ["{{1,2},{3,4}}", "{{a,b},{c}}", "{2, {1,3}, 4}", "{{5,6},{7,8}}"], correct: 2 },
            { q: "The power set of a set M is denoted by…", options: ["P(M)", "2^M", "M²", "PM"], correct: 1 },
            { q: "If M has n elements, then the power set of M has ____ elements", options: ["n", "2n", "n²", "2^n"], correct: 3 },
            { q: "If A and B have no elements in common, then…", options: ["A=B", "A⊂B", "A and B are disjoint", "A and B are comparable"], correct: 2 },
            { q: "In human population studies, the universal set consists of…", options: ["All animals", "All people in the world", "All countries", "All cities"], correct: 1 },
            { q: "In an axiomatic development of plane Euclidean geometry, \"points\" and \"lines\" are…", options: ["Axioms", "Theorems", "Undefined terms", "Definitions"], correct: 2 },
            { q: "Two sets A and B are equal if every element belongs to B and every element belongs to A. This is called…", options: ["Axiom of Specification", "Axiom of Extension", "Subset Axiom", "Power Set Axiom"], correct: 1 }
        ],
        theory: [
            {
                q: "State whether each of the following is a well-defined set or not. Give reasons.\na) The collection of all even numbers less than 20\nb) The collection of intelligent students in your class",
                a: "a) ✅ Well-defined — no argument. A = {2,4,6,8,10,12,14,16,18}\nb) ❌ NOT well-defined — \"intelligent\" is subjective, people will argue"
            },
            {
                q: "Write A = {2, 4, 6, 8, 10} in set-builder notation",
                a: "A = {x | x is an even number, x ≤ 10}"
            },
            {
                q: "Write in tabular/listing form: B = {x | x is an odd number between 10 and 18}",
                a: "B = {11, 13, 15, 17}"
            },
            {
                q: "Let A = {1, 2, 3, 4, 5}. Fill in ∈ or ∉:\na) 3 ___ A\nb) 6 ___ A\nc) 1 ___ A\nd) 7 ___ A",
                a: "a) ∈  b) ∉  c) ∈  d) ∉"
            },
            {
                q: "Which of these sets are finite and which are infinite? Give reasons.\na) {x | x is a grain of sand on all beaches in Nigeria}\nb) {1, 2, 3, 4, ...}\nc) The set of letters in the English alphabet\nd) {x | x is a multiple of 5}",
                a: "a) Finite — hard to count but has an endpoint\nb) Infinite — the \"...\" means it never ends\nc) Finite — ends at Z\nd) Infinite — 5,10,15,20... never ends"
            }
        ],
        tricky: [
            { q: "Is ∅ a subset of every set including itself?", a: "YES — ∅⊂A for EVERY set A including ∅⊂∅" },
            { q: "How many subsets does ∅ have?", a: "1 — the power set of ∅ is {∅}, which has 2⁰=1 element" },
            { q: "A student says \"{x | x is a number of grains of sand on earth} is infinite.\" Is the student correct?", a: "NO — difficult to count but counting CAN theoretically end = FINITE!" },
            { q: "Are A={1,2} and B={2,3} comparable?", a: "NO — 1∈A but 1∉B, and 3∈B but 3∉A. Sharing ONE element is not enough!" },
            { q: "Is every subset a proper subset?", a: "NO — when A=B, A is a subset but NOT a proper subset!" }
        ]
    },
    
    "MTH101_m1_u2": {
        fbq: [
            { q: "In terms of their elements, two sets are called disjoint if they have _______________", a: "no element in common", explanation: "Disjoint sets share absolutely NO elements. Their intersection is always ∅." },
            { q: "If A and B are sets and A∪B = A∩B, then the two sets are _______________", a: "A = B (equal)", explanation: "Union gives ALL elements, intersection gives ONLY common elements. For them to be equal, A and B must be identical." },
            { q: "The intersection of the sets {1, 2, 5} and {1, 2, 6} is the set _______________", a: "{1, 2}", explanation: "Intersection = elements in BOTH sets. Only 1 and 2 appear in both." },
            { q: "Sets that have unlimited numbers of elements are referred to as _______________", a: "Infinite set", explanation: "Infinite sets go on forever without end, like {1, 2, 3, 4, ...}" },
            { q: "The cardinality of the Power set of the set {0, 1, 2} is _______________", a: "8", explanation: "Power set has 2^n subsets. n=3, so 2³=8. Subsets: ∅, {0}, {1}, {2}, {0,1}, {0,2}, {1,2}, {0,1,2}" },
            { q: "The union of the sets {1, 2, 5} and {1, 2, 6} is the set _______________", a: "{1, 2, 5, 6}", explanation: "Union = ALL elements from BOTH sets. Remove repetition: 1 and 2 appear once." },
            { q: "The individual objects in a set are called _______________", a: "Elements (or Members)", explanation: "Each object inside a set is an element. Example: In {a,b,c}, the elements are a, b, c." },
            { q: "Collection of well-defined objects is called a _______________", a: "Set", explanation: "A SET is a collection of well-defined, distinct objects." },
            { q: "The set of positive integers is an example of a _______________ set", a: "Infinite", explanation: "Positive integers {1,2,3,...} go on forever with no end." },
            { q: "If A∪B = B∪A, then the sets A and B are _______________", a: "Commutative", explanation: "Order doesn't change the result. This is the Commutative property." },
            { q: "Any set that contains a definite number of elements is called _______________", a: "Finite set", explanation: "Finite sets have a specific, countable number of elements." },
            { q: "If Set D = {x: x is an odd number between 10 and 18}, list the elements", a: "{11, 13, 15, 17}", explanation: "Between 10 and 18 (not including): 11,12,13,14,15,16,17. Odd only: 11,13,15,17" },
            { q: "If two sets have distinct (no common) elements, they are said to be _______________", a: "Disjoint", explanation: "When A∩B = ∅, the sets are disjoint. Example: {1,2,3} and {4,5,6}" },
            { q: "If U = {a,b,c,d,e}, A = {a,c,e} and B = {a,b,e}, then (A∩B) = _______________", a: "{a, e}", explanation: "Check each: a→in both✓, c→not in B✗, e→in both✓" }
        ],
        mcq: [
            { q: "If A and B are sets and A∪B = A∩B, then:", options: ["A⊂B", "B⊂A", "A = B", "A∩B = ∅"], correct: 2, explanation: "Union gives everything, intersection gives common. For them to be equal, sets must be identical." },
            { q: "The union of the sets {1, 2, 5} and {1, 2, 6} is the set:", options: ["{1, 2}", "{1, 2, 5, 6}", "{5, 6}", "{1, 2, 3, 5, 6}"], correct: 1, explanation: "Union = ALL elements from both, no repetition. Collect 1,2,5,6." },
            { q: "The intersection of the sets {1, 2, 5} and {1, 2, 6} is the set:", options: ["{1, 2, 5, 6}", "{5, 6}", "{1, 2}", "{1, 2, 3}"], correct: 2, explanation: "Intersection = ONLY common elements. 1 and 2 are in both sets." },
            { q: "Two sets are called disjoint if their _______________ is empty set.", options: ["Union", "Difference", "Complement", "Intersection"], correct: 3, explanation: "Disjoint means no common elements, so A∩B = ∅" },
            { q: "Which of the following two sets are disjoint?", options: ["{1,2,3} and {3,4,5}", "{1,3,5} and {2,4,6}", "{1,2} and {2,3}", "{a,b} and {b,c}"], correct: 1, explanation: "Check for shared elements. Only {1,3,5} and {2,4,6} have nothing in common." },
            { q: "The complement of the set A is _______________", options: ["Elements in A and U", "Elements not in A but in U", "Elements in A only", "Elements in U only"], correct: 1, explanation: "A' = all elements in U that do NOT belong to A. A' = {x | x∈U, x∉A}" },
            { q: "Individual objects in a set are called _______________", options: ["Sets", "Subsets", "Elements", "Complements"], correct: 2, explanation: "Each object in a set is called an element or member." },
            { q: "The set {x: x is an odd number between 10 and 18} is:", options: ["{11,12,13,14,15,16,17}", "{11,13,15,17}", "{10,12,14,16,18}", "{11,13,15,17,19}"], correct: 1, explanation: "Between 10 and 18 (not including endpoints). Odd numbers only: 11,13,15,17" }
        ],
        theory: [
            {
                q: "Let U = {1,2,3,4,5,6,7,8,9}, A = {1,2,3,4}, B = {2,4,6,8}, C = {3,4,5,6}. Find (A∪B)ᶜ",
                a: "Step 1: A∪B = {1,2,3,4,6,8}\nStep 2: (A∪B)ᶜ = elements in U NOT in A∪B\n(A∪B)ᶜ = {5, 7, 9}"
            },
            {
                q: "Let M = {a, b}. Find the power set 2ᴹ",
                a: "M has n=2 elements, so power set has 2²=4 subsets:\n1. ∅ (empty set)\n2. {a}\n3. {b}\n4. {a,b}\n\n2ᴹ = {∅, {a}, {b}, {a,b}}"
            },
            {
                q: "If U = {1,2,3,4,5,6,7,8,9,10}, A = {1,4,7,10}, B = {2,5,8}. Find A'∩B'",
                a: "Step 1: A' = {2,3,5,6,8,9}\nStep 2: B' = {1,3,4,6,7,9,10}\nStep 3: A'∩B' = common elements = {3, 6, 9}"
            },
            {
                q: "If A = {1,2,3,4}, B = {3,4,5,6}, C = {4,5,6,7}. Find (A∩B)∩(B∪C)",
                a: "Step 1: A∩B = {3,4}\nStep 2: B∪C = {3,4,5,6,7}\nStep 3: {3,4} ∩ {3,4,5,6,7} = {3, 4}"
            },
            {
                q: "If U = {1,2,3,4,5,6,7,8,9,10}, A = {1,4,7,10}, B = {2,5,8}. Find A'",
                a: "A' = elements in U NOT in A\nU = {1,2,3,4,5,6,7,8,9,10}\nA = {1,4,7,10}\nRemove 1,4,7,10 from U:\nA' = {2, 3, 5, 6, 8, 9}"
            },
            {
                q: "If A' is the complement of set A, find the equivalent of (A')'",
                a: "Double complement law: (A')' = A\n\nProof: U={1,2,3,4,5}, A={1,2,3}\nA' = {4,5}\n(A')' = elements in U not in A' = {1,2,3} = A\n\nAnswer: (A')' = A"
            }
        ],
        wordProblems: [
            {
                q: "In a class of 46 students, 22 play football, 26 play volleyball, and 3 play both games. How many play neither?",
                a: "Given: n(U)=46, n(F)=22, n(V)=26, n(F∩V)=3\n\nStep 1: n(F∪V) = n(F) + n(V) − n(F∩V)\nn(F∪V) = 22 + 26 − 3 = 45\n\nStep 2: Neither = n(U) − n(F∪V)\nNeither = 46 − 45 = 1\n\nAnswer: 1 student plays neither"
            },
            {
                q: "In a class of 50 students, 25 like oranges, 22 like bananas, and 4 like both. How many like neither?",
                a: "Given: n(U)=50, n(O)=25, n(B)=22, n(O∩B)=4\n\nStep 1: n(O∪B) = 25 + 22 − 4 = 43\nStep 2: Neither = 50 − 43 = 7\n\nAnswer: 7 students like neither"
            },
            {
                q: "In a class, 30 students play football, 20 play basketball, and 10 play both. How many students are there if each plays at least one game?",
                a: "Given: n(F)=30, n(B)=20, n(F∩B)=10\n'At least one game' means n(U) = n(F∪B)\n\nn(F∪B) = 30 + 20 − 10 = 40\n\nAnswer: 40 students total"
            },
            {
                q: "In a survey of 100 students: Spanish=28, German=30, French=42, Spanish&French=10, Spanish&German=8, German&French=5, all three=3. How many study NO language?",
                a: "Given: n(U)=100, n(S)=28, n(G)=30, n(F)=42\nn(S∩F)=10, n(S∩G)=8, n(G∩F)=5, n(S∩G∩F)=3\n\nThree-set formula:\nn(S∪G∪F) = 28+30+42 − 10−8−5 + 3\nn(S∪G∪F) = 100 − 23 + 3 = 80\n\nNeither = 100 − 80 = 20\n\nAnswer: 20 students study no language"
            },
            {
                q: "In a survey of 400 students, 100 are smokers, 150 chew gum, and 75 do both. How many are neither smokers nor gum chewers?",
                a: "Given: n(U)=400, n(S)=100, n(G)=150, n(S∩G)=75\n\nStep 1: n(S∪G) = 100 + 150 − 75 = 175\nStep 2: Neither = 400 − 175 = 225\n\nAnswer: 225 students are neither"
            }
        ],
        tricky: [
            { q: "Does A−B = B−A always?", a: "NO! Order ALWAYS matters in difference. A−B removes B's elements from A. B−A removes A's elements from B. These give different results." },
            { q: "If A∪B = A∩B, what can you conclude?", a: "A = B. The only way union (everything) equals intersection (common) is if both sets are identical." },
            { q: "Is (A')' equal to A?", a: "YES! Double complement law: (A')' = A always. Complement of complement returns the original set." },
            { q: "Can two sets be disjoint and still have a union?", a: "YES! Disjoint means A∩B=∅ (no overlap). But A∪B still combines all elements from both sets." },
            { q: "If A⊂B, what is A∩B?", a: "A∩B = A. Since all elements of A are in B, the intersection is just A itself." }
        ]
    },
    
    "MTH101_m1_u3": {
        fbq: [
            { q: "Q is the set of ________ numbers", a: "Rational numbers", explanation: "Q is the symbol for rational numbers — any number that can be written as p/q where p and q are integers and q ≠ 0. Examples: 1/2, −3/4, 5 (=5/1), 0 (=0/1). The letter Q comes from 'quotient'." },
            { q: "If a set A is finite, then it is necessarily ______", a: "Bounded", explanation: "A finite set has a limited number of elements, so it always fits inside some finite interval [−M, M]. Every finite set is ALWAYS bounded!" },
            { q: "The set of complex numbers is a superset of the set of ______ numbers", a: "Real numbers", explanation: "Number family: Natural ⊂ Integers ⊂ Rational ⊂ Real ⊂ Complex. Complex numbers (a + bi) contain ALL real numbers (when b=0)." },
            { q: "Let R be the set of real numbers and Q the set of rational numbers. Then R − Q consists of the ______", a: "Irrational numbers (Q')", explanation: "R − Q means everything in R that is NOT in Q. Real numbers split into rational (Q) and irrational (Q'). Removing rationals leaves only irrationals: √2, √3, π, e, etc." },
            { q: "If a < b and c < 0, then ______", a: "bc < ac (inequality flips!)", explanation: "Property P5! When you multiply both sides by a NEGATIVE number, the inequality sign flips. Example: 2 < 5, multiply by −3 → −6 > −15. Golden rule: negative number = always flip!" },
            { q: "The number 0 is itself neither positive nor ______", a: "Negative", explanation: "Zero sits exactly in the middle — neither positive nor negative. However, 0 IS rational (0/1), IS an integer, but NOT a natural number." },
            { q: "|x| < 5 and ______ have identical meaning", a: "−5 < x < 5", explanation: "|x| < 5 means x is within 5 steps of zero. Going left: −5. Going right: 5. So x must be strictly between −5 and 5. This is the interval (−5, 5)." },
            { q: "Is (3, 10) an open or closed interval?", a: "Open interval", explanation: "( ) parentheses = OPEN = endpoints NOT included. (3, 10) contains all numbers strictly between 3 and 10, but 3 and 10 themselves are excluded. [3, 10] would be closed." }
        ],
        mcq: [
            { 
                q: "Which of the following is an irrational number?", 
                options: ["1/2", "0", "π", "√4"], 
                correct: 2,
                explanation: "π = 3.14159265358979... — the decimal goes on forever with NO repeating pattern. That's exactly the definition of irrational — cannot be written as p/q and decimal never repeats. 1/2, 0, √4=2 are all rational."
            },
            {
                q: "Solve for x if |x − 5| ≤ 4",
                options: ["x ≤ 9", "1 ≤ x ≤ 9", "x ≥ 1", "−4 ≤ x ≤ 4"],
                correct: 1,
                explanation: "Rule: |x − a| ≤ b means −b ≤ x − a ≤ b\nStep 1: −4 ≤ x − 5 ≤ 4\nStep 2: Add 5 to all parts: 1 ≤ x ≤ 9\nThink: x must be within 4 steps of 5 on the number line."
            },
            {
                q: "Find the solution set for (x − 3)(x − 2) ≤ 0",
                options: ["x ≤ 2 or x ≥ 3", "2 ≤ x ≤ 3", "x < 2 or x > 3", "All real numbers"],
                correct: 1,
                explanation: "Roots are x=2 and x=3. Product is ≤ 0 (negative or zero) between the roots. Test x=2.5: (−0.5)(0.5) = −0.25 ≤ 0 ✓. At x=2 or x=3, product equals zero which satisfies ≤ 0. Answer: [2, 3]"
            },
            {
                q: "The set ℕ (Natural numbers) is a subset of which set?",
                options: ["Irrational numbers", "Integers ℤ", "Complex numbers only", "Prime numbers"],
                correct: 1,
                explanation: "Number hierarchy: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. Natural numbers (1,2,3,...) are inside Integers (...−2,−1,0,1,2,...). Natural is the smallest bag."
            },
            {
                q: "Which statement is TRUE about infinity (∞)?",
                options: ["∞ uses [ ] brackets", "∞ uses ( ) brackets", "∞ can be reached", "∞ is a real number"],
                correct: 1,
                explanation: "Infinity ALWAYS uses ( ) parentheses — never [ ] — because you can never actually reach infinity. Example: (1, ∞) means x > 1, going on forever."
            },
            {
                q: "If |x| = 5, what are the possible values of x?",
                options: ["5 only", "−5 only", "5 and −5", "0 and 5"],
                correct: 2,
                explanation: "Absolute value is distance from zero. Both 5 and −5 are exactly 5 units away from zero. |5| = 5 and |−5| = 5. So x = 5 or x = −5."
            },
            {
                q: "Which of the following is a bounded set?",
                options: ["{1, 2, 3, 4, 5}", "{1, 2, 3, ...}", "All positive integers", "All real numbers"],
                correct: 0,
                explanation: "Bounded means trapped inside a finite interval. {1,2,3,4,5} is finite and fits in [1,5] ✓. The others go on forever = unbounded. Every finite set is always bounded!"
            },
            {
                q: "Solve: 2x + 3 > 7",
                options: ["x > 2", "x < 2", "x ≥ 2", "x > 5"],
                correct: 0,
                explanation: "Step 1: Subtract 3 from both sides: 2x > 4\nStep 2: Divide by 2: x > 2\nNo sign flip because we divided by positive 2."
            }
        ],
        theory: [
            {
                q: "Solve for x in |x + 2| / 4 ≤ 3",
                a: "Step 1: Multiply both sides by 4: |x + 2| ≤ 12\nStep 2: Apply absolute value rule: −12 ≤ x + 2 ≤ 12\nStep 3: Subtract 2 from all parts: −14 ≤ x ≤ 10\n\nThink: x must be within 12 steps of −2. So from −2−12=−14 to −2+12=10.\n\nAnswer: −14 ≤ x ≤ 10 or [−14, 10]"
            },
            {
                q: "Find the solution set for (x − 5)/(x + 10) ≤ 1",
                a: "Step 1: Rearrange: (x−5)/(x+10) − 1 ≤ 0\nStep 2: Combine: (x−5−x−10)/(x+10) ≤ 0 → −15/(x+10) ≤ 0\nStep 3: −15 is always negative, so we need x+10 > 0\nStep 4: x + 10 > 0 → x > −10\n\nAnswer: x > −10 (all real numbers except x = −10 where it is undefined)"
            },
            {
                q: "Solve for x in |x² − 4| ≤ 4",
                a: "Step 1: Apply rule: −4 ≤ x² − 4 ≤ 4\nStep 2: Left side: x² − 4 ≥ −4 → x² ≥ 0 (always true)\nStep 3: Right side: x² − 4 ≤ 4 → x² ≤ 8 → |x| ≤ 2√2\nStep 4: So −2√2 ≤ x ≤ 2√2\n\nKey insight: x² is always ≥ 0, so the left inequality is automatically satisfied. Only the right side limits x.\n\nAnswer: −2√2 ≤ x ≤ 2√2 or approximately [−2.83, 2.83]"
            },
            {
                q: "Explain why √2 is irrational but √4 is rational",
                a: "√4 = 2 = 2/1 → can be written as p/q → RATIONAL ✓\n\n√2 = 1.41421356... → decimal never ends and never repeats → CANNOT be written as p/q → IRRATIONAL ✓\n\nKey difference: √4 simplifies to a whole number (2), but √2 does not simplify to any fraction. The decimal expansion of √2 goes on forever with no pattern.\n\nGeneral rule: √n is rational only if n is a perfect square (1, 4, 9, 16, 25, ...)"
            },
            {
                q: "Show that the set {−5, 0, 3, 7, 100} is bounded",
                a: "A set is bounded if it fits inside some finite interval [a, b].\n\nStep 1: Find the smallest element: −5\nStep 2: Find the largest element: 100\nStep 3: The set fits inside [−5, 100] ✓\n\nSince we can trap the entire set between two finite numbers, it is BOUNDED.\n\nNote: Every finite set is always bounded. This set has exactly 5 elements, so it must be bounded."
            },
            {
                q: "Prove that multiplying an inequality by a negative number flips the sign",
                a: "Start with: 3 < 5 (TRUE)\n\nMultiply both sides by −2:\nLeft side: 3 × (−2) = −6\nRight side: 5 × (−2) = −10\n\nIf we keep the same sign: −6 < −10 (FALSE! −6 is to the RIGHT of −10 on number line)\n\nIf we flip the sign: −6 > −10 (TRUE! ✓)\n\nWhy? Multiplying by negative reverses the order on the number line. What was bigger becomes smaller, and vice versa.\n\nProperty P5: If a < b and c < 0, then ac > bc (sign flips!)"
            }
        ],
        tricky: [
            { q: "Is 0 a natural number?", a: "NO! Natural numbers ℕ = {1, 2, 3, 4, ...} start from 1. Zero is an integer and rational, but NOT natural. This is a common exam trap!" },
            { q: "Is 1 a prime number?", a: "NO! 1 is NOT prime by definition. Prime numbers must be divisible by exactly two numbers: 1 and itself. Since 1 is only divisible by 1 (one number), it doesn't qualify. First prime is 2." },
            { q: "Is every integer a rational number?", a: "YES! Every integer n can be written as n/1, which is a fraction. So all integers are rational. Example: −3 = −3/1, 0 = 0/1, 5 = 5/1. ℤ ⊂ ℚ" },
            { q: "Can a number be both rational and irrational?", a: "NO! Impossible. A number is either rational (can be written as p/q) OR irrational (cannot be written as p/q). These are mutually exclusive categories. ℚ and ℚ' are disjoint!" },
            { q: "Does |x| < −5 have any solutions?", a: "NO! Absolute value is ALWAYS ≥ 0. It can never be negative. So |x| < −5 is impossible. The solution set is ∅ (empty set). This is a classic trap question!" },
            { q: "If a < b, does −a > −b?", a: "YES! Multiplying both sides by −1 flips the inequality. Example: 3 < 5 → −3 > −5 ✓. Negating both sides reverses the order." }
        ]
    },

    "GST102_m4_u2": {
        mcq: [
            // ── 3.1 Simple Present vs Present Continuous ──
            { q: "3.1 — Simple Present vs Present Continuous\n\nThe sun _____ in the west.", options: ["is setting", "sets", "set", "has set"], correct: 1, explanation: "The sun setting in the west is a permanent natural fact — always true. Permanent facts use Simple Present. 'Sets' is correct (3rd person singular)." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nQuiet! The baby _____.", options: ["sleeps", "is sleeping", "slept", "sleep"], correct: 1, explanation: "'Quiet!' signals something happening RIGHT NOW. Present Continuous (is sleeping) is used for actions in progress at this exact moment." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nMy mother _____ a shop on Lagos Island.", options: ["is having", "has", "have", "is have"], correct: 1, explanation: "'Have' (possess) is a STATE VERB — it describes ownership, not a physical action. State verbs never take -ing. 'Has' is correct (3rd person singular)." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nI _____ the Vice Chancellor personally.", options: ["am knowing", "knows", "know", "am know"], correct: 2, explanation: "'Know' is a STATE VERB — you cannot physically watch someone 'know' something. State verbs never use -ing. 'Know' is correct (1st person)." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nLook at Emeka! He _____ to the market.", options: ["goes", "go", "is going", "has gone"], correct: 2, explanation: "'Look!' is a signal word for Present Continuous. The action is happening right now as we watch. 'Is going' is correct." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nWater _____ at 100 degrees Celsius.", options: ["is boiling", "boil", "boils", "boiled"], correct: 2, explanation: "This is a scientific fact — always true. Permanent truths use Simple Present. 'Boils' is correct (3rd person singular)." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nEvery time Bola _____ late, her boss _____ angry.", options: ["comes / gets", "is coming / is getting", "come / get", "came / got"], correct: 0, explanation: "'Every time' signals a habitual/repeated action — Simple Present. Both verbs must be Simple Present: comes / gets." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nWhich sentence is correct?", options: ["I am wanting to pass my NOUN exams.", "I want to pass my NOUN exams.", "I wanting to pass my NOUN exams.", "I am want to pass my NOUN exams."], correct: 1, explanation: "'Want' is a STATE VERB — it describes a desire, not a physical action. State verbs never take -ing. 'I want' is the only correct form." },
            { q: "3.1 — Simple Present vs Present Continuous\n\nIdentify the error: \"She is remembering her PIN number.\"", options: ["Change 'is remembering' to 'remembers'", "Change 'is remembering' to 'remembered'", "Change 'is remembering' to 'has remembered'", "No error"], correct: 0, explanation: "'Remember' is a STATE VERB — it describes a mental state, not a physical action. It cannot take -ing. Correct form: 'She remembers her PIN number.'" },
            { q: "3.1 — Simple Present vs Present Continuous\n\nRight now the lecturer _____ GST102 notes.", options: ["explains", "is explaining", "explain", "has explained"], correct: 1, explanation: "'Right now' is a key signal word for Present Continuous. The action is in progress at this exact moment. 'Is explaining' is correct." },

            // ── 3.2 Future ──
            { q: "3.2 — Future Tenses\n\nLook at those dark clouds! It _____ heavily.", options: ["will rain", "is going to rain", "rains", "rained"], correct: 1, explanation: "Dark clouds are visible EVIDENCE that rain is coming. When you can see proof of what is about to happen, use 'going to'. 'Will' is for decisions made at the moment of speaking." },
            { q: "3.2 — Future Tenses\n\nThe NOUN e-exam _____ at 9AM according to the timetable.", options: ["will start", "is starting", "starts", "started"], correct: 2, explanation: "Official timetables and schedules use Simple Present even for future events. 'Starts' is correct. This is a key exam trap!" },
            { q: "3.2 — Future Tenses\n\nI _____ my sister in Enugu next weekend. (Already arranged)", options: ["will visit", "am visiting", "visit", "shall visiting"], correct: 1, explanation: "A fixed plan that is already arranged uses Present Continuous for future. The ticket/arrangement is already made. 'Am visiting' is correct." },
            { q: "3.2 — Future Tenses\n\n\"I _____ help you carry that bag.\" (Offer made right now)", options: ["am going to", "shall", "will", "am"], correct: 2, explanation: "An offer or decision made at the moment of speaking uses 'will'. You just decided to help — it was not planned before. 'Will' is correct." },
            { q: "3.2 — Future Tenses\n\nThe Governor _____ the university tomorrow. (Official visit)", options: ["is visiting", "will be visiting", "visits", "visited"], correct: 2, explanation: "An official scheduled visit uses Simple Present. 'Visits' is correct for timetabled/official events." },
            { q: "3.2 — Future Tenses\n\nBe careful! You _____ spill that hot soup!", options: ["will", "are going to", "shall", "are"], correct: 1, explanation: "You can SEE the soup about to spill — visible evidence of an imminent event. 'Going to' is used when there is clear evidence right now." },
            { q: "3.2 — Future Tenses\n\nWe _____ spend Christmas in the village. (Plan already decided)", options: ["shall", "will", "are going to", "are"], correct: 2, explanation: "A plan that was already decided before speaking uses 'going to'. The decision was made earlier, not just now." },
            { q: "3.2 — Future Tenses\n\nThe train _____ at exactly 6PM. (Timetable)", options: ["is leaving", "leaves", "will leave", "shall leave"], correct: 1, explanation: "Timetables and official schedules use Simple Present. 'Leaves' is correct — this is a fixed schedule, not a personal plan." },
            { q: "3.2 — Future Tenses\n\nI doubt if I _____ able to attend the seminar.", options: ["am", "will be", "shall being", "going to be"], correct: 1, explanation: "After 'if' in a doubt/uncertainty context, 'will be' expresses a future possibility. 'Will be' is the correct future form here." },
            { q: "3.2 — Future Tenses\n\nWhich expresses LIKELIHOOD based on evidence?", options: ["I will travel tomorrow.", "The match starts at 5PM.", "The roof is going to collapse.", "I am traveling next week."], correct: 2, explanation: "'Going to' expresses likelihood based on visible evidence — you can see the roof is damaged and about to fall. This is the 'evidence' use of going to." },

            // ── 3.3 Simple Past ──
            { q: "3.3 — Simple Past\n\nThe student did not _____ with the girl.", options: ["danced", "dancing", "dance", "dances"], correct: 2, explanation: "After 'did not', always use the BASE FORM (infinitive without 'to'). DID already carries the past meaning — the verb gets a refund back to simple form. 'Dance' is correct." },
            { q: "3.3 — Simple Past\n\n_____ the Nightingale sacrifice her life in vain?", options: ["Does", "Did", "Has", "Was"], correct: 1, explanation: "This is a question about a completed past event. Simple Past questions use 'Did'. 'Did' is correct." },
            { q: "3.3 — Simple Past\n\nThe child _____ all the food before his mother returned.", options: ["eat", "eats", "ate", "eaten"], correct: 2, explanation: "A completed past action uses Simple Past. 'Eat' → 'ate' (irregular verb, changes letters). 'Ate' is correct." },
            { q: "3.3 — Simple Past\n\nWhich sentence is correct?", options: ["I did not liked the movie.", "I did not like the movie.", "I did not likes the movie.", "I did not liking the movie."], correct: 1, explanation: "After 'did not', the verb must be in BASE FORM. 'Did not like' — not 'did not liked'. DID already carries the past meaning." },
            { q: "3.3 — Simple Past\n\nHe _____ me how to use the system last year.", options: ["teach", "teaches", "taught", "have taught"], correct: 2, explanation: "'Last year' signals Simple Past. 'Teach' is an irregular verb: teach → taught (changes letters). 'Taught' is correct." },
            { q: "3.3 — Simple Past\n\nThe bus _____ the bicycle and _____ (not stop).", options: ["hitted / did not stopped", "hit / did not stop", "hit / not stopped", "hits / stops"], correct: 1, explanation: "'Hit' is an irregular verb with NO CHANGE: hit → hit. After 'did not', use base form 'stop'. Both 'hit' and 'did not stop' are correct." },
            { q: "3.3 — Simple Past\n\nDid Bello _____ the money?", options: ["stole", "stolen", "steal", "steals"], correct: 2, explanation: "After 'Did', always use the BASE FORM. 'Steal' is the base form. 'Stole' is past tense (wrong after Did), 'stolen' is past participle (wrong here)." },
            { q: "3.3 — Simple Past\n\nThey _____ the rope and _____ away.", options: ["cutted / runned", "cut / ran", "cut / runned", "cutted / ran"], correct: 1, explanation: "'Cut' has NO CHANGE: cut → cut. 'Run' is irregular: run → ran. Both are Simple Past. 'Cut / ran' is correct." },
            { q: "3.3 — Simple Past\n\nIdentify the error: \"She did not attended the lecture.\"", options: ["Change 'attended' to 'attend'", "Change 'did not' to 'does not'", "Change 'attended' to 'attends'", "No error"], correct: 0, explanation: "After 'did not', the verb must be BASE FORM. 'Attended' is past tense — wrong here. Correct: 'She did not attend the lecture.'" },
            { q: "3.3 — Simple Past\n\nI _____ French when I was young.", options: ["learn", "learned/learnt", "have learnt", "was learning"], correct: 1, explanation: "'When I was young' signals a completed past period. Simple Past is correct. 'Learned' or 'learnt' are both acceptable past forms of 'learn'." },

            // ── 3.4 Past Continuous ──
            { q: "3.4 — Past Continuous\n\nThe butterfly _____ after a sunbeam when the boy saw it.", options: ["run", "was running", "runs", "had run"], correct: 1, explanation: "The butterfly's running was IN PROGRESS when the boy saw it. Past Continuous (was running) shows an ongoing action that was interrupted or observed." },
            { q: "3.4 — Past Continuous\n\nI _____ my assignment when the generator stopped.", options: ["did", "was doing", "do", "had do"], correct: 1, explanation: "The assignment was in progress (ongoing) when the generator stopped (interruption). Past Continuous + Simple Past is the classic pattern." },
            { q: "3.4 — Past Continuous\n\nAt 10PM last night, they _____ a movie.", options: ["watch", "watched", "were watching", "are watching"], correct: 2, explanation: "'At 10PM last night' specifies a point in the past — the action was in progress AT that exact time. Past Continuous (were watching) is correct." },
            { q: "3.4 — Past Continuous\n\nWhich sentence shows a past action being interrupted?", options: ["She reads every morning.", "She was reading when the visitor knocked.", "She has read the book.", "She read the book."], correct: 1, explanation: "'Was reading' (ongoing) + 'when the visitor knocked' (interruption) is the classic Past Continuous pattern showing an action being interrupted." },
            { q: "3.4 — Past Continuous\n\nThe students _____ when the lecturer walked in.", options: ["were talking", "are talking", "talked", "have talked"], correct: 0, explanation: "Talking was in progress (ongoing) when the lecturer walked in (interruption). Past Continuous (were talking) is correct." },
            { q: "3.4 — Past Continuous\n\n\"He _____ on the grass where the Nightingale had left him.\" What is the correct form?", options: ["lied", "lies", "was lying", "has lied"], correct: 2, explanation: "The action of lying on the grass was ongoing/in progress at that point in the past. Past Continuous (was lying) is correct." },
            { q: "3.4 — Past Continuous\n\nWhich is correct?", options: ["I was cook when you called.", "I cooking when you called.", "I was cooking when you called.", "I were cooking when you called."], correct: 2, explanation: "Past Continuous formula: was/were + verb-ing. 'I' takes 'was' (not 'were'). 'Cooking' is the -ing form. 'I was cooking' is correct." },
            { q: "3.4 — Past Continuous\n\nThe dog _____ beside the judge throughout the case.", options: ["sit", "sat", "was sitting", "has sat"], correct: 2, explanation: "'Throughout the case' shows the action was continuously in progress over a period. Past Continuous (was sitting) emphasises the ongoing nature." },
            { q: "3.4 — Past Continuous\n\nWhat does Past Continuous emphasize?", options: ["A completed action in the past", "Continuity of an action in the past", "A future plan", "A habit"], correct: 1, explanation: "Past Continuous emphasises that an action was ONGOING/IN PROGRESS at a point in the past — it was not finished, it was still 'moving'." },
            { q: "3.4 — Past Continuous\n\nShe _____ for hours when the result finally came out.", options: ["prays", "prayed", "has prayed", "was praying"], correct: 3, explanation: "Praying was ongoing (for hours) when the result came out (the moment). Past Continuous (was praying) shows the action in progress at that point." },

            // ── 3.5 Present Perfect ──
            { q: "3.5 — Present Perfect\n\nI _____ all the novels written by Hardy. (And I still remember them)", options: ["read", "was reading", "have read", "had read"], correct: 2, explanation: "The reading happened in the past but the knowledge/effect exists NOW. Present Perfect (have read) connects past action to present relevance." },
            { q: "3.5 — Present Perfect\n\nWhich sentence is WRONG?", options: ["I have just eaten.", "She has never visited Lagos.", "I have seen him yesterday.", "They have already left."], correct: 2, explanation: "'Yesterday' is a specific past time word. NEVER use Present Perfect with: yesterday, ago, last year, in 2020. Correct: 'I saw him yesterday.'" },
            { q: "3.5 — Present Perfect\n\nThe winter _____ my veins. (I am still cold now)", options: ["chilled", "was chilling", "has chilled", "had chilled"], correct: 2, explanation: "The chilling happened in the past but the effect (coldness) exists NOW. Present Perfect (has chilled) connects past action to present state." },
            { q: "3.5 — Present Perfect\n\nShe _____ not _____ a film since December.", options: ["did / see", "has / seen", "was / seeing", "had / saw"], correct: 1, explanation: "'Since' is a key signal word for Present Perfect. Formula: has/have + past participle. 'Has not seen' is correct." },
            { q: "3.5 — Present Perfect\n\n_____ you ever _____ to Aso Rock?", options: ["Did / went", "Have / been", "Was / go", "Are / go"], correct: 1, explanation: "'Ever' is a key signal word for Present Perfect. Formula: Have you ever + past participle. 'Have you ever been' is correct." },
            { q: "3.5 — Present Perfect\n\nI _____ this essay five times but I still do not understand it.", options: ["read", "was reading", "have read", "had read"], correct: 2, explanation: "Reading five times is a past experience that still affects the present (still don't understand). Present Perfect (have read) is correct." },
            { q: "3.5 — Present Perfect\n\nChoose the correct sentence:", options: ["I have written the letter an hour ago.", "I have just written the letter.", "I have write the letter.", "I have wrote the letter."], correct: 1, explanation: "'Just' is a key signal word for Present Perfect. Formula: have + past participle. 'Have just written' is correct. 'Ago' cannot be used with Present Perfect." },
            { q: "3.5 — Present Perfect\n\nHe _____ his driving test. That is why he is happy.", options: ["just passed", "has just passed", "was just passing", "just pass"], correct: 1, explanation: "The passing happened recently and the happiness is the present result. 'Has just passed' — Present Perfect with 'just' is correct." },
            { q: "3.5 — Present Perfect\n\nThe present perfect tense is formed with:", options: ["was/were + verb-ing", "had + past participle", "has/have + past participle", "shall/will + verb"], correct: 2, explanation: "Present Perfect formula: has/have + past participle (3rd form). 'Had + past participle' is Past Perfect. 'Was/were + ing' is Past Continuous." },
            { q: "3.5 — Present Perfect\n\n\"I have been in NOUN _____ 2021.\"", options: ["for", "ago", "since", "yet"], correct: 2, explanation: "'Since' is used with a starting point (a specific time/date). 'For' is used with a length of time (for 3 years). 2021 is a starting point → 'since 2021'." },

            // ── 3.6 Present Perfect Continuous ──
            { q: "3.6 — Present Perfect Continuous\n\nThe farmers _____ their fields for two hours now. (Still going on)", options: ["ploughed", "were ploughing", "have been ploughing", "plough"], correct: 2, explanation: "The action started in the past and is STILL continuing now. Present Perfect Continuous (have been ploughing) emphasises ongoing duration." },
            { q: "3.6 — Present Perfect Continuous\n\nMy friend _____ English since 10 o'clock. (She is still studying)", options: ["studied", "has been studying", "was studying", "studies"], correct: 1, explanation: "'Since 10 o'clock' + still ongoing = Present Perfect Continuous. 'Has been studying' is correct." },
            { q: "3.6 — Present Perfect Continuous\n\nI am very tired. I _____ all day.", options: ["work", "was working", "have been working", "worked"], correct: 2, explanation: "The tiredness NOW is the result of working all day (started in past, just finished or still ongoing). Present Perfect Continuous (have been working) is correct." },
            { q: "3.6 — Present Perfect Continuous\n\n\"I _____ in Kaduna _____ five years.\" (Still living there)", options: ["lived / since", "have been living / for", "was living / for", "have lived / since"], correct: 1, explanation: "Still living there = Present Perfect Continuous. 'Five years' is a length of time → 'for'. 'Have been living / for' is correct." },
            { q: "3.6 — Present Perfect Continuous\n\nWhich sentence uses Present Perfect Continuous CORRECTLY?", options: ["I have been know him for years.", "She has been eaten since morning.", "They have been waiting for the bus for an hour.", "He has been went to school."], correct: 2, explanation: "Formula: have/has + been + verb-ing. 'Waiting' is the correct -ing form. Options A, B, D use wrong verb forms (know/eaten/went cannot follow 'been' this way)." },
            { q: "3.6 — Present Perfect Continuous\n\nThe lecturer _____ for thirty minutes. The students are getting tired.", options: ["talks", "was talking", "has been talking", "talked"], correct: 2, explanation: "The talking started 30 minutes ago and is STILL going on (students are getting tired NOW). Present Perfect Continuous (has been talking) is correct." },
            { q: "3.6 — Present Perfect Continuous\n\nWhat does 'I have been working' tell you that 'I was working' does NOT?", options: ["The work is completely finished.", "The work is still continuing now.", "The work happened once.", "The work is a habit."], correct: 1, explanation: "'I was working' = was in progress, now stopped/interrupted. 'I have been working' = started in past and is STILL continuing now. The key difference is ongoing vs stopped." },
            { q: "3.6 — Present Perfect Continuous\n\n\"It _____ since yesterday.\" (Still raining now)", options: ["rained", "was raining", "has been raining", "rains"], correct: 2, explanation: "Started raining yesterday and is STILL raining now. 'Since yesterday' + still ongoing = Present Perfect Continuous. 'Has been raining' is correct." },
            { q: "3.6 — Present Perfect Continuous\n\nChoose the correct sentence:", options: ["He has been sleeping since two hours.", "He has been sleeping for two hours.", "He was sleeping since two hours.", "He slept for two hours ago."], correct: 1, explanation: "'Two hours' is a LENGTH of time → use 'for'. 'Since' is for starting points. 'Has been sleeping for two hours' is correct." },
            { q: "3.6 — Present Perfect Continuous\n\nThe formula for Present Perfect Continuous is:", options: ["had + past participle", "was/were + verb-ing", "has/have + been + verb-ing", "shall/will + have + verb-ing"], correct: 2, explanation: "Present Perfect Continuous = has/have + been + verb-ing. Example: 'She has been studying.' 'Had + past participle' is Past Perfect." },

            // ── 3.7 Past Perfect ──
            { q: "3.7 — Past Perfect\n\nKarrim's wife _____ into the river when he got there.", options: ["already fell", "had already fallen", "has fallen", "was falling"], correct: 1, explanation: "The wife fell FIRST, then Karrim arrived. The first action in the past uses Past Perfect (had + past participle). 'Had already fallen' is correct." },
            { q: "3.7 — Past Perfect\n\nThe match _____ before we reached the stadium.", options: ["has started", "started", "had already started", "was starting"], correct: 2, explanation: "The match starting happened FIRST, then we reached the stadium. First action = Past Perfect. 'Had already started' is correct." },
            { q: "3.7 — Past Perfect\n\nBy the time the police arrived, the thief _____.", options: ["escaped", "has escaped", "had escaped", "was escaping"], correct: 2, explanation: "'By the time' is a key signal for Past Perfect. The thief escaped FIRST, then police arrived. 'Had escaped' is correct." },
            { q: "3.7 — Past Perfect\n\nShe dropped out because she realized she _____ all the books.", options: ["already read", "has already read", "had already read", "was reading"], correct: 2, explanation: "Reading happened FIRST (before she realized). Past Perfect (had already read) shows the earlier of two past actions." },
            { q: "3.7 — Past Perfect\n\nBefore Morrison put Manning's head on the oven, he _____ his shoes.", options: ["took off", "has taken off", "had taken off", "takes off"], correct: 2, explanation: "Taking off shoes happened FIRST (before putting head on oven). 'Before' signals Past Perfect for the earlier action. 'Had taken off' is correct." },
            { q: "3.7 — Past Perfect\n\nWe _____ our hands before we had dinner.", options: ["washed", "had washed", "wash", "were washing"], correct: 1, explanation: "Washing hands happened FIRST (before dinner). 'Before' signals Past Perfect for the earlier action. 'Had washed' is correct." },
            { q: "3.7 — Past Perfect\n\n\"If Karim _____ for his wife during the day, he would not have got lost.\"", options: ["looked", "has looked", "had looked", "was looking"], correct: 2, explanation: "This is a hypothetical past condition (If + Past Perfect). 'If he had looked' = he didn't look, so he got lost. Past Perfect in 'if' clauses for unreal past situations." },
            { q: "3.7 — Past Perfect\n\nShe said that she _____ accidentally into the river. (Reported speech)", options: ["fell", "has fallen", "had fallen", "was falling"], correct: 2, explanation: "In reported speech, past tense shifts back to Past Perfect. 'She fell' becomes 'she said she had fallen'. Past Perfect in reported speech." },
            { q: "3.7 — Past Perfect\n\nMother _____ already _____ rice before we got home.", options: ["has / cook", "had / cooked", "was / cooking", "have / cooked"], correct: 1, explanation: "Cooking happened FIRST (before we got home). Past Perfect formula: had + past participle. 'Had cooked' is correct. 'Mother' is 3rd person singular." },
            { q: "3.7 — Past Perfect\n\nWhich sentence uses Past Perfect CORRECTLY?", options: ["I had finished before he come.", "He had left before she arrived.", "They had went home yesterday.", "She had ate her food."], correct: 1, explanation: "'He had left' (first action) + 'before she arrived' (second action) — correct Past Perfect usage. Option C: 'went' is wrong (should be 'gone'). Option D: 'ate' is wrong (should be 'eaten')." }
        ]
    },

    "CIT108_m1_u2": {
        fbq: [
            { q: "Problem solving is the sequential process of analysing information related to a given situation and generating appropriate ________ options.", a: "response", explanation: "The definition from the unit: Problem Solving is the sequential process of analysing information related to a given situation and generating appropriate RESPONSE options." },
            { q: "The basic computer processing model consists of three stages: ________, process and ________.", a: "input / output", explanation: "Every computer follows the INPUT → PROCESS → OUTPUT model. Data comes in (input), the CPU works on it (process), and a result is produced (output)." },
            { q: "For complex problems, the input/process/output cycle must be ________ multiple times to produce intermediate results.", a: "repeated / iterated", explanation: "Simple problems need one pass. Complex problems require ITERATION — repeating the input/process/output cycle multiple times, each time producing intermediate results." },
            { q: "The first step in the problem solving process is to ________ the problem.", a: "understand", explanation: "The very first step is to UNDERSTAND the problem — know your inputs, outputs, format and what is missing. You cannot solve what you do not understand." },
            { q: "An algorithm is a precise ________ of instructions for solving a problem.", a: "sequence", explanation: "An algorithm is a precise SEQUENCE of instructions — steps in a specific order that solve a problem. The order matters — changing the sequence changes the result." },
            { q: "The two most common ways to represent an algorithm are ________ and ________.", a: "pseudocode / flowchart", explanation: "Algorithms are represented using PSEUDOCODE (written English-like steps) or FLOWCHARTS (visual diagrams with shapes and arrows)." },
            { q: "Writing a program is also called ________ or implementing an algorithm.", a: "coding", explanation: "Writing a program = CODING = implementing an algorithm. The code (source code) is the actual program written in a programming language." },
            { q: "Each time an algorithm is tested with a fixed set of input data, this is known as a ________.", a: "test case", explanation: "A TEST CASE is one specific run of the algorithm with a fixed set of input data. Multiple test cases are used to verify the algorithm works correctly for different situations." },
            { q: "Pseudocode is preferred over flowcharts because it can be written in a way that is very close to real ________ code.", a: "program", explanation: "Pseudocode is preferred because it closely resembles real PROGRAM CODE — making it easier to translate into an actual programming language later." },
            { q: "In pseudocode, the ________ control structure involves listing instructions step-by-step in order.", a: "sequence", explanation: "SEQUENCE is the simplest control structure — steps are listed in order, one after another. It is the foundation of all algorithms." },
            { q: "The formula Average = (x₁ + x₂ + ... + xₙ) / n is an example of ________ a model for a problem.", a: "formulating", explanation: "FORMULATING A MODEL means finding or creating a formula that transforms your input into the desired output. The average formula is a classic example." },
            { q: "In pseudocode, the ________ control structure allows you to jump to a specific step when needed.", a: "transfer of control", explanation: "TRANSFER OF CONTROL (GOTO) allows the algorithm to jump to a specific step. Example: 'If lamp works then goto step 7'." },
            { q: "The ________ control structure in pseudocode stores information for use in later instructions.", a: "storage", explanation: "STORAGE assigns a value to a variable for later use. Example: x ← a new bulb. The arrow (←) means 'assign' or 'store'." },
            { q: "Before writing actual code, an algorithm should be tested ________ by going through the steps mentally.", a: "manually", explanation: "MANUALLY testing an algorithm means tracing through the steps in your head with sample data. This helps catch errors before writing any real code." },
            { q: "The step that comes after developing an algorithm is ________ the program.", a: "writing", explanation: "The order is: Understand → Formulate model → Develop algorithm → WRITE the program → Test → Evaluate. Writing the program translates the algorithm into real code." }
        ],
        mcq: [
            { q: "What is the correct order of the first three steps in the problem solving process?", options: ["Write program → Test → Understand", "Understand → Formulate model → Develop algorithm", "Develop algorithm → Understand → Write program", "Test → Evaluate → Understand"], correct: 1, explanation: "The correct order starts with: (1) UNDERSTAND the problem, (2) FORMULATE a model/formula, (3) DEVELOP an algorithm. You must understand before you can model, and model before you can write an algorithm." },
            { q: "What does the basic computer processing model consist of?", options: ["Input, Storage, Output", "Input, Process, Output", "CPU, Memory, Keyboard", "Algorithm, Code, Test"], correct: 1, explanation: "The basic model is INPUT → PROCESS → OUTPUT. Data enters (input), the CPU works on it (process), and a result is produced (output). This is the foundation of all computer problem solving." },
            { q: "Why is pseudocode preferred over flowcharts for algorithm development?", options: ["Pseudocode is more visual and easier to draw", "Pseudocode is closer to real code and faster to write", "Flowcharts cannot show decisions", "Pseudocode can be compiled directly"], correct: 1, explanation: "Pseudocode is preferred because it is CLOSER TO REAL CODE (easier to translate later) and FASTER TO WRITE than drawing a flowchart. Flowcharts can be hard to draw neatly and take more space." },
            { q: "What is a test case?", options: ["A type of programming language", "Testing an algorithm mentally before coding", "Running an algorithm with a fixed set of input data to verify it works", "A flowchart symbol for decisions"], correct: 2, explanation: "A TEST CASE is one specific run of the algorithm with a FIXED SET OF INPUT DATA. Multiple test cases verify the algorithm works correctly for different situations including edge cases." },
            { q: "In the average grade example, what is the formula for numeric grades?", options: ["Average = (x₁ × x₂ × ... × xₙ) / n", "Average = (x₁ + x₂ + ... + xₙ) / n", "Average = n / (x₁ + x₂ + ... + xₙ)", "Average = (x₁ + xₙ) / 2"], correct: 1, explanation: "Average = (x₁ + x₂ + ... + xₙ) / n — add all grades together and divide by the number of grades (n). This is the standard arithmetic mean formula." },
            { q: "Which pseudocode control structure uses IF...THEN...ELSE?", options: ["Sequence", "Repetition", "Condition", "Storage"], correct: 2, explanation: "CONDITION uses IF...THEN...ELSE — it makes a decision and does one thing or another depending on the outcome. Example: IF bulb is burned out THEN replace bulb ELSE buy new lamp." },
            { q: "What does the storage control structure do in pseudocode?", options: ["Jumps to a specific step", "Repeats a set of instructions", "Stores information in a variable for later use", "Lists steps in order"], correct: 2, explanation: "STORAGE assigns a value to a variable for later use. Example: x ← a new bulb. The arrow means 'assign'. This is how data is saved during algorithm execution." },
            { q: "What is the purpose of the 'Formulate a Model' step?", options: ["To write the actual program code", "To find or create a formula that transforms input into the desired output", "To test the program with sample data", "To draw a flowchart of the solution"], correct: 1, explanation: "FORMULATING A MODEL means finding or creating a formula/method that transforms your input data into the desired output. Without a model, you cannot develop an algorithm." },
            { q: "For complex problems, the input/process/output model must be:", options: ["Simplified into one step", "Repeated multiple times producing intermediate results", "Replaced with a flowchart", "Skipped and code written directly"], correct: 1, explanation: "For complex problems, the INPUT → PROCESS → OUTPUT cycle must be REPEATED (iterated) multiple times. Each iteration produces intermediate results that solve part of the problem." },
            { q: "What is the FIRST step in solving any problem?", options: ["Write the program", "Develop an algorithm", "Understand the problem", "Test with sample data"], correct: 2, explanation: "The FIRST step is always to UNDERSTAND THE PROBLEM. You must know your inputs, outputs, format and constraints before you can formulate a model or write an algorithm." },
            { q: "Which control structure uses REPEAT...UNTIL in pseudocode?", options: ["Sequence", "Condition", "Storage", "Repetition"], correct: 3, explanation: "REPETITION uses REPEAT...UNTIL — it repeats a set of instructions until a condition is met. Example: REPEAT { put bulb in lamp } UNTIL lamp works or no more bulbs left." },
            { q: "What does 'coding' or 'implementing an algorithm' mean?", options: ["Drawing a flowchart of the algorithm", "Testing the algorithm with sample data", "Translating the algorithm into actual program code", "Evaluating whether the solution is correct"], correct: 2, explanation: "CODING (implementing) means TRANSLATING the algorithm into actual program code using a programming language. The pseudocode becomes real code that the computer can execute." },
            { q: "In the broken lamp example, which step comes FIRST in the pseudocode?", options: ["Check if bulb is burnt out", "Buy new lamp", "IF lamp works, go to step 7", "Check if lamp is plugged in"], correct: 2, explanation: "The first step is 'IF lamp works, go to step 7' — you check if the lamp already works before doing anything else. This is the SEQUENCE control structure — steps in logical order." },
            { q: "What should you do BEFORE moving to the 'Write the Program' step?", options: ["Test the program with real users", "Make sure the algorithm is correct by testing it mentally", "Evaluate the final solution", "Draw a flowchart"], correct: 1, explanation: "Before writing code, you should TEST THE ALGORITHM MENTALLY — trace through the steps with sample data to make sure no step is missed and no special situation is overlooked." },
            { q: "If letter grades (A+, B, C–) are the input, what must be done before computing the average?", options: ["Convert them to a percentage directly", "Assign integer numbers to each letter grade first", "Use the formula Average = (x₁ + x₂ + ... + xₙ) / n directly", "Skip the model step and write code immediately"], correct: 1, explanation: "Letter grades cannot be added or divided directly. You must first ASSIGN INTEGER NUMBERS to each letter (A+=12, A=11, B+=9 ... F=0), then apply the average formula to those numbers." }
        ]
    },

    "CIT108_m1_u1": {
        fbq: [
            { q: "A problem-solving strategy is a ________ used to find a solution or overcome a challenge.", a: "plan", explanation: "A problem-solving strategy is a PLAN — a structured approach with action steps designed to help you find a solution to a specific problem." },
            { q: "Problems can be classified into two categories: ________ problems and ________ problems.", a: "well-defined / ill-defined", explanation: "WELL-DEFINED problems have clear goals and expected solutions. ILL-DEFINED problems have unclear goals and no single correct answer." },
            { q: "An algorithm is a problem-solving formula that provides ________ instructions used to achieve a desired outcome.", a: "step-by-step", explanation: "An algorithm is a STEP-BY-STEP formula — like a recipe. If followed exactly, it always produces the same correct result." },
            { q: "A heuristic is a general problem-solving framework also known as a mental ________.", a: "shortcut", explanation: "A heuristic is a MENTAL SHORTCUT — a quick rule of thumb that saves time and energy. Unlike an algorithm, it may not always give the best result." },
            { q: "The minimum number of moves to solve a Tower of Hanoi puzzle with n disks is ________.", a: "2ⁿ − 1", explanation: "The formula is 2ⁿ − 1 where n is the number of disks. Example: 3 disks = 2³ − 1 = 7 moves. 14 disks = 2¹⁴ − 1 = 16,383 moves." },
            { q: "________ is the tendency to view problems only in their customary manner, preventing creative solutions.", a: "Functional fixedness", explanation: "FUNCTIONAL FIXEDNESS is a mental block that stops you from seeing alternative uses or approaches. It limits your ability to find creative solutions." },
            { q: "The problem-solving strategy that involves trying different solutions and ruling out those that do not work is called ________.", a: "trial and error", explanation: "TRIAL AND ERROR involves testing different solutions one by one and eliminating those that fail. It is commonly used but not the most time-efficient strategy." },
            { q: "Means-ends analysis involves choosing and analysing actions at a series of ________ steps to move closer to the goal.", a: "smaller", explanation: "Means-ends analysis breaks the big goal into SMALLER sub-goals. Each small step moves you closer to the final solution — like solving the Tower of Hanoi one disk at a time." },
            { q: "A ________ matrix is a tool used to rank potential solutions by assigning weighted values to different factors.", a: "decision", explanation: "A DECISION MATRIX helps you choose the best solution when multiple options exist. You score each solution on factors like timeliness, risk, expense and practicality." },
            { q: "The tendency to only use solutions that have worked in the past is called ________.", a: "mental set", explanation: "MENTAL SET makes people default to familiar solutions. While it can be useful (like a heuristic), it can also cause inflexibility and prevent finding better alternatives." },
            { q: "A ________ solution to the Tower of Hanoi recognises that the puzzle can be broken into sub-problems that use the same general solving procedure.", a: "recursive", explanation: "A RECURSIVE solution breaks the Tower of Hanoi into sub-problems, solves each using the same method, then combines the sub-solutions into the complete answer." },
            { q: "When using a heuristic called ________, you begin solving the problem by focusing on the end result.", a: "working backwards", explanation: "WORKING BACKWARDS is a heuristic where you start from the desired end result and work back to the starting point. Useful for planning daily schedules and project timelines." },
            { q: "Effective problem-solving requires you to identify the problem, select the right ________, and follow a plan tailored to the specific issue.", a: "process", explanation: "The three steps of effective problem-solving: (1) Identify the problem, (2) Select the right PROCESS/strategy, (3) Follow a plan tailored to the specific issue." },
            { q: "Google uses ________ to decide which entries appear first in search results.", a: "algorithms", explanation: "Google's search ranking uses ALGORITHMS — exact step-by-step formulas that process data and produce consistent, reliable results. Facebook also uses algorithms for news feed ranking." },
            { q: "Bringing in a ________ can help a group stay on task and mediate collaboration when solving complex problems.", a: "facilitator", explanation: "A FACILITATOR is an impartial third party who helps a group work efficiently, documents the process and ensures meaningful collaboration when solving complex group problems." }
        ],
        mcq: [
            { q: "What is a problem-solving strategy?", options: ["A computer program that solves problems automatically", "A plan used to find a solution or overcome a challenge", "A mathematical formula for calculating answers", "A list of problems to be solved"], correct: 1, explanation: "A problem-solving strategy is a PLAN — a structured approach with action steps. Different strategies suit different problems. Examples include trial and error, algorithms, heuristics and means-ends analysis." },
            { q: "Which of the following best describes an ILL-DEFINED problem?", options: ["A problem with clear goals and a specific expected solution", "A problem with unclear goals, no obvious solution path and no single correct answer", "A problem that can only be solved using algorithms", "A problem that has already been solved before"], correct: 1, explanation: "ILL-DEFINED problems have unclear goals, no defined solution path and no single correct answer. WELL-DEFINED problems have specific goals, clear solution paths and expected answers." },
            { q: "What is the key difference between an algorithm and a heuristic?", options: ["An algorithm is faster than a heuristic", "An algorithm always produces the correct result; a heuristic is a quick shortcut that may not always be best", "A heuristic is more reliable than an algorithm", "An algorithm is used for simple problems; a heuristic for complex ones"], correct: 1, explanation: "An ALGORITHM must be followed exactly and always produces the correct result. A HEURISTIC is a mental shortcut (rule of thumb) that saves time but may not always give the best answer." },
            { q: "What is the minimum number of moves to solve a Tower of Hanoi puzzle with 3 disks?", options: ["6", "7", "8", "9"], correct: 1, explanation: "Formula: 2ⁿ − 1. With 3 disks: 2³ − 1 = 8 − 1 = 7 moves. This is the minimum — you cannot solve it in fewer moves following the rules." },
            { q: "Which problem-solving strategy involves trying different solutions and eliminating those that fail?", options: ["Algorithm", "Means-ends analysis", "Trial and error", "Heuristic"], correct: 2, explanation: "TRIAL AND ERROR involves testing different solutions one by one and ruling out those that don't work. It is commonly used but not the most time-efficient strategy." },
            { q: "Which of the following is a condition that triggers the use of a heuristic?", options: ["When you have unlimited time to make a decision", "When the decision is very important and complex", "When there is too much information to process", "When an algorithm is available"], correct: 2, explanation: "One of the 5 conditions that trigger heuristic use is when there is TOO MUCH INFORMATION to process. Other conditions: limited time, unimportant decision, very little information, or when a heuristic comes to mind immediately." },
            { q: "What is functional fixedness?", options: ["The ability to find multiple solutions to a problem", "The tendency to view problems only in their customary manner, blocking creative solutions", "A strategy for solving well-defined problems", "The process of breaking a problem into smaller steps"], correct: 1, explanation: "FUNCTIONAL FIXEDNESS is a mental block that prevents you from seeing a problem in new ways. It limits creative thinking by making you see things only in their usual, customary manner." },
            { q: "The Tower of Hanoi is used as an example of which problem-solving strategy?", options: ["Trial and error", "Algorithm", "Heuristic", "Means-ends analysis"], correct: 3, explanation: "The Tower of Hanoi is the classic example of MEANS-ENDS ANALYSIS — you break the big goal (move all disks) into smaller sub-goals (move one disk at a time), each step moving you closer to the final solution." },
            { q: "What is the Tower of Hanoi minimum moves formula for 14 disks?", options: ["14,000 moves", "16,383 moves", "28 moves", "196 moves"], correct: 1, explanation: "Formula: 2ⁿ − 1. With 14 disks: 2¹⁴ − 1 = 16,384 − 1 = 16,383 moves. This is the minimum number of moves required." },
            { q: "Which heuristic involves starting from the desired end result and working backwards?", options: ["Trial and error", "Decision matrix", "Working backwards", "Means-ends analysis"], correct: 2, explanation: "WORKING BACKWARDS is a heuristic where you start from the end result and trace back to the starting point. It is commonly used for planning daily schedules and project timelines." },
            { q: "A decision matrix helps you choose the best solution by:", options: ["Randomly selecting from available options", "Assigning weighted scores to each solution based on multiple factors", "Using trial and error to test each solution", "Asking a facilitator to decide"], correct: 1, explanation: "A DECISION MATRIX assigns weighted scores (0–10) to each potential solution across multiple factors (timeliness, risk, expense, practicality, etc.). The solution with the highest total score is the best choice." },
            { q: "Which of the following is NOT a roadblock to effective problem solving?", options: ["Functional fixedness", "Mental set", "Irrelevant information", "Using a decision matrix"], correct: 3, explanation: "A DECISION MATRIX is a problem-solving TOOL, not a roadblock. The roadblocks are: functional fixedness, mental set, irrelevant information, and incorrect assumptions." },
            { q: "Facebook uses algorithms to decide which posts appear on your newsfeed. This is an example of:", options: ["Trial and error", "Heuristic", "Algorithm in everyday life", "Means-ends analysis"], correct: 2, explanation: "Facebook's newsfeed ranking is an ALGORITHM IN EVERYDAY LIFE — a step-by-step formula that processes data and produces consistent results. Google search ranking is another example." },
            { q: "Which Tower of Hanoi solution approach uses binary notation to represent disk moves?", options: ["Iterative solution", "Recursive solution", "Non-recursive solution", "Binary and Gray-code solution"], correct: 3, explanation: "The BINARY AND GRAY-CODE solution represents disk move numbers in binary notation (base-2). Each bit represents a disk, and a bit with a different value from the previous one indicates a disk move." },
            { q: "Mental set can be useful because it:", options: ["Always finds the best solution", "Works like a heuristic by using familiar solutions quickly", "Eliminates the need for algorithms", "Prevents functional fixedness"], correct: 1, explanation: "MENTAL SET can work like a HEURISTIC — using familiar solutions quickly saves time. However, it can also cause inflexibility by preventing you from considering better alternatives." }
        ]
    },

    "CIT108_m2_u4": {
        fbq: [
            { q: "Pseudocode is a ________ description of an algorithm written in plain English.", a: "syntax-free", explanation: "Pseudocode has NO syntax rules — unlike real programming languages, it cannot be compiled or interpreted by a computer. It is written for humans to read." },
            { q: "The 6 main constructs of pseudocode are always written in ________.", a: "UPPERCASE", explanation: "All keywords and constructs in pseudocode must be written in UPPERCASE (e.g. WHILE, IF, FOR, SEQUENCE). This distinguishes them from variable names and regular text." },
            { q: "A ________ loop checks its condition at the beginning, while a ________ loop checks its condition at the bottom.", a: "WHILE / REPEAT-UNTIL", explanation: "WHILE checks the condition BEFORE executing the loop body. REPEAT-UNTIL checks the condition AFTER — so the body always runs at least once." },
            { q: "The ________ construct is the generalised form of IF-THEN-ELSE.", a: "CASE", explanation: "CASE handles multiple conditions in one structure — it is the generalised (extended) form of IF-THEN-ELSE, used when there are many possible conditions to check." },
            { q: "In pseudocode, ________ is used to show hierarchy and nested constructs.", a: "indentation", explanation: "Indentation (moving text inward) shows which statements belong inside a loop or condition. It makes the structure of the pseudocode clear and readable." },
            { q: "The keywords READ, OBTAIN and GET are used for ________ operations in pseudocode.", a: "input", explanation: "READ, OBTAIN and GET are input keywords — they represent receiving data from the user or another source. Output keywords include PRINT, DISPLAY, SHOW, WRITE." },
            { q: "Pseudocode acts as a ________ between the flowchart and the actual code.", a: "bridge / middle point", explanation: "Pseudocode sits between the flowchart (visual) and real code (syntax-bound). It smooths the transition from planning to implementation." },
            { q: "Every multiline section in pseudocode must be closed with an ________ keyword.", a: "END", explanation: "Multiline constructs must be closed: ENDIF, ENDWHILE, ENDFOR, ENDCASE. This shows clearly where each block ends." },
            { q: "The keyword ________ is used to call a function or class in pseudocode.", a: "CALL", explanation: "The CALL keyword is used to invoke (call) a function or class. Example: CALL AvgAge with StudentAges." },
            { q: "Pseudocode is ________ independent, meaning it does not belong to any specific programming language.", a: "language", explanation: "Pseudocode is LANGUAGE INDEPENDENT — it can be translated into any programming language (Python, Java, C++, etc.) because it uses no language-specific syntax." },
            { q: "The keywords SET and INIT are used to ________ a variable in pseudocode.", a: "initialise", explanation: "SET and INIT are initialisation keywords — they assign a starting value to a variable. Example: SET x to 0." },
            { q: "The ________ construct represents linear tasks performed sequentially one after the other.", a: "SEQUENCE", explanation: "SEQUENCE is the simplest construct — steps are executed one after another in order, with no branching or looping." },
            { q: "Pseudocode can serve as a starting point for ________, which is an essential aspect of building a good project.", a: "documentation", explanation: "Documentation explains how a program works. Pseudocode can be used as a docstring at the beginning of a code file, making it a natural starting point for documentation." },
            { q: "In pseudocode, INCREMENT and DECREMENT are used to ________ and ________ a value.", a: "add / subtract", explanation: "INCREMENT adds 1 (or a value) to a variable. DECREMENT subtracts 1 (or a value). They are shorthand for ADD 1 to x and SUBTRACT 1 from x." },
            { q: "The main goal of pseudocode is to explain what each line of a program should do, making the ________ phase easier.", a: "code construction", explanation: "By planning the logic in pseudocode first, the programmer knows exactly what each line of real code needs to do — making the actual coding phase faster and easier." }
        ],
        mcq: [
            { q: "What is pseudocode?", options: ["A programming language with simplified syntax", "A syntax-free plain English description of an algorithm", "A diagram showing the flow of a program", "A compiled version of an algorithm"], correct: 1, explanation: "Pseudocode is a SYNTAX-FREE description of an algorithm written in plain English using programming-like keywords. It cannot be compiled or interpreted by a computer — it is written for humans." },
            { q: "Which of the following is NOT one of the 6 main constructs of pseudocode?", options: ["WHILE", "SEQUENCE", "COMPILE", "IF-THEN-ELSE"], correct: 2, explanation: "COMPILE is not a pseudocode construct — pseudocode cannot be compiled. The 6 main constructs are: SEQUENCE, WHILE, REPEAT-UNTIL, FOR, IF-THEN-ELSE, CASE. Memory aid: SWRFIC." },
            { q: "What is the key difference between WHILE and REPEAT-UNTIL?", options: ["WHILE is used for output, REPEAT-UNTIL is used for input", "WHILE checks condition at the beginning, REPEAT-UNTIL checks at the bottom", "WHILE is used for numbers, REPEAT-UNTIL is used for text", "There is no difference between them"], correct: 1, explanation: "WHILE checks the condition BEFORE executing the loop body — if false from the start, the body never runs. REPEAT-UNTIL checks AFTER — the body always runs at least once." },
            { q: "Which pseudocode construct is the generalised form of IF-THEN-ELSE?", options: ["FOR", "WHILE", "CASE", "SEQUENCE"], correct: 2, explanation: "CASE is the generalised form of IF-THEN-ELSE. While IF-THEN-ELSE handles two branches (true/false), CASE handles multiple conditions in one structure." },
            { q: "Which of the following is a correct reason for using pseudocode?", options: ["It can be directly executed by a computer", "It makes code run faster", "It helps detect bugs before writing actual code", "It replaces the need for flowcharts entirely"], correct: 2, explanation: "One key reason for using pseudocode is EASIER BUG DETECTION — since it is human-readable, errors in logic can be spotted and fixed before writing a single line of real code." },
            { q: "In pseudocode, which keywords are used for INPUT operations?", options: ["PRINT, DISPLAY, SHOW", "SET, INIT, INCREMENT", "READ, OBTAIN, GET", "COMPUTE, CALCULATE, DETERMINE"], correct: 2, explanation: "READ, OBTAIN and GET are INPUT keywords. PRINT/DISPLAY/SHOW are output. SET/INIT are initialisation. COMPUTE/CALCULATE are for calculations." },
            { q: "What does the CALL keyword do in pseudocode?", options: ["It reads input from the user", "It ends a loop", "It invokes a function or class", "It initialises a variable"], correct: 2, explanation: "The CALL keyword is used to invoke (call) a function or class. Example: CALL AvgAge with StudentAges. It is one of the less common but important constructs." },
            { q: "Which rule states that pseudocode should not use Python or Java specific syntax?", options: ["Keep it simple and readable", "Use only one statement per line", "Keep statements programming language independent", "Always capitalise the initial keyword"], correct: 2, explanation: "Rule 5 states: Keep statements PROGRAMMING LANGUAGE INDEPENDENT. Pseudocode should be translatable to any language — never use Python, Java or C++ specific syntax." },
            { q: "What is the correct pseudocode to multiply two numbers and display the result?", options: ["COMPUTE num1 AND num2 THEN SHOW", "READ num1, num2 / SET product to num1*num2 / WRITE product", "INPUT num1 + num2 = product OUTPUT", "GET num1 num2 MULTIPLY PRINT"], correct: 1, explanation: "The correct pseudocode uses: READ (input), SET (assign), WRITE (output). READ num1, num2 → SET product to num1*num2 → WRITE product. This follows all 7 rules." },
            { q: "Why must pseudocode use indentation?", options: ["To make it look like real code", "To show hierarchy and nested constructs clearly", "Because computers require it to run", "To separate input from output"], correct: 1, explanation: "Indentation shows HIERARCHY — which statements belong inside a loop or condition. It makes the structure clear and readable, especially for nested constructs like loops inside conditions." },
            { q: "Which of the following best describes the position of pseudocode in the development process?", options: ["It comes before the idea stage", "It replaces the algorithm entirely", "It is a bridge between the flowchart and actual code", "It is written after the code is complete"], correct: 2, explanation: "Pseudocode is a BRIDGE between the flowchart (visual planning) and real code (syntax-bound implementation). It smooths the transition from idea → flowchart → pseudocode → code." },
            { q: "What happens if you do not close a multiline construct in pseudocode?", options: ["The pseudocode runs faster", "The structure becomes unclear and hard to read", "The computer will fix it automatically", "Nothing — END keywords are optional"], correct: 1, explanation: "Not closing multiline constructs (ENDIF, ENDWHILE, ENDFOR) makes the pseudocode UNCLEAR and hard to read. Rule 4 states: always end multiline sections using END keywords." },
            { q: "Which of the following is an ADVANTAGE of pseudocode?", options: ["It can be compiled directly into machine code", "It improves readability and acts as rough documentation", "It eliminates the need for testing", "It is faster than writing actual code"], correct: 1, explanation: "Pseudocode IMPROVES READABILITY and acts as rough documentation. It helps programmers from different backgrounds understand the logic, and can serve as a docstring in code files." },
            { q: "In the worked example for counting even numbers, which construct is used?", options: ["IF-THEN-ELSE", "FOR", "CASE", "WHILE"], correct: 3, explanation: "The even numbers example uses a WHILE loop: WHILE (x < count) — it keeps running as long as x is less than the user-defined stopping point. The condition is checked at the beginning." },
            { q: "Which statement about pseudocode is TRUE?", options: ["Pseudocode must follow the syntax of Python", "Pseudocode can be compiled by any modern compiler", "Pseudocode is language independent and cannot be compiled", "Pseudocode can only be used for simple problems"], correct: 2, explanation: "Pseudocode is LANGUAGE INDEPENDENT (not tied to any programming language) and CANNOT BE COMPILED or interpreted by a computer. It is a planning tool for humans, not machines." }
        ]
    },

    "CIT108_m2_u3": {
        fbq: [
            { q: "A flowchart is a type of ________ that represents an algorithm, workflow or process.", a: "diagram", explanation: "A flowchart is a DIAGRAM — a visual representation. It uses boxes of various shapes connected by arrows to show the steps and order of a process or algorithm." },
            { q: "The Start/End symbol in a flowchart is also called the ________ symbol.", a: "Terminator", explanation: "The oval or rounded rectangle shape is called the TERMINATOR symbol. It marks where the flow begins and where it ends." },
            { q: "The ________ symbol is used to represent a process, action or single step in a flowchart.", a: "Rectangle (Process/Action)", explanation: "The RECTANGLE is the Process or Action symbol. It represents any single step, action or operation in the algorithm." },
            { q: "The ________ shape is used for decision points in a flowchart.", a: "Diamond", explanation: "The DIAMOND shape represents a decision point — a yes/no or true/false question that splits the flow into two branches." },
            { q: "The ________ shape is used for input and output operations in a flowchart.", a: "Parallelogram", explanation: "The PARALLELOGRAM (slanted rectangle) is the Input/Output symbol. It shows where data enters or leaves the process." },
            { q: "The flowchart type that shows multiple flows of information side by side is called a ________ flowchart.", a: "Swimlane", explanation: "A SWIMLANE flowchart shows multiple parallel flows side by side, each in its own lane. It is used when different departments or teams are involved in the same process." },
            { q: "A flowchart is a ________ representation of an algorithm.", a: "diagrammatic", explanation: "While an algorithm uses written step-by-step instructions, a flowchart is a DIAGRAMMATIC representation — it shows the same information visually using shapes and arrows." },
            { q: "According to the unit, flowcharts should flow ________ or ________ for easy reading.", a: "left-to-right / top-to-bottom", explanation: "Eyes naturally follow left-to-right and top-to-bottom paths. Flowcharts should follow this direction to make them easier to read and understand." },
            { q: "The flowchart type most commonly used in software development to show how data moves through a system is called a ________ flowchart.", a: "Data", explanation: "A DATA flowchart (or data flow diagram) shows how data is processed and moves through a system. It is most commonly used in software development and system design." },
            { q: "When designing a flowchart, you should use no more than ________ colours.", a: "three (3)", explanation: "The design rule states: use no more than THREE colours. Too many colours make the chart confusing and harder to follow." },
            { q: "An algorithm is adequate for ________ problems while a flowchart is adequate for ________ programs.", a: "small / complex", explanation: "Algorithms work well for small, simple problems. Flowcharts are better for complex programs because they show the logic visually and are easier to check and debug." },
            { q: "The ________ flowchart is the most versatile of the four common types and can be applied to virtually anything.", a: "Process", explanation: "The PROCESS flowchart is the most versatile — it can be used for business processes, manufacturing, software, daily routines and almost any situation." },
            { q: "Flowcharts allow the problem solver to break the problem into ________ which can be connected to make a master chart.", a: "parts", explanation: "One key advantage of flowcharts is that they allow you to break a complex problem into smaller PARTS. These parts can then be connected to form one complete master chart." },
            { q: "The ________ symbol in a flowchart shows the order and direction of program flow.", a: "Arrow", explanation: "ARROWS connect all the symbols in a flowchart and show the direction of flow — which step comes next. Without arrows, the flowchart has no direction." },
            { q: "A flowchart is a permanent ________ of the solution which can be consulted at a later time.", a: "record", explanation: "One advantage of flowcharts is that they serve as a permanent RECORD of the solution. You can refer back to them later for debugging, training or documentation." }
        ],
        mcq: [
            { q: "What is a flowchart?", options: ["A written list of instructions for solving a problem", "A diagram that represents an algorithm or process using shapes and arrows", "A programming language used to write code", "A table showing input and output values"], correct: 1, explanation: "A flowchart is a DIAGRAM that represents an algorithm, workflow or process. It uses boxes of various shapes connected by arrows to show the steps and their order. It is NOT a programming language or written list." },
            { q: "Which symbol is used to represent a DECISION point in a flowchart?", options: ["Rectangle", "Oval", "Diamond", "Parallelogram"], correct: 2, explanation: "The DIAMOND shape represents a decision point — a yes/no or true/false question that splits the flow into two branches. Rectangle = process. Oval = start/end. Parallelogram = input/output." },
            { q: "What is the correct name for the oval/rounded rectangle symbol in a flowchart?", options: ["Process symbol", "Data symbol", "Terminator symbol", "Decision symbol"], correct: 2, explanation: "The oval or rounded rectangle is called the TERMINATOR symbol. It marks where the flow starts and ends. It is also called the Start/End symbol." },
            { q: "Which flowchart type is BEST for showing multiple departments working in parallel?", options: ["Process flowchart", "Data flowchart", "Workflow chart", "Swimlane flowchart"], correct: 3, explanation: "The SWIMLANE flowchart shows multiple flows side by side, each in its own lane. It is ideal for showing how different departments or teams work in parallel and interact with each other." },
            { q: "What is the key difference between an algorithm and a flowchart?", options: ["An algorithm uses diagrams while a flowchart uses words", "An algorithm uses written steps while a flowchart is a diagrammatic representation", "A flowchart is only used for simple problems", "An algorithm is more detailed than a flowchart"], correct: 1, explanation: "An ALGORITHM uses written step-by-step English descriptions. A FLOWCHART is a diagrammatic representation of the same algorithm using shapes and arrows. Flowcharts are better for complex programs." },
            { q: "Which symbol is used for INPUT and OUTPUT operations in a flowchart?", options: ["Rectangle", "Diamond", "Oval", "Parallelogram"], correct: 3, explanation: "The PARALLELOGRAM (slanted rectangle) is the Input/Output symbol. It shows where data enters (input) or leaves (output) the process. It is also called the Data symbol." },
            { q: "According to the unit, which flowchart type is the MOST VERSATILE?", options: ["Swimlane flowchart", "Data flowchart", "Process flowchart", "Workflow chart"], correct: 2, explanation: "The PROCESS flowchart is the most versatile — it can be applied to virtually anything: business processes, manufacturing, software development, daily routines and more." },
            { q: "In flowchart design, which direction should charts flow for easiest reading?", options: ["Right-to-left or bottom-to-top", "Left-to-right or top-to-bottom", "Diagonally from corner to corner", "Any direction is equally good"], correct: 1, explanation: "Charts should flow LEFT-TO-RIGHT or TOP-TO-BOTTOM. Eyes naturally follow these paths, making the flowchart easier to read and understand." },
            { q: "Which of the following is NOT an advantage of flowcharts?", options: ["They show the logic of a problem visually", "They serve as a permanent record of the solution", "They are always faster to create than writing algorithms", "They allow breaking a problem into connected parts"], correct: 2, explanation: "'Always faster to create than writing algorithms' is NOT an advantage — in fact, flowcharts can be time-consuming for complex problems. The listed advantages are: visual logic, permanent record, communication tool, breaking problems into parts." },
            { q: "What is the maximum number of colours recommended when designing a flowchart?", options: ["One", "Two", "Three", "Five"], correct: 2, explanation: "The design rule states: use no more than THREE colours. Too many colours make the chart confusing and harder to follow. Fewer colours = clearer chart." },
            { q: "Which area uses flowcharts to show the ingredients and manufacturing process of a product?", options: ["Sales & Marketing", "Manufacturing", "Software Engineering", "Business Operations"], correct: 1, explanation: "MANUFACTURING uses flowcharts to show ingredients/inputs, illustrate the production process, show dependencies and bottlenecks, and create quality assurance processes." },
            { q: "A data flowchart is MOST commonly used in which field?", options: ["Sales and marketing", "Manufacturing", "Software development and system design", "Human resources"], correct: 2, explanation: "A DATA flowchart (data flow diagram) is most commonly used in SOFTWARE DEVELOPMENT AND SYSTEM DESIGN to show how data moves through a system or program." },
            { q: "Which of the following is a consideration when designing flowcharts?", options: ["Use as many colours as possible to highlight paths", "Always use multiple fonts for variety", "Keep the chart on one page when possible", "Always flow from right to left"], correct: 2, explanation: "Keeping the chart on ONE PAGE when possible is a key design consideration. Charts are easier to digest when simple and on one page. Multiple pages make the chart seem more complex." },
            { q: "What does the swimlane flowchart allow that a regular workflow chart does NOT?", options: ["Showing the start and end of a process", "Creating different categories where activity takes place side by side", "Using decision symbols", "Showing input and output"], correct: 1, explanation: "The SWIMLANE flowchart allows creating DIFFERENT CATEGORIES (lanes) where activity takes place side by side. This shows how different departments or roles work in parallel — something a regular workflow chart cannot show clearly." },
            { q: "Which of the following best describes the purpose of a flowchart?", options: ["To write code in a visual format", "To replace written documentation entirely", "To map out a process so it can be easily communicated, analysed and improved", "To store data in a structured format"], correct: 2, explanation: "The purpose of a flowchart is to MAP OUT A PROCESS so it can be easily communicated to others, analysed for problems, and standardised or improved. It is a communication and analysis tool, not a replacement for documentation." }
        ]
    },

    "CIT108_m2_u2": {
        fbq: [
            { q: "An algorithm is a ________ set of well-defined instructions for solving a problem.", a: "finite", explanation: "An algorithm must be FINITE — it must have a definite number of steps and must come to an end. An infinite set of instructions is not an algorithm." },
            { q: "The two common methods of representing an algorithm are ________ and ________.", a: "flowchart, pseudocode", explanation: "Algorithms are represented using: (1) Flowcharts — visual diagrams using shapes and arrows, (2) Pseudocode — structured English-like instructions. Both are covered in Units 3 and 4." },
            { q: "An algorithm that requires 3 trips to the cupboard regardless of guests has ________ efficiency.", a: "constant", explanation: "CONSTANT efficiency means the algorithm takes the same amount of time/steps regardless of the input size. 3 trips whether there are 2 guests or 20 guests = constant." },
            { q: "The ________ complexity of an algorithm refers to the amount of time it takes to complete.", a: "runtime", explanation: "RUNTIME complexity measures how long an algorithm takes to complete. SPACE complexity measures how much memory it uses. Both are important efficiency measures." },
            { q: "If an algorithm produces different outputs for the same inputs it violates the ________ characteristic.", a: "uniqueness", explanation: "UNIQUENESS means the same inputs always produce the same outputs. If an algorithm gives different results for the same input, it is unreliable and violates uniqueness." },
            { q: "Steps involved in algorithm development that ensures instructions are practically doable is called ________.", a: "effectiveness", explanation: "EFFECTIVENESS (Possessing Effectiveness) ensures that every step in the algorithm is practical and can actually be carried out. Theoretical steps that cannot be executed are not effective." },
            { q: "An algorithm with efficiency of n² is called ________.", a: "quadratic", explanation: "QUADRATIC efficiency means the algorithm's time grows by n² (n squared). If input doubles, time quadruples. This is poor efficiency — avoid for large inputs." },
            { q: "A sub-algorithm that returns a value is called a ________ while one that returns no value is called a ________.", a: "function, procedure", explanation: "FUNCTION = sub-algorithm that returns a value (like a calculation result). PROCEDURE = sub-algorithm that performs an action but returns no value (like printing output)." },
            { q: "The ________ characteristic ensures every step of an algorithm is exactly and accurately stated.", a: "precision", explanation: "PRECISION means every step is exactly and accurately defined — no ambiguity, no vagueness. Each instruction must be clear enough that it can only be interpreted one way." },
            { q: "Writing an algorithm is considered the ________ step to programming.", a: "first", explanation: "Algorithm writing is the FIRST step to programming. Before writing any code, you must plan the solution as an algorithm — this makes coding easier, clearer and more efficient." }
        ],
        mcq: [
            { q: "An algorithm is best described as:", options: ["A programming language", "A finite set of well-defined instructions for solving a problem", "A diagram showing program flow", "A type of computer hardware"], correct: 1, explanation: "An algorithm is a FINITE set of WELL-DEFINED instructions written in human readable language for solving a given problem in a finite number of steps. It is not a programming language or hardware." },
            { q: "Which characteristic of an algorithm ensures it always comes to an end?", options: ["Precision", "Uniqueness", "Finiteness", "Effectiveness"], correct: 2, explanation: "FINITENESS ensures the algorithm always terminates after a finite number of steps. An algorithm that runs forever is not a valid algorithm — it must always stop." },
            { q: "Which step of algorithm development ensures instructions are clear and unambiguous?", options: ["Finiteness", "Effectiveness", "Definiteness", "Input identification"], correct: 2, explanation: "PROCESSING DEFINITENESS ensures that every step is clear and unambiguous — each instruction can only be interpreted one way. Vague instructions make an algorithm unreliable." },
            { q: "An algorithm that takes the same amount of time regardless of input size is called:", options: ["Linear", "Quadratic", "Exponential", "Constant"], correct: 3, explanation: "CONSTANT efficiency means the algorithm takes the same time/steps regardless of how large the input is. Example: always making 3 trips to the cupboard whether there are 2 or 20 guests." },
            { q: "Which is the MOST efficient algorithm type?", options: ["Linear", "Logarithmic", "Quadratic", "Exponential"], correct: 1, explanation: "LOGARITHMIC is the most efficient algorithm type — it grows very slowly even as input size increases dramatically. Exponential is the LEAST efficient and should be avoided." },
            { q: "Which of the following is NOT an advantage of algorithms?", options: ["Easy debugging", "Effective communication", "Difficult to understand complex logic", "Independent of programming language"], correct: 2, explanation: "'Difficult to understand complex logic' is a DISADVANTAGE, not an advantage. Advantages include: effective communication, easy debugging, efficient coding, language independence." },
            { q: "The amount of storage space an algorithm requires while running is called:", options: ["Runtime complexity", "Space complexity", "Linear complexity", "Algorithm efficiency"], correct: 1, explanation: "SPACE COMPLEXITY measures the amount of memory/storage an algorithm uses while running. RUNTIME complexity measures the time taken. Both are important efficiency measures." },
            { q: "Which characteristic ensures that the same inputs always produce the same outputs?", options: ["Precision", "Finiteness", "Uniqueness", "Input"], correct: 2, explanation: "UNIQUENESS means the same inputs always produce the same outputs. This makes the algorithm reliable and predictable — you always know what result to expect for a given input." },
            { q: "A WHILE loop in an algorithm represents:", options: ["A decision between two options", "A repeated action based on a condition", "The final output step", "The input reading step"], correct: 1, explanation: "A WHILE loop represents a REPEATED ACTION based on a condition — the loop keeps executing as long as the condition is true. It is used when you don't know in advance how many times to repeat." },
            { q: "Which algorithm efficiency grows by n × n?", options: ["Linear", "Logarithmic", "Quadratic", "Constant"], correct: 2, explanation: "QUADRATIC efficiency grows by n² (n squared). If input size doubles, the time taken quadruples. This is poor efficiency for large inputs. Example: nested loops that check every pair of items." }
        ]
    },

    "GST102_m1_u1": {
        fbq: [
            { q: "A paragraph is a piece of writing unified by a _____________ idea or theme.", a: "central / controlling", explanation: "A paragraph must have ONE central, controlling idea. Every sentence in the paragraph must relate to this idea — this is what gives the paragraph UNITY." },
            { q: "The sentence that expresses the main idea of a paragraph is called the _____________.", a: "topic sentence", explanation: "The topic sentence is the most important sentence in a paragraph. It states the main idea and can be a statement, a generalisation or a problem." },
            { q: "A topic sentence can be a statement, a generalisation or a _____________.", a: "problem", explanation: "The three forms a topic sentence can take: (1) a statement of fact, (2) a generalisation about a topic, or (3) a problem that the paragraph will address." },
            { q: "When the topic sentence is placed at the _____________ of a paragraph, the reader knows immediately what the paragraph is about.", a: "beginning", explanation: "The beginning is the most common position for a topic sentence. It tells the reader immediately what to expect and helps the writer maintain focus throughout the paragraph." },
            { q: "A paragraph in which the writer moves the reader logically and smoothly from one idea to the next is described as _____________.", a: "coherent", explanation: "Coherence is the quality that makes a paragraph flow smoothly. A coherent paragraph has sentences arranged in logical order, each leading naturally to the next." },
            { q: "Words and phrases that help a writer move smoothly from one sentence to the next are called _____________.", a: "transitional devices", explanation: "Transitional devices are connecting words and phrases that show the logical relationship between ideas. They function like road signs — they guide the reader through the paragraph." },
            { q: "The transitional devices 'for example' and 'for instance' are used to _____________.", a: "give examples", explanation: "'For example', 'for instance', 'specifically', 'as an illustration' — these are all used to introduce examples that support the main idea." },
            { q: "'Similarly' and 'likewise' are transitional devices used to express _____________.", a: "comparison", explanation: "Comparison transitional devices show that two things are alike. 'Similarly' and 'likewise' signal that the next idea is similar to the previous one." },
            { q: "'However', 'nevertheless' and 'on the other hand' are used to express _____________.", a: "contrast", explanation: "Contrast transitional devices show that two things are different or opposite. 'However', 'nevertheless', 'but', 'yet', 'still', 'on the other hand' all signal contrast." },
            { q: "'Therefore', 'thus' and 'consequently' are transitional devices used to express _____________.", a: "result", explanation: "Result transitional devices show that one thing causes or leads to another. 'Therefore', 'thus', 'consequently', 'as a result', 'hence' all signal a result or conclusion." },
            { q: "In Example 1 of the unit, the paragraph about animals is developed mainly by giving _____________.", a: "examples", explanation: "Example 1 develops its topic sentence by listing specific examples: the hunter, the farmer, the fisherman, the city dweller — each is an example of how animals serve different people." },
            { q: "The topic sentence of Example 2 about war is placed at the _____________ of the paragraph.", a: "end", explanation: "In Example 2, all sentences build up to the topic sentence at the end: 'One art alone has made indisputable progress in history and that is the art of war.' This makes the conclusion more powerful." },
            { q: "'Moreover', 'furthermore' and 'besides' are transitional devices used to express _____________.", a: "addition", explanation: "Addition transitional devices introduce more information on the same point. 'Moreover', 'furthermore', 'also', 'too', 'besides', 'in addition' all signal that more is being added." },
            { q: "Every sentence in a paragraph must relate to the topic sentence in order to give the paragraph _____________.", a: "unity", explanation: "UNITY means every sentence in the paragraph is about the same central idea. If a sentence does not relate to the topic sentence, it breaks the unity of the paragraph." },
            { q: "Transitional devices function like _____________ in a paragraph, enabling us to follow the writer's line of thought.", a: "signposts / road signs", explanation: "Just like road signs guide drivers, transitional devices guide readers through a paragraph. They show the direction of the writer's thought — adding, contrasting, giving examples, showing results." }
        ],
        mcq: [
            { q: "A paragraph is defined as a piece of writing unified by:", options: ["Many different ideas", "A central controlling idea or theme", "A series of unrelated sentences", "A conclusion only"], correct: 1, explanation: "A paragraph must have ONE central, controlling idea or theme. Every sentence must relate to this idea. This is what gives the paragraph UNITY." },
            { q: "The topic sentence of a paragraph is most frequently found:", options: ["At the end of the paragraph", "In the middle of the paragraph", "At the beginning of the paragraph", "It is never stated"], correct: 2, explanation: "The beginning is the most common position for a topic sentence. It tells the reader immediately what the paragraph is about and helps the writer maintain focus. Always your safest answer if unsure." },
            { q: "When a topic sentence is placed at the end of a paragraph, the effect is that:", options: ["The reader is confused", "The paragraph has no unity", "All sentences build up to it making the conclusion more effective", "The paragraph becomes too short"], correct: 2, explanation: "When the topic sentence is at the END, all preceding sentences build up to it. This creates a powerful conclusion — the reader is led through the evidence before reaching the main point." },
            { q: "Which of the following is NOT a transitional device for expressing addition?", options: ["Moreover", "Furthermore", "However", "Besides"], correct: 2, explanation: "'However' expresses CONTRAST, not addition. Addition devices: moreover, furthermore, also, too, besides, in addition. Contrast devices: however, nevertheless, but, yet, on the other hand." },
            { q: "The word 'however' is used as a transitional device to express:", options: ["Result", "Sequence", "Contrast", "Comparison"], correct: 2, explanation: "'However' signals CONTRAST — it introduces an idea that is different from or opposite to the previous one. Other contrast devices: nevertheless, but, yet, still, on the other hand." },
            { q: "In Example 1 of the unit, the paragraph about animals is developed mainly by:", options: ["Giving statistics", "Giving examples", "Giving definitions", "Giving contrasts"], correct: 1, explanation: "Example 1 develops its topic sentence by giving specific EXAMPLES: the hunter, the farmer, the fisherman, the city dweller. Each example shows how animals serve different types of people." },
            { q: "Which of the following best describes a coherent paragraph?", options: ["A paragraph with many long sentences", "A paragraph where the writer moves the reader logically and smoothly from one idea to the next", "A paragraph with no topic sentence", "A paragraph with only one sentence"], correct: 1, explanation: "COHERENCE is the quality that makes a paragraph flow smoothly and logically. A coherent paragraph has sentences in logical order, each leading naturally to the next, connected by transitional devices." },
            { q: "The transitional device 'therefore' is used to express:", options: ["Time", "Contrast", "Addition", "Result"], correct: 3, explanation: "'Therefore' expresses RESULT — it shows that what follows is a consequence or conclusion of what came before. Other result devices: thus, consequently, as a result, hence." },
            { q: "In Example 2 of the unit about war, what is the topic sentence?", options: ["'In the year 1830, a French official unearthed strange implements of flint'", "'One art alone has made indisputable progress in history and that is the art of war'", "'Twenty years ago modern Germans and Frenchmen fought again'", "'Neanderthal men fought fifty thousand years ago'"], correct: 1, explanation: "'One art alone has made indisputable progress in history and that is the art of war' is the topic sentence — placed at the END of the paragraph. All other sentences build up to this conclusion." },
            { q: "Which of the following is a transitional device used to show sequence?", options: ["However", "Similarly", "Therefore", "Finally"], correct: 3, explanation: "'Finally' shows SEQUENCE — it signals the last item in a series. Other sequence devices: first, second, third, then, next. Sequence devices show the order in which things happen or are presented." },
            { q: "A paragraph that lacks coherence will:", options: ["Have too many topic sentences", "Confuse the reader because sentences do not flow logically", "Be too long", "Have no examples"], correct: 1, explanation: "Without coherence, sentences feel disconnected and the reader cannot follow the writer's thought. Coherence is achieved through logical arrangement of sentences and the use of transitional devices." },
            { q: "Which of the following words is used to express COMPARISON as a transitional device?", options: ["Nevertheless", "Likewise", "Hence", "Besides"], correct: 1, explanation: "'Likewise' expresses COMPARISON — it signals that the next idea is similar to the previous one. Other comparison devices: similarly. 'Nevertheless' = contrast. 'Hence' = result. 'Besides' = addition." },
            { q: "The main idea of a paragraph that has no topic sentence is described as:", options: ["Missing", "Implied", "Irrelevant", "Contradictory"], correct: 1, explanation: "When a topic sentence is not directly stated, it is IMPLIED — suggested within the paragraph. The reader must infer the main idea from the content. This is the fourth position of a topic sentence." },
            { q: "'Most important of all' in Example 4 of the unit serves to show that:", options: ["All reasons are equal", "Some reasons are more important than others", "The paragraph is ending", "A contrast is being made"], correct: 1, explanation: "'Most important of all' is a transitional device that signals the MOST SIGNIFICANT point in a list. It tells the reader that what follows is the strongest or most important reason." },
            { q: "Which of the following correctly describes the function of transitional devices?", options: ["They replace the topic sentence", "They show the logical relationship between sentences and help the paragraph flow smoothly", "They summarize the paragraph", "They introduce new topics"], correct: 1, explanation: "Transitional devices connect sentences and show the logical relationship between ideas — result, contrast, addition, sequence, comparison, examples. They are the 'road signs' that guide the reader through the paragraph." }
        ]
    },

    "GST102_m2_u5": {
        fbq: [
            { q: "The only way you can learn how to summarise is for you to do it __________.", a: "practically", explanation: "Unit 5 is a practical unit — it teaches summarizing by working through real passages, not just theory. The only way to master summarizing is to practice it." },
            { q: "A sentence that states the main idea of a paragraph is called a __________ sentence.", a: "topic", explanation: "The topic sentence states the main idea of a paragraph. It is already in the text and can be used directly in your summary." },
            { q: "IPM stands for Integrated __________ Management.", a: "Pest", explanation: "IPM = Integrated Pest Management. It is a system that combines natural methods to control pests without depending on chemical pesticides." },
            { q: "The aim of IPM is to __________ pest populations so that crops can still grow well.", a: "control", explanation: "IPM does not aim to eliminate all pests — it aims to CONTROL pest populations to a level where crops can still grow well." },
            { q: "Pests became __________ to chemical pesticides making them ineffective.", a: "resistant", explanation: "RESISTANT means not affected by. Pests evolved to become resistant to chemical pesticides — the chemicals no longer worked on them. This is why IPM was developed." },
            { q: "The cotton crop in Texas in 1977 was better than __________ due to IPM.", a: "average", explanation: "The use of IPM on cotton farms in Texas in 1977 produced a crop that was better than average — proving that IPM works effectively." },
            { q: "Earthworms produce what is known as worm __________ which functions as high grade topsoil.", a: "castings", explanation: "Worm castings are the waste produced by earthworms. They function as high grade topsoil — rich in nutrients and beneficial for plant growth." },
            { q: "Worms need only moisture, __________ and food from the soil.", a: "darkness", explanation: "Earthworms have three basic needs: moisture, darkness and food from the soil. They do not need sunlight or air — they thrive underground." },
            { q: "Volcanic eruptions occur where there is a weakness or thin spot in the earth's __________.", a: "crust", explanation: "The earth's crust is the outer layer of the earth. Where it is weak or thin, magma can break through causing volcanic eruptions." },
            { q: "Volcanic particles added to the stratosphere make the air __________ so that less light passes through.", a: "cloudy", explanation: "Volcanic particles in the stratosphere make the air cloudy — this reduces the amount of sunlight that reaches the earth's surface, causing temperatures to drop." },
            { q: "The linking word __________ is used to show contrast between two ideas.", a: "however", explanation: "'However' signals CONTRAST — it introduces an idea that is different from or opposite to the previous one. Other contrast words: but, yet, although, nevertheless." },
            { q: "The linking word __________ is used to show result or consequence.", a: "therefore", explanation: "'Therefore' signals RESULT — it shows that what follows is a consequence of what came before. Other result words: thus, as a result, consequently, hence." },
            { q: "After mentioning a full name for the first time, you put its __________ form in brackets.", a: "short", explanation: "Abbreviation rule: First mention — write full name then put short form in brackets. Example: Integrated Pest Management (IPM). After that, use only IPM." },
            { q: "When writing a summary you must remove __________ of ideas and words.", a: "repetition", explanation: "Repetition is one of the key things to remove in a summary. If the same idea is expressed more than once, keep only the clearest version." },
            { q: "The three steps of summary writing are isolate main points, put them together and __________ for repetition.", a: "check", explanation: "The 3-step formula: (1) Isolate the main point in each paragraph, (2) Put them together as one flowing summary, (3) Check for repetition and fix connections." }
        ],
        mcq: [
            { q: "What is the main purpose of writing a summary?", options: ["To copy all the information in a passage", "To retain essential points and remove non-essentials", "To add new ideas to a passage", "To change the meaning of a passage"], correct: 1, explanation: "A summary retains ONLY the essential points — main ideas, topic sentences, general statements. Everything else (specific figures, long examples, repetition, unnecessary names) is removed." },
            { q: "What is a topic sentence?", options: ["A sentence that concludes a paragraph", "A sentence that contains specific details", "A sentence that states the main idea of a paragraph", "A sentence that gives examples"], correct: 2, explanation: "A topic sentence states the MAIN IDEA of a paragraph. It is already in the text and can be used directly in your summary. It is different from the main idea which may be gathered from several sentences." },
            { q: "Which of the following should be REMOVED when writing a summary?", options: ["Main ideas", "Topic sentences", "Specific numbers and figures", "Linking words"], correct: 2, explanation: "Specific numbers and figures are details — they should be removed in a summary. Keep: main ideas, topic sentences, general statements, linking words. Remove: specific figures, long examples, repetition, unnecessary names." },
            { q: "What does IPM stand for?", options: ["Integrated Plant Management", "Integrated Pest Management", "International Pest Management", "Integrated Pest Method"], correct: 1, explanation: "IPM = Integrated Pest Management. It is a system that combines natural methods (natural enemies, breeding control, stronger seed strains) to control pests without depending on chemical pesticides." },
            { q: "Why did farmers develop IPM?", options: ["Because chemicals were too expensive", "Because pests became resistant to chemical pesticides", "Because the government banned chemicals", "Because chemicals destroyed the soil"], correct: 1, explanation: "Pests evolved to become RESISTANT to chemical pesticides — the chemicals no longer worked. This forced farmers to develop IPM as an alternative method of pest control." },
            { q: "Which organisation discovered that 223 pests were resistant to insecticides?", options: ["UN Food and Agricultural Organisation", "World Health Organisation", "UN Environmental Programme", "International Pest Control Agency"], correct: 2, explanation: "The UN Environmental Programme discovered that 223 pests had become resistant to insecticides. This finding highlighted the need for alternative pest control methods like IPM." },
            { q: "What was the result of using IPM on cotton farms in Texas in 1977?", options: ["The crop was destroyed by pests", "The crop was below average", "The crop was better than average", "The crop remained the same"], correct: 2, explanation: "The use of IPM on cotton farms in Texas in 1977 produced a crop that was BETTER THAN AVERAGE — proving that IPM is an effective alternative to chemical pesticides." },
            { q: "Which linking word shows CONTRAST between two ideas?", options: ["Therefore", "Furthermore", "However", "For example"], correct: 2, explanation: "'However' shows CONTRAST — it introduces an idea that is different from or opposite to the previous one. 'Therefore' = result. 'Furthermore' = addition. 'For example' = example." },
            { q: "Which linking word shows RESULT?", options: ["Although", "However", "In addition", "Therefore"], correct: 3, explanation: "'Therefore' shows RESULT — it signals that what follows is a consequence of what came before. 'Although' = contrast. 'However' = contrast. 'In addition' = addition." },
            { q: "What are the THREE methods used in IPM?", options: ["Chemicals, water and fire", "Natural enemies, breeding control and stronger seed strains", "Pesticides, rodents and insects", "Fertilisers, water and sunlight"], correct: 1, explanation: "IPM uses three natural methods: (1) Natural enemies — using predators to control pests, (2) Breeding control — controlling pest reproduction, (3) Stronger seed strains — developing crops that resist pests." },
            { q: "What do earthworms produce that acts as high grade topsoil?", options: ["Worm juice", "Worm castings", "Worm chemicals", "Worm fertiliser"], correct: 1, explanation: "Earthworms produce WORM CASTINGS — their waste material. Worm castings function as high grade topsoil, rich in nutrients and beneficial for plant growth." },
            { q: "According to the passage, what THREE things do earthworms need to survive?", options: ["Sunlight, water and air", "Heat, darkness and food", "Moisture, darkness and food", "Water, light and soil"], correct: 2, explanation: "Earthworms need only three things: MOISTURE, DARKNESS and FOOD from the soil. They do not need sunlight — they live underground and thrive in dark, moist conditions." },
            { q: "What causes volcanic eruptions according to scientists?", options: ["Heavy rainfall underground", "Weakness or thin spots in the earth's crust", "Movement of ocean water", "Changes in temperature"], correct: 1, explanation: "Volcanic eruptions occur where there is a WEAKNESS or THIN SPOT in the earth's crust. Magma (molten rock) breaks through these weak points causing eruptions." },
            { q: "What is the effect of volcanic particles on the atmosphere?", options: ["They make the air cleaner", "They increase sunlight", "They make the air cloudy reducing light and dropping temperature", "They have no effect on the atmosphere"], correct: 2, explanation: "Volcanic particles in the stratosphere make the air CLOUDY — this reduces the amount of sunlight reaching the earth's surface, causing temperatures to drop and affecting the climate." },
            { q: "What is the relationship between volcanoes and earthquakes according to the passage?", options: ["Earthquakes cause volcanoes to stop", "A volcanic eruption usually follows an earthquake", "Volcanoes and earthquakes have no relationship", "Earthquakes happen after volcanic eruptions"], correct: 1, explanation: "According to the passage, a volcanic eruption usually FOLLOWS an earthquake. The two phenomena are related — both occur where the earth's crust is weak or unstable." },
            { q: "What does the word RESISTANT mean in the context of the IPM passage?", options: ["Attracted to", "Destroyed by", "Not affected by", "Dependent on"], correct: 2, explanation: "RESISTANT means NOT AFFECTED BY. Pests became resistant to chemical pesticides — the chemicals could no longer kill or control them. This is why IPM was developed as an alternative." },
            { q: "Which of the following is NOT a step in writing a summary?", options: ["Finding the main idea in each paragraph", "Adding your own personal opinions", "Removing repetition", "Connecting sentences with linking words"], correct: 1, explanation: "Adding your own personal opinions is NOT part of summary writing. A summary only contains the writer's ideas from the original passage. The three steps are: isolate main points, put them together, check for repetition." },
            { q: "When is it correct to use an abbreviation in a summary?", options: ["From the very beginning without explanation", "After writing the full name and putting the short form in brackets", "Only at the end of the summary", "Never use abbreviations in a summary"], correct: 1, explanation: "Abbreviation rule: First mention — write the FULL NAME then put the short form in brackets. Example: Integrated Pest Management (IPM). After that, use only IPM throughout the summary." },
            { q: "What does the word EROSION mean in the earthworms passage?", options: ["Growth of soil", "Carrying away of soil by wind and water", "Addition of nutrients to soil", "Hardening of soil"], correct: 1, explanation: "EROSION is the carrying away of soil by wind and water. Earthworms help prevent erosion by making soil porous and absorbent — water soaks in rather than washing the soil away." },
            { q: "Which of these best describes what a summary should be?", options: ["Longer than the original passage", "An exact copy of the original passage", "A shorter version retaining only the main ideas", "A passage with new ideas added"], correct: 2, explanation: "A summary is a SHORTER VERSION of the original passage that retains only the main ideas. It removes specific details, repetition, long examples and unnecessary names. It never adds new ideas." }
        ]
    },

    "GST102_m2_u4": {
        fbq: [
            { q: "A summary is a _______ version of a passage that contains only the _______ points.", a: "shorter / essential", explanation: "A summary condenses a passage — it is shorter and keeps only the essential (most important) points. All extra details, repetition and decoration are removed." },
            { q: "The golden rule of summarization states that details are necessary in full scale writing but _______ in summaries.", a: "not", explanation: "The golden rule: 'Details are necessary in full-scale writing but NOT in summaries.' Details add richness to essays but they clutter summaries." },
            { q: "A _______ clause carries the core meaning of a sentence and can stand alone.", a: "main", explanation: "The MAIN clause is the backbone of a sentence. It carries the core meaning and is a complete sentence on its own. In summarizing, always keep the main clause." },
            { q: "A _______ clause adds extra information to a sentence and cannot stand alone.", a: "subordinate", explanation: "A SUBORDINATE clause depends on the main clause. It adds extra detail (when, which, who, because, although) but cannot stand alone as a sentence. Remove it in Technique 1." },
            { q: "Technique 4 involves replacing a list of examples with one _______ statement.", a: "general", explanation: "Technique 4 replaces specific lists (rice, beans, yam, garri) with a general statement ('various food items'). This shortens the summary without losing the core meaning." },
            { q: "In Technique 3, if an idea is said twice in a passage you should keep only _______ version of it.", a: "one", explanation: "Technique 3 eliminates repetition. If the same idea appears in different words (intelligent, smart, clever), keep only one — the clearest version." },
            { q: "Words like various, several, many and _______ are useful for Technique 4 generalisations.", a: "a number of", explanation: "These generalisation words allow you to replace a list of specific examples with one short phrase: various, several, many, a number of, different kinds of." },
            { q: "In Technique 2, adjectives, adverbs and _______ phrases are removed from a sentence.", a: "descriptive", explanation: "Technique 2 removes non-essential descriptive words — adjectives (tall, handsome), adverbs (carefully), and descriptive phrases that add colour but not core meaning." },
            { q: "In the Nile passage, 'muddy' was removed because it is a _______ of 'rich soil' and not the main idea.", a: "detail", explanation: "Descriptive details like 'muddy' describe the soil but do not carry the main idea. In Technique 2, such details are removed to keep only the essential information." },
            { q: "Instead of listing tilapia, catfish, salmon and tuna a summarizer should write _______ fish.", a: "various", explanation: "Technique 4 — replace a list of specific examples with a general word. 'Tilapia, catfish, salmon and tuna' → 'various fish'. This shortens the text without losing meaning." },
            { q: "The 4 techniques of summarizing are: removing subordinate clauses, removing descriptive words, eliminating _______ and replacing examples with generalisations.", a: "repetition", explanation: "The 4 techniques: (1) Remove subordinate clauses, (2) Remove descriptive words, (3) Eliminate repetition, (4) Replace lists with generalisations." },
            { q: "In summarizing the Nile passage, 'stone implements, flint and copper' were replaced with the general statement 'the art of _______'", a: "tool making", explanation: "Technique 4 — the list of three specific materials (stone, flint, copper) was replaced with the general phrase 'the art of tool making with various materials'." }
        ],
        mcq: [
            { q: "What is the main purpose of a summary?", options: ["To rewrite a passage in beautiful language", "To retain only the essential points of a passage", "To add more details to a passage", "To translate a passage into simple English"], correct: 1, explanation: "A summary retains ONLY the essential points — no extra details, no repetition, no decoration. It is a shorter version of the original passage, not a rewrite or translation." },
            { q: "Which part of a sentence carries the most important information?", options: ["The subordinate clause", "The descriptive phrase", "The main clause", "The adverbial phrase"], correct: 2, explanation: "The MAIN CLAUSE carries the core meaning and can stand alone as a complete sentence. Subordinate clauses, descriptive phrases and adverbial phrases all add extra information but are not essential." },
            { q: "In summarizing, what should you do with subordinate clauses that only add extra information?", options: ["Keep them because they are important", "Move them to the beginning of the sentence", "Remove them from the summary", "Replace them with examples"], correct: 2, explanation: "Technique 1 — Remove subordinate clauses that only add extra information. The main clause carries the core meaning. The subordinate clause (when, which, who, because) adds detail that is not essential to the summary." },
            { q: "Which of the following is an example of Technique 4 in summarizing?", options: ["Removing adjectives from a sentence", "Replacing 'rice, beans, yam and garri' with 'various food items'", "Removing a subordinate clause from a sentence", "Eliminating repeated ideas in a passage"], correct: 1, explanation: "Technique 4 replaces a list of specific examples with one general statement. 'Rice, beans, yam and garri' → 'various food items'. Useful words: various, several, many, a number of." },
            { q: "In the passage about the Nile, the clause 'when the melting snows and rains on the mountains swell its tributaries' was removed because:", options: ["It contained the main idea of the sentence", "It was a main clause", "It was a subordinate clause containing less important information", "It was a repetition of another sentence"], correct: 2, explanation: "This clause is a subordinate clause — it explains WHY the Nile overflows but the main meaning ('the Nile overflows') is still clear without it. Technique 1 removes such clauses." },
            { q: "Which of the following words is NOT useful for Technique 4 generalisations?", options: ["Various", "Several", "Muddy", "A number of"], correct: 2, explanation: "'Muddy' is a descriptive adjective — it describes appearance, not quantity or variety. Useful generalisation words are: various, several, many, a number of, different kinds of. These replace lists of examples." },
            { q: "When summarizing 'John is intelligent. He is smart and clever and his brilliance is known by all' — which technique is being applied?", options: ["Technique 1", "Technique 2", "Technique 3", "Technique 4"], correct: 2, explanation: "Technique 3 — Eliminate repetition. 'Intelligent', 'smart', 'clever' and 'brilliance' all express the same idea. Keep only one version: 'John is intelligent.'" },
            { q: "Which of the following best describes a subordinate clause?", options: ["It carries the core meaning of a sentence", "It can stand alone as a complete sentence", "It adds extra information and cannot stand alone", "It contains the main subject of a sentence"], correct: 2, explanation: "A subordinate clause ADDS extra information to the main clause but CANNOT stand alone. Example: 'when the melting snows swell its tributaries' — this cannot stand alone as a sentence." },
            { q: "In summarizing 'The tall handsome doctor carefully treated the sick feverish crying child' — which technique is applied?", options: ["Technique 1", "Technique 2", "Technique 3", "Technique 4"], correct: 1, explanation: "Technique 2 — Remove descriptive words. 'Tall', 'handsome', 'carefully', 'feverish', 'crying' are all adjectives/adverbs that add description but not core meaning. Summary: 'The doctor treated the sick child.'" },
            { q: "Which of the following is the correct summary of 'They used stone implements for tilling, flint for weapons and copper for tools'?", options: ["They used stone and flint for various purposes", "They learnt the art of tool making with various materials", "They tilled the soil with stone implements", "They used copper and flint for tool making"], correct: 1, explanation: "Technique 4 — Replace the list (stone, flint, copper) with a general statement. 'They learnt the art of tool making with various materials' ✅ captures the core idea without listing all three materials." },
            { q: "According to the unit, details are:", options: ["Necessary in both full scale writing and summaries", "Necessary in full scale writing but not in summaries", "Not necessary in both full scale writing and summaries", "Necessary in summaries but not in full scale writing"], correct: 1, explanation: "The golden rule: 'Details are necessary in full-scale writing but NOT in summaries.' Details enrich essays and reports but they clutter summaries — only essential points belong in a summary." },
            { q: "In the Plants passage, 'domesticated, or tamed' is an example of:", options: ["Technique 1 — subordinate clause", "Technique 2 — descriptive words", "Technique 3 — restatement of the same idea", "Technique 4 — list of examples"], correct: 2, explanation: "Technique 3 — Eliminate repetition. 'Domesticated' and 'tamed' mean the same thing — one is just a restatement of the other. In a summary, keep only one: 'domesticated'." }
        ]
    },

    "GST102_m4_u5": {
        mcq: [
            { q: "Which modal is used for POLITE PERMISSION in a formal context?", options: ["Can I come in?", "May I come in?", "Should I come in?", "Must I come in?"], correct: 1, explanation: "'May' is used for polite permission, especially in formal contexts. 'Can' is for ability or informal permission. 'May I come in?' is the correct formal request." },
            { q: "Choose the correct sentence:", options: ["I can be able to speak French.", "I can to speak French.", "I can speak French.", "I am able can speak French."], correct: 2, explanation: "'Can' already means 'be able to' — never combine them. 'I can speak French' ✅. 'I can be able to' is a common error — it is redundant." },
            { q: "Which sentence uses MUST correctly?", options: ["You must pay tax — it is the law.", "You must clean your boots in the army — rules say so.", "Tell her she must be here by 8am — I will not tolerate lateness.", "I must always look up phone numbers."], correct: 2, explanation: "'Must' comes from the SPEAKER's personal authority. 'Tell her she must be here by 8am — I will not tolerate lateness' ✅ — the speaker is personally insisting. Options A and B are external rules → 'have to'. Option D is a habit → 'have to'." },
            { q: "Which sentence uses HAVE TO correctly?", options: ["You have to obey me — I am your father.", "It is a school rule; students have to wear uniforms.", "Have to be here by 8am — I insist.", "You have to stop that — I command you."], correct: 1, explanation: "'Have to' comes from EXTERNAL rules or circumstances. 'It is a school rule; students have to wear uniforms' ✅ — the rule forces the action, not the speaker personally." },
            { q: "What is the PAST form of MUST?", options: ["Musted", "Must have", "Had to", "Would must"], correct: 2, explanation: "Must has NO past form of its own. The past equivalent is 'had to'. 'I had to stop the car' ✅. 'Musted' does not exist in English." },
            { q: "Which sentence shows a NEGLECTED DUTY using OUGHT TO?", options: ["You ought to study harder.", "You ought to have called me yesterday.", "You ought not to smoke.", "You ought to pay your bills."], correct: 1, explanation: "OUGHT TO + HAVE + PAST PARTICIPLE = a duty that was neglected in the past. 'You ought to have called me yesterday' = you didn't call, but you should have. This is the neglected duty pattern." },
            { q: "He may not come to the party — he seems unwell. What does MAY express here?", options: ["Polite permission", "Ability", "Possibility due to circumstance", "Past habit"], correct: 2, explanation: "'May' here expresses POSSIBILITY — there is a chance he won't come because he seems unwell. If you can replace 'may' with 'perhaps' or 'possibly', it is expressing possibility." },
            { q: "Which sentence uses WOULD correctly to express a PAST HABIT?", options: ["I would like some water.", "They would wait for us every day.", "Would you mind closing the door?", "I would rather fail than cheat."], correct: 1, explanation: "'They would wait for us every day' = they used to wait — a past habit. 'Would' can replace 'used to' for past habits. Option A is polite want. Option C is polite request. Option D is preference." },
            { q: "Choose the correct sentence using SHOULD:", options: ["You should must pay your debts.", "You should to pay your debts.", "You should pay your debts.", "You should paying your debts."], correct: 2, explanation: "After modal auxiliaries (should, must, can, may, would), always use the BASE FORM of the verb — no 'to', no '-ing', no past tense. 'You should pay your debts' ✅." },
            { q: "Which sentence has NO error?", options: ["I can be able to drive.", "I will must attend the meeting.", "You ought to have informed me earlier.", "I musted stop the car."], correct: 2, explanation: "'You ought to have informed me earlier' ✅ — correct neglected duty pattern: ought to + have + past participle. Option A: 'can be able to' is wrong — use just 'can'. Option B: 'will must' is wrong — use 'will have to'. Option D: 'musted' does not exist." }
        ]
    },

    "GST102_m4_u4": {
        mcq: [
            // ── Section A — Identify the Voice ──
            { q: "Section A — Identify the Voice\n\nWhich sentence is in the ACTIVE voice?", options: ["The meal was cooked by her.", "Amaka cooked the meal.", "She is a good cook.", "The kitchen is very clean."], correct: 1, explanation: "Amaka (S) → cooked (V) → the meal (O). The subject performs the action directly on the object. It can be reversed to passive: 'The meal was cooked by Amaka.' Options C and D have complement objects — they cannot be reversed." },
            { q: "Section A — Identify the Voice\n\nIs this sentence active or NOT active? 'The teacher is very experienced.'", options: ["Active — teacher is the subject", "Not Active — 'very experienced' is a complement", "Active — it has a subject and verb", "Not Active — it is in the past tense"], correct: 1, explanation: "'Very experienced' is a complement describing the teacher — it is NOT an object that can be reversed into passive. You cannot say 'Very experienced was the teacher by him.' So this is NOT active voice." },
            { q: "Section A — Identify the Voice\n\nWhich sentence is NOT in the active voice?", options: ["Chidi sold his car last week.", "The dog chased the cat.", "Lagos is a busy city.", "He kicked the ball."], correct: 2, explanation: "'Lagos is a busy city' — 'a busy city' is a complement describing Lagos, not a real object. You cannot reverse it: 'A busy city was Lagos by...' makes no sense. Options A, B, D all have real objects that can be reversed into passive." },
            { q: "Section A — Identify the Voice\n\nWhich sentence IS in the active voice?", options: ["Life is full of surprises.", "She is in the office.", "Life is not a bed of roses.", "They built the bridge in 2010."], correct: 3, explanation: "They (S) → built (V) → the bridge (O). Can be reversed: 'The bridge was built by them in 2010.' ✅ Options A, B, C all have complement objects (location or description) — they cannot be reversed into passive." },

            // ── Section B — Convert Active to Passive ──
            { q: "Section B — Convert to Passive\n\nConvert: 'The teacher taught the students.'", options: ["The students taught the teacher.", "The students were taught by the teacher.", "The students are taught by the teacher.", "The students have taught by the teacher."], correct: 1, explanation: "Simple past active → simple past passive. Formula: was/were + past participle. 'The students' (object) becomes subject. 'Were taught' (past passive). 'By the teacher' (doer). ✅" },
            { q: "Section B — Convert to Passive\n\nConvert: 'She will write the report.'", options: ["The report will written by her.", "The report will be write by her.", "The report will be written by her.", "The report will been written by her."], correct: 2, explanation: "Future active → future passive. Formula: will + be + past participle. 'She' → 'her'. 'The report will be written by her.' ✅ Note: 'will be written' — not 'will written' or 'will been written'." },
            { q: "Section B — Convert to Passive\n\nConvert: 'They are painting the house.'", options: ["The house is being painted by them.", "The house was painted by them.", "The house has been painted by them.", "The house is painted by them."], correct: 0, explanation: "Present continuous active → present continuous passive. Formula: is/are + being + past participle. 'The house is being painted by them.' ✅ 'Being' is essential for present continuous passive." },
            { q: "Section B — Convert to Passive\n\nConvert: 'He has eaten the food.'", options: ["The food was eaten by him.", "The food is eaten by him.", "The food has been eaten by him.", "The food had been eaten by him."], correct: 2, explanation: "Present perfect active → present perfect passive. Formula: has/have + been + past participle. 'The food has been eaten by him.' ✅ Keep 'has' — don't change it to 'was'." },
            { q: "Section B — Convert to Passive\n\nConvert: 'The government can build more schools.'", options: ["More schools can built by the government.", "More schools can be build by the government.", "More schools can be built by the government.", "More schools could be built by the government."], correct: 2, explanation: "Modal active → modal passive. Formula: modal + be + past participle. Keep the modal verb exactly the same: 'can' stays 'can'. 'More schools can be built by the government.' ✅" },

            // ── Section C — Add "to" where necessary ──
            { q: "Section C — Infinitive\n\nFill in: 'Do you know how ___ repair a car engine?'", options: ["to repair", "repair", "repairing", "repaired"], correct: 0, explanation: "After 'how', use 'to + infinitive'. 'Do you know how to repair' ✅. This is the infinitive used after question words (how, where, what, when)." },
            { q: "Section C — Infinitive\n\nFill in: 'She let him ___ borrow her notes.'", options: ["to borrow", "borrowing", "borrowed", "borrow"], correct: 3, explanation: "'Let' is a BOSSY WORD — it drops 'to'. After 'let', use the BARE INFINITIVE (no 'to'). 'She let him borrow her notes.' ✅ NOT 'let him to borrow'." },
            { q: "Section C — Infinitive\n\nFill in: 'He made the students ___ redo the assignment.'", options: ["to redo", "redoing", "redone", "redo"], correct: 3, explanation: "'Make' is a BOSSY WORD — it drops 'to'. After 'make', use the BARE INFINITIVE. 'He made the students redo the assignment.' ✅ NOT 'made them to redo'." },
            { q: "Section C — Infinitive\n\nFill in: 'She seems ___ understand the question.'", options: ["understanding", "understood", "to understand", "understand"], correct: 2, explanation: "'Seem' KEEPS 'to'. After 'seem', use 'to + infinitive'. 'She seems to understand' ✅. Other verbs that keep 'to': want, need, decide, like, forget, try, refuse, plan, hope." },

            // ── Section D — Too…to ──
            { q: "Section D — Too…to\n\nCombine: 'The question is very difficult. He can't answer it.'", options: ["The question is very difficult to answer.", "The question is too difficult to answer.", "The question is too difficult for answering.", "The question is so difficult to answer."], correct: 1, explanation: "Formula: too + adjective + to + base verb. 'Too difficult to answer' ✅. This means 'so difficult that he cannot answer it'. Use base verb (answer) — never 'to answering' or 'to answered'." },
            { q: "Section D — Too…to\n\nCombine: 'She is very young. She can't vote.'", options: ["She is very young to vote.", "She is too young for voting.", "She is too young to vote.", "She is so young that to vote."], correct: 2, explanation: "'She is too young to vote.' ✅ Formula: too + adjective + to + base verb. 'Too young' = so young that she cannot vote. Always use the base form of the verb after 'to'." },
            { q: "Section D — Too…to\n\nCombine: 'The coffee is very hot. I can't drink it.'", options: ["The coffee is too hot to drink.", "The coffee is very hot to drink.", "The coffee is too hot for drinking.", "The coffee is too hot that I drink."], correct: 0, explanation: "'The coffee is too hot to drink.' ✅ Formula: too + adjective + to + base verb. 'Too hot' = so hot that I cannot drink it. 'To drink' uses the base form — never 'to drinking'." },

            // ── Section E — Correct the Infinitive Mistake ──
            { q: "Section E — Correct the Error\n\nCorrect: 'I forgot to told my friend about the test.'", options: ["I forgot to telling my friend about the test.", "I forgot to tell my friend about the test.", "I forgot told my friend about the test.", "I forgot to have told my friend about the test."], correct: 1, explanation: "After 'to', ALWAYS use the BASE FORM. 'Told' is past tense — WRONG after 'to'. Correct: 'I forgot to tell my friend about the test.' ✅ Rule: to + base verb, NEVER to + past tense." },
            { q: "Section E — Correct the Error\n\nCorrect: 'She decided to went to the library.'", options: ["She decided to going to the library.", "She decided to gone to the library.", "She decided to go to the library.", "She decided went to the library."], correct: 2, explanation: "'Went' is past tense — WRONG after 'to'. After 'to', always use the BASE FORM. 'She decided to go to the library.' ✅ This is the most common Nigerian error with infinitives." },
            { q: "Section E — Correct the Error\n\nCorrect: 'They want to played football after school.'", options: ["They want to playing football after school.", "They want to play football after school.", "They want played football after school.", "They want to have played football after school."], correct: 1, explanation: "'Played' is past tense — WRONG after 'to'. Base form is 'play'. 'They want to play football after school.' ✅ Rule: After 'to' ALWAYS use base form — NEVER past tense." },

            // ── Section F — Mixed ──
            { q: "Section F — Mixed\n\nWhich sentence correctly uses passive voice with a modal verb?", options: ["The work will completed by them.", "The work can be completed by them.", "The work is been completed by them.", "The work was be completed by them."], correct: 1, explanation: "Modal passive formula: modal + be + past participle. 'Can be completed' ✅. Option A: missing 'be'. Option C: 'is been' is wrong — should be 'is being' (continuous) or 'has been' (perfect). Option D: 'was be' is wrong." },
            { q: "Section F — Mixed\n\nWhich sentence has NO grammatical error?", options: ["She decided to went to Abuja.", "I did not see him to told him.", "He is too tired to work.", "You have been inform about the result."], correct: 2, explanation: "'He is too tired to work.' ✅ — correct too…to pattern with base verb. Option A: 'to went' → 'to go'. Option B: 'to told' → 'to tell'. Option D: 'inform' → 'informed'. Always add -ed after helping verbs!" }
        ]
    },

    "GST102_m4_u3": {
        mcq: [
            {
                q: "A gerund is best described as:",
                options: ["A verb used to show action", "A verbal noun that ends in -ing", "A past tense verb form", "An adjective that describes a noun"],
                correct: 1,
                explanation: "A gerund is a verb + ing that functions as a NOUN in a sentence. It can be a subject, object, or complement. Example: 'Swimming is healthy' — 'Swimming' is the subject noun."
            },
            {
                q: "Which of the following is a gerund?",
                options: ["She is running to the market.", "Running water is clean.", "Running every day keeps you fit.", "He was running very fast."],
                correct: 2,
                explanation: "'Running every day keeps you fit' — 'Running' is the SUBJECT of the sentence, acting as a noun. Test: replace with a noun → 'Exercise every day keeps you fit' ✅. Options A, B, D use 'running' as part of a continuous tense or adjective."
            },
            {
                q: "Identify the gerund in this sentence: \"I enjoy eating suya every evening\"",
                options: ["enjoy", "every", "eating", "evening"],
                correct: 2,
                explanation: "'Eating' is the gerund — it is the OBJECT of the verb 'enjoy'. Test: 'I enjoy food' ✅ — 'eating' acts as a noun here. 'Enjoy' is the main verb, not a gerund."
            },
            {
                q: "Which sentence uses a gerund correctly?",
                options: ["He is swimming in the pool.", "Swimming is my favourite sport.", "They were swimming when I arrived.", "She swam across the river."],
                correct: 1,
                explanation: "'Swimming is my favourite sport' — 'Swimming' is the SUBJECT of the sentence, acting as a noun (gerund). Options A and C use 'swimming' as part of a continuous tense. Option D uses the simple past."
            },
            {
                q: "Choose the correct option: \"You'll never regret _______ a friend in need\"",
                options: ["to help", "helped", "helping", "help"],
                correct: 2,
                explanation: "'Regret' is followed by -ing (gerund). Verbs like regret, enjoy, avoid, finish, mind always take -ing. 'You'll never regret helping' is correct."
            },
            {
                q: "Choose the correct option: \"The doctor advised him _______ smoking\"",
                options: ["stopping", "to stop", "stopped", "stop"],
                correct: 1,
                explanation: "'Advise' is followed by 'to + infinitive'. Pattern: advise/ask/want/tell + someone + to + verb. 'Advised him to stop' is correct."
            },
            {
                q: "Choose the correct option: \"She left without _______ goodbye\"",
                options: ["to say", "said", "say", "saying"],
                correct: 3,
                explanation: "After prepositions (without, before, after, of, for), always use -ing (gerund). 'Without' is a preposition → 'without saying' is correct."
            },
            {
                q: "Which of the following is a PRESENT PARTICIPLE used as an adjective?",
                options: ["She is dancing at the party.", "A loving mother cares for her children.", "He has written the letter.", "They were playing football."],
                correct: 1,
                explanation: "'A loving mother' — 'loving' is a present participle (verb+ing) used as an ADJECTIVE describing 'mother'. Options A and D use present participles as part of continuous tenses, not as adjectives."
            },
            {
                q: "Which of the following is a PAST PARTICIPLE used as an adjective?",
                options: ["He is walking to school.", "She was cooking dinner.", "He had a worried look on his face.", "They have gone to the market."],
                correct: 2,
                explanation: "'A worried look' — 'worried' is a past participle used as an ADJECTIVE describing 'look'. Option D uses 'gone' as part of a perfect tense, not as an adjective."
            },
            {
                q: "Identify the past participle in this sentence: \"The problem can be considered\"",
                options: ["problem", "can", "considered", "be"],
                correct: 2,
                explanation: "'Considered' is the past participle — it follows the helping verb 'be'. Formula: can be + past participle (passive voice). 'Can' and 'be' are auxiliary verbs, not the participle."
            },
            {
                q: "Which sentence is CORRECT?",
                options: ["He has went to Abuja.", "He has gone to Abuja.", "He have went to Abuja.", "He gone to Abuja."],
                correct: 1,
                explanation: "'Has gone' — 'gone' is the past participle of 'go'. After 'has/have', always use the past participle (3rd form). 'Went' is simple past — it cannot follow 'has'. 'He has gone' is correct."
            },
            {
                q: "Which sentence is CORRECT?",
                options: ["She has saw the movie.", "She saw the movie yesterday.", "She have seen the movie yesterday.", "She seen the movie."],
                correct: 1,
                explanation: "'She saw the movie yesterday' — 'yesterday' is a specific past time word, so Simple Past is correct. 'Saw' is the simple past of 'see'. 'Has saw' is wrong — after 'has', use 'seen' (past participle)."
            },
            {
                q: "Choose the correct sentence:",
                options: ["They have did the assignment.", "They did the assignment yesterday.", "They done the assignment.", "They have did the assignment yesterday."],
                correct: 1,
                explanation: "'They did the assignment yesterday' — 'yesterday' signals Simple Past. 'Did' is the simple past of 'do'. 'Have did' is wrong — after 'have', use 'done' (past participle). 'Done' alone without a helping verb is also wrong."
            },
            {
                q: "Which of these is a common Nigerian error with participles?",
                options: ["Your case will be considered.", "You have been informed.", "He felt unconcern about the issue.", "She was confused by the question."],
                correct: 2,
                explanation: "'He felt unconcern' is WRONG. After 'felt' (a linking verb), use the past participle as an adjective: 'He felt unconcerned'. Options A, B, D are all correct — they properly use past participles."
            },
            {
                q: "Correct this sentence: \"You have been inform about the case\"",
                options: ["You have been informing about the case.", "You have been informed about the case.", "You have inform about the case.", "You had inform about the case."],
                correct: 1,
                explanation: "After 'have been', always use the past participle. 'Inform' → past participle = 'informed'. 'You have been informed' is correct. This is a very common Nigerian error — dropping the -ed ending."
            },
            {
                q: "Which sentence correctly uses a past participle as an adjective?",
                options: ["He wrote a long letter.", "A tired man needs rest.", "She is playing the piano.", "They went to the market."],
                correct: 1,
                explanation: "'A tired man' — 'tired' is a past participle used as an ADJECTIVE describing 'man'. Option A uses 'wrote' as a simple past verb. Options C and D use verbs in tenses, not as adjectives."
            },
            {
                q: "\"Seeing is believing\" — what grammatical role do the underlined words play?",
                options: ["Both are adjectives.", "Both are gerunds.", "Both are present participles forming tenses.", "Both are past participles."],
                correct: 1,
                explanation: "'Seeing' is the SUBJECT (noun) and 'believing' is the COMPLEMENT (noun) — both act as nouns. Test: 'Vision is faith' ✅. When -ing words act as nouns, they are gerunds. They are NOT forming continuous tenses here."
            },
            {
                q: "Which of the following correctly fills the blank: \"I remember _______ the door before leaving\"",
                options: ["to lock", "locked", "locking", "lock"],
                correct: 2,
                explanation: "'Remember + -ing' = remembering something that ALREADY HAPPENED (past action). 'I remember locking the door' = I locked it and I remember doing it. 'Remember + to' = remembering to do something in the FUTURE."
            },
            {
                q: "Which of the following sentences has NO error?",
                options: ["Life can be a defeat experience without education.", "He got me confuse during the argument.", "She felt unconcerned about the result.", "Your case will be consider tomorrow."],
                correct: 2,
                explanation: "'She felt unconcerned' ✅ — correct use of past participle as adjective. Option A: 'defeat' should be 'defeated'. Option B: 'confuse' should be 'confused'. Option D: 'consider' should be 'considered'."
            },
            {
                q: "Participles can be used as:",
                options: ["Nouns and pronouns only.", "Verbs and adverbs only.", "Adjectives and verb forms only.", "Conjunctions and prepositions only."],
                correct: 2,
                explanation: "Participles have TWO uses: (1) as part of verb tenses — 'She is running', 'It has been written'. (2) as adjectives — 'a loving mother', 'a broken heart'. They do NOT function as nouns (that's gerunds)."
            }
        ]
    },

    "GST102_m4_u1": {
        mcq: [
            {
                q: "Section A — Articles\n\nWhich article is appropriate here? \"He is ___ 100-level student.\"",
                options: ["an", "a", "the", "(No article needed)"],
                correct: 1,
                explanation: "\"100-level\" starts with the consonant sound \"w\" (one hundred), so we use 'a'. The rule is based on SOUND, not spelling."
            },
            {
                q: "Section A — Articles\n\nChoose the correct sentence:",
                options: [
                    "I saw an university at the corner.",
                    "I saw a university at the corner.",
                    "I saw university at the corner.",
                    "I saw the university at an corner."
                ],
                correct: 1,
                explanation: "\"University\" starts with the consonant sound \"y\" (yoo-ni-ver-si-ty), so we use 'a', not 'an'. The rule is always based on SOUND, not the letter."
            },
            {
                q: "Section A — Articles\n\nIdentify the missing article: \"___ sun rises in the east.\"",
                options: ["A", "An", "The", "Some"],
                correct: 2,
                explanation: "We use 'the' for unique objects — there is only ONE sun. The definite article 'the' is used for things already known or one-of-a-kind."
            },
            {
                q: "Section A — Articles\n\n\"It is ___ honor to meet you.\"",
                options: ["a", "an", "the", "its"],
                correct: 1,
                explanation: "\"Honor\" has a silent 'h' — it starts with the vowel sound 'o' (on-er). So we use 'an'. Same rule applies to 'an honest man' and 'an hour'."
            },
            {
                q: "Section A — Articles\n\n\"I met ___ old man who told me a story.\"",
                options: ["a", "an", "the", "any"],
                correct: 1,
                explanation: "\"Old\" starts with the vowel sound 'o', so we use 'an'. The article agrees with the FIRST sound of the word that follows it."
            },
            {
                q: "Section A — Articles\n\nWhy do we say \"an hour\" instead of \"a hour\"?",
                options: [
                    "Because it starts with a vowel letter.",
                    "Because it starts with a vowel sound.",
                    "Because \"hour\" is a plural noun.",
                    "Because it is a definite article."
                ],
                correct: 1,
                explanation: "The 'h' in 'hour' is silent, so the word begins with the vowel sound 'ow'. The rule is always about SOUND, not spelling."
            },
            {
                q: "Section B — Concord\n\n\"The news about the exam ___ not very encouraging.\"",
                options: ["are", "is", "were", "have"],
                correct: 1,
                explanation: "\"News\" looks plural but is a singular noun — it always takes a singular verb. Similar words: mathematics, physics, economics are also always singular."
            },
            {
                q: "Section B — Concord\n\n\"Neither Emmanuel nor his friends ___ present yesterday.\"",
                options: ["was", "were", "is", "has"],
                correct: 1,
                explanation: "With 'neither...nor', the verb agrees with the subject CLOSEST to it. \"his friends\" is plural and closest to the verb, so we use 'were'."
            },
            {
                q: "Section B — Concord\n\nWhich is correct?",
                options: [
                    "He do not like tea.",
                    "He does not like tea.",
                    "He doing not like tea.",
                    "He done not like tea."
                ],
                correct: 1,
                explanation: "3rd person singular (he/she/it) takes 'does' in present tense. After 'does', always use the base form of the verb."
            },
            {
                q: "Section B — Concord\n\n\"There ___ fifty students in the science lab.\"",
                options: ["is", "was", "are", "has"],
                correct: 2,
                explanation: "With 'there', the verb agrees with the noun that FOLLOWS it. \"fifty students\" is plural → 'are'. If it were 'one student' → 'is'."
            },
            {
                q: "Section B — Concord\n\n\"One of my brothers ___ a computer scientist.\"",
                options: ["are", "were", "is", "have"],
                correct: 2,
                explanation: "The TRUE subject is 'One' (singular), not 'brothers'. 'Of my brothers' is just a prepositional phrase. Always identify the true subject first."
            },
            {
                q: "Section B — Concord\n\n\"You ___ at home when I called you.\"",
                options: ["was", "were", "is", "am"],
                correct: 1,
                explanation: "2nd person (you) always takes 'were' in past tense, even when referring to one person. 'You were' is always correct — never 'you was'."
            },
            {
                q: "Section B — Concord\n\n\"Does your father ___ a car?\"",
                options: ["has", "have", "had", "having"],
                correct: 1,
                explanation: "After auxiliary verbs (does, do, did), always use the BASE FORM. 'Does have' — not 'does has'. The 's' is already carried by 'does'."
            },
            {
                q: "Section B — Concord\n\n\"I ___ writing a book on grammar.\"",
                options: ["are", "is", "am", "were"],
                correct: 2,
                explanation: "1st person singular (I) always takes 'am'. I am, You are, He/She/It is, We/They are."
            },
            {
                q: "Section C — Sentence Types\n\n\"Please, close the door.\" What type of sentence is this by purpose?",
                options: ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
                correct: 2,
                explanation: "An Imperative sentence gives a command, order, or request. The subject 'you' is implied. Examples: 'Sit down.', 'Open your book.', 'Please help me.'"
            },
            {
                q: "Section C — Sentence Types\n\n\"Why are there so many different kinds of workers?\" What type is this?",
                options: ["Assertive", "Interrogative", "Imperative", "Exclamatory"],
                correct: 1,
                explanation: "An Interrogative sentence asks a question and ends with (?). It often begins with: who, what, where, when, why, how."
            },
            {
                q: "Section C — Sentence Types\n\nA sentence with only one subject and one predicate is called a:",
                options: ["Compound sentence", "Complex sentence", "Simple sentence", "Compound-Complex sentence"],
                correct: 2,
                explanation: "A Simple sentence has ONE main clause — one subject and one predicate. Example: 'The boy ate.' It expresses one complete thought."
            },
            {
                q: "Section C — Sentence Types\n\n\"John came home and Mary saw him.\" Identify the sentence structure:",
                options: ["Simple", "Compound", "Complex", "Fragment"],
                correct: 1,
                explanation: "A Compound sentence has TWO or more main clauses joined by coordinating conjunctions (and, but, or, so). 'John came home' + 'and' + 'Mary saw him'."
            },
            {
                q: "Section C — Sentence Types\n\n\"The man that you saw yesterday was the President.\" This is a:",
                options: ["Simple sentence", "Compound sentence", "Complex sentence", "Imperative sentence"],
                correct: 2,
                explanation: "A Complex sentence has one main clause + a subordinate clause. 'that you saw yesterday' is a relative clause. Complex sentences use: who, which, that, because, although, when."
            },
            {
                q: "Section C — Sentence Types\n\nWhich sentence is Exclamatory?",
                options: [
                    "How are you doing?",
                    "Sit down now.",
                    "What a beautiful shirt!",
                    "He is a boy."
                ],
                correct: 2,
                explanation: "An Exclamatory sentence expresses strong emotion and ends with (!). It often starts with 'What' or 'How'. Example: 'What a goal!' 'How wonderful!'"
            }
        ]
    },

    "CIT108_m2_u1": {
        fbq: [
            { q: "Abstraction is the creation of well-defined _________ to hide the inner workings of computer programs from users", a: "interfaces" },
            { q: "_________ is widely used to simplify things that are very complex", a: "Abstraction" },
            { q: "In abstraction, essential elements are displayed to the user and trivial elements are kept _________.", a: "hidden" },
            { q: "In functional abstraction, the implementation detail of the computational method is hidden. You can think of a function as a _________", a: "black box" },
            { q: "_________ abstraction is used in Object Oriented Programming to group objects that are \"kinds of\" more generic objects", a: "Generalisation / Abstraction by Generalisation" },
            { q: "When you group things in terms of a set of common characteristics, you are _________.", a: "generalising" },
            { q: "The maps of many metropolitan public transport systems are a classic example of _________ abstraction.", a: "representational" },
            { q: "A _________ is a last in, first out data structure.", a: "stack" },
            { q: "The three operations supported by a stack are _________, _________ and _________.", a: "push, pop, peek" },
            { q: "_________ abstraction is a technique that allows you to separate the way that a compound data object is used from the details of how it is constructed.", a: "Data" },
            { q: "Procedural abstraction represents a _________ method.", a: "computational" },
            { q: "A _________ is a last in, first out (LIFO) data structure that supports push, pop and peek operations.", a: "stack / Abstract Data Type (ADT)" },
            { q: "_________ abstraction allows code to be developed and shared between objects in OOP.", a: "Generalisation / Abstraction by Generalisation" },
            { q: "In a flight simulator, a plane will be an object with a set of _________ that are relevant to the features of the simulator.", a: "properties / attributes" },
            { q: "Types of abstraction include all except _________", a: "relational abstraction" }
        ],
        mcq: [
            { q: "What is the primary purpose of abstraction in problem solving?", options: ["To make programs run faster", "To hide unnecessary details and manage complexity", "To increase the number of functions in a program", "To make programming languages easier to learn"], correct: 1, explanation: "Abstraction manages complexity by hiding unnecessary details. This is its main purpose in problem solving." },
            { q: "Which of the following best describes functional abstraction?", options: ["Grouping objects by common characteristics", "Removing unnecessary details from a map", "Hiding the implementation detail of a computational method", "Separating how data is used from how it is constructed"], correct: 2, explanation: "Functional abstraction treats a function as a black box — you know input/output but not the internal workings." },
            { q: "A transport map that removes actual road details but keeps station routes is an example of:", options: ["Data abstraction", "Procedural abstraction", "Representational abstraction", "Functional abstraction"], correct: 2, explanation: "Removing unnecessary details to create a simplified version is representational abstraction." },
            { q: "Which type of abstraction represents a computational method?", options: ["Data abstraction", "Procedural abstraction", "Representational abstraction", "Generalisation"], correct: 1, explanation: "Procedural abstraction generalizes a computational method so it is not tied to one specific use case." },
            { q: "Types of abstraction include all EXCEPT:", options: ["Representational abstraction", "Relational abstraction", "Functional abstraction", "Data abstraction"], correct: 1, explanation: "'Relational abstraction' does not exist. The five types are: Representational, Generalisation, Procedural, Functional, and Data." },
            { q: "A stack data structure is an example of which type of abstraction?", options: ["Procedural abstraction", "Representational abstraction", "Functional abstraction", "Data abstraction"], correct: 3, explanation: "A stack separates how it is used (push, pop, peek) from how it is internally implemented — this is data abstraction." },
            { q: "Abstraction is widely used to:", options: ["Complicate things that are very simple", "Simplify things that are very complex", "Speed up computer hardware", "Replace algorithms in problem solving"], correct: 1, explanation: "Abstraction simplifies complexity. Without abstraction, we may end up with wrong solutions." },
            { q: "Which of the following is NOT an operation of a stack?", options: ["Push", "Pop", "Peek", "Insert"], correct: 3, explanation: "Stack operations are only: Push (add), Pop (remove), Peek (view top). 'Insert' is not a stack operation." },
            { q: "In OOP, saying a cocker spaniel is a \"kind of\" dog is an example of:", options: ["Functional abstraction", "Data abstraction", "Abstraction by generalisation", "Procedural abstraction"], correct: 2, explanation: "Grouping objects by common characteristics (cocker spaniel IS A dog) is abstraction by generalisation." },
            { q: "When a programmer uses Python's print() function without knowing how it works internally, this is:", options: ["Data abstraction", "Representational abstraction", "Procedural abstraction", "Functional abstraction"], correct: 3, explanation: "Built-in functions that hide implementation details are examples of functional abstraction." },
            { q: "Which of the following statements about abstraction is TRUE?", options: ["Abstraction reveals all details of a system to users", "In abstraction, essential elements are displayed and trivial elements are hidden", "Abstraction makes programs more complex", "Abstraction is only used in hardware design"], correct: 1, explanation: "Abstraction reveals essential elements and hides trivial ones. This principle applies to software and hardware." },
            { q: "The function calculate_area(side1, side2) is more general than calculate_chopping_board_area() because:", options: ["It uses more variables", "It has been abstracted to work for any shape, not just one specific case", "It runs faster", "It uses fewer lines of code"], correct: 1, explanation: "Procedural abstraction makes functions general-purpose instead of tied to specific use cases." },
            { q: "Which type of abstraction is fundamental to Object Oriented Programming?", options: ["Data abstraction", "Abstraction by generalisation", "Functional abstraction", "Representational abstraction"], correct: 1, explanation: "OOP relies on grouping objects by common characteristics — this is abstraction by generalisation." },
            { q: "A stack follows which principle?", options: ["First In First Out (FIFO)", "First In Last Out (FILO)", "Last In First Out (LIFO)", "Random access"], correct: 2, explanation: "A stack is LIFO — the last item pushed is the first item popped." },
            { q: "Without proper abstraction in problem solving, we may end up with:", options: ["A faster solution", "A more complex algorithm", "The wrong solution to the problem", "Better data structures"], correct: 2, explanation: "Without abstraction, we may solve the wrong problem or create unnecessarily complex solutions." }
        ],
        truefalse: [
            { q: "In abstraction, essential elements are displayed to the user and trivial elements are kept hidden.", a: "TRUE" },
            { q: "Abstraction is widely used to complicate things that are very simple.", a: "FALSE — It simplifies things that are very complex" },
            { q: "Procedural abstraction represents a computational method.", a: "TRUE" },
            { q: "Relational abstraction is one of the five types of abstraction.", a: "FALSE — It does not exist" },
            { q: "A stack is a Last In First Out (LIFO) data structure.", a: "TRUE" },
            { q: "Functional abstraction reveals how a function works internally.", a: "FALSE — It hides the implementation detail" },
            { q: "Abstraction by generalisation allows code to be developed and shared between objects.", a: "TRUE" },
            { q: "A transport map that removes unnecessary details is an example of representational abstraction.", a: "TRUE" },
            { q: "Data abstraction separates how data is used from how it is constructed.", a: "TRUE" },
            { q: "In functional abstraction, a function can be thought of as a black box.", a: "TRUE" }
        ],
        tricky: [
            { q: "What are the THREE definitions of abstraction provided in the exam summary?", a: "1) Creating well-defined interfaces to hide inner workings\n2) Identifying general characteristics needed while filtering out unnecessary information\n3) Simplifying a process by providing what you need and hiding useless details" },
            { q: "Name ALL five types of abstraction in order", a: "1) Representational Abstraction\n2) Abstraction by Generalisation\n3) Procedural Abstraction\n4) Functional Abstraction\n5) Data Abstraction" },
            { q: "What is the key difference between Representational and Functional abstraction?", a: "Representational: Removes unnecessary details from real-world objects to create simpler versions.\nFunctional: Hides the IMPLEMENTATION of how something works (treating it as a black box)." },
            { q: "In OOP, what does 'Abstraction by Generalisation' allow you to do?", a: "It allows code to be developed and shared between objects. You group objects by common characteristics so they can inherit and share properties and methods." },
            { q: "Can a Stack be used without knowing how it is internally implemented?", a: "YES. This is the point of data abstraction — you only need to know the three operations (push, pop, peek), not the internal structure." },
            { q: "Give an example of a Procedural Abstraction in real life", a: "Instead of writing separate functions for different areas (calculate_chopping_board_area, calculate_door_area), use one general function calculate_area(length, width) that works for any rectangle." },
            { q: "Most repeated exam answer: 'Abstraction is widely used to...' — what is the answer?", a: "Simplify things that are very complex" },
            { q: "Most repeated exam answer: 'Procedural abstraction represents a...' — what is the answer?", a: "Computational method" },
            { q: "Most repeated exam answer: 'Types of abstraction EXCEPT...' — what is the TRICK answer used in NOUN exams?", a: "Relational abstraction — this is a trick answer because it does not exist" },
            { q: "Most repeated exam answer: 'In functional abstraction, a function is treated as a...' — what is the answer?", a: "Black box" }
        ]
    }
};
