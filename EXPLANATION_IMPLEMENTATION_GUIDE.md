# Unit Explanation Implementation Guide

This guide explains how to add or improve unit explanation pages in StudyVault.
It is written for future AI assistants and developers.

The goal is simple:

Make every unit explanation so clear that a complete beginner can understand it without prior knowledge.

## Core Teaching Mission

A struggling student may depend on these pages.

Do not write like a textbook.
Do not write like an expert talking to another expert.
Write like a patient teacher sitting beside the student.

Every explanation must be:

- Simple.
- Slow.
- Clear.
- Friendly.
- Based only on the pasted unit content.
- Broken into small sections.
- Easy to read on a phone.

## Most Important Content Rules

Use only the content from the unit.

Do not add outside facts.
Do not add extra examples from outside the unit unless the example only explains the same idea using everyday language.
Do not invent course material.
Do not expand beyond what the unit teaches.

If a difficult word appears, explain it immediately.

Example:

```text
Ubiquitous means found almost everywhere.
```

Use short sentences.
Avoid long paragraphs.
One concept should not fight with another concept on the same screen.

## Explanation Pattern For Every Concept

Every concept should follow this teaching order:

1. `definition`
   - Say what the concept means.
   - Keep it close to the unit.

2. `simple`
   - Explain it like the reader is 10 years old.
   - Do not assume they know anything.

3. `example`
   - Give a real-life style example.
   - and examples already present in the unit.

4. `analogy`
   - Connect the idea to something familiar.
   - Keep the analogy simple.

5. `recap`
   - Explain the whole concept again in one simple sentence.

6. `points`
   - Use this only when a term needs a quick meaning.
   - Each point should define one word or phrase.

7. `diagram`
   - Add a diagram key only when the concept can be visualized.
   - The actual diagram HTML/CSS is rendered by `assets/js/explanation.js` and styled in `assets/css/styles.css`.

## Page Structure Rule

Do not put one whole long unit explanation on one giant page.

Use section pages.

The current route pattern is:

```text
explanation.html?uid=UNIT_ID&section=SECTION_NUMBER
```

Example:

```text
explanation.html?uid=CIT104_m1_u1&section=1
```

Each section should teach one group of related concepts.

Good section examples:

```text
Section 1: Introduction and Objectives
Section 2: Computer, Data, Information, and Processing
Section 3: Methods of Data Processing
Section 4: Characteristics of a Computer
Section 5: The Computing System
Section 6: Full Unit Recap
```

## File Map

These are the main files used by the explanation feature:

```text
explanation.html
```

The reusable explanation page.
Do not duplicate this file for every unit.

```text
assets/js/explanations.js
```

Stores the unit explanation content.
Most new explanation work should happen here.

```text
assets/js/explanation.js
```

Reads the `uid` and `section` URL parameters.
Finds the correct explanation data.
Renders one section at a time.
Handles section navigation.
Avoid editing this unless the rendering system itself needs to change.

```text
assets/css/styles.css
```

Contains explanation page styles and diagram styles.
Avoid adding inline styles to content data.

```text
assets/js/unit.js
```

Adds the `Full explanation` button on the summary page when a unit has explanation data.

```text
unit.html
```

Loads `assets/js/explanations.js` before `assets/js/unit.js`.

```text
sw.js
```

Controls offline caching.
If you change any cached asset and want deployed users to receive the update offline, bump `CACHE_NAME`.

## Data Shape

Each unit explanation belongs inside `window.unitExplanations`.

Use this shape:

```js
window.unitExplanations = {
    UNIT_ID: {
        title: "Course Unit Title",
        opening: "Short friendly introduction.",
        sections: [
            {
                title: "Section Title",
                shortTitle: "Short",
                intro: "What this section teaches.",
                concepts: [
                    {
                        shortTitle: "Concept",
                        title: "Full Concept Title",
                        definition: "Meaning of the concept.",
                        simple: "Explain it from zero.",
                        example: "Everyday or unit-based example.",
                        analogy: "Simple analogy.",
                        recap: "One simple sentence recap.",
                        diagram: "diagramKey",
                        points: [
                            { term: "Difficult word", meaning: "Very simple meaning." }
                        ]
                    }
                ],
                sectionRecap: [
                    "Simple recap point one.",
                    "Simple recap point two."
                ]
            }
        ]
    }
};
```

If a section is the final recap section, it may have no concepts:

```js
{
    title: "Full Unit Recap",
    shortTitle: "Recap",
    intro: "This final section brings the whole unit together.",
    concepts: [],
    sectionRecap: [
        "Main idea one.",
        "Main idea two."
    ],
    finalMessage: "Friendly closing message."
}
```

