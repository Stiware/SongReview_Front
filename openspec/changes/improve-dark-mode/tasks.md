# Tasks: Improve Dark Mode

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~75–80 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | ask-on-risk |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|------|------|-----------|----------------------|-----------------|-------------------|
| 1 | All 4 files — complete dark mode improvement | Single PR | `pnpm run check` | Open app, toggle dark mode, reload, check no flash | `git checkout -- src/app.html src/app.css src/routes/+layout.svelte src/lib/components/Header.svelte` |

## Phase 1: Anti-Flash Infrastructure

- [ ] 1.1 **`src/app.html`** — Add inline `<script>` in `<head>` before `%sveltekit.head%`: read `localStorage.getItem('theme')`, if `"dark"` then `document.documentElement.classList.add('dark')`.
- [ ] 1.2 **`src/app.css`** — Update `.dark` block: set `--bg: #0a0a0f`, `--bg-card: #12121a`, `--bg-elevated: #1a1a26`, `--border: #2a2a3a`, `--primary-light: #a78bfa`, `--accent-bg: rgba(167, 139, 250, 0.15)`.
- [ ] 1.3 **`src/app.css`** — Add universal transition rule `* { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }`. Remove the old `body { transition: ... }` rule.

## Phase 2: Theme Logic + Toggle Integration

- [ ] 2.1 **`src/routes/+layout.svelte`** — On mount (`onMount` or `$effect`), run theme init: check `localStorage.getItem('theme')`; if absent, fall back to `window.matchMedia('(prefers-color-scheme: dark)').matches`. Apply the `.dark` class on `<html>`. Add a `matchMedia` change listener that updates theme only when `localStorage` has no manual override.
- [ ] 2.2 **`src/lib/components/Header.svelte`** — In `toggleTheme()`, after toggling the class, save `localStorage.setItem('theme', ...)`. Dynamically render sun SVG when `.dark` is active, moon SVG when light.

## Phase 3: Verification

- [ ] 3.1 **Type check** — Run `pnpm run check` and fix any type errors.
- [ ] 3.2 **Build** — Run `pnpm run build` and confirm success.

## Implementation Order

Phase 1 first (infrastructure — CSS can safely coexist with old JS), then Phase 2 (JS logic that drives the toggles), then Phase 3 (verify everything works end-to-end). Tasks within each phase are independent and can be parallelized.
