# seokju-cho.github.io

Academic homepage for Seokju Cho. Pure static HTML/CSS — no build step, no framework.

## Structure

```
index.html               # single-page site: sticky left sidebar (photo/name/links) + content column
styles.css               # all styling; sidebar stacks on top below 900px, extra tweak at 360px
Seokju_Cho_CV.pdf        # served at /Seokju_Cho_CV.pdf (keeps the existing CV URL working)
assets/
  photo.jpg              # ← add your profile photo here (square, ≥320×320 recommended)
  photo-placeholder.svg  # shown automatically until photo.jpg exists
  favicon.svg
```

## Deploy to GitHub Pages

1. Commit and push updates to the `master` branch:

   ```bash
   git add -A
   git commit -m "Update homepage"
   git push origin master
   ```

2. In the repo: Settings → Pages → Source: `Deploy from a branch`, branch `master`, folder `/ (root)`.
3. The site is live at <https://seokju-cho.github.io> within a minute or two.

## Updating content

- **Photo** — drop `assets/photo.jpg` (a square crop looks best; the CSS also handles non-square via `object-fit: cover`).
- **New paper** — copy any `<article class="pub">` block in `index.html` under the right year heading. Use `<span class="me">Seokju Cho</span>` for your name, `*` for equal contribution, and `<span class="award">Highlight</span>` for award tags.
- **News** — add an `<li><span class="date">Mon YYYY</span><span>…</span></li>` line at the top of the News list.
- **CV** — overwrite `Seokju_Cho_CV.pdf`; the URL stays stable.
- **Analytics** — the existing GA4 property is configured directly in the `<head>` of `index.html`.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
