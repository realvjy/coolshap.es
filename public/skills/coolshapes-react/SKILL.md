---
name: coolshapes-react
description: Add and customize Coolshapes V2 abstract SVG shapes in React interfaces, or help use Coolshapes SVG and PNG assets in design projects. Use for Coolshapes integration, hero decorations, avatars, shape galleries, and migration from Coolshapes V1.
---

# Coolshapes V2

Use the published `coolshapes-react@2.0.0-beta.1` package. These instructions match that beta, including its current limitations. Do not replace an existing V1 integration unless migration is part of the request.

Check the installed version and lockfile before applying beta workarounds. The npm `beta` tag currently resolves to `2.0.0-beta.1`; `latest` resolves to V1 `1.0.1`. If another beta is installed, verify its implementation and types instead of assuming these limitations still apply. Prefer the published package over a local checkout or `file:` dependency for website integrations.

## Choose the right format

- React UI: render the actual SVG components so size, fill, grain, and outline remain editable.
- Figma or another design tool: copy SVG from the collection at https://coolshap.es, or use the linked Figma Community file.
- Non-React web projects: use exported SVG or PNG. Do not add React just to display a shape.
- Decorative hero shapes: preserve the surrounding layout, keep shapes clear of text and controls, and use a few deliberate shapes. Do not invent a logo or replace the user's branding.
- Avatars and repeated list items: keep a stable shape identifier for each item. Do not randomize on every render.

## Install and render

Use the project's package manager and the published beta version:

```sh
npm install coolshapes-react@2.0.0-beta.1
```

`npm install coolshapes-react@beta` follows the beta release tag; the explicit version above keeps these examples reproducible. An untagged install does not select V2 while `latest` points to V1.

```jsx
import { Coolshape } from "coolshapes-react";

<Coolshape name="flower-5" size={160} noise={true} />
```

`name` is a category and index separated by a hyphen. Alternatively, use `type="star" index={4}` or a category component such as `<Star index={4} />`. Category component names are Star, Triangle, Moon, Polygon, Flower, Rectangle, Ellipse, Wheel, Misc, and NumberShape.

Use one selection method per instance. In beta.1, supplying both a truthy `type` and `index` overrides `name`. Validate names from URLs or user input against the catalog before rendering.

Valid categories and index ranges:

| Category | Index |
| --- | --- |
| star | 1–13 |
| triangle | 1–14 |
| moon | 1–15 |
| polygon | 1–8 |
| flower | 1–16 |
| rectangle | 1–9 |
| ellipse | 1–12 |
| wheel | 1–7 |
| misc | 1–11 |
| number | 0–9 |

Use `name="number-0"` for zero. In beta.1, `type="number" index={0}` falls back to star-1 because of a falsy index check. Missing selection props also fall back to star-1; they do not enable randomness.

## Customize

Keep the default grainy gradient unless the user asks for a different treatment.

Match the host interface's existing colors and light/dark themes. The blue colors below are examples, not required brand colors. For theme-aware solid shapes or outlines, use `fill="currentColor"` or `outlineColor="currentColor"` and set CSS `color` on the shape or its parent. Check grain and outline visibility on both backgrounds; `transparent` controls the shape's base, not the page theme.

- `size={160}` sets width and height. Responsive CSS can use `width: 100%; max-width: 160px; height: auto` on a class.
- `noise={false}` removes grain. Numeric noise values do not act as an intensity control in beta.1; use booleans.
- `fill="#0071fc"` replaces the default gradient with a flat color.
- For a preset gradient, import `gradients` and use `gradient={gradients["gradient-1"]}`. This also avoids the beta's TypeScript issue with preset-name strings. Presets run from gradient-1 through gradient-115.
- `outline={2}` adds an outline. Set `outlineColor` explicitly; its actual beta default is black. Joins: bevel (default), round, miter. Caps: round (default), butt, square.
- Outline-only: combine `fill="transparent" transparent={true} noise={false}` with outline and outlineColor.
- `transparent={true}` removes the white base inside the shape mask; it does not remove a gradient by itself.
- `blur` affects internal gradient artwork, not the entire SVG. To blur the whole silhouette, use CSS filter on a wrapper.
- Standard SVG props such as className, style, role, and aria-label are supported.

