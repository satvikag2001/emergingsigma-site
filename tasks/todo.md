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

- [x] **Task 10: Upgrade Next.js 16.4.0 to 16.4.6 for the security advisory, released on its own**
  - Done and live on 2026-11-23 (`8e4ac56` on `main`, pushed with the owner's sign-off).
    `npm audit` reports no vulnerabilities and the build succeeds on the first attempt.
  - Verified: the Actions deploy finished green; all 14 live pages are served from the new
    build and are identical to before in visible text, titles, descriptions, canonical URLs
    and links; live pages hydrate with no console errors.
  - `document-library` sits on top of the new `main`. Rollback, if ever needed:
    `git revert 8e4ac56` on `main` and push.

## Phase 1: Finish before release

- [x] **Task 1: The PDF viewer works on older browsers (PDF.js legacy build)**
  - Done 2026-11-23. Viewer, stylesheet and worker load from `pdfjs-dist/legacy/`. A
    simulated older browser failed before the switch and works after it; all 31 browser
    checks pass in Chromium 148 and Firefox 150; the fallback link shows when the viewer
    cannot start.
  - Limit found: PDF.js supports its legacy build on Chrome and Edge 125+, Safari 18+ and
    Firefox ESR (about mid-2024), which is newer than the rest of the site needs. Older
    browsers get the message and the link to the PDF.

- [ ] **Task 1b (owner, after release): Check the viewer in Safari**
  - The library is live, so this can be done now. Decided 2026-11-23: the owner checks on an
    Apple device. (WebKit cannot start here without system libraries that need `sudo`.)
  - Open a document page from a search result on an iPhone, iPad or Mac.
  - Done when: the PDF opens at the right page with the match highlighted, and find, page
    and zoom controls work; any Safari-only defect is fixed or recorded.
  - Depends on: Task 7 (it needs the live site). Scope: XS.

- [x] **Task 2: Titles**
  - Decided by the owner on 2026-11-23: no drafted titles. Every document is listed under
    its file name (`gsr-78e-20170131.pdf`); a test checks this. The 57 drafts stay in
    [review.md](review.md), section 1, unused, in case they are wanted later.

- [x] **Task 3: New wording**
  - Released as drafted on the owner's instruction of 2026-11-23 to publish right away.
    The 27 items are listed in [review.md](review.md), section 2; any of them can be changed
    later.

- [x] **Task 4: Two existing texts that now read slightly off**
  - Left as the owner wrote them (the search placeholder and the "Title / Description"
    column heading). Listed in [review.md](review.md), section 3, if the owner wants to
    change them later.

- [x] **Task 6: Bring DEPLOY.md's "Known gaps" up to date**
  - Done 2026-11-23. Removed the "12 download buttons link to #" item and the two "secret is
    not set" items; `gh secret list` shows `WEB3FORMS_ACCESS_KEY` and `CF_BEACON_TOKEN`.

- [x] **Task 5: Measure accessibility**
  - Done 2026-11-23, ahead of Tasks 2 to 4, with Lighthouse 13.6.0 run through `npx` (not
    added to `package.json`): 95 on `/resources`, a document page, the search results and a
    document opened at a match. One library defect found and fixed: the count on the selected
    filter had a contrast of 4.1; the green is now darker (5.4).
  - Recorded in SPEC.md, not changed: three site-wide items that predate the library
    (breadcrumb text contrast, footer small print contrast, footer heading levels).
  - If Tasks 2 to 4 change anything visible, run it once more (see Checkpoint A).

### Checkpoint A: Ready to release

- [x] Task 10 released
- [x] Tasks 1 to 6 done and committed; working tree clean
- [x] `npm test` passes (47 tests); `npm run build` succeeds, also from a fresh clone
- [x] Browser checks pass in Chromium and Firefox (Safari: the owner checks after release)
- [x] Titles and wording settled by the owner's decisions of 2026-11-23
- [x] Lighthouse accessibility rerun after the titles changed: still 95 on both pages
- [x] The owner's sign-off to deploy ("publish ... right now", 2026-11-23)

## Phase 2: Release

- [x] **Task 7: Merge to `main` and push (this deploys the site)**
  - Done 2026-11-23: `main` fast-forwarded to `13a351d` and pushed. The Actions run finished
    green, including its build-output check.
  - Rollback, if ever needed: `git revert` the release commits on `main` and push. The PDFs
    stay in the repository's history either way.

- [x] **Task 8: Verify the live site**
  - Done 2026-11-23, in Chromium and Firefox with analytics blocked:
    - `/resources` loads with no redirect beside the new `resources/` folder and lists 57
      documents under their file names; an unknown document id returns the 404 page.
    - Searching `Form MD-14` gives "20 matches on 4 pages in 3 documents"; a result opens the
      document at page 152 with the match highlighted on the right word; Back restores the
      search.
    - All 57 live PDFs are byte-identical to `documents.zip`; PDFs support partial loading.
    - The search text transfers at 252 KB compressed and is fetched only when someone
      searches. The library makes no new third-party requests.
    - Page 200 of the 250-page rules appears in 1.2 s from an empty cache.
    - The sitemap lists the 57 document pages; the 13 other pages are unchanged.
  - Left for the owner: a look on a phone, and Safari (Task 1b).

### Checkpoint B: Live and verified

- [x] Task 8 passes
- [ ] The owner has seen the live library

## Phase 3: After release

- [ ] **Task 9: After release**
  - [x] SPEC.md marked as released.
  - [x] Merged branches deleted (`document-library`, `next-security-upgrade`).
  - [ ] The owner resubmits the sitemap in Google Search Console, so the 57 new pages are
        picked up sooner (optional).
  - [ ] This bookkeeping commit is on local `main`, not pushed. It changes nothing on the
        site; it goes out with the next push.

- [x] **Task 11: Filters closed on phones until used** (owner's request, 2026-11-23)
  - The owner's report: on Android the filters took up most of the screen and did not
    move. Reproduced at 360x740: the box was 512px tall and stayed pinned while scrolling.
  - [x] One column (900px or less): each group is closed behind its heading, which shows
        the current choice; tapping opens it, choosing an option closes it; the box is no
        longer pinned. Closed, it is 94px tall.
  - [x] Wider screens unchanged, except that the pinned sidebar now scrolls when the window
        is too short to show all 12 options (the last ones could not be reached before).
  - [x] No new wording: headings and choices are the existing labels.
  - [x] Verified: 47 unit tests; build; 29 new browser checks and the 31 library checks in
        Chromium and Firefox; Lighthouse accessibility still 95 on `/resources`.
  - [ ] Pushed to `main` (needs the owner's go-ahead), then checked on the live site.
