export const packageVersion = "2.0.0-beta.1";
export const installCommand = `npm install coolshapes-react@${packageVersion}`;

export const docGroups = [
  {
    label: "GETTING STARTED",
    items: [
      ["start", "Overview"],
      ["design", "Use in design"],
      ["install", "Install for React"],
    ],
  },
  {
    label: "WORKING WITH SHAPES",
    items: [
      ["shapes", "Choose a shape"],
      ["customize", "Make it yours"],
      ["recipes", "Everyday recipes"],
      ["random", "Random shapes"],
    ],
  },
  {
    label: "REFERENCE",
    items: [
      ["props", "Props"],
      ["migration", "Move from V1"],
      ["beta", "Beta notes"],
    ],
  },
  { label: "FOR YOUR AGENT", items: [["agent-skill", "Coolshapes skill"]] },
];

export const snippets = {
  first: `import { Coolshape } from "coolshapes-react";

export default function App() {
  return <Coolshape name="star-1" size={160} noise={true} />;
}`,
  selection: `import { Coolshape, Star, NumberShape } from "coolshapes-react";

export function Examples() {
  return (
    <>
      <Coolshape name="flower-5" size={120} />
      <Coolshape type="star" index={4} size={120} />
      <Star index={4} size={120} />
      <NumberShape index={0} size={120} />
    </>
  );
}`,
  repeat: `import { useId } from "react";
import { Coolshape } from "coolshapes-react";

export function Shape({ name = "star-1", ...props }) {
  const id = useId().replace(/:/g, "");
  return (
    <Coolshape {...props} name={name} shapeId={name + "-" + id} />
  );
}`,
  mesh: `import { Coolshape, gradients } from "coolshapes-react";

<Coolshape
  name="flower-5"
  gradient={gradients["gradient-1"]}
  noise={true}
  size={160}
/>`,
  solid: `import { Coolshape } from "coolshapes-react";

<Coolshape
  name="flower-5"
  fill="#0071fc"
  noise={false}
  size={160}
/>`,
  outline: `import { Coolshape } from "coolshapes-react";

<Coolshape
  name="flower-5"
  fill="transparent"
  transparent={true}
  noise={false}
  outline={2}
  outlineColor="#0071fc"
  outlineJoin="round"
  size={160}
/>`,
  hero: `import { Coolshape } from "coolshapes-react";

<div className="hero-shape" aria-hidden="true">
  <Coolshape name="star-4" size={160} />
</div>`,
  motion: `.hero-shape {
  pointer-events: none;
  animation: drift 8s ease-in-out infinite;
}
@keyframes drift {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-12px) rotate(4deg); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-shape { animation: none; }
}`,
  avatar: `import { Coolshape } from "coolshapes-react";

export function TeamLabel() {
  return (
    <>
      <Coolshape name="ellipse-9" size={48} aria-hidden="true" />
      <span>Design team</span>
    </>
  );
}`,
  responsive: `import { Coolshape } from "coolshapes-react";

<Coolshape name="polygon-3" className="card-shape" />`,
  responsiveCss: `.card-shape {
  display: block;
  width: 100%;
  max-width: 160px;
  height: auto;
}`,
  grid: `import { Coolshape, shapeTypes, shapesCount } from "coolshapes-react";

export function ShapeCollection() {
  return shapeTypes.flatMap((type) =>
    Array.from({ length: shapesCount[type] }, (_, i) => {
      const index = type === "number" ? i : i + 1;
      const name = type + "-" + index;
      return <Coolshape key={name} name={name} size={64} />;
    })
  );
}`,
  random: `"use client";

import { useState } from "react";
import { Coolshape, shapeTypes, shapesCount } from "coolshapes-react";

const names = shapeTypes.flatMap((type) =>
  Array.from({ length: shapesCount[type] }, (_, i) =>
    type + "-" + (type === "number" ? i : i + 1)
  )
);

export default function RandomShape() {
  const [name, setName] = useState("star-1");
  const shuffle = () => {
    const candidates = names.filter((value) => value !== name);
    setName(candidates[Math.floor(Math.random() * candidates.length)]);
  };

  return (
    <div>
      <Coolshape name={name} size={160} />
      <button onClick={shuffle}>Another shape</button>
    </div>
  );
}`,
  helper: `import { getRandomShape } from "coolshapes-react";

// Returns data, not a React component.
const result = getRandomShape({ type: "star" });
// { shape: "star", index: 1..13, shapeId: "star-…" }
// Pass result.shapeId as the Coolshape name.`,
};

export const propRows = [
  [
    "name",
    "string",
    '"star-1" fallback',
    'Shape identifier, such as "flower-5" or "number-0". Prefer either name or type + index.',
  ],
  [
    "type / index",
    "string / number",
    "No random selection",
    "Lowercase category and 1-based index. Numbers are 0–9; use name for number zero in this beta.",
  ],
  [
    "size",
    "number | string",
    "200",
    "Sets SVG width and height. CSS can override the rendered size.",
  ],
  [
    "noise",
    "boolean",
    "true",
    "Show or hide the grain texture. Use a boolean in this beta.",
  ],
  [
    "fill",
    "string",
    "Shape default",
    "A flat color replaces the default gradient. Use transparent for an outline-only shape.",
  ],
  [
    "gradient",
    "preset / object",
    "Shape default",
    'Swap gradients. For TypeScript, pass gradients["gradient-1"] from the package.',
  ],
  [
    "outline",
    "number | string",
    "Off",
    "Adds a stroke around the shape. Leave room around it so it is not clipped.",
  ],
  [
    "outlineColor",
    "string",
    '"#000"',
    "Set an explicit stroke color, especially on dark backgrounds.",
  ],
  [
    "outlineJoin",
    '"bevel" | "round" | "miter"',
    '"bevel"',
    "How the outline meets at corners.",
  ],
  [
    "outlineCap",
    '"round" | "butt" | "square"',
    '"round"',
    "How open stroke ends are drawn.",
  ],
  [
    "blur",
    "number | string",
    "Shape / preset default",
    "Blurs internal gradient artwork. It is not a CSS blur of the whole SVG.",
  ],
  [
    "transparent",
    "boolean",
    "false",
    "Removes the white base inside the shape mask. Does not remove a gradient by itself.",
  ],
  [
    "random",
    "boolean",
    "false",
    "Chooses a shape at render time. See Random shapes for a stable, server-safe approach.",
  ],
  [
    "shapeId",
    "string",
    "Shape name",
    "Override internal SVG IDs when the same shape appears more than once.",
  ],
  [
    "className / style / aria-*",
    "SVG props",
    "—",
    "Standard SVG attributes for layout, styling, and accessible labeling.",
  ],
];
