# Copilot / AI Agent Instructions — Physical AI & Humanoid Robotics

Summary: concise, actionable guidance for AI coding agents working in this repository. Focus on content-driven changes (Docusaurus docs), small diffs, and the project's PHR / ADR conventions.

## Quick facts
- Project type: Docusaurus documentation/book (primary source: `docusaurus-text-book/docs/`).
- Node: **>= 20** (see `package.json`).
- Local dev: `npm install` → `npm run start` (dev server).
- Production build: `npm run build` (produces `build/`), preview with `npm run serve`.
- CI deploy: GitHub Action `/.github/workflows/deploy.yml` builds with `npm run build` and publishes `./build` to GitHub Pages.

## Where to make changes (common tasks)
- Add or edit chapters: modify files under `docusaurus-text-book/docs/` (Markdown or MDX). Each chapter should be a single file.
  - Example: `docusaurus-text-book/docs/modules/module1.mdx`.
- Add a section/category: create a folder under `docusaurus-text-book/docs/` and include `_category_.json` (see `digital-twin/_category_.json`) or update `sidebars.ts` to add entries.
- Update navigation: edit `sidebars.ts` (IDs reference doc paths like `modules/module1`).
- Static assets: add images to `static/img/` and CSS to `static/css/custom.css`.

## Content conventions & rules (project-specific)
- One chapter per file; file names should be predictable and mirror the book parts (see `specs/*/data-model.md`).
- Tone: concept-first, educational, concise; **do not** include content about RAG/chatbots, vector DBs, backend APIs, deployment, or auth (these are explicitly excluded in `specs/001-define-book-structure/spec.md`).
- Keep diffs small and focused (no unrelated refactors). Cite changed files in your PR description.

## PHR & ADR process (required)
- After completing any implementation or planning work, create a Prompt History Record (PHR) under `history/prompts/` following the templates in `.specify/templates/` and the process described in `CLAUDE.md` / `QWEN.md`.
- If you detect an architectural decision that is long‑lived or cross‑cutting, suggest an ADR: `"📋 Architectural decision detected: <brief>. Document? Run /sp.adr <title>"` and wait for consent before creating an ADR file in `history/adr/`.

## Testing & QA
- Structural verification: run `npm run build` and inspect the generated `build/` output (or `docusaurus-text-book/build/`); check for missing links and local 404s.
- Type checking: `npm run typecheck` (TypeScript config present).
- Manual review: content is primarily validated by human review (see `specs/001-define-book-structure/tasks.md` for independent-test items).

## PR & commit guidance
- Keep PRs small and focused; include which spec/task this change satisfies (reference `specs/<feature>/spec.md` or `tasks.md`).
- Mention files changed and add a short acceptance checklist (e.g., built site, links valid, PHR created).

## Useful file references (examples)
- Book content: `docusaurus-text-book/docs/` (use folders per part)
- Category metadata: `docusaurus-text-book/docs/*/_category_.json`
- Sidebar config: `sidebars.ts`
- Build and preview: `package.json` scripts (`start`, `build`, `serve`)
- PHR & ADR workflow: `history/prompts/`, `history/adr/`, `.specify/` scripts
- Agent guidance templates: `CLAUDE.md`, `QWEN.md` (root)

## When to ask the user
- Ambiguous or incomplete writing scope (e.g., target audience or level of detail for a chapter).
- When a decision impacts book structure, curriculum, or scope (ask before making category/sidebars changes).
- Any change that would break the educational scope (if unsure whether a topic is excluded, ask).

If anything here is unclear or you want a different level of detail (examples, PR templates, or automated checks), say which area to expand and I'll iterate. ✅
