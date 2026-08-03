# Xiaoyu Wu | AI for Reticular Chemistry

A static academic portfolio and GitHub Pages site.

## Edit the content

Update `content/site.ts` to change the biography, availability, metrics,
research focus, featured publications, experience, education, or skills.

Update `public/publications.csv` to maintain the publication list. Layout and
visual styling live in `app/` and `app/globals.css`.

## Run locally

```bash
pnpm install
pnpm run dev
```

Create the GitHub Pages-ready `docs` folder with:

```bash
pnpm run build
```

In GitHub, publish from the `main` branch and `/docs` folder.