```jsx
import { Coolshape, gradients } from "coolshapes-react";

<>
  <Coolshape name="flower-5" gradient={gradients["gradient-1"]} size={160} />
  <Coolshape name="star-4" fill="#0071fc" noise={false} size={80} />
  <Coolshape name="polygon-3" fill="transparent" transparent={true}
    noise={false} outline={2} outlineColor="#0071fc" size={120} />
</>
```

## Repeated shapes and SVG IDs

The beta derives masks and filters from the shape name. When repeating the same shape, give each rendered instance a unique `shapeId` to avoid SVG ID collisions, especially with different gradients or texture settings. Keep `name` as the catalog identifier.

```jsx
"use client";

import { useId } from "react";
import { Coolshape } from "coolshapes-react";

export function Shape({ name = "star-1", ...props }) {
  const id = useId().replace(/:/g, "");
  return <Coolshape {...props} name={name} shapeId={name + "-" + id} />;
}
```

This wrapper uses React 18's `useId`. In Next.js App Router, keep the client directive shown above; ordinary React apps can omit it. For React 16/17, pass a stable unique `shapeId` from the caller instead. Keep the initial shape deterministic so server and client output match.

## Randomness and galleries

Use `shapeTypes` and `shapesCount` instead of the removed V1 `shapes` export. Build valid names from those exports; numbers start at zero and every other category starts at one.

```jsx
import { shapeTypes, shapesCount } from "coolshapes-react";

const names = shapeTypes.flatMap((type) =>
  Array.from({ length: shapesCount[type] }, (_, i) =>
    type + "-" + (type === "number" ? i : i + 1)
  )
);
```

For a shuffle button, initialize state with a fixed name such as star-1. Inside the click handler, select `names[Math.floor(Math.random() * names.length)]` and save it to state. This covers all 115 shapes and does not change the selection during unrelated renders. If randomizing on load is requested, do it after mount or serialize the selected name from the server.

`getRandomShape({ type: "star" })` returns `{ shape, index, shapeId }`, not a React component. Use `shapeId` as the Coolshape `name`. `onlyId: false` throws. In beta.1, the helper chooses number indices 1–10 rather than 0–9, so avoid unrestricted `random={true}` or unrestricted helper calls; use the valid-name list above when including numbers.

## Motion and accessibility

When motion is requested, animate a wrapper with a small translate or scale using CSS or the project's existing motion library. Respect `prefers-reduced-motion` by disabling decorative animation. Keep hover motion consistent with the host interface; do not add rotation by default. Do not animate expensive SVG filters continuously for a grid of shapes.

Use `aria-hidden="true"` for decoration and keep the meaningful text outside the SVG. If a shape itself conveys meaning, provide `role="img"` and an accessible label. Decorative overlays should not intercept pointer events. Shape selection and copy/download controls should be real buttons with accessible names.

## Moving from V1

1. Install the explicit beta version; an untagged install currently targets V1.
2. Replace `shapes` with `shapeTypes` and `shapesCount`.
3. Convert zero-based non-number indices to one-based indices. Keep digits 0–9 unchanged and use names for number zero.
4. Update random helper handling to consume data, and keep selection stable across renders.
5. Check copied snippets, visual output, repeated SVG IDs, and server hydration against the installed version.

## Verify the integration

Check the installed package version, the requested shapes and colors, transparent/outline rendering, and responsive layout. For repeated shapes, check that changing one instance does not alter another. Verify any requested export, shuffle, or motion behavior and run the project's relevant build check. Do not change package source to work around a documented beta limitation unless the user requested a library fix.

Human documentation: https://coolshap.es/docs
Playground: https://coolshap.es/v2
Source and license: https://github.com/realvjy/coolshapes-react
