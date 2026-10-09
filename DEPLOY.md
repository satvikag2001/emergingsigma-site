# Deploying emergingsigma.com

The site builds to static files, so publishing is: push to GitHub, turn on
Pages, point the domain at it. Roughly 20 minutes of work plus DNS propagation.

A GitHub Actions workflow builds and publishes it, so real keys live in
repository secrets instead of in the code. Do step 1 before going live; steps 2 to 4 are the
deploy itself, and step 5 adds analytics.

---

## 1. Connect the contact forms (do this first)

Both forms deliver nothing until a real key is supplied. The key is never
committed: the deploy workflow passes it into the build from a repository secret.

1. Get an access key for `support@emergingsigma.com`, either way:
   - Sign in at <https://app.web3forms.com/forms>, create a form with
     `support@emergingsigma.com` as the recipient, and copy its access key; or
   - Enter `support@emergingsigma.com` on <https://web3forms.com> and submit.
     The key arrives by email; no account needed.
2. In the repo on github.com: **Settings > Secrets and variables > Actions >
   New repository secret**
   - Name: `WEB3FORMS_ACCESS_KEY`
   - Value: the access key
3. Push any commit, or run the workflow by hand from the **Actions** tab.

Until that secret exists the site still deploys; the build warns and ships the
forms switched off rather than failing.

The key only identifies which inbox submissions go to. It is not a password, and
it is still visible in page source once injected - unavoidable on a static site.
Restrict it to `emergingsigma.com` in the Web3Forms dashboard so it cannot be
reused from another domain.

**Test after deploying:** submit the contact form and confirm the email arrives.
Check spam on the first one.

---

## 2. Push to GitHub

No GitHub authentication exists on this machine yet. Install the CLI and sign in
once:

```bash
brew install gh
gh auth login          # choose GitHub.com > HTTPS > log in with a browser
```

Then create the repo and push:

```bash
cd ~/Downloads/emergingsigma-site_12
gh repo create emergingsigma-site --public --source=. --remote=origin --push
```

Use `--private` instead of `--public` if you prefer. Private repos can still
serve GitHub Pages on current plans, but public is simpler and the site content
is public anyway.

Prefer not to install anything? Create an empty repo at
<https://github.com/new> (no README, no .gitignore) and then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/emergingsigma-site.git
git push -u origin main
```

`git push` also pushes the `original` branch only if you ask it to. To keep the
pre-changes snapshot on GitHub as well:

```bash
git push origin original
```

---

## 3. Turn on GitHub Pages

In the repo on github.com: **Settings > Pages**

- **Source:** GitHub Actions

That is the entire setting; there is no branch or folder to choose. Publishing is
handled by [.github/workflows/deploy.yml](.github/workflows/deploy.yml), and it
has to be the source for secret injection to happen at all.

`CNAME` is copied into every build, so the custom domain survives. The build fails
loudly if `CNAME` ever goes missing rather than quietly unbinding the domain.

Wait for the first run to go green under the **Actions** tab (a minute or two).
The site will be live at `https://YOUR-USERNAME.github.io/emergingsigma-site/`
before DNS is done.

**If a deploy goes wrong,** revert the commit and push, or open the last good run
under the **Actions** tab and choose **Re-run all jobs**. Do not switch Source to
**Deploy from a branch**: the branch holds the Next.js source, not a built site,
so there would be nothing to serve.

---

## 4. Point the domain at GitHub (Hostinger)

In **hPanel > Domains > emergingsigma.com > DNS / Nameservers**.

Delete any existing `A` or `CNAME` records for `@` and `www` first, then add:

| Type | Name | Points to | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |
| CNAME | `www` | `YOUR-USERNAME.github.io.` | 3600 |

All four A records are required; they are GitHub's load balancers, not
alternatives. The CNAME value is your GitHub username, **not** the repo name,
and keeps the trailing dot.

Optionally add IPv6 as well:

| Type | Name | Points to |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**Leave Hostinger's nameservers alone** unless you intend to move DNS elsewhere.
Only the records change.

### Then

DNS usually propagates in 15 to 60 minutes, occasionally up to 24 hours. Check:

```bash
dig +short emergingsigma.com          # expect the four 185.199.x.153 addresses
dig +short www.emergingsigma.com      # expect YOUR-USERNAME.github.io
```

