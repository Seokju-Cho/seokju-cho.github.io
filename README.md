# seokju-cho.github.io

Academic homepage for Seokju Cho. Pure static HTML/CSS — no build step, no framework.

## Structure

```
index.html               # single-page site: sticky left sidebar (photo/name/links) + content column
styles.css               # all styling; sidebar stacks on top below 900px, extra tweak at 360px
travel.js                # destinations, journal content, and interactive map
Seokju_Cho_CV.pdf        # served at /Seokju_Cho_CV.pdf (keeps the existing CV URL working)
assets/
  photo.jpg              # ← add your profile photo here (square, ≥320×320 recommended)
  photo-placeholder.svg  # shown automatically until photo.jpg exists
  favicon.svg
  travel-world.svg        # local Natural Earth world map (public domain)
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
- **Selected work** — papers with a `.selected-dot` in their title appear by default. The publications button toggles the full list and automatically hides empty year headings. Without JavaScript, all papers remain visible.
- **CV** — overwrite `Seokju_Cho_CV.pdf`; the URL stays stable.
- **Analytics** — the existing GA4 property is configured directly in the `<head>` of `index.html`.

## Travel journal

The Blog section contains a world map with regional views and 27 destinations.
The carousel initially shows photos from all destinations with no city selected.
Select a map pin or destination name to filter its photos; use **All photos** to
clear the selection. Arrow buttons, left/right keys, and horizontal swipes navigate
photos. Empty destinations show “Photos coming soon.” Photos advance every 20 seconds while the carousel is in view and the tab is active.
Playback pauses while keyboard focus is inside the carousel and resumes when
focus leaves. Reduced-motion preferences disable autoplay. Hover over the photo for translucent side arrows
(always visible on touch devices).
Links such as
`#travel-rome` also open the corresponding destination directly.

Edit the matching entry in `travelPlaces` in `travel.js` to add content:

```js
date: 'October 2026',             // optional; add the actual visit date
notes: ['Your first paragraph.', 'Another memory.'],
sights: ['A place you visited or something you saw.'],
photos: [{ src: 'assets/travel/photo.jpg', alt: 'Describe the photo', caption: 'Optional caption', comment: 'Your comment about this photo' }],
```

The first six photos from `images/` are connected: two in New York, one in
Nashville, one in the Bay Area, and two in Arizona. Browser-ready JPEG copies in `assets/travel/` are resized
to a maximum of 1600 pixels, auto-oriented, and stripped of metadata; originals
remain in `images/`. To add a destination, add its coordinates and content to `travelPlaces`
and a matching `data-place` link under the appropriate region in `index.html`;
update the region's displayed count. Hokkaido uses a regional pin; Israel uses a country-level pin. Vienna, Budapest, and Taipei use city coordinates.

Map geometry comes from [Natural Earth](https://www.naturalearthdata.com/),
1:110m countries, and is in the public domain. The SVG is stored locally, so the
map requires no API key, map service, or external JavaScript library.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Each photo supports a `comment` string, displayed below the carousel. The six
initial photos have empty comments ready to fill in; empty comments are hidden.

HDR copies for the kangaroo, redwoods, and bird photos retain an ISO gain map.
`hdrSrc` is selected on displays reporting `(dynamic-range: high)`; the normal
JPEG is used otherwise and if the HDR image fails to load. Actual HDR rendering
also depends on browser/OS support. Regenerate on macOS 15+ with
`swift scripts/export-hdr.swift`. The script validates gain maps and omits GPS.
