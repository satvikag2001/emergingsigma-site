# emergingsigma.com

Marketing website for **Emerging Sigma Consulting**: quality, regulatory and lean
digital consulting for medical device companies.

Static HTML/CSS/JS. No build step, no dependencies.

## Structure

```
index.html                 Home
about.html                 About Us
services.html              Services overview
regulatory.html            ┐
quality-management-system.html
product-quality.html       │
supplier-quality.html      │ Individual service pages
warehouse-logistics-quality.html
equipment-qualification.html
digitalization.html        │
training.html              ┘
resources.html             Regulatory resources & downloads
contact.html               Contact + consultation form
privacy-policy.html        Privacy policy
thank-you.html             Post-submission page (no-JS fallback target)
404.html                   GitHub Pages custom 404

style.css                  All styles
main.js                    Nav, scroll animations, form handling, analytics
assets/                    Logo, favicons, OG image, photos
docs/                      PDF downloads linked from resources.html
sitemap.xml, robots.txt, site.webmanifest, CNAME
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Forms

Both the contact form and the floating "Quick Enquiry" panel post to
[Web3Forms](https://web3forms.com), which emails submissions to
`support@emergingsigma.com`.

The access key is never stored in this repo. Each form carries a hidden
`access_key` input holding the `__WEB3FORMS_ACCESS_KEY__` placeholder, and the
deploy workflow substitutes the real key from the `WEB3FORMS_ACCESS_KEY` Actions
secret.

To rotate it: request a new key, update that secret under **Settings > Secrets and
variables > Actions**, and re-run the workflow. No code change and no commit.

`main.js` submits via `fetch` and shows an inline status message. If JavaScript is
disabled, the form falls back to a normal POST and Web3Forms redirects the visitor
to `thank-you.html`.

## Analytics

Traffic is measured with [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/):
free, unlimited, and cookieless. It stores nothing on the visitor's device, so the
site needs no cookie consent banner and `privacy-policy.html` can keep its
privacy-forward posture. Setup is in [DEPLOY.md](DEPLOY.md#5-turn-on-traffic-analytics).

The site token lives in **one** place, `ANALYTICS_TOKEN` near the bottom of
`main.js`. While it holds the `__CF_BEACON_TOKEN__` placeholder, no beacon loads
and no third-party request is made, so local and staging copies stay silent.

The real token is never committed. `ANALYTICS_TOKEN` holds the
`__CF_BEACON_TOKEN__` placeholder in git, and the deploy workflow swaps in the
live value from the `CF_BEACON_TOKEN` Actions secret.

That keeps the token out of the repo, **not** out of the delivered page: any
visitor can read it in page source, which no static site can avoid. It grants no
access to the Cloudflare dashboard, so the only exposure is someone spoofing hits
into your own statistics.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which assembles `_site/`, injects the secrets, versions the assets and publishes to
GitHub Pages. `CNAME` binds the site to `emergingsigma.com`; DNS is at Hostinger.

Two things the build does that the old branch-based deploy did not:

- **Keeps `README.md` and `DEPLOY.md` off the public site.** They were previously
  served at `emergingsigma.com/DEPLOY.md`, DNS notes and all.
- **Stamps `style.css` and `main.js` with the commit SHA**, so the manual `?v=N`
  bump is gone. Editing either file now busts the cache by itself.

Full steps, including the DNS records and both secrets, are in
[DEPLOY.md](DEPLOY.md).

## History

`main` starts from the site as originally supplied. To see everything that
changed since:

```bash
git diff original main          # 48 files
git switch original             # browse the original site
git switch main                 # back to current
```

## Editing notes

- The nav and footer are duplicated across every page, so update them everywhere.
- Hero and section backgrounds are served from `assets/img/`; the site has no
  third-party image dependency. Sources and licensing are in
  [`assets/img/CREDITS.md`](assets/img/CREDITS.md), which also flags
  `hero-product-quality.jpg` as a stand-in awaiting a proper image.
- To add a resource to `resources.html`, copy the commented `TEMPLATE` block near
  the bottom of the table and drop the PDF into `docs/`.
