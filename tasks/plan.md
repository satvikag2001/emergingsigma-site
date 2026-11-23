# Implementation Plan: Regulatory Document Library, from built to live

Source spec: SPEC.md

Written 2026-11-22. Task list: [todo.md](todo.md).

## Overview

The document library in SPEC.md is built: `/resources` lists the 57 PDFs with category and
type filters, full-text search shows every occurrence, and each document has a page with a
PDF viewer. The work sits on the local branch `document-library` (three commits). `main` is
unchanged by the library and none of the library is deployed. The branch sits on top of the
Next.js upgrade from Task 10, which went live on its own on 2026-11-23.

This plan covers what is left between "built on a branch" and "live and verified". Most of
it is not coding. It is a Next.js security upgrade the owner wants done first, one technical
risk found during planning (the viewer on older browsers), three review decisions that
belong to the owner, one measurement the spec asks for, and the release itself.

## Where things stand

| Spec area | State | Commit |
|---|---|---|
| Spec written and approved | Done | `0aa0018` |
| A. Library list and filters | Done | `6616e16` |
| B. Full-text search | Done | `6616e16` |
| C. Document pages and viewer | Done, but see Task 1 | `6616e16` |
| D. Build checks, index, sitemap | Done | `6616e16` |
| Unit tests (46: search 26, catalog 20) | Done | `6616e16`, `d63a4d6` |

Success criteria in SPEC.md:

- **Verified** (1, 2, 3, 5, 6, 7, 8, 9, 11): in a headless Chromium against the static build,
  29 checks, plus checksum, sitemap and metadata checks.
- **Partly verified:**
  - 4 (page 200 of the 250-page rules within 3 s): measured only on this machine, 0.4 s.
  - 10 (accessibility): met. 375 px layout and keyboard use checked; Lighthouse scores 95
    (Task 5).
  - 12 (deploy workflow checks): `CNAME` and `404.html` exist in the local build; the
    workflow itself only runs on a push to `main`.

Two limits on that verification: it now covers Chromium 148 and Firefox 150 but not Safari
(Task 1b), and the browser checks live in a throwaway script outside the repo, which the
owner has accepted.

## Architecture decisions

- **Release from a branch, by fast-forward.** `main` deploys on every push, so the work
  stays on `document-library` until the owner has approved the titles and wording. The
  merge is a fast-forward, which keeps the three commits as they are.
- **Use PDF.js's legacy build in the browser (Task 1, done).** The modern build relies on
  JavaScript features only the latest browsers have (`Map.getOrInsertComputed`,
  `Math.sumPrecise`, `Promise.try`); PDF.js supports it on the latest Chrome and Firefox
  only. The `legacy/` folder of the same package bundles replacements for those features. It
  is about 60 KB larger and is still loaded only on document pages.
- **The viewer's floor is newer than the site's.** PDF.js supports its legacy build on
  Chrome and Edge 125+, Safari 18+ ("mostly") and Firefox ESR: browsers from about mid-2024.
  The rest of the site is compiled for Chrome, Edge and Firefox 111+ and Safari 16.4+ (early
  2023). No build of this PDF.js version closes that gap, so on older browsers the document
  page falls back to its message and the link to the PDF. Whether to accept that or look at
  an older PDF.js is an open question below.
- **Ship the Next.js security upgrade first, on its own (Task 10).** The owner chose to do it
  before the library release. It is unrelated to the library, so it goes out as its own
  change and its own deploy: if something breaks, the cause is obvious. It also removes the
  notice that stops the first local build, which makes every later verification simpler.
- **No new project dependencies.** The spec's "ask first" rule stands. The owner approved two
  one-off downloads for testing only, a WebKit test browser and Lighthouse; neither is added
  to `package.json`. The browser checks stay a scratch script: the owner decided against
  adding an end-to-end framework.

## Dependency graph

```
Built and committed on document-library
(catalog + PDFs -> build checks + index -> search UI -> document pages + viewer -> tests)
        |
        T10 Next.js security upgrade ............. done and live (2026-11-23); the library
        |                                          branch sits on top of it
        |
        +-- T1  Viewer on older browsers ......... done
        +-- T1b Safari check ..................... owner, on an Apple device after release
        +-- T2  Titles ........................... done: file names, by the owner's decision
        +-- T3  New wording ...................... released as drafted, on instruction
        +-- T4  Two existing texts ............... left as they are
        +-- T6  DEPLOY.md known gaps ............. done
        |
        +-- T5  Measure accessibility ............ done early; rerun at the checkpoint if
        |                                          T2-T4 change anything visible
        |
        v
  CHECKPOINT A: ready to release (owner sign-off)
        |
        T7  Merge to main and push = deploy ..... needs explicit sign-off
        |
        T8  Verify the live site
        |
  CHECKPOINT B: live and verified
        |
        T9  After release (status, branch, Search Console)
```

