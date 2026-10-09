# emergingsigma.com

Marketing website for **Emerging Sigma Consulting**: quality, regulatory and lean
digital consulting for medical device companies.

Built with [Next.js](https://nextjs.org) 16 (App Router), React 19 and TypeScript,
and exported as a fully static site: `npm run build` writes plain HTML, CSS and JS to
`out/`, which GitHub Pages serves. No server runs anywhere.

## Structure

```
app/
  layout.tsx                 Shell for every page: <head>, header, Quick Enquiry, footer
  template.tsx               Re-runs scroll effects on each page change
  globals.css                All styles
  page.tsx                   Home
  about/page.tsx             About Us
  services/page.tsx          Services overview
  regulatory/                ┐
  quality-management-system/ │
  product-quality/           │
  supplier-quality/          │ Individual service pages
  warehouse-logistics-quality/
  equipment-qualification/   │
  digitalization/            │
  training/                  ┘
  resources/page.tsx         Regulatory resources & downloads
  contact/page.tsx           Contact + consultation form
  privacy-policy/page.tsx    Privacy policy
  thank-you/page.tsx         Post-submission page (no-JS fallback target)
  not-found.tsx              Custom 404 (exported as 404.html)

components/
  SiteHeader.tsx             Nav, mobile menu, services dropdown, active link
  SiteFooter.tsx             Footer
  QuickEnquiry.tsx           Slide-out enquiry panel on every page
  Web3Form.tsx               Form submission to Web3Forms, inline status
  Tabs.tsx                   Start-up/Small/Large and training-level tabs
  ResourceLibrary.tsx        Filter and search on the resources page
  StatNumber.tsx             Count-up headline figures
  PageEffects.tsx            Scroll reveal and hero parallax
  Analytics.tsx              Cloudflare Web Analytics beacon
  JsonLd.tsx                 Structured data for search engines

lib/
  metadata.ts                Title, description, canonical, social tags per page
  organization.ts            Structured data (address, hours, contact) for search
  resources.ts               The resources list (edit this to add a download)
  paths.ts                   URL normalising for nav highlighting

public/                      Served as-is: assets/, docs/, sitemap.xml, robots.txt,
                             site.webmanifest, CNAME
```

## Working on it locally

Needs Node.js 20.9 or newer.

```bash
npm install
npm run dev            # http://localhost:3000, reloads as you edit
```

To check the real static output before pushing:

```bash
npm run build          # writes out/
npm start              # serves out/ at http://localhost:3000
```

`npm run format` tidies the TypeScript with Prettier. The stylesheet is left as
authored.

## Forms

Both the contact form and the floating "Quick Enquiry" panel post to
[Web3Forms](https://web3forms.com), which emails submissions to the inbox the access
key belongs to (`support@emergingsigma.com`).

The access key is never stored in this repo. `components/Web3Form.tsx` reads it from
the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable at build time, and the
deploy workflow sets that from the `WEB3FORMS_ACCESS_KEY` Actions secret. Without
it, the forms show "This form is not connected yet" rather than failing silently.

To test real submissions locally, put the key in `.env.local` (git ignores it):

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
```

To rotate it: request a new key, update that secret under **Settings > Secrets and
variables > Actions**, and re-run the workflow. No code change and no commit.

Forms submit via `fetch` and show an inline status message. If JavaScript is
disabled, the form falls back to a normal POST and Web3Forms redirects the visitor
to `/thank-you`.

## Analytics

Traffic is measured with [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/):
free, unlimited, and cookieless. It stores nothing on the visitor's device, so the
site needs no cookie consent banner and the privacy policy can keep its
privacy-forward posture. Setup is in [DEPLOY.md](DEPLOY.md#5-turn-on-traffic-analytics).

`components/Analytics.tsx` reads the site token from `NEXT_PUBLIC_CF_BEACON_TOKEN`
at build time; the deploy workflow sets it from the `CF_BEACON_TOKEN` Actions
secret. Without it no beacon loads and no third-party request is made, so local
builds stay silent.

That keeps the token out of the repo, **not** out of the delivered page: any
visitor can read it in page source, which no static site can avoid. It grants no
access to the Cloudflare dashboard, so the only exposure is someone spoofing hits
into your own statistics.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which installs dependencies, builds with the secrets, and publishes `out/` to GitHub
Pages. `CNAME` binds the site to `emergingsigma.com`; DNS is at Hostinger.

Only `out/` is published, so `README.md`, `DEPLOY.md` and the source never reach the
public site. Next.js fingerprints CSS and JS filenames, so returning visitors always
get the current version with nothing to bump by hand.

Full steps, including the DNS records and both secrets, are in
[DEPLOY.md](DEPLOY.md).

## URLs

Pages live at clean URLs (`/about`, `/contact`). The build still writes them as
`about.html` and so on, so every old `.html` link and bookmark keeps working on
GitHub Pages. Canonical tags and the sitemap use the clean form.

## History

`main` starts from the site as originally supplied. To see everything that
changed since:

```bash
git diff original main          # 48 files
git switch original             # browse the original site
git switch main                 # back to current
```

## Editing notes

- **Page content** is in `app/<page>/page.tsx` as JSX. It is HTML with a few
  differences: `className` instead of `class`, `htmlFor` instead of `for`, inline
  styles as objects (`style={{ marginTop: "14px" }}`), and links between pages use
  `<Link href="/about">` so moving around the site does not reload it.
- **Nav and footer** are written once, in `components/SiteHeader.tsx` and
  `components/SiteFooter.tsx`.
- **Page titles and descriptions** are the `metadata` export at the top of each
  page. Add new pages to `public/sitemap.xml` too.
- **Scroll animations** need no tagging: `components/PageEffects.tsx` picks the
  blocks of every section at runtime.
- **Resources**: add an entry to `lib/resources.ts` and drop the PDF into
  `public/docs/`. Filter counts and search update themselves.
- Hero and section backgrounds are served from `public/assets/img/`; the site has
  no third-party image dependency. Sources and licensing are in
  [`public/assets/img/CREDITS.md`](public/assets/img/CREDITS.md), which also flags
  `hero-product-quality.jpg` as a stand-in awaiting a proper image.
