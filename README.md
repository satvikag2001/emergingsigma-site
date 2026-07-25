# emergingsigma.com

Marketing website for **Emerging Sigma Consulting** — quality, regulatory and lean
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
process-management.html    │
digitalization.html        │
training.html              ┘
resources.html             Regulatory resources & downloads
contact.html               Contact + consultation form
privacy-policy.html        Privacy policy
thank-you.html             Post-submission page (no-JS fallback target)
404.html                   GitHub Pages custom 404

style.css                  All styles
main.js                    Nav, scroll animations, form handling
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
`manish@emergingsigma.com`.

The access key lives in a hidden `access_key` input on each form. To rotate it:

```bash
# replace OLD with the new key across the site
sed -i '' 's/OLD_KEY/NEW_KEY/g' *.html
```

`main.js` submits via `fetch` and shows an inline status message. If JavaScript is
disabled, the form falls back to a normal POST and Web3Forms redirects the visitor
to `thank-you.html`.

## Deployment

Hosted on GitHub Pages from the `main` branch. Pushing to `main` publishes.
`CNAME` binds the site to `emergingsigma.com`; DNS is managed at Hostinger.

## Editing notes

- The nav and footer are duplicated across every page — update them everywhere.
- Hero and section background images are hotlinked from Unsplash (see `style.css`).
- To add a resource to `resources.html`, copy the commented `TEMPLATE` block near
  the bottom of the table and drop the PDF into `docs/`.
