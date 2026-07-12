# AGENTS.md

## Project Overview

*   **Framework:** SvelteKit 2 + Svelte 5 (runes mode forced for all project files via `vite.config.ts`)
*   **Package Manager:** pnpm (`engine-strict=true` in `.npmrc`)
*   **Language:** TypeScript (strict, `moduleResolution: "bundler"`)
*   **Adapter:** `@sveltejs/adapter-static` (deployed to GitHub Pages)

## Developer Commands

*   **Install:** `pnpm install`
*   **Dev server:** `pnpm run dev` (add `-- --open` to open browser)
*   **Build:** `pnpm run build`
*   **Preview build:** `pnpm run preview`
*   **Type check:** `pnpm run check` (runs `svelte-kit sync` then `svelte-check`)
*   **Watch type check:** `pnpm run check:watch`
*   **Build with base path:** `BASE_PATH=/SongReview_Front pnpm run build` (for GitHub Pages)

## Architecture

*   **No backend** — all data is mock data in `src/lib/stores/mockData.ts` (Song, Artist, Album interfaces + arrays). No API calls.
*   **Routes:** `/` (home), `/albums/[slug]`, `/artists/[slug]`, `/songs/[id]`, `/auth`, `/upload`
*   **Components** in `src/lib/components/`: Header, NavigationTabs, SongCard, AlbumCard, ArtistCard
*   **`$lib`** maps to `src/lib/` (SvelteKit default)

## Toolchain Quirks

*   **Svelte 5 runes mode** is forced for all project files via `vite.config.ts` (`compilerOptions.runes`). Do not use `export let` or `$$props` — use `$props()`, `$state()`, `$derived()`, etc.
*   **`prepare` script** auto-runs `svelte-kit sync` on `pnpm install`, generating `.svelte-kit/` types.
*   **`engine-strict=true`** in `.npmrc` — install will fail if Node.js version doesn't satisfy the package's `engines` field.
*   **No tests, no linter, no formatter** configured.
*   **CI:** GitHub Actions workflow in `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to `main`.
*   **Adapter:** `@sveltejs/adapter-auto` — switch per target environment (see [SvelteKit adapter docs](https://svelte.dev/docs/kit/adapters)).
