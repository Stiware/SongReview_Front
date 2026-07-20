# Proposal: Improve Mock Assets & Responsive Layout

## Intent

The app uses generic picsum.photos seeds ("song1", "artist1"…) that show random unrelated photos — no aesthetic coherence. Layout works on desktop but breaks or feels cramped on mobile/tablet. Fix both with minimal effort: curate image seeds, add mobile-first responsive rules to critical surfaces.

## Scope

### In Scope

1. **Curated picsum seeds** — replace all 28 image URLs in `mockData.ts` with specific numeric seeds that produce abstract/colorful/gradient images appropriate for album art and artist cards.
2. **SongCard responsive** — horizontal layout that wraps/adapts on small viewports.
3. **AlbumCard responsive** — grid sizing, typography, and gap adjustments for mobile.
4. **ArtistCard responsive** — circular image sizing, centering, and grid adaptation.
5. **Header responsive** — search bar collapse, reduced padding, icon-only buttons on mobile.
6. **NavigationTabs responsive** — scrollable tab bar or stacked layout on narrow screens.
7. **Home page (+page.svelte) responsive** — hero text scaling, section padding.
8. **Global CSS (@media breakpoints)** — container max-width, body padding on mobile, typography scale.

### Out of Scope

- Detail pages (`songs/[id]`, `artists/[slug]`, `albums/[slug]`) — deferred.
- Custom SVG icons, color palette changes, animation/transitions.
- Navigation overhaul (no hamburger menu, no bottom nav).
- Mock data schema changes (no new fields, no restructuring).

## Capabilities

> Contract between proposal and spec phases.

### New Capabilities

None — pure visual/UX pass, no new feature capabilities.

### Modified Capabilities

None — spec-level behavior does not change.

## Approach

### Image curation

Replace `seed/songN`, `seed/artistN`, `seed/albumN` with a curated dictionary of 28 numeric seeds. Seeds chosen for abstract/colorful output that reads as album art or portrait background. Each entity gets a stable seed so images are deterministic per session. URL format unchanged: `https://picsum.photos/seed/{seed}/400/400`.

### Responsive layout

Mobile-first breakpoints at 480px, 640px, 768px. Adjust:
- **Cards**: stack, resize images, reduce gaps and padding.
- **Header**: shrink search bar width, hide label text on icon buttons, reduce horizontal padding.
- **NavigationTabs**: horizontal scroll with `overflow-x: auto`, smaller font/icon.
- **Home**: reduce hero font size, tighten section padding.
- **Global**: add `padding: 0 12px` on small viewports, constrain max-width.

No framework — plain CSS media queries in each component's `<style>` block, consistent with existing patterns.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/lib/stores/mockData.ts` | Modified | Replace 28 image URLs with curated seeds |
| `src/lib/components/SongCard.svelte` | Modified | Responsive flex/gap/padding tweaks |
| `src/lib/components/AlbumCard.svelte` | Modified | Responsive grid sizing, typography |
| `src/lib/components/ArtistCard.svelte` | Modified | Responsive image size, stats layout |
| `src/lib/components/Header.svelte` | Modified | Search collapse, compact mode |
| `src/lib/components/NavigationTabs.svelte` | Modified | Scrollable tabs, smaller touch targets |
| `src/routes/+page.svelte` | Modified | Hero text, section padding |
| `src/app.css` | Modified | Global mobile breakpoints |
| `src/app.html` | Modified | Meta viewport tag (already present — verify) |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Curated seed renders ugly image for a specific entity | Low | All 28 seeds verified manually before committing |
| Responsive change breaks desktop layout | Low | Desktop-first; media queries only add overrides, never replace base styles |
| `mockData.ts` changes break detail pages (out of scope) | Medium | Detail pages reference same URLs — they benefit automatically; type-check after changes |

## Rollback Plan

- **Images**: revert `mockData.ts` to current seeds — single-line change per URL.
- **Responsive**: revert each `.svelte` `<style>` block — remove added `@media` blocks.
- Full rollback: `git checkout -- src/` + `git checkout -- openspec/changes/improve-mock-assets-and-responsive/proposal.md`.

## Dependencies

None. No new packages, no external services beyond picsum.photos (already used).

## Success Criteria

- [ ] `pnpm run check` passes (type check).
- [ ] `pnpm run build` succeeds.
- [ ] Every mocked song/album/artist image shows a curated abstract/colorful image — no generic "random photo" look.
- [ ] Home page, all card components, Header, and NavigationTabs render without layout breakage at 360px, 480px, 640px, 768px, and 1024px widths.
- [ ] No horizontal scroll on any tested viewport.
