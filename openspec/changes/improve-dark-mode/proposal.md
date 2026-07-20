# Proposal: Improve Dark Mode

## Intent

The app has a basic dark mode toggle but the experience is rough: the choice resets on reload, there's no system preference detection, the dark palette is flat, the toggle icon doesn't reflect the state, and theme switching has no smooth transitions. Fix all of that.

## Scope

### In Scope

1. **Theme persistence + anti-flash** — inline blocking script in `app.html` reads localStorage before render. JS init in layout handles `prefers-color-scheme` fallback + live `matchMedia` listener.
2. **Refined dark palette** — deeper, more contrasty backgrounds; clear hierarchy (bg / bg-card / bg-elevated); lighter purple accent in dark mode; better border contrast; adjusted accent-bg.
3. **Dynamic toggle icon** — Header shows sun icon in dark mode, moon icon in light mode.
4. **Universal transitions** — `transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease` on all elements.
5. **Live system detection** — `matchMedia('(prefers-color-scheme: dark)')` listener updates theme in real time when no manual preference exists.

### Out of Scope

- No new components or pages
- No animation library
- No CSS restructuring beyond variables and transitions

## User Decisions

| Topic | Decision |
|-------|----------|
| Persistence priority | Manual choice > localStorage > prefers-color-scheme |
| Dark accent | Lighter purple (`#a78bfa`) for better contrast on dark |
| Anti-flash | Yes — inline blocking script in app.html |
| Transitions | Universal on `*` for themed properties |
| Live system detection | Yes — only when no manual override exists |

## Capabilities

None — pure UX quality pass, no new features.

## Approach

### Theme initialization (`app.html` + layout)

- Inline `<script>` in `<head>`: reads `localStorage.getItem('theme')`, applies `document.documentElement.classList.toggle('dark', ...)` before CSS renders.
- In `+layout.svelte` (or `+layout.ts`): on mount, if no localStorage, check `prefers-color-scheme`. Add `matchMedia` change listener that updates theme only when localStorage is absent. On manual toggle, save to localStorage and remove listener.

### Dark palette (`app.css`)

Current → new dark values:
- `--bg`: `#0f0f23` → `#0a0a0f` (deeper)
- `--bg-card`: `#1a1a2e` → `#12121a` (clearer card separation)
- `--bg-elevated`: `#16213e` → `#1a1a26`
- `--text-primary`: `#f3f4f6` → keep or adjust
- `--text-secondary`: `#9ca3af` → keep
- `--text-tertiary`: `#6b7280` → keep
- `--border`: `#2d2d44` → `#2a2a3a`
- `--primary-light`: `#8b5cf6` → lighter purple for dark mode
- `--accent-bg`: `rgba(106, 13, 173, 0.2)` → `rgba(167, 139, 250, 0.15)` (based on lighter accent)

### Toggle icon (`Header.svelte`)

Swap the SVG based on `document.documentElement.classList.contains('dark')`:
- Light mode: moon icon (current)
- Dark mode: sun icon

### Transitions (`app.css`)

```css
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
```

Exclude specific elements if needed (e.g., images, SVGs).

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/app.html` | Modified | Add inline blocking script for anti-flash |
| `src/routes/+layout.svelte` | Modified | Add theme init + system detection logic |
| `src/app.css` | Modified | Refined dark palette + universal transitions |
| `src/lib/components/Header.svelte` | Modified | Dynamic sun/moon toggle icon |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Inline script breaks app.html parsing | Low | Single line, tested pattern |
| Universal transitions cause jank on complex layouts | Low | Only transitions on composite properties; OK for this UI complexity |
| Flash of wrong theme if localStorage read fails | Low | Fallback to light mode always safe |

## Rollback Plan

`git checkout -- src/app.html src/routes/+layout.svelte src/app.css src/lib/components/Header.svelte`

## Success Criteria

- [ ] Toggle theme → preference saved to localStorage
- [ ] Reload page → theme persists from localStorage
- [ ] First visit with `prefers-color-scheme: dark` → dark mode without flash
- [ ] Change system theme while page is open (no manual override) → theme follows live
- [ ] Toggle icon shows sun in dark mode, moon in light mode
- [ ] Theme switch has smooth 0.3s transition on all themed properties
- [ ] `pnpm run check` passes (or only pre-existing errors)
- [ ] `pnpm run build` succeeds
