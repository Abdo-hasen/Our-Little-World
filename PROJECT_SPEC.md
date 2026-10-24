# Our World — Aya Ali

## Project Specification for Cursor

> This document is the source of truth for the project scope, experience, content, design direction, and implementation workflow. Follow it before making architectural or visual decisions.

---

## 1. Project Overview

**Project name (working title):** Our World — Aya Ali  
**Logo direction (approved):** Lavender `AA` monogram with the wordmark `OUR WORLD` (no date in the logo). Use it as the site mark/favicon where appropriate. Do not add the engagement date to the logo.  
**Project type:** Personal cinematic engagement-gift website  
**Primary recipient:** Aya Ali (آية علي)  
**Project owner:** Abdelrahman Hasan  
**Current phase:** Phase 1 — Static React website

The website is a personal, respectful engagement gift. It should feel like a short cinematic journey through real memories, followed by a permanent area for messages and shared memories. The content must feel sincere and personal, not generic or exaggerated.

### Core principles

- Use real details supplied by the project owner. **Never invent relationship events, dates, quotes, chat messages, feelings, or memories.**
- The language can mix natural Egyptian Arabic and English when that feels stylish or contextually appropriate. Personal messages should sound like the project owner, not like generic AI-written romance.
- Keep the tone warm, respectful, sincere, and appropriate for a شرعي engagement. Avoid the word “love” in user-facing romantic copy and avoid wording that assumes the couple is already married.
- Build incrementally: **one scene at a time**, with the project owner reviewing and approving each scene before implementation moves forward.
- Do not implement the whole journey in one large, unreviewed pass.
- The first version is static. Do not add Firebase, a backend, authentication, or an admin dashboard in Phase 1.

---

## 2. Delivery Phases

### Phase 1 — Static React Website

Build the cinematic journey and the permanent website area using local/static content.

- React + Vite.
- TypeScript is preferred for maintainable data models; if the repository already uses JavaScript, preserve its established setup unless the owner approves changing it.
- CSS-based design and animations; use an animation library only if it materially improves the experience.
- Store editable content separately from presentation components.
- Use local assets for photos, screenshots, and the final voice message.
- No backend, Firebase, login system, or admin dashboard.
- Prepare the code structure so future dynamic data can be added without a full rewrite.

### Phase 2 — Admin Dashboard

Plan for a future dashboard to create, edit, reorder, and manage content for the permanent website area. Do not implement it now.

### Phase 3 — Firebase

Plan for future Firebase integration to persist content and media. Do not implement it now. Review current Firebase product limits and pricing before choosing specific storage services at that time.

### Phase boundaries

Never move to the next phase unless the owner explicitly asks. Do not add placeholder backend integrations or unnecessary dependencies in Phase 1.

---

## 3. Approved Design and Experience Direction

### Authority map (Impeccable)

| Concern | Source of truth |
|---|---|
| Product purpose, users, constraints, brand voice | `PRODUCT.md` |
| Visual world, tokens, components, do/don’t | `DESIGN.md` + `.impeccable/design.json` |
| Journey scenes, copy approval, delivery phases | This file (`PROJECT_SPEC.md`) |
| Live CSS tokens | `src/index.css` (`:root`) — keep aligned with `DESIGN.md` |

When using `/impeccable` commands, treat **Soft Lavender Mist Letter** in `DESIGN.md` as the incumbent visual world. Do not invent a competing palette or typography stack.

### Experience rules (product)

- **Visual direction:** Soft cinematic opening (Soft Lavender Mist), then warm memory-focused scenes. Light UI only — no near-black full-page backgrounds.
- **Logo:** Lavender `AA` / `OUR WORLD` monogram (`public/our-world-monogram.png`). No engagement date in the logo. Mid-mauve gradient plate behind the mark.
- **Typography:** Body — Alexandria. Display / titles — Aref Ruqaa. Full RTL. Scene 1 letter body uses `--text-primary` for readable weight.
- **Layout:** Mobile-first; optimized for QR / phone open.
- **Navigation:** Guided journey; allow revisit of previous scenes.
- **Motion:** Restrained cinematic motion; respect `prefers-reduced-motion`.
- **Audio:** No background music track. The only audio is the owner’s final voice recording at the end of the journey (visitor-started; accessible controls; graceful if missing).
- **Privacy:** No sensitive data in public static files; owner-redact screenshots before publish.
- **Accessibility:** Keyboard, labels, focus, contrast, accessible voice controls when present.

