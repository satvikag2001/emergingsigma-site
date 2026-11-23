# Task List: Regulatory Document Library, from built to live

Source spec: SPEC.md. Details, acceptance criteria and risks: [plan.md](plan.md).

Tasks marked **owner** wait for the owner's input. Task numbers match plan.md; the order
below is the order to do them in.

## Done (branch `document-library`)

- [x] Spec written and approved (`0aa0018`)
- [x] Library list, category and type filters (`6616e16`)
- [x] Full-text search with every occurrence shown (`6616e16`)
- [x] Document pages with the PDF viewer (`6616e16`)
- [x] Build checks, search index, PDF.js files, sitemap (`6616e16`)
- [x] Unit tests for search and for the catalog's filters and counts (`6616e16`, `d63a4d6`)

## Phase 0: Before anything else

- [ ] **Task 10: Upgrade Next.js 16.4.0 to 16.4.6 for the security advisory, released on its own**
  - The owner chose to do this before the library release. Branch from `main`, upgrade,
    verify, then push to `main` as its own deploy and rebase `document-library` on top.
  - Done when: `next` is pinned at the fixed version and `npm audit` shows no critical
    advisory; the site builds on the first attempt and every existing page behaves as before,
    locally and live; `document-library` is rebased and its tests, build and browser checks
    pass.
  - Verify: `npm run build` on the first attempt; browser check of every existing page; green
    Actions run; after the rebase, `npm test`, `npm run build` and the library browser checks.
  - Rollback: `git revert` the upgrade commit on `main` and push.
  - Depends on: nothing to start. **The push to `main` needs the owner's explicit sign-off.**
    Scope: Small.
  - Progress (2026-11-22): upgraded and verified on the branch `next-security-upgrade`
    (`8e4ac56`, one commit ahead of `main`), and `document-library` is rebased onto it with
    tests, build and browser checks passing. **Left: the owner's sign-off, then push
    `next-security-upgrade` to `main` and check the live site.**

## Phase 1: Finish before release

- [x] **Task 1: The PDF viewer works on older browsers (PDF.js legacy build)**
  - Done 2026-11-23. Viewer, stylesheet and worker load from `pdfjs-dist/legacy/`. A
    simulated older browser failed before the switch and works after it; all 31 browser
    checks pass in Chromium 148 and Firefox 150; the fallback link shows when the viewer
    cannot start.
  - Limit found: PDF.js supports its legacy build on Chrome and Edge 125+, Safari 18+ and
    Firefox ESR (about mid-2024), which is newer than the rest of the site needs. Older
    browsers get the message and the link to the PDF.

- [ ] **Task 1b (owner): Check the viewer in Safari**
  - WebKit is downloaded but cannot start here without system libraries that need `sudo`.
  - Either run `sudo ~/job_apps/.venv/bin/playwright install-deps webkit` so the browser
    checks can run in WebKit, or open a document page from a search result on an iPhone,
    iPad or Mac.
  - Done when: the PDF opens at the right page with the match highlighted, and find, page
    and zoom controls work; any Safari-only defect is fixed or recorded.
  - Depends on: Task 1 and the owner's choice of route. Scope: XS.

- [ ] **Task 2 (owner): The owner reviews the 57 titles**
  - The list is ready: [review.md](review.md), section 1 (items T1 to T57). Waiting for the
    owner's reply; then apply the changes to `lib/resources.ts`.
  - Done when: every title is approved or replaced; each flagged item has a decision; every
    document page still has a unique title.
  - Verify: `npm test`, `npm run build`, look at `/resources`.
  - Depends on: owner input. Scope: Small.

- [ ] **Task 3 (owner): The owner reviews the new wording**
  - The list is ready: [review.md](review.md), section 2 (items W1 to W27): filter labels,
    empty-filter message, search status lines, headings, buttons, viewer labels and
    messages, and the page title and description templates. Waiting for the owner's reply.
  - Done when: each string and both templates are approved or replaced; no draft string
    remains; tests that assert wording match.
  - Verify: `npm test`, `npm run build`, browser checks.
  - Depends on: owner input. Scope: Medium.

- [ ] **Task 4 (owner): Decide two existing texts that now read slightly off**
  - In [review.md](review.md), section 3 (items E1 and E2): the search placeholder
    ("…by title or keyword…") and the column heading "Title / Description".
  - Done when: the owner has chosen keep or change for each; the page shows the chosen text.
  - Verify: `npm run build`, look at `/resources` at desktop width and 375 px.
  - Depends on: owner input. Scope: XS.

- [x] **Task 6: Bring DEPLOY.md's "Known gaps" up to date**
  - Done 2026-11-23. Removed the "12 download buttons link to #" item and the two "secret is
    not set" items; `gh secret list` shows `WEB3FORMS_ACCESS_KEY` and `CF_BEACON_TOKEN`.

- [ ] **Task 5: Measure accessibility**
  - Lighthouse accessibility on `/resources` and one document page (SPEC.md criterion 10),
    using a one-off Lighthouse download (approved; not added to `package.json`).
  - Done when: both score at least 95, or every failing audit is fixed or recorded with the
    reason.
  - Verify: Lighthouse runs; `npm test`, `npm run build` and browser checks after any fix.
  - Depends on: Tasks 1 to 4. Scope: Small.

### Checkpoint A: Ready to release

- [ ] Task 10 released; Tasks 1 to 6 done and committed on `document-library`; working tree
      clean
- [ ] `npm test` passes; `npm run build` succeeds
- [ ] Browser checks pass in Chromium and Firefox; Safari checked (Task 1b)
- [ ] The owner has approved the titles and all wording
- [ ] The owner gives explicit sign-off to deploy

## Phase 2: Release

- [ ] **Task 7: Merge to `main` and push (this deploys the site)**
  - Fast-forward `main` to `document-library`; push; watch the Actions run.
  - Done when: the run finishes green, including its build-output check.
  - Rollback: `git revert` the release commits on `main` and push.
  - Depends on: Checkpoint A and the owner's explicit sign-off. Scope: XS, high risk.

- [ ] **Task 8: Verify the live site**
  - Done when: `/resources` lists 57 documents and search works; a result opens the right
    page with highlights; `/resources` still loads beside the new `resources/` folder; a PDF
    matches its checksum; page 200 of the rules appears within 3 s; the owner has checked on
    a phone.
  - Verify: scripted read-only checks against the live URLs; the owner's phone; the sitemap.
  - Depends on: Task 7. Scope: Small.

### Checkpoint B: Live and verified

- [ ] Task 8 passes, or each failure is fixed or rolled back
- [ ] The owner has seen the live library

## Phase 3: After release

- [ ] **Task 9: After release**
  - Mark SPEC.md as released; delete the merged branch; the owner resubmits the sitemap in
    Search Console.
  - Depends on: Checkpoint B. Scope: XS.
