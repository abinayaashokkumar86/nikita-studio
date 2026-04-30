# Nikita Studio

A React + Vite + TypeScript website originally exported from Lovable.

## Tech stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui components
- lucide-react icons

## Local development

```bash
npm install
npm run dev
```

The local site runs on Vite's dev server.

## Build

```bash
npm run build
npm run preview
```

Vite outputs the production build to `dist/`.

## Free hosting option 1: GitHub Pages

This repository includes `.github/workflows/deploy.yml` for GitHub Pages.

1. Create or open the GitHub repo: `abinayaashokkumar86/nikita-s-veena-realm`.
2. Upload/push these files to the repo's `main` branch.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push a commit to `main` or manually run the workflow from the **Actions** tab.

The Vite base path is configured for the repo name `nikita-s-veena-realm` when the GitHub Pages workflow runs.

## Free hosting option 2: Vercel or Netlify

For Vercel or Netlify, import the GitHub repo and use:

- Build command: `npm run build`
- Publish/output directory: `dist`

No special base path is needed for Vercel/Netlify.

## Important migration note

Lovable workspace/git metadata was intentionally removed from this clean package. Do not commit `.workspace/` or the Lovable `.git` pointer because it can contain workspace-specific remote/token data.