Once it resolves, return to **Settings > Pages** and tick **Enforce HTTPS**.
The certificate is issued by GitHub automatically and free, but the option only
becomes available after DNS points correctly. If it is greyed out, wait and
revisit.

---

## 5. Turn on traffic analytics

The site is wired for **Cloudflare Web Analytics**: free, unlimited, and
cookieless. Because it stores nothing on the visitor's device, no cookie consent
banner is required and the privacy policy stays honest without a rewrite.

You do **not** need to move DNS to Cloudflare or put the site behind their proxy.
The beacon works on GitHub Pages as-is; a free Cloudflare account is all it takes.

### Getting the token

1. Sign up at <https://dash.cloudflare.com/sign-up>. Email and password, then
   confirm the verification mail. The free plan is enough and no card is asked for.
2. If it prompts you to add a domain, **skip it**. Web Analytics does not need
   your DNS, and there is no reason to move nameservers off Hostinger for this.
3. Go to **Analytics & Logs > Web Analytics** in the left sidebar, or open
   <https://dash.cloudflare.com/?to=/:account/web-analytics> directly.
4. Click **Add a site** and enter `emergingsigma.com`. Choose the **JS snippet**
   option (sometimes labelled manual or beacon) rather than the automatic one,
   which only works for sites proxied through Cloudflare.
5. Cloudflare shows a snippet like this:

   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
     data-cf-beacon='{"token": "0f1e2d3c4b5a69788796a5b4c3d2e1f0"}'></script>
   ```

   You need **only the token**: the 32-character hex string inside the quotes.
   Ignore the rest of the snippet, `components/Analytics.tsx` already contains
   the loader.

### Storing it

In the repo on github.com: **Settings > Secrets and variables > Actions >
New repository secret**

- Name: `CF_BEACON_TOKEN`
- Value: the token you copied

Push any commit, or run the workflow by hand from the **Actions** tab. Analytics
starts on the next deploy and figures appear in the Cloudflare dashboard within a
few minutes. Nothing to maintain after that.

GitHub will not show you a saved secret again, only let you replace it. Keep your
own copy if you want one.

Note what this does and does not buy you. The token stays out of the repository,
which is the point. It is still readable in the delivered page by any visitor,
because the browser has to send it and no static site can avoid that. It grants no
access to your Cloudflare dashboard; the only abuse it permits is someone spoofing
hits into your own statistics.

**What you get:** page views and unique visitors, top pages, referring sites,
country, device type, browser, and Core Web Vitals performance scores.

**What you do not get:** named individuals or per-person journeys. That is the
trade for needing no consent banner, and for a firm that sells compliance it is
the right side of the trade.

### Also worth doing: Google Search Console

Free, and it answers the question analytics cannot: how people *find* you. Which
queries surface your pages, where you rank, what Google has indexed and what it
choked on. It runs entirely on Google's side, adds no code to the site and
collects nothing from visitors, so it needs no privacy-policy change. Steps are
under [After going live](#after-going-live).

---

## Publishing changes later

```bash
npm run build          # optional, but catches mistakes before they reach the site
git add -A
git commit -m "what changed"
git push
```

Watch the run under the **Actions** tab; the site updates a minute or two later.
If the build fails, the live site is untouched and the run log shows why.

There is nothing to bump for caching. Next.js fingerprints every CSS and JS
filename, so a changed file gets a new name and browsers fetch it fresh.

---

## After going live

- Submit the sitemap at <https://search.google.com/search-console>: add
  `emergingsigma.com`, verify by DNS TXT record, then submit
  `https://emergingsigma.com/sitemap.xml`.
- Check the social preview by pasting the URL into
  <https://www.linkedin.com/post-inspector/>.
- Test the contact form end to end and confirm the email arrives.

## Known gaps at launch

- `public/assets/img/hero-product-quality.jpg` is a stand-in copied from
  `equipment-split.jpg`. See `public/assets/img/CREDITS.md`.
- The 12 download buttons on the resources page link to `#`. Left as-is by
  decision; when the PDFs exist, put them in `public/docs/` and set each
  entry's `href` in `lib/resources.ts`.
- The `WEB3FORMS_ACCESS_KEY` secret is not set, so submissions go nowhere. See
  step 1. **This is live on the deployed site right now** - every enquiry is
  being turned away with "This form is not connected yet." Fix this first.
- The `CF_BEACON_TOKEN` secret is not set, so no traffic is being measured yet.
  See step 5.