T10 goes first. After it, T1, T2, T3, T4 and T6 do not depend on each other and can be done
in any order or in parallel. T5 waits for them because it measures the final pages.

## Tasks

### Task 10 (do first): Upgrade Next.js for the security advisory, released on its own

**Description:** `npm audit` reports a critical advisory in Next.js 16.4.0, fixed in 16.4.6.
Every issue listed is in a server feature this static site does not use, so the live site is
not exposed, but Next.js now stops the first local build with a notice until it is upgraded.
The owner chose to do this before the library release. Upgrade on a branch cut from `main`,
verify it, and with the owner's sign-off push it to `main` as its own deploy. Then rebase
`document-library` onto the new `main`. Read the upgrade notes in
`node_modules/next/dist/docs/` first, as AGENTS.md requires.

**Acceptance criteria:**
- [x] `package.json` pins `next` at the fixed version (16.4.6, or the latest 16.4 patch,
      exact) and `npm audit` reports no critical advisory.
- [x] The site builds on the first attempt and every existing page behaves as before,
      locally and, once the owner signs off on the push, on the live site.
- [x] `document-library` is rebased onto the upgraded `main`, and its tests, build and
      browser checks still pass.

**Verification:**
- [ ] Build succeeds: `npm run build`, on the first attempt
- [ ] Browser check on the upgrade branch: every existing page loads with no console errors
- [ ] The Actions run for the upgrade finishes green, and the live site looks as before
- [ ] After the rebase: `npm test`, `npm run build` and the full library browser checks pass
      (`main` has no test script until the library lands)

**Rollback:** `git revert` the upgrade commit on `main` and push.

**Status:** done and live on 2026-11-23 (`8e4ac56` on `main`, pushed with the owner's
sign-off). Before the push: `npm audit` reported no vulnerabilities, the build succeeded on
the first attempt, and all 17 pages built from `main` were identical before and after in
visible text, titles, descriptions, canonical URLs, structured data and links. After it: the
Actions deploy finished green, all 14 live pages are served from the new build with nothing
visible changed, and live pages hydrate with no console errors. `document-library` sits on
top of the new `main` and passes its tests, build and browser checks.

**Dependencies:** None. Pushing to `main` needs the owner's explicit sign-off.

**Files likely touched:**
- `package.json`
- `package-lock.json`

**Estimated scope:** Small; the push is high risk

### Task 1: The PDF viewer works on the browsers the rest of the site supports

**Description:** Switch the viewer from PDF.js's modern build to its legacy build (core
library, viewer, stylesheet and worker), then run the browser checks in Chromium, Firefox
and WebKit (the engine behind Safari; the owner approved downloading a test copy). Today a
visitor on an older browser gets the "could not be shown here" message and a link to the PDF
in place of the viewer; search and the document list are unaffected.

**Status:** done on 2026-11-23, except the Safari check, which is now Task 1b. The viewer,
its stylesheet and its worker load from `pdfjs-dist/legacy/`. Checked three ways: a
simulated older browser (Chromium with the newer functions removed, on the page and inside
the worker) could not start the viewer before the switch and opens and finds text after it;
the served worker is the legacy file byte for byte; and all 31 browser checks pass in
Chromium 148 and Firefox 150. WebKit downloaded but cannot start on this machine: it needs
system libraries (GTK 4, GStreamer and others) that only `sudo` can install.

**Acceptance criteria:**
- [x] The viewer and its worker load from `pdfjs-dist/legacy/`, still only on document pages
      and still with nothing from a CDN.
- [x] All browser checks pass in Chromium and Firefox, including highlight alignment
      (canvas and text layer have identical geometry). WebKit moved to Task 1b.
- [x] When the viewer cannot start, the page shows the fallback message with a working link
      to the original PDF (tested by blocking the worker file).

