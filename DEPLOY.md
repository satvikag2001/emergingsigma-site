# Deploying emergingsigma.com

The site is static, so publishing is: push to GitHub, turn on Pages, point the
domain at it. Roughly 20 minutes of work plus DNS propagation.

Do step 1 before going live. Steps 2 to 4 are the deploy itself.

---

## 1. Connect the contact forms (do this first)

Both forms currently carry the placeholder `__WEB3FORMS_ACCESS_KEY__` and will
not deliver anything until it is replaced.

1. Go to <https://web3forms.com>, enter `manish@emergingsigma.com`, and submit.
   The access key arrives by email. No account or password is involved.
2. Replace the placeholder everywhere:

   ```bash
   cd ~/Downloads/emergingsigma-site_12
   sed -i '' 's/__WEB3FORMS_ACCESS_KEY__/PASTE-YOUR-KEY-HERE/g' *.html
   grep -c __WEB3FORMS_ACCESS_KEY__ *.html   # every file should print 0
   git commit -am "Connect forms to Web3Forms"
   ```

The key is not a password. It only identifies which inbox submissions go to, and
is meant to sit in public HTML.

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

- **Source:** Deploy from a branch
- **Branch:** `main`, folder `/ (root)`
- Save.

The `CNAME` file in this repo already contains `emergingsigma.com`, so Pages
picks the custom domain up automatically.

Wait for the first build (a minute or two). The site will be live at
`https://YOUR-USERNAME.github.io/emergingsigma-site/` before DNS is done.

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

## Publishing changes later

```bash
git add -A
git commit -m "what changed"
git push
```

Pages rebuilds within about a minute.

**If you edit `style.css` or `main.js`, bump the version number**, otherwise
returning visitors keep the cached copies:

```bash
# every page references style.css?v=N and main.js?v=N - raise N by one
sed -i '' 's/style\.css?v=[0-9]*/style.css?v=3/g; s/main\.js?v=[0-9]*/main.js?v=3/g' *.html
```

---

## After going live

- Submit the sitemap at <https://search.google.com/search-console>: add
  `emergingsigma.com`, verify by DNS TXT record, then submit
  `https://emergingsigma.com/sitemap.xml`.
- Check the social preview by pasting the URL into
  <https://www.linkedin.com/post-inspector/>.
- Test the contact form end to end and confirm the email arrives.

## Known gaps at launch

- `assets/img/hero-product-quality.jpg` is a stand-in copied from
  `equipment-split.jpg`. See `assets/img/CREDITS.md`.
- The 12 download buttons on `resources.html` link to `#`. Left as-is by
  decision; wire them to files in `docs/` when the PDFs exist.
- `check.html` is a local diagnostic. Delete it before going live.