### Approved color palette — Soft Lavender Mist

**Creative North Star:** Soft Lavender Mist Letter (see `DESIGN.md`).  
**Do not use:** Previous burgundy/gold palette, or near-black full-bleed page backgrounds.

| Role | Token (CSS) | Hex / value | Notes |
|---|---|---|---|
| Page canvas | `--bg-deep` | `#efe6f2` | Soft lavender mist base |
| Elevated soft surface | `--bg-plum` | `#e4d5e8` | Secondary wash / soft panels |
| Card surface | `--bg-card` | `rgba(255, 252, 255, 0.68)` | Frosted white card |
| Card border | `--bg-card-border` | `rgba(110, 70, 115, 0.16)` | Quiet plum edge |
| Primary text | `--text-primary` | `#3a2440` | Titles + Scene 1 letter body |
| Supporting text | `--text-secondary` | `#5a3d5f` | Softer supporting copy |
| Muted text | `--text-muted` | `#6f5073` | Captions, secondary CTA line |
| Accent lavender | `--accent-lavender` | `#8b5a8c` | Emphasis / links |
| Accent mauve | `--accent-mauve` | `#a76b9e` | Focus rings, accents |
| Accent glow | `--accent-glow` | `rgba(167, 107, 158, 0.28)` | Soft focus / glow |
| Primary button start | `--btn-start` | `#96598f` | CTA gradient start |
| Primary button end | `--btn-end` | `#8b5a8c` | CTA gradient end |
| Input fill | `--input-bg` | `rgba(255, 255, 255, 0.85)` | Date fields |
| Input border | `--input-border` | `rgba(110, 70, 115, 0.22)` | Date fields |
| Soft shadow | `--shadow-soft` | `rgba(90, 50, 95, 0.12)` | Elevation |
| Champagne gold | `--accent-gold` | `#c9a46c` | Dividers, seal, success glow |
| Gold soft | `--accent-gold-soft` | `rgba(201, 164, 108, 0.45)` | Soft gold accents |

**Logo plate (Scene 1):** `#a874a8` → `#7d527d` → `#5c3a5c`.

**Opening atmosphere (Scene 1):** `public/scene1-atmosphere.jpg` with blur + lavender veil + aurora/particles. Abstract only unless the owner approves real couple photos for that role.

**Code styles:** `src/index.css` + `src/features/journey/scenes/Scene1Key.css`.

Do not use stock romantic imagery as if it were a real couple memory. Use clear placeholders until the owner provides real assets.

---

## 4. Cinematic Journey — Approved Scene Order

The cinematic journey consists of the following scenes. The scene content must be developed through a guided question-and-answer process before implementation.

### Scene 1 — مفتاح عالمكم

**Purpose:** Welcome Aya and create curiosity before the journey begins.

**Name display:** `آية علي` or `Aya Ali`.

**Approved opening copy (preserve the wording; punctuation may be polished without changing its meaning):**

> آية علي،
>
> ورا كل صورة حكاية، وورا كل ذكرى إحساس، وفي تفاصيل صغيرة يمكن متعرفيش إنها فضلت في بالي لحد دلوقتي.
>
> النهارده حبيت أرجع أعيش معاكي شوية من التفاصيل دي، وأحكيلك عن حاجات يمكن ملحقتش أقولها وقتها، وأمنيات بدعي ربنا إنها تجمعنا على خير.
>
> ودي مجرد بداية...
>
> يلا نبدأ الرحلة؟