**Verification:**
- [ ] Tests pass: `npm test`
- [ ] Build succeeds: `npm run build`
- [ ] Browser checks against `out/` in Chromium, Firefox and WebKit
- [ ] Manual check: open a document page from a search result; the match is highlighted on
      the right word

**Dependencies:** None (the owner agreed). Best done after Task 10, so builds run first time.

**Files likely touched:**
- `components/PdfViewer.tsx`
- `scripts/build-doc-index.mjs`
- `app/globals.css` (only if the legacy stylesheet needs the box-sizing rule adjusted)
- `README.md`

**Estimated scope:** Small

### Task 1b: Check the viewer in Safari

**Description:** Safari is the one major browser the viewer has not been run in. The WebKit
test browser is downloaded, but it needs system libraries that only `sudo` can install on
this machine. Either the owner installs them once, after which the browser checks can run in
WebKit here, or the owner opens a document page from a search result on an iPhone, iPad or
Mac. PDF.js lists Safari 18+ as "mostly" supported.

**Acceptance criteria:**
- [ ] On Safari or WebKit, a document page opened from a search result shows the PDF at the
      right page with the match highlighted on the right word.
- [ ] Find, next and previous match, page and zoom controls work.
- [ ] Any Safari-only defect is fixed or recorded in SPEC.md.

**Verification:**
- [ ] The owner's manual check on an Apple device right after release, as part of Task 8
      (decided 2026-11-23). The alternative, not chosen, was
      `sudo ~/job_apps/.venv/bin/playwright install-deps webkit` and the browser checks in
      WebKit here.

**Dependencies:** Task 7 (it needs the live site)

**Files likely touched:** none unless a defect is found

**Estimated scope:** XS

### Task 2: The owner reviews the 57 titles

**Description:** Every title in `lib/resources.ts` was drafted from the document's own text
and needs the owner's approval before release. Give the owner a one-page list (number, date,
title) to mark up, then apply the changes. Items already flagged for attention:
`gsr-78e-20170131` (title), `gsr-76e-20180209` (number has no "(E)"; date differs from the
filename), `so-877e-20211223-draft` (printed as S.O. but elsewhere G.S.R.),
`guidance-circular-no-40-2026` (a Customs circular filed under CDSCO), four drafts whose
printed rule year differs from their date, and two titles over 90 characters.

**Acceptance criteria:**
- [ ] The owner has approved or replaced every title, and each flagged item has a decision.
- [ ] `lib/resources.ts` contains exactly the approved titles, numbers, dates and categories.
- [ ] Every document page still has a unique title.

**Verification:**
- [ ] Tests pass: `npm test` (catalog totals, unique page titles)
- [ ] Build succeeds: `npm run build` (its catalog check runs first)
- [ ] Manual check: `/resources` shows the approved titles, newest first

**Dependencies:** None (owner input)

**Files likely touched:**
- `lib/resources.ts`
- `lib/resources.test.ts` (only if a category or type changes the totals)

**Estimated scope:** Small

### Task 3: The owner reviews the new wording

**Description:** The library added text the owner has not approved: filter labels, the
empty-filter message, search status lines, the "partial matches" heading, the "Show more"
button, the two buttons and viewer labels on document pages, three viewer messages, and the
templates for each document page's browser-tab title and search-engine description. Apply
the owner's wording.

**Acceptance criteria:**
- [ ] The owner has approved or replaced each new string and both templates.
- [ ] The site shows exactly the approved wording; no draft string remains.
- [ ] Tests that assert wording match the approved text.

**Verification:**
- [ ] Tests pass: `npm test`
- [ ] Build succeeds: `npm run build`
- [ ] Browser checks pass (several assert visible text)

**Dependencies:** None (owner input)

**Files likely touched:**
- `components/ResourceLibrary.tsx`
- `components/PdfViewer.tsx`
- `lib/resources.ts` (type labels, title and description templates)
- `app/resources/[id]/page.tsx`
- `lib/resources.test.ts`

**Estimated scope:** Medium

### Task 4: Decide two existing texts that now read slightly off

**Description:** Two pieces of the owner's original text were left unchanged but no longer
describe the page: the search placeholder "Search resources by title or keyword…" (search
now covers full text) and the column heading "Title / Description" (there are no
descriptions). The owner decides whether each stays or changes, and supplies the wording.

**Acceptance criteria:**
- [ ] The owner has chosen keep or change for each, with wording for any change.
- [ ] The page shows the chosen text, and the search box's accessible label still describes it.

