# Monika: portfolio

A static portfolio site built with [Astro](https://astro.build). There's no client framework: it's plain HTML and CSS, with a little JavaScript for the carousel arrows and the copy-email button.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
npm run preview  # serves the built site
```

`dist/` can be hosted anywhere static files work: Netlify, Vercel, Cloudflare Pages or GitHub Pages. Set your real domain in `astro.config.mjs` before you deploy.

## Where to edit

| What | File |
| --- | --- |
| **All project content** (cards and case studies) | `src/data/projects.ts` |
| Site copy: headline, bio, leadership, services, email, LinkedIn | `src/data/site.ts` |
| Colours, fonts, radii | `src/styles/tokens.css` |
| Logo mark | `src/components/Logo.astro` and `public/favicon.svg` |

### Add or change a project

Add an entry to the `projects` array in `src/data/projects.ts`. Each entry creates:

- a card on the homepage carousel (if `featured: true`) and on `/work/`
- a case study page at `/work/<slug>/` with context, your role, process steps, images and outcome

`color` picks the card's pastel: `'butter'`, `'dusty-blue'`, `'sage'` or `'apricot'`.

### Swap images

Placeholder images live in `public/projects/<slug>/` (`cover.svg`, `image-1.svg`, ...) and `public/about/portrait.svg`. Put your own files in the same folders, then update the paths in `projects.ts`. Any web format works. Suggested sizes:

- `cover`: works best as an illustration or cut-out on a transparent background, about 960×830. It sits on the card's pastel panel.
- gallery `images`: 1600×900 for `size: 'wide'`, 1200×960 for half width.
- portrait: 800×1000.

Write a real `alt` for each image. It's read aloud to screen reader users.

## Design system

- **Colours:** cream `#FBF6E9` background, denim `#385888` for all text (6.67:1, AA), bright denim `#4A72B0` for large text and graphics only (4.5:1), soft denim `#4F6B96` for secondary text (AA), and four pastels for project panels.
- **Type:** Schibsted Grotesk for everything. Architects Daughter only for your name and the word "hello". To change the accent face, edit `--font-accent` in `tokens.css` and the Google Fonts link in `src/layouts/Base.astro`.
- **Motion:** the skills badge rotates and cards tilt slightly on hover. All animation and smooth scrolling turn off when the visitor has reduced motion turned on.

The `references/` folder holds the visual references the design started from.
