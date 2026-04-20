# Nixon Tse — Portfolio

Personal portfolio site built with **Vite + React + TypeScript + Tailwind CSS v4**, deployed on **Vercel**.

## Local development

```bash
npm install
npm run dev
```

App runs at http://localhost:5173.

## Editing your site

Almost everything is data-driven so you can update content without touching components.

| What you want to change | File |
|--------------------------|------|
| Your name, hero headline, bio, contact links | `src/data/site.ts` |
| Projects list (name, description, tags, links) | `src/data/projects.ts` |
| Colors, fonts, design tokens | `src/index.css` (look for `@theme`) |
| Page structure (sections, order) | `src/App.tsx` |
| Header / nav layout | `src/components/Header.tsx` |
| Project card design | `src/components/ProjectCard.tsx` |
| Hero layout / image area | `src/components/Hero.tsx` |

### Add a new project

Open `src/data/projects.ts` and append an object:

```ts
{
  name: "My New Project",
  description: "One or two sentences explaining what it does and why.",
  tags: ["React", "Python"],
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/nix415/my-new-project",
}
```

### Add your photo to the hero

1. Drop an image into `public/` (e.g. `public/me.jpg`).
2. Set `hero.imageUrl` in `src/data/site.ts` to `"/me.jpg"`.

### Change colors

Edit the CSS variables under `@theme` in `src/index.css` (e.g. `--color-bg`, `--color-accent`).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects **Vite**. Defaults are fine: build = `npm run build`, output = `dist`.
4. Click **Deploy**. Future `git push` to `main` redeploys automatically.

## License

Personal portfolio.
