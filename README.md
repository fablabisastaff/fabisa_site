# fabisa_site

Source for [www.fabisa.is](https://www.fabisa.is), the website of Fab Lab Ísafjörður.

The site is built with [Zensical](https://zensical.org/). Pages are written in
Markdown in the `docs/` folder. The homepage is the exception: it is plain HTML in
`overrides/home.html`.

## Install

You need Python 3.11 or newer.

```sh
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Preview locally

```sh
zensical serve
```

Open <http://localhost:8000>. The page reloads when you save a file.

## Build

```sh
zensical build --clean
```

The finished site is written to `site/`.

## Editing pages

Every page is a Markdown file in `docs/`. The folder decides the URL:
`docs/Um-smiðjuna/verd.md` becomes `fabisa.is/Um-smiðjuna/verd/`.

- **Edit text:** open the `.md` file and change it.
- **New page:** add a `.md` file to a folder. It shows up in the menu automatically.
  The first `# Heading` is the page title.
- **New section:** add a folder with an `index.md` in it.
- **Menu order:** the main menu order is set in `docs/.nav.yml`. Folders with
  their own `.nav.yml` (e.g. `docs/Starfsemi/.nav.yml`) set the order of their
  pages. Folders without one are sorted alphabetically, so you can use number
  prefixes like `1-starfsbraut.md`.
- **Drafts:** files ending in `.mdd` are not published.

### Images

Put images in `docs/assets/img/` (or an `images/` folder next to the page) and
link to them relative to the page:

```markdown
![Laser cutter](../assets/img/taeki/epilogmini.webp)
```

Optional extras:

```markdown
![Photo](../assets/img/smidja/vinnurymi.jpg){ align=right style="width:50%" }   <- image next to text
[Opna bók](skjal.pdf){ .md-button }                                              <- button
![Handbók](skjal.pdf){ type=application/pdf }                                    <- embedded PDF
```

Floating images become full width on phones automatically. Please use images
stored in the repo rather than links to Facebook, since those links expire.

### Videos and other embeds

Paste the embed code (`<iframe ...>`) from YouTube, Sketchfab, Google Maps and so
on straight into the Markdown. YouTube and Sketchfab embeds resize automatically.

### Page layout

- **Pages in a section** (Um smiðjuna, Starfsemi, Búnaður, Námsefni) have a
  navigation sidebar on the left with the section's pages. Sub-folders show as
  groups that open and close. On phones the same links are in a collapsible
  section menu above the page content.
- **Single pages** (Opið hús, Skýrslur) have no sidebar and use the full width.
- **Course material** (the *Námsefni* section) also gets a contents list on
  the right on pages with 3 or more `##` sections, and previous/next links
  between pages in the same course (e.g. the Pre-Fab weeks).

The sidebar is Zensical's own navigation, built from the folders and
`.nav.yml` files, so adding a page to a folder adds it to the sidebar.

Which sections count as course material is set under `course_sections` in
`mkdocs.yml`. Any page can show or hide the contents list in its front matter:

```markdown
---
toc: true
---
```

### Colours

The colours are defined once at the top of `docs/stylesheets/site.css`
(charcoal, warm off-white, white and a muted yellow) and are also used by the
homepage. Use the yellow sparingly, and never for text on a light background.
For a yellow call-to-action button use `{ .md-button .md-button--primary }`.

Dark mode uses the same variables with darker values (the
`[data-md-color-scheme="slate"]` block near the top of `site.css`). The palette
toggle itself is set under `theme.palette` in `mkdocs.yml`.

### Contact details and opening hours

The footer reads the address, email, phone number, opening hours and social links
from the `extra:` section of `mkdocs.yml`.

## Deploying

Push to `main`. GitHub Actions (`.github/workflows/ci.yml`) builds the site and
publishes it to the `gh-pages` branch, which serves www.fabisa.is.

Pull requests and other branches are only built (as a check), not published.

## Where things are

| Path | What it is |
| --- | --- |
| `docs/` | Markdown pages, images and other files |
| `docs/.nav.yml` | Main menu order |
| `docs/stylesheets/site.css` | Colours and look of the whole site |
| `docs/javascripts/site.js` | PDF embeds |
| `overrides/home.html` | The homepage (HTML) |
| `overrides/main.html` | Template for Markdown pages |
| `overrides/partials/` | Phone section menu, footer and layout logic |
| `mkdocs.yml` | Site settings (Zensical reads this file) |

> SEO tip: add `{:rel="nofollow"}` after external links in Markdown, or
> `rel="nofollow"` in HTML.
