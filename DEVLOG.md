# Development log

## 2026-09-29 — "Tiny premium" light redesign

**Status: new direction for review, uncommitted.** User asked for a “cool premium website, looks tiny but so classy” after rejecting the dark dashboard-style V2 layout below.

- Switched the whole site to a warm-paper light theme (`--cs-page: #f7f7f4`), monochrome ink UI, soft tiles, blue kept only for small accents (grain switch, focus rings, eyebrow dot). Tokens live in `src/app/globals.css`.
- Type: Inter for UI (13px scale), Instrument Serif italic for the headline accent, DM Mono for tiny labels. Outfit kept only for the “coolshapes” wordmark. Fonts load in `src/app/layout.js`.
- Homepage: compact hero (“Little shapes, *with a little grain.*”) with a rotating exhibit shape floating over a soft shadow (pauses when the tab is hidden or reduced motion is on); sticky index bar with family filters + superscript counts, search (`/` to focus), grain switch; all 115 shapes in a soft-tile grid (families interleaved in “All”), names/serials only on hover.
- Shape dialog: dot-grid stage, prev/next with ← → keys, SVG/PNG/Copy, React snippet, playground link. Bottom sheet on phones.
- Header and footer rebuilt (`site-header.module.css` is new; footer is a hairline resource row + colophon). Docs and playground re-tokenized for the light theme; primary buttons are ink.
- The previous dark version is backed up outside the repo in the session scratchpad (`backup-v2-before-premium`), not in Git.
- Production build passes; checked desktop 1440 and mobile 375, no console errors or horizontal overflow.
- Follow-up (user loved it): added dark mode and narrowed the page to 960px.
  - Dark tokens in `globals.css` apply via `[data-theme="dark"]` or the system preference; `layout.js` sets `data-theme` before paint (stored in `localStorage` as `cs-theme`).
  - `theme-toggle.js` (sun/moon in the header) switches with a circular View Transition reveal from the top center, which the user specifically liked; transitions are paused during the swap so surfaces don't fade through gray.
  - Grid is now 6 fixed columns (5/4/3 at smaller widths); desktop search collapses to a round button that expands on click or `/`.
- Follow-up: shapes didn't pop in light mode. Cause: pastel/yellow gradients sat on warm cream (`#f7f7f4`) and warm-gray tiles, and pale edges vanished. Compared options live (white tiles, drop shadow, colored glow, cool gray tiles); chose cool neutral page `#f5f5f7` + white tiles with a hairline ring + a soft `--cs-shape-shadow` under shapes (grid, hero, dialog). Grays retuned cool (`#6e6e73` muted). Dark mode unchanged (`--cs-shape-shadow: none`). The shadow is CSS-only, so downloads/copies are unaffected.
- Follow-up "more premium" motion pass (user approved ideas 1–3 + paper grain):
  - Shape flight: clicking a tile (or the hero exhibit) flies an SVG copy from the tile into the dialog stage and back to its tile on close (FLIP via WAAPI, `fly()` in `homepage.js`). The dialog's chrome now lives on `.sheet` so the copy, a direct child of `<dialog>`, never inherits its fade; no transforms on `<dialog>` so `position: fixed` stays viewport-relative. All closes (Esc, backdrop, ×) go through `closeDialog()`.
  - Sliding family pill (`layoutId="family-pill"`) and tiles that glide to new positions on filter (`Tile` is `memo(forwardRef(motion.button layout="position"))` inside `AnimatePresence mode="popLayout"`). `.collection` has a one-screen min-height so filtering never clamps scroll mid-glide.
  - Cursor tilt on tiles and the hero exhibit via CSS variables set on pointermove (mouse only; off for reduced motion).
  - Paper grain: fixed `body::after` noise overlay (`--cs-grain`, very low opacity per theme). `scrollbar-gutter: stable` so scroll-lock never shifts layout.
  - Theme reveal origin is now `circle(... at 50% 0%)` (percentage of the transition layer) after the user saw it off-center; verified centered in headless Chrome.
  - Verified with a headless-Chrome CDP script sampling positions per frame (scratchpad `motion-check.mjs`), desktop and 390px.

## 2026-09-28–29 — Website V2 exploration

**Status: provisional checkpoint, not final design approval.**

User feedback at the end of the session: “I don’t like [it] much, but good for now.” The compact collection layout is closer to the intended direction, but the overall design and title/search balance still need refinement. Do not treat the current styling as a finished design system or an approved release.

### Scope and working state