## Diagram Rules

Use diagrams when they help the student see the idea.

Good diagram candidates:

- Input, processing, output.
- Data becoming information.
- Manual vs mechanical vs computer method.
- Characteristics of a computer.
- Hardware parts.
- Software categories.
- User categories.
- Computing environment.

Do not put large raw HTML diagrams inside `assets/js/explanations.js`.

Instead:

1. Add a short diagram key in the content data.

```js
diagram: "dataInfo"
```

2. Add or reuse the matching diagram in `renderDiagram()` inside `assets/js/explanation.js`.

3. Add or reuse the matching CSS in `assets/css/styles.css`.

Every diagram must have:

- Clear labels.
- Simple boxes.
- Soft colors.
- A caption.
- Mobile-friendly layout.

## Summary Page Rule

The summary page and explanation page are different.

The summary page is for fast revision.
The explanation page is for full beginner teaching.

For each important unit:

- Add or improve the unit `summary` in `assets/js/data.js`.
- Add the deep sectioned explanation in `assets/js/explanations.js`.

Do not put the full long explanation inside `summary`.

## How The Full Explanation Button Works

The unit page checks this:

```js
window.unitExplanations && window.unitExplanations[context.unit.id]
```

If explanation data exists for the current unit, the unit page shows:

```text
Full explanation
```

The link should go to section 1:

```text
explanation.html?uid=UNIT_ID&section=1
```

## Safe Implementation Process

Follow this order when adding a new explanation:

1. Read the unit content carefully.
2. Identify the major sections.
3. Split the unit into small section pages.
4. For each section, list the concepts.
5. For each concept, write:
   - `definition`
   - `simple`
   - `example`
   - `analogy`
   - `recap`
   - `points` if needed
   - `diagram` if useful
6. Add the explanation data to `assets/js/explanations.js`.
7. Add a short exam-focused summary to `assets/js/data.js`.
8. Add new diagram renderer keys only if needed.
9. Add new CSS only if needed.
10. Bump `CACHE_NAME` in `sw.js`.
11. Run checks.
12. Test the page in a browser.

## Do Not Break These Things

Do not rename these unless you update all references:

```text
window.unitExplanations
sections
concepts
sectionRecap
definition
simple
example
analogy
recap
points
diagram
```

Do not remove:

```text
assets/js/explanations.js
assets/js/explanation.js
```

from `explanation.html`.

Do not remove:

```text
assets/js/explanations.js
```

from `unit.html`, because the unit page needs it to know whether to show the `Full explanation` button.

Do not put one giant explanation into one section.

Do not write all concepts into one paragraph.

Do not use unsupported external resources for diagrams.
Diagrams should be HTML and CSS only.

## Offline Cache Rule

This app supports offline use.

`sw.js` caches the explanation page and assets.

When changing cached files, especially these:

```text
assets/js/explanations.js
assets/js/explanation.js
assets/css/styles.css
assets/js/data.js
explanation.html
unit.html
assets/js/unit.js
```

bump the cache name in `sw.js`.

Example:

```js
const CACHE_NAME = "studyvault-offline-v5";
```

This helps deployed users get the new offline version.

## Verification Checklist

Run JavaScript syntax checks:

```powershell
node --check assets\js\explanations.js
node --check assets\js\explanation.js
node --check assets\js\unit.js
node --check assets\js\data.js
```

Start a local server:

```powershell
npx --yes http-server . -p 4173 -c-1
```

Open the unit page:

```text
http://127.0.0.1:4173/unit.html?uid=CIT104_m1_u1
```

Check:

- The summary renders.
- The `Full explanation` button appears.
- The button opens section 1.
- The section progress says the correct section number.
- The flow steps highlight the active section.
- Next and Previous buttons work.
- The final section has a friendly recap.
- Diagrams are readable on desktop and mobile.
- No text overlaps.
- No console errors appear.

## Writing Quality Checklist

Before finishing any explanation, ask:

- Can a beginner understand this without knowing the topic?
- Did I explain every difficult word?
- Did I avoid outside information?
- Did I keep sentences short?
- Did I give an example?
- Did I give an analogy?
- Did I give a one-sentence recap?
- Did I add diagrams where they help?
- Is the section short enough for mobile reading?
- Does the final recap feel like a kind teacher closing the class?

If the answer is no, simplify again.

## Current Example To Follow

The first completed explanation is:

```text
CIT104_m1_u1
```

Open it at:

```text
explanation.html?uid=CIT104_m1_u1&section=1
```

Use it as the pattern for future units.