**Verification:**
- [ ] Build succeeds: `npm run build`
- [ ] Manual check: `/resources` at desktop width and at 375 px

**Dependencies:** None (owner input)

**Files likely touched:**
- `components/ResourceLibrary.tsx`

**Estimated scope:** XS

### Task 5: Measure accessibility

**Description:** SPEC.md asks for a Lighthouse accessibility score of at least 95 on
`/resources` and on one document page. It has not been measured yet. The owner approved a
one-off Lighthouse download for this; run it without adding it to `package.json`. Measure,
then fix or record each failing audit.

**Acceptance criteria:**
- [x] Both pages score at least 95, or every failing audit is fixed or recorded in SPEC.md
      with the reason. (95 on both, and on the search results and a document opened at a
      match; measured 2026-11-23, before Tasks 2 to 4, so rerun at Checkpoint A if those
      change anything visible.)
- [x] Fixes do not change approved wording. (One colour changed; no text.)

**Verification:**
- [ ] Lighthouse accessibility run on `/resources` and on `/resources/gsr-78e-20170131`
- [ ] Tests pass and build succeeds after any fix
- [ ] Browser checks pass after any fix

**Dependencies:** Tasks 1 to 4 (it should measure the final pages)

**Files likely touched:**
- `app/globals.css`
- `components/ResourceLibrary.tsx`, `components/PdfViewer.tsx` (only if an audit needs it)

**Estimated scope:** Small

### Task 6: Bring DEPLOY.md's "Known gaps" up to date

**Description:** DEPLOY.md's "Known gaps at launch" lists three things that are no longer
true: the 12 download buttons that link to `#` (this release replaces them), and the two
Actions secrets not being set (the owner confirmed on 2026-11-22 that both are). Remove all
three, and check the secrets with `gh secret list` while doing it.

**Acceptance criteria:**
- [x] The placeholder-downloads item and the two secrets items are gone from DEPLOY.md.
- [x] `gh secret list` shows both secrets, matching what the document now says.

**Verification:**
- [ ] Manual check: read the "Known gaps at launch" section
- [ ] `gh secret list` names `WEB3FORMS_ACCESS_KEY` and `CF_BEACON_TOKEN`

**Dependencies:** None

**Files likely touched:**
- `DEPLOY.md`

**Estimated scope:** XS

### Checkpoint A: Ready to release