**Primary opening copy and button:** Preserve the approved message above. The visible call-to-action at the end of the opening copy is `يلا نبدأ الرحلة؟`; the button may read `افتحي هديتك`.

**Approved engagement date:** `13/03/2026` (13 March 2026). Use this as the date-entry passphrase for the journey. Do not display the date in the logo.

**Opening flow (approved):**

1. Show the `A²` monogram (no date), Aya’s name, and the full approved opening copy on the first screen.
2. The first screen ends with the call-to-action `يلا نبدأ الرحلة؟` / `افتحي هديتك`.
3. When pressed, reveal a date-entry prompt **within the same opening scene**; do not navigate to a separate splash page.
4. Prompt copy: `فاكرة التاريخ ده؟` with supporting text `دخّلي تاريخ خطوبتنا عشان نبدأ حكايتنا`.
5. Use a date input or clearly labelled day/month/year fields. Expected date: `13/03/2026`. Accept equivalent valid date formatting where practical, while interpreting the date as 13 March 2026 (not March 13 in an ambiguous locale).
6. On a correct answer, transition into Scene 2 with a restrained cinematic transition. If the answer is incorrect, show a gentle, non-judgmental retry message and keep the visitor on the same screen.
7. Do not require an account or login.
8. This static date gate is a playful interaction, not real security. Do not present it as secure authentication or place highly sensitive content behind it.

### Scene 2 — حكايتنا بالترتيب

**Purpose:** Tell the story through a small number of meaningful milestones.

Use a timeline with **4–6 milestones**. Each milestone may include:

- A real photo or an owner-approved placeholder.
- A date, only if known and approved.
- A short title.
- A concise story written from owner-provided details.
- An optional “read more” detail view.

**Candidate milestones supplied by the owner:**

اول مره نتكلم  : 2019 - مش فاكر تاريخ وشهر 

بلوك :  عملنا  بلوك لبعض 

اول مره بيت : 5/5/2020 

اول خطوبه : 6/6/2020 - رمضان 

بلوك 

تانيه خطوبه  : 13/3/2026 - رمضان 

جواز : يمسهل مستيين 

Treat these as milestone labels/candidates, not as complete stories. Do not invent dates, circumstances, or what happened at any milestone. Clarify what “أول خطوبة” and “تاني خطوبة” refer to if needed, using the Q&A workflow.

### Scene 3 — حاجات بحبها فيكي

**Purpose:** Show specific, personal details the owner appreciates about Aya.

- Use interactive flip cards.
- Each card contains one specific detail and a short explanation.
- Avoid generic traits unless the owner explains exactly how they show up in Aya.
- Aim for 5–10 cards eventually, but begin with the number of real details the owner can provide.
- No invented traits or examples presented as facts.

### Scene 4 — رسائل غيرت يومي

**Purpose:** Highlight selected messages from real conversations and explain why they mattered.

Each item may include:

- An owner-provided, redacted WhatsApp screenshot or an approved recreation of the message.
- The relevant message or excerpt, only if supplied by the owner.
- A short caption explaining why it mattered and how the owner felt at the time.
- A tap/click interaction to reveal the story.

Privacy requirements:

- The owner must review screenshots and remove phone numbers, private details, and unrelated third-party messages before publishing.
- Do not fabricate chat screenshots or quote messages that the owner has not supplied.
- Provide a fallback layout if no screenshot is available.

### Scene 5 — الذكرى السرية

**Purpose:** Reveal a real shared memory through a question or a small discovery interaction.

- Use one short question, clue, or interaction that refers to a real event supplied by the owner.
- Provide a gentle hint and a retry option.
- Keep it playful and easy; this should not feel like an exam.
- The answer and hidden content are static in Phase 1. Explain to the owner that client-side hiding is not secure protection for private information.
- Do not invent the question, answer, or memory. Gather it using the Q&A workflow first.

### Scene 6 — مشهد أخير: حاجة لسه هتكبر

