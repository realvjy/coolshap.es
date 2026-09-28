"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  Coolshape,
  gradients,
  shapeTypes,
  shapesCount,
} from "coolshapes-react";
import {
  RiArrowRightUpLine as ArrowUpRight,
  RiCheckLine as Check,
  RiFileCopyLine as Copy,
  RiDownloadLine as Download,
  RiFileTextLine as FileText,
  RiShuffleLine as Shuffle,
} from "@remixicon/react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import {
  docGroups,
  installCommand,
  packageVersion,
  propRows,
  snippets,
} from "@/lib/coolshapes-docs";
import styles from "./documentation.module.css";

const names = shapeTypes.flatMap((type) =>
  Array.from(
    { length: shapesCount[type] },
    (_, i) => `${type}-${type === "number" ? i : i + 1}`,
  ),
);

function PreviewShape({ name = "flower-5", ...props }) {
  const id = useId().replace(/:/g, "");
  return (
    <Coolshape
      {...props}
      name={name}
      shapeId={`${name}-${id}`}
      aria-hidden="true"
    />
  );
}

function CopyButton({ text, label = "Copy code" }) {
  const [state, setState] = useState("idle");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("error");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2400);
  }
  return (
    <button className={styles.copy} onClick={copy} aria-label={label}>
      <span aria-live="polite">
        {state === "copied"
          ? "Copied"
          : state === "error"
            ? "Select text to copy"
            : label}
      </span>
      {state === "copied" ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

function Code({ children, language = "jsx", label }) {
  return (
    <div className={styles.code}>
      <div className={styles.codeTop}>
        <span>{label || language}</span>
        <CopyButton text={children} />
      </div>
      <pre tabIndex={0}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>
        <a href={`#${id}`}>{title}</a>
      </h2>
      {children}
    </section>
  );
}

export default function Documentation({ skill }) {
  const [active, setActive] = useState("start");
  const [mode, setMode] = useState("mesh");
  const [noise, setNoise] = useState(true);
  const [randomName, setRandomName] = useState("star-1");
  useEffect(() => {
    const sections = docGroups.flatMap((group) =>
      group.items.map(([id]) => document.getElementById(id)),
    );
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = sections
          .filter(
            (section) => section && section.getBoundingClientRect().top <= 160,
          )
          .at(-1);
        setActive(current?.id || "start");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);
  const previewProps =
    mode === "solid"
      ? { fill: "#0071fc" }
      : mode === "outline"
        ? {
            fill: "transparent",
            transparent: true,
            outline: 2,
            outlineColor: "#0071fc",
            outlineJoin: "round",
          }
        : { gradient: gradients["gradient-1"] };
  const previewNoise = mode === "outline" ? false : noise;
  const customizeCode = snippets[mode].replace(
    /noise=\{(?:true|false)\}/,
    `noise={${previewNoise}}`,
  );

  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#docs-content">
        Skip to documentation
      </a>
      <SiteHeader active="docs" />
      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label="On this page">
          <div className={styles.sidebarVersion}>
            <span /> V2 beta <code>{packageVersion}</code>
          </div>
          {docGroups.map((group) => (
            <div className={styles.navGroup} key={group.label}>
              <p>{group.label}</p>
              <nav aria-label={group.label}>
                {group.items.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    aria-current={active === id ? "location" : undefined}
                  >
                    <span aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
          <a className={styles.rawSkill} href="/skill.md">
            <FileText size={14} /> Read the skill file{" "}
            <ArrowUpRight size={13} />
          </a>
        </aside>
        <main id="docs-content" className={styles.article}>
          <div className={styles.intro}>
            <h1>Documentation</h1>
            <p>A little guide to shapes, code, and customization.</p>
          </div>
          <div className={styles.mobileNav}>
            <label htmlFor="docs-jump">On this page</label>
            <select
              id="docs-jump"
              value={active}
              onChange={(event) => {
                window.location.hash = event.target.value;
                setActive(event.target.value);
              }}
            >
              {docGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.items.map(([id, label]) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <Section id="start" title="Getting started">
            <p>
              Coolshapes is a free, MIT-licensed collection of 115 abstract
              shapes across 10 categories. Each one is an SVG, with a grainy
              gradient you can keep or customize.
            </p>
            <div className={styles.note}>
              These docs cover <strong>{packageVersion}</strong>. Already using
              V1? Start with <a href="#migration">the migration notes</a>.
            </div>
          </Section>
          <Section id="design" title="Use in a design project">
            <ol>
              <li>
                Browse the <a href="/#collection">collection</a> and select a
                shape.
              </li>
              <li>Toggle grain on or off to match your design.</li>
              <li>
                Choose <strong>Copy SVG</strong> to paste into a design tool, or
                download an SVG or PNG.
              </li>
            </ol>
            <p>
              SVG stays sharp at any size and works well for editable artwork.
              PNG is useful for slides, documents, and tools that need an image.
              The website exports transparent PNGs at 1600 × 1600.
            </p>
            <a
              className={styles.inlineLink}
              href="https://www.figma.com/community/file/1367467631420622345/cool-shapes-100-abstract-shapes"
            >
              Open the full Figma collection <ArrowUpRight size={15} />
            </a>
          </Section>
          <Section id="install" title="Install for React">
            <p>
              Install the published beta explicitly. An untagged install
              currently gives you V1.
            </p>
            <Code language="terminal">{installCommand}</Code>
            <p>
              Import <code>Coolshape</code>, choose a name, and set the size.
              The component renders an SVG directly.
            </p>
            <div className={styles.firstPreview}>
              <PreviewShape name="star-1" size={120} />
              <div>
                <span>YOUR FIRST SHAPE</span>
                <p>
                  star-1 <span>·</span> grain on
                </p>
              </div>
            </div>
            <Code>{snippets.first}</Code>
            <p className={styles.small}>
              Use your project’s package manager. For Next.js App Router, put
              interactive shape controls and hook-based wrappers in a component
              with <code>&quot;use client&quot;</code>.
            </p>
          </Section>
          <Section id="shapes" title="Choose a shape">
            <p>
              Use a name such as <code>flower-5</code>, a category with an
              index, or a category component. Choose one form rather than
              combining <code>name</code> with <code>type</code> and{" "}
              <code>index</code>.
            </p>
            <Code>{snippets.selection}</Code>
            <div className={styles.tableWrap}>
              <table>
                <caption>Shape categories and valid indices</caption>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Shapes</th>
                    <th>Index range</th>
                  </tr>
                </thead>
                <tbody>
                  {shapeTypes.map((type) => (
                    <tr key={type}>
                      <td>
                        <code>{type}</code>
                      </td>
                      <td>{shapesCount[type]}</td>
                      <td>
                        {type === "number" ? "0–9" : `1–${shapesCount[type]}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.note}>
              For zero, use <code>name=&quot;number-0&quot;</code> or{" "}
              <code>{"<NumberShape index={0} />"}</code>. The global component’s{" "}
              <code>{'type="number" index={0}'}</code> form falls back to a star
              in this beta.
            </div>
            <details className={styles.details}>
              <summary>Rendering the same shape more than once?</summary>
              <p>
                Give each instance a unique <code>shapeId</code>. The beta
                otherwise reuses SVG mask and filter IDs, which can mix up
                independently styled copies. <code>name</code> still selects the
                artwork.
              </p>
              <Code>{snippets.repeat}</Code>
            </details>
          </Section>
          <Section id="customize" title="Make it yours">
            <p>
              Keep the original grainy look, switch to a flat color, or use only
              the outline. Try a treatment below; the example and code update
              together.
            </p>
            <div className={styles.customizer}>
              <div className={styles.controls}>
                <div
                  role="group"
                  aria-label="Shape treatment"
                  className={styles.segments}
                >
                  {["mesh", "solid", "outline"].map((value) => (
                    <button
                      key={value}
                      aria-pressed={mode === value}
                      onClick={() => setMode(value)}
                    >
                      {value === "mesh"
                        ? "Gradient"
                        : value === "solid"
                          ? "Solid"
                          : "Outline"}
                    </button>
                  ))}
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={previewNoise}
                    disabled={mode === "outline"}
                    onChange={(event) => setNoise(event.target.checked)}
                  />{" "}
                  Grain
                </label>
              </div>
              <div className={styles.canvas}>
                <PreviewShape
                  {...previewProps}
                  noise={previewNoise}
                  size={170}
                />
                <span>flower-5</span>
              </div>
            </div>
            <Code label="Live example">{customizeCode}</Code>
            <dl className={styles.definitions}>
              <div>
                <dt>Gradients</dt>
                <dd>
                  Choose from <code>gradient-1</code> through{" "}
                  <code>gradient-115</code>. Import <code>gradients</code> and
                  pass the preset object, as above. This also works with the
                  beta’s TypeScript definitions.
                </dd>
              </div>
              <div>
                <dt>Flat color</dt>
                <dd>
                  <code>fill</code> replaces the original gradient. Turn off
                  noise for a clean silhouette, or keep it on for texture.
                </dd>
              </div>
              <div>
                <dt>Outline</dt>
                <dd>
                  Set <code>outline</code> and <code>outlineColor</code>. For an
                  empty interior, add <code>fill=&quot;transparent&quot;</code>,{" "}
                  <code>transparent</code>, and <code>{"noise={false}"}</code>.
                </dd>
              </div>
              <div>
                <dt>Transparency & blur</dt>
                <dd>
                  <code>transparent</code> removes the white base inside the
                  mask. <code>blur</code> changes the internal gradient artwork;
                  use CSS <code>filter: blur()</code> when you want to blur the
                  whole shape.
                </dd>
              </div>
            </dl>
            <a className={styles.inlineLink} href="/v2">
              Try more controls in the playground <ArrowUpRight size={15} />
            </a>
          </Section>
          <Section id="recipes" title="A few everyday recipes">
            <h3>A floating hero decoration</h3>
            <p>
              Keep decorative shapes clear of text and buttons. Animate a
              wrapper with a small drift, and let reduced-motion preferences
              turn the movement off.
            </p>
            <Code>{snippets.hero}</Code>
            <Code language="css">{snippets.motion}</Code>
            <h3>An avatar or category marker</h3>
            <p>
              Pick one shape for each person, team, or category and keep that
              choice stable. When adjacent text already names the item, hide the
              decorative SVG from screen readers.
            </p>
            <Code>{snippets.avatar}</Code>
            <h3>A shape that fits its card</h3>
            <p>
              The SVG scales without losing detail. Give it a class and let CSS
              control the width while preserving the aspect ratio.
            </p>
            <Code>{snippets.responsive}</Code>
            <Code language="css">{snippets.responsiveCss}</Code>
            <details className={styles.details}>
              <summary>Build a gallery from the whole collection</summary>
              <p>
                Generate valid names from the package’s category metadata. This
                includes all ten digits without relying on the old V1{" "}
                <code>shapes</code> export.
              </p>
              <Code>{snippets.grid}</Code>
            </details>
          </Section>
          <Section id="random" title="Random when you want it">
            <p>
              For a shuffle button, choose a valid name on click and store it in
              state. The initial shape stays the same on the server and browser,
              and unrelated renders don’t change it.
            </p>
            <div className={styles.randomDemo}>
              <PreviewShape name={randomName} size={96} />
              <code aria-live="polite">{randomName}</code>
              <button
                className={styles.button}
                onClick={() => {
                  const candidates = names.filter(
                    (name) => name !== randomName,
                  );
                  setRandomName(
                    candidates[Math.floor(Math.random() * candidates.length)],
                  );
                }}
              >
                <Shuffle size={14} /> Another shape
              </button>
            </div>
            <Code>{snippets.random}</Code>
            <details className={styles.details}>
              <summary>What about getRandomShape and the random prop?</summary>
              <p>
                <code>getRandomShape</code> returns data with <code>shape</code>
                , <code>index</code>, and <code>shapeId</code>. It does not
                return a React component. Pass <code>shapeId</code> as the
                component’s <code>name</code>.
              </p>
              <Code>{snippets.helper}</Code>
              <p>
                In beta.1, the helper can choose an invalid number index (10)
                and never picks zero. Use a non-number category or the
                valid-name recipe above. <code>{"random={true}"}</code> uses
                that helper and chooses again on render, so avoid it for
                server-rendered or stable UI. <code>onlyId: false</code> throws.
              </p>
            </details>
          </Section>
          <Section id="props" title="Props at a glance">
            <p>
              The most useful options for the global <code>Coolshape</code>{" "}
              component. Values below describe the published beta, including
              defaults that differ from the older README.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.propsTable}>
                <caption>Coolshape props in 2.0.0-beta.1</caption>
                <thead>
                  <tr>
                    <th>Prop / type</th>
                    <th>Default</th>
                    <th>Use it for</th>
                  </tr>
                </thead>
                <tbody>
                  {propRows.map(([name, type, value, description]) => (
                    <tr key={name}>
                      <td>
                        <code>{name}</code>
                        <small>{type}</small>
                      </td>
                      <td>{value}</td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
          <Section id="migration" title="Moving from V1">
            <ol>
              <li>
                <strong>Pin the beta.</strong> Install{" "}
                <code>coolshapes-react@2.0.0-beta.1</code>.
              </li>
              <li>
                <strong>Update the collection data.</strong> Replace the old{" "}
                <code>shapes</code> export with <code>shapeTypes</code> and{" "}
                <code>shapesCount</code>.
              </li>
              <li>
                <strong>Check indices.</strong> Non-number categories start at
                1. Digits remain 0–9; use <code>name=&quot;number-0&quot;</code> for zero.
              </li>
              <li>
                <strong>Update randomness.</strong> The helper returns data.
                Choose and store a name when you need a stable selection.
              </li>
              <li>
                <strong>Check your output.</strong> Review gradients, outlines,
                copied snippets, and repeated shapes in the browser.
              </li>
            </ol>
            <a
              className={styles.inlineLink}
              href="https://github.com/realvjy/coolshapes-react/tree/v1.0.1#readme"
            >
              Still on V1? Read the V1 documentation <ArrowUpRight size={15} />
            </a>
          </Section>
          <Section id="beta" title="A note on the beta">
            <p>
              V2 is published and usable, but a few details need care in{" "}
              <code>{packageVersion}</code>:
            </p>
            <ul>
              <li>
                Use named shapes for predictable output; missing selection props
                fall back to <code>star-1</code>.
              </li>
              <li>
                Use boolean noise values. Numeric values currently do not give
                you an adjustable grain-intensity control.
              </li>
              <li>
                Use preset objects from <code>gradients</code> in TypeScript.
                Preset strings work at runtime but the beta types are too
                narrow.
              </li>
              <li>
                Set outline color explicitly; the actual default is black.
              </li>
              <li>
                Use unique SVG IDs for repeated instances and the valid-name
                recipe for randomness across all categories.
              </li>
            </ul>
            <p>
              Found something else?{" "}
              <a href="https://github.com/realvjy/coolshapes-react/issues">
                Open an issue
              </a>{" "}
              with your version and a small example.
            </p>
          </Section>
          <Section id="agent-skill" title="A skill for your coding agent">
            <p>
              Give your agent the same working knowledge: the published package,
              valid shape names, customization recipes, SVG ID handling, and the
              beta’s limitations.
            </p>
            <div className={styles.skillCard}>
              <div>
                <FileText size={24} />
                <div>
                  <h3>coolshapes-react</h3>
                  <p>
                    SKILL.md <span>·</span> V2 beta <span>·</span> Markdown
                  </p>
                </div>
              </div>
              <div className={styles.skillActions}>
                <a
                  className={styles.button}
                  href="/skill.md"
                  download="SKILL.md"
                >
                  <Download size={14} /> Download skill
                </a>
                <CopyButton text={skill} label="Copy skill" />
                <a className={styles.inlineLink} href="/skill.md">
                  Read raw file <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
            <h3>Use it with your project</h3>
            <ol>
              <li>
                Download <code>SKILL.md</code> and add it to your agent’s
                project skills folder using the folder name{" "}
                <code>coolshapes-react</code>. You can also paste its contents
                alongside your request.
              </li>
              <li>
                Describe where you want shapes, which treatment fits your
                design, and whether they should move.
              </li>
              <li>
                Have the agent check the result in your project, including
                responsive layout and reduced motion when animation is used.
              </li>
            </ol>
            <Code
              language="prompt"
              label="A starting prompt"
            >{`Use the Coolshapes skill to add two decorative shapes to my hero.\nUse the published V2 beta, preserve my existing logo and layout,\nkeep the shapes clear of the text, and add a gentle CSS drift\nthat respects reduced-motion preferences.`}</Code>
          </Section>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