- [x] Task 10 is released
- [ ] Tasks 1 to 6 are done and committed on `document-library`; the working tree is clean
      (Tasks 2, 3 and 4 are waiting for the owner's review)
- [ ] `npm test` passes and `npm run build` succeeds
- [ ] Browser checks pass in Chromium and Firefox (Safari: the owner checks after release)
- [ ] The owner has approved the titles and all wording
- [ ] Lighthouse accessibility rerun if Tasks 2 to 4 changed anything visible (still 95+)
- [ ] The owner gives explicit sign-off to deploy

### Task 7: Release: merge to `main` and push

**Description:** Fast-forward `main` to `document-library` and push. The push starts the
GitHub Actions deploy, which builds the site and publishes it to emergingsigma.com. This is
the one step that is public and cannot be fully undone: the 59 MB of PDFs stay in the
repository's history even if the change is reverted. It needs the owner's explicit sign-off.

**Acceptance criteria:**
- [ ] `main` on GitHub points at the released commits.
- [ ] The Actions run finishes green, including its "Check the build output" step.
- [ ] If the run fails, the live site is unchanged and the cause is recorded.

**Verification:**
- [ ] `gh run watch` (or the Actions tab) shows the deploy succeeded
- [ ] Manual check: `https://emergingsigma.com/resources` shows the document list

**Rollback:** `git revert` the release commits on `main` and push; the workflow redeploys the
previous site. The earlier successful run can also be re-run from the Actions tab.

**Dependencies:** Checkpoint A

**Files likely touched:** none (git only)

**Estimated scope:** XS, high risk

### Task 8: Verify the live site

**Description:** Confirm on emergingsigma.com what was verified locally, plus the things
only real hosting can show.

**Acceptance criteria:**
- [ ] `/resources` lists 57 documents; searching `Form MD-14` returns results; a result opens
      the document at the right page with the match highlighted.
- [ ] `/resources` still loads now that a `resources/` folder sits beside `resources.html`,
      a downloaded PDF matches its checksum in `documents.zip`, and the search index
      transfers at 400 KB or less.
- [ ] Page 200 of the 250-page rules appears within 3 s on a broadband connection, and the
      owner has opened a document page on a phone, including Safari on iPhone if available.

**Verification:**
- [ ] Scripted read-only checks against the live URLs (status codes, counts, checksum, sizes)
- [ ] Manual check by the owner on a phone
- [ ] `https://emergingsigma.com/sitemap.xml` lists the 57 document pages

**Dependencies:** Task 7

**Files likely touched:** none

**Estimated scope:** Small

### Checkpoint B: Live and verified

- [ ] Task 8 passes, or each failure is fixed or rolled back
- [ ] The owner has seen the live library

### Task 9: After release

**Description:** Close the loop: mark SPEC.md as released, delete the merged branch, and
(owner) resubmit the sitemap in Google Search Console so the 57 new pages are picked up.

**Acceptance criteria:**
- [ ] SPEC.md's status line says released, with the date.
- [ ] `document-library` is deleted locally; no stale branch remains.
- [ ] The owner has resubmitted the sitemap, or chosen not to.

**Verification:**
- [ ] `git branch` shows no `document-library`
- [ ] Manual check: SPEC.md status line

**Dependencies:** Checkpoint B

**Files likely touched:**
- `SPEC.md`

**Estimated scope:** XS

## Not in this plan

Deferred by SPEC.md and unchanged: spelling tolerance and intent-aware search (the V2 goal),
Hindi full-text search, one-line summaries, linking drafts to the final notifications that
replaced them, and an end-to-end test framework.

## Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| The viewer fails on older browsers | High for those visitors: no in-page viewer | Task 1; the fallback link to the PDF already works |
| Safari is untested until after release | Medium | WebKit cannot start here without system libraries that need `sudo`. The owner checks on an Apple device right after release (Task 1b); a Safari-only defect would be fixed then, and Safari visitors always have the link to the PDF |
| Visitors on browsers older than about mid-2024 get no in-page viewer | Medium, accepted by the owner | A limit of PDF.js itself, even in its legacy build. They get a message and the link to the PDF; search and the list still work |
| Unreviewed titles or wording go live | High: the owner's site text | Work stays on a branch; Checkpoint A requires approval before Task 7 |
| `/resources` breaks on GitHub Pages because a `resources/` folder now exists | High | The site already has `about/` beside `about.html` and works; Task 8 checks it first; rollback is one revert |
| The first CI run of the new build script fails (Node version, new optional dependency) | Medium: the deploy fails, the live site stays as it was | Same Node major locally and in CI; a failed run leaves the site untouched |
| Next.js's notice stops a build | Low | It only triggers when an AI agent runs the command; retry works; Task 10, done first, removes it |
| The Next.js upgrade changes behaviour on existing pages | Medium | It is a patch release, verified on its own branch and deployed on its own, so a problem is easy to attribute and revert |
| The browser checks are not in the repo | Medium: they are a scratch script and can be lost | Accepted by the owner: no framework is added. Re-create the script if it is lost |
| The repository grows by 59 MB for good | Low | Known and accepted in the spec; under GitHub's limits |

## Decisions made by the owner (2026-11-22)

- **Safari testing:** a WebKit test browser may be downloaded here.
- **Accessibility:** a one-off Lighthouse download is approved.
- **Next.js upgrade:** before the library release.
- **Browser checks:** not kept in the repo; no end-to-end framework is added.
- **DEPLOY.md secrets:** both secrets are set, so those notes can go.
- **Viewer build:** switch to PDF.js's legacy build.
- **This plan:** approved for an autonomous build. Pushes to `main` still need explicit
  sign-off each time.
- **Next.js upgrade (2026-11-23):** signed off and pushed.
- **Safari (2026-11-23):** the owner checks on an Apple device after the release.
- **Viewer on older browsers (2026-11-23):** accepted. The viewer needs Chrome or Edge 125+,
  Safari 18+ or a current Firefox; older browsers get the link to the PDF.
- **Titles (2026-11-23):** none of the drafts. Documents are listed under their file names,
  with no notes and no summaries. This closes Task 2.
- **Release (2026-11-23):** publish right away. The new wording goes out as drafted (Task 3)
  and the two existing texts stay as they are (Task 4); both can be revisited later.

## Open questions

None. The drafted titles and the wording list stay in `tasks/review.md` for a later look.