**Purpose:** End with hope for the future and a memorable, interactive visual.

**Interaction:**

- Show a small garden.
- Display a button: `ازرعي وردة`.
- Each press adds another flower to the garden with a gentle growth animation.
- The garden can start empty or with one flower, depending on the final approved design.
- Flower count is a visual interaction, not a promise of permanent server-side storage in Phase 1.

**Final message:**

- Show an owner-approved written closing line and signature.
- Play the owner’s recorded voice message as the final emotional moment (visitor-started; no background music track).
- Include a button to replay the journey from the beginning.
- Include a way to enter the permanent website area.
- Replaying the journey must not delete or reset the permanent memories area.

Do not write the final spoken message until the owner supplies or approves its wording and recording.

---

## 5. Permanent Website Area

The permanent area lives within the same website but on a separate page/route from the cinematic journey. It should be reachable from the final scene and from a clear navigation link.

Planned sections (static content in Phase 1):

1. **اسحبي رسالة عشوائية** — show a random message from an approved local collection.
2. **افتحي لما** — messages grouped by situations, such as a difficult day or a moment when encouragement is needed. Only use categories and copy approved by the owner.
3. **حديقة الذكريات** — a visual collection of shared memories.
4. **كوبونات** — interactive cards containing owner-written, respectful, practical coupons. Avoid promises that the owner has not agreed to fulfil.
5. **محطة الراديو بتاعتنا** — a place for owner-provided audio tracks/recordings, with manual playback.
6. **موقف النهارده** — a space designed for future entries; static sample content must be clearly marked as placeholder.
7. **قائمة أحلامنا** — a list of future wishes/plans supplied by the owner.
8. **حصاد السنة** — a year-in-review area that can be populated later.
9. **قاموسنا الخاص** — phrases, nicknames, and inside jokes supplied by the owner.

Do not invent personal messages, inside jokes, wishes, or memories. If content is missing, show an intentional empty state or clearly marked development placeholder, not fabricated personal content.

---

## 6. Content Development Workflow — Mandatory

The owner wants to discover and write the content together, scene by scene. Cursor must support this workflow rather than guessing the relationship story.

For **each scene**, follow these steps:

1. **Ask before drafting:** Ask a small batch of focused questions about that scene. Use multiple-choice questions where useful, with a few plausible answer choices and an “Other / I’ll explain” option.
2. **Give a rationale:** After each question or group of questions, briefly explain why the answer matters and how it affects the story, tone, visual treatment, or assets needed.
3. **Wait for the owner:** Do not invent missing details or draft a supposedly factual memory before the owner answers.
4. **Draft the content:** Use natural Egyptian Arabic and English where each language feels appropriate and stylish. Do not force English into intimate personal copy if Egyptian Arabic sounds more genuine.
5. **Show for review:** Present the draft and ask the owner to approve or edit it.
6. **Record approved content:** Only after approval, place the content in the relevant local data file and mark the scene’s content as approved.
7. **Implement one scene:** Build only the currently approved scene, plus the minimum navigation needed to test it.
8. **Review and test:** Check mobile/desktop layouts, accessibility, audio behavior if relevant, and navigation. Ask for approval before moving on.

### Questions and rationales

The owner specifically wants Q&A with multiple-choice answers and rationale to help extract real relationship details. **Do not put the personal relationship Q&A into this specification as a fixed questionnaire.** Cursor should ask the questions interactively, one scene at a time, and adapt follow-up questions to the owner’s answers.

Do not ask all questions for all scenes at once. Do not force the owner to answer questions that do not fit their actual story. Allow short free-text answers whenever choices do not capture the truth.

### Content approval status

Keep content status explicit, for example:

- `placeholder`
- `needs-owner-input`
- `draft`
- `approved`

Never label invented or placeholder content as approved.

---

## 7. Suggested Technical Structure

Adapt this to the actual repository; do not create unnecessary files merely to match this example.