- Worked in the `coolshap.es` website repository on `redesign/homepage-v2`.
- Built a working redesign, documentation, agent skill, and playground; left all changes uncommitted.
- No deployment, push, or pull request was made.
- Keep future commit authorship as `realvjy <realvjy@gmail.com>` with no co-author trailers, as requested.
- The workspace also contains `coolshapes-react` and `coolshapes-demo`. This website work did not change the library or demo repositories.
- Existing website edits were already present in `landing.js`, `shapeGrid.js`, `soon.js`, the dependency files, and the V2 route. Review the full working tree carefully before committing; it is not a clean diff containing only this session’s work.

### Design direction explored

- Initial reference: [Libraries.dev](https://libraries.dev/), adapted to a shape collection rather than copied literally.
- Documentation reference: [AnimateIt docs](https://animateit.pro/docs).
- Preserved the original V1 Coolshapes logo.
- Replaced lime and olive UI colors with neutral charcoal surfaces and a blue accent (`#0071FC`).
- Removed hard card outlines, hover rotation, visible shape-card numbers, and eventually repeated card labels.
- Iterated from a large centered hero to a split hero, then a small collection layout with category thumbnails.
- Reduced repeated promotional copy and scattered calls to action. Later restored the requested Figma, React/npm, and agent resources as one shared footer group.
- Final iteration places the homepage title and search in one desktop gallery header, with categories aligned to the cards. Mobile uses a short intro, scrolling category tabs, search, and a three-column grid.
- This remains an exploration. Smaller elements and fewer words alone did not resolve the user’s concerns about balance and polish.

### Implemented

**Homepage and shared UI**

- Added the collection homepage with search, category filtering, grain toggle, load more, and shape selection.
- Live artwork uses the published npm package `coolshapes-react@2.0.0-beta.1`, pinned exactly; removed reliance on a local package link.
- Added `framer-motion@13.4.4` for a tiny vertical flower drift that respects reduced motion. Shape hover does not rotate.
- Moved interface icons to `@remixicon/react@4.9.0` and removed Lucide. Preserved custom brand artwork.
- Added shared header, footer resource cards, and palette/layout tokens.
- Footer actions: open Figma, copy the pinned npm installation command, and open the agent-skill documentation.

**Shape dialog**

- Compact preview with grain control and Download/React choices.
- SVG download, transparent 1600 × 1600 PNG generation, SVG clipboard copy, and React snippet copy.
- “Edit in playground” carries the selected shape through `/v2?shape=…`.
- Preserved keyboard focus restoration, Escape dismissal, and page-scroll locking.

**Documentation and skill**

- Added `/docs` covering design use, installation, shape selection, customization, recipes, randomness, props, V1 migration, beta limitations, and agent setup.
- Added live examples and copyable snippets.
- Added `public/skills/coolshapes-react/SKILL.md` and a plain-text `/skill.md` route serving the same skill.
- Compacted docs typography and navigation to match the website; retained useful reference material.

**Playground**

- Rebuilt `/v2` with the shared header, footer, compact controls, and soft surfaces.
- Preserved shape/variant selection, size, gradient, solid fill, outline, grain, transparency, blur, line join, and line cap settings.
- Added a valid-name random-shape button, SVG export, and React-code copy.
- Uses `name` plus a unique `shapeId`; number zero renders correctly. Outline mode has a visible stroke and disables grain.
- Moved less-used settings into an expandable group and made the generated React code expandable.

### Package behavior accounted for

- The published beta contains 115 shapes across 10 categories.
- Use `name="number-0"`; `type="number" index={0}` falls back to a star in this beta.
- The number category export is `NumberShape`.
- `getRandomShape` returns shape data, not a React component. The site uses a valid-name list for random selection, including digits 0–9.
- Repeated shapes receive distinct `shapeId` values to avoid SVG definition collisions.
- Prefer exported `gradients` objects in TypeScript-compatible examples; the beta’s string-gradient typing is narrower than runtime support.
- Documented other verified beta caveats, including boolean noise, default selection, and outline defaults.

### Main files

- `src/components/homepage.js` and `homepage.module.css`
- `src/components/site-header.js`
- `src/components/site-footer.js` and `site-footer.module.css`
- `src/components/documentation.js` and `documentation.module.css`
- `src/components/playground.js` and `playground.module.css`
- `src/components/icons/index.js`
- `src/lib/coolshapes-docs.js`
- `src/app/page.js`, `src/app/docs/page.js`, `src/app/v2/page.js`, and `src/app/skill.md/route.js`
- `src/app/globals.css`
- `public/skills/coolshapes-react/SKILL.md`
- `package.json`, npm/yarn lockfiles, `next.config.js`, and `.gitignore`

### Validation performed during the session

- Production builds passed using the isolated `.next-preview` directory.
- The five changed UI components passed `next/core-web-vitals` rules via the ESLint Node API. The repository has no standalone ESLint configuration; this was not a successful run of the default lint script.
- `git diff --check` passed.
- Validated the agent skill and parsed documentation/skill code examples earlier in the session.
- Verified package rendering for normal shapes, `number-0`, gradient objects, and outline-only shapes.
- Visually reviewed homepage, docs, playground, footer cards, and dialog at desktop and mobile sizes. No page overflow was observed at 390px.
- Checked category filtering, dialog opening/closing, React/SVG/npm clipboard content, selected-shape handoff, and keyboard operation of the size slider.
- PNG generation completed and displayed success feedback. The browser download-event wait timed out during the SVG check; final files in the user’s download directory were not independently verified.
- No browser console errors were observed in the final checks.

### Local preview

The review preview used `http://127.0.0.1:3001/` with `/docs` and `/v2`. A separate build directory avoids collisions with another dev server using `.next`.

```sh
COOLSHAPES_BUILD_DIR=.next-preview npm run build
COOLSHAPES_BUILD_DIR=.next-preview npm run start -- --hostname 127.0.0.1 --port 3001
```

`next.config.js` reads `COOLSHAPES_BUILD_DIR`; `.next-preview` is ignored by Git. Preview availability depends on the local server still running.

### Next design pass

- Reassess the first screen as a complete composition, especially title/search balance, spacing, and the relationship between navigation, category rail, and gallery.
- Keep the intended feel: cute, tiny, elegant, easy to use, minimal text, restrained blue, soft surfaces, and the original logo.
- Review homepage, docs, playground, footer resources, and download dialog together; avoid polishing only the homepage.
- Keep the three footer resource cards clear without rebuilding a large promotional section.
- Obtain stronger design approval before treating this as ready to ship. Do not resume redesign work solely because this log lists follow-ups.

## 2026-09-29 — Icon Maker

Built `/icons` on the user's newer website design, following the approved Icon Kitchen-inspired plan. The user's newer layout supersedes the earlier provisional design direction above.

- Visual picker for all 115 published beta shapes; original/preset/solid fills, grain, background palettes and gradients, scale, and position.
- iOS, Android, and web previews, small-size samples, Android mask/themed previews, and safe-area guides. Editor theme stays independent from artwork colors.
- PNG and composite SVG downloads; iOS asset catalog, Android adaptive/monochrome/legacy assets, and favicon/PWA ZIP packs. ZIPs include setup notes, settings, and the Coolshapes MIT license.
- Versioned share links, validated query values, local composition persistence, and links from the navigation, shape dialog, and Playground.
- Published `coolshapes-react@2.0.0-beta.1` retained. Added `fflate@0.8.2` for browser ZIP packaging, loaded when needed.

Validation: six Node tests cover parameter handling, URL round trips, safe bounds, layer separation, package references, and ICO offsets. Real browser downloads were inspected for dimensions, PNG alpha modes, ZIP integrity, manifest references, and decodable ICO entries. Xcode `actool` compiled the exported iOS catalog successfully. Desktop, 390px and 320px layouts, both themes, number-zero selection, persistence, share links, and page handoffs were checked. Production build and targeted ESLint checks passed.

Limitations: the iOS pack is flat artwork, not an Icon Composer file. Android resource structure and images were checked, but no Android SDK is installed here for a native build/device test. Existing Browserslist metadata produces an update notice during builds.

Changes are uncommitted. The development preview is `/icons` on port 3000. `.next-icons` is an ignored isolated production-build directory.

### Icon Maker refinement

Renamed the heading to **Cool Icon Maker** and removed its eyebrow/subtitle and the download dialog subtitle. Extracted the homepage's expanding search, animated selection pills, and grain switch into shared site controls; Icon Maker and Playground now reuse those controls and a common dropdown treatment. Removed Icon Maker's section separators, thumbnail rings, swatch outlines, and preview divider. Keep future tool controls in `site-controls` rather than creating another visual system. Production build and shared-control checks passed, including mobile search, homepage filtering, and Playground outline mode.

Dropdown follow-up: shared search/fields now use the white active surface. Replaced native option popups with Radix Select menus styled with soft panels, rounded rows, hover highlights, selected checkmarks, and bounded scrolling. Verified shape selection, long gradient lists, returning to Original, and mobile placement. Keyboard navigation/typeahead and focus management come from the shared accessible primitive. Production build and targeted lint passed.
