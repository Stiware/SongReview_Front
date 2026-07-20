# Tasks: Improve Mock Assets & Responsive

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~150 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | single-pr |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|------|------|-----------|----------------------|-----------------|-------------------|
| 1 | All 8 tasks | PR 1 | `pnpm run check && pnpm run build` | N/A — static app, no test suite exists | `git checkout -- src/ openspec/changes/improve-mock-assets-and-responsive/tasks.md` |

## Phase 1: Curate Mock Data

- [ ] 1.1 **Replace 28 picsum URLs in `src/lib/stores/mockData.ts`** — swap `song1`..`song12`, `artist1`..`artist8`, `album1`..`album8` seeds with curated numeric seeds. Keep URL format (`/seed/{N}/400/400`).

## Phase 2: Responsive CSS

- [ ] 2.1 **SongCard.svelte** — add `@media (max-width: 640px)` rules: reduce cover to 44px, compact gap/padding, stack meta below info.
- [ ] 2.2 **AlbumCard.svelte** — add `@media (max-width: 640px)` rules: smaller title font (0.9rem), tighter padding (12px), reduced border-radius.
- [ ] 2.3 **ArtistCard.svelte** — add `@media (max-width: 640px)` rules: circular image to 90px, reduced padding, compact stats.
- [ ] 2.4 **Header.svelte** — add `@media (max-width: 640px)` rules: narrower search bar (max-width: 240px), reduced horizontal padding (12px), hide label text on icon buttons. At `480px`: search bar takes full width below header row.
- [ ] 2.5 **NavigationTabs.svelte** — add `@media (max-width: 640px)` rules: `overflow-x: auto` on nav-inner, smaller tab padding (10px 14px), reduced font/icon size.
- [ ] 2.6 **+page.svelte** — add `@media (max-width: 640px)` rules: hero h1 to 1.5rem, hero padding to 24px 16px, section padding tighter.
- [ ] 2.7 **src/app.css** — add `@media (max-width: 640px)` rule: body padding 0 12px, container max-width constraints. Add `@media (max-width: 480px)` rule: further reduce padding to 0 8px.

## Phase 3: Verify

- [ ] 3.1 **Type check** — run `pnpm run check` and fix any type errors.
- [ ] 3.2 **Build** — run `pnpm run build` and confirm no build errors.

## Acceptance Criteria

- [ ] `pnpm run check` passes
- [ ] `pnpm run build` succeeds
- [ ] All 28 image URLs in mockData.ts use curated numeric seeds
- [ ] Components render without layout breakage at 360px, 480px, 640px, 768px, 1024px widths
- [ ] No horizontal scroll on any tested viewport