```text
src/
  app/
  components/
    audio/
    navigation/
    animation/
  features/
    journey/
      scenes/
    archive/
      messages/
      coupons/
      memories/
  data/
    journey.ts
    memories.ts
    messages.ts
    coupons.ts
  assets/
    images/
    audio/
    fonts/
  styles/
  types/
```

Guidelines:

- Keep text and content data separate from UI components.
- Use typed models for milestones, cards, messages, coupons, and audio assets if using TypeScript.
- Use meaningful component names and keep components focused.
- Use local relative asset paths or a consistent asset convention.
- Do not embed large base64 images or audio in source code.
- Make missing images/audio graceful and visually intentional.
- Keep the journey and permanent area separate in navigation and implementation.
- Use browser storage only if a clearly scoped local interaction needs it; do not imply it syncs across devices or is backed up.
- Do not add dependencies without a clear benefit.

---

## 8. Voice Message Behavior

This behavior is explicitly approved and must be implemented correctly.

1. There is no background music track on the site.
2. The only audio is the owner’s final voice recording at the end of the journey.
3. Do not autoplay the voice message; the visitor must start it intentionally.
4. Provide visible controls and accessible labels for voice playback (play / pause / replay).
5. Handle a missing voice file without breaking the scene.
6. Prefer owner-provided, licensed, or otherwise appropriately permitted audio only.

---

## 9. Quality and Acceptance Criteria

A scene is not complete until:

- Its factual content has been supplied and approved by the owner, or missing details are clearly represented as placeholders.
- It works on mobile and desktop.
- Arabic RTL and English text both render correctly.
- Buttons and interactive elements work with touch and keyboard.
- Motion is restrained and respects reduced-motion preferences.
- Images and audio have graceful fallback states.
- The console has no errors introduced by the scene.
- The production build succeeds.
- Navigation to the previous/next scene behaves as specified.
- The owner has reviewed and approved the scene.

For the final scene, also verify the voice message play/pause/replay behavior and graceful missing-file handling.

---

## 10. Cursor Execution Instructions

**Do not build the entire project immediately.**

When this specification is first provided:

1. Inspect the repository and summarize its current state.
2. Read this specification completely.
3. Confirm the agreed architecture and identify any blocking technical decisions.
4. Do not start implementing all scenes.
5. Start with **Scene 1 — مفتاح عالمكم** only.
6. The opening copy in this document is already approved. Do not ask the owner to repeat it.
7. Ask only the content/design questions still needed for Scene 1, using multiple-choice answers and rationale where useful.
8. Present the proposed implementation plan for Scene 1 and wait for the owner’s approval before making substantial code changes.
9. After implementation, run the available checks/build and summarize changed files, test results, and any owner-provided assets still needed.
10. Wait for explicit approval before proceeding to Scene 2.

For each later scene, repeat the same Q&A → rationale → draft → owner approval → implementation → review workflow.

The project owner decides when a scene is approved and when work may move forward. Do not skip approval steps.

---

## 11. Current Approved Opening Copy

Keep this exact content available as the approved Scene 1 copy:

> آية علي،
>
> ورا كل صورة حكاية، وورا كل ذكرى إحساس، وفي تفاصيل صغيرة يمكن متعرفيش إنها فضلت في بالي لحد دلوقتي.
>
> النهارده حبيت أرجع أعيش معاكي شوية من التفاصيل دي، وأحكيلك عن حاجات يمكن ملحقتش أقولها وقتها، وأمنيات بدعي ربنا إنها تجمعنا على خير.
>
> ودي مجرد بداية...
>
> يلا نبدأ الرحلة؟

Primary opening CTA: `يلا نبدأ الرحلة؟` (the button may use `افتحي هديتك`). After that CTA, reveal the date prompt in the same opening scene: `فاكرة التاريخ ده؟` / `دخّلي تاريخ خطوبتنا عشان نبدأ حكايتنا`.

Approved date passphrase: `13/03/2026` (13 March 2026). Do not put the date in the logo.

This copy is approved; do not replace it with generic romantic text.