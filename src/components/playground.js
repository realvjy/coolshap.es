"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  Coolshape,
  gradients,
  shapeTypes,
  shapesCount,
} from "coolshapes-react";
import {
  RiShuffleLine,
  RiDownloadLine,
  RiFileCopyLine,
  RiCheckLine,
} from "@remixicon/react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import styles from "./playground.module.css";

const names = shapeTypes.flatMap((type) =>
  Array.from(
    { length: shapesCount[type] },
    (_, i) => `${type}-${type === "number" ? i : i + 1}`,
  ),
);

export default function Playground({ initialShape }) {
  const [name, setName] = useState(
    names.includes(initialShape) ? initialShape : "flower-5",
  );
  const [size, setSize] = useState(180);
  const [mode, setMode] = useState("gradient");
  const [gradient, setGradient] = useState("");
  const [fill, setFill] = useState("#8cbcff");
  const [noise, setNoise] = useState(true);
  const [outline, setOutline] = useState(0);
  const [outlineColor, setOutlineColor] = useState("#8cbcff");
  const [join, setJoin] = useState("round");
  const [cap, setCap] = useState("round");
  const [blur, setBlur] = useState(0);
  const [transparent, setTransparent] = useState(false);
  const [notice, setNotice] = useState("");
  const timer = useRef(null);
  const preview = useRef(null);
  const id = useId().replace(/:/g, "");
  useEffect(() => () => clearTimeout(timer.current), []);
  const type = name.split("-")[0];
  const index = Number(name.split("-")[1]);
  const effectiveOutline =
    mode === "outline" ? Math.max(1, outline || 2) : outline;
  const props = { name, size, noise: mode === "outline" ? false : noise };
  if (mode === "gradient" && gradient) props.gradient = gradients[gradient];
  if (mode === "solid") props.fill = fill;
  if (mode === "outline") {
    props.fill = "transparent";
    props.transparent = true;
  } else if (transparent) props.transparent = true;
  if (effectiveOutline)
    Object.assign(props, {
      outline: effectiveOutline,
      outlineColor,
      outlineJoin: join,
      outlineCap: cap,
    });
  if (blur) props.blur = blur;
  const code = `import { Coolshape${mode === "gradient" && gradient ? ", gradients" : ""} } from "coolshapes-react";\n\n<Coolshape\n${Object.entries(
    props,
  )
    .map(
      ([key, value]) =>
        `  ${key}=${key === "gradient" ? `{gradients["${gradient}"]}` : typeof value === "string" ? JSON.stringify(value) : `{${value}}`}`,
    )
    .join("\n")}\n/>`;
  function notify(text) {
    setNotice(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNotice(""), 2500);
  }
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      notify("Code copied");
    } catch {
      notify("Couldn’t copy. Select the code below.");
    }
  }
  function downloadSvg() {
    const svg = preview.current?.querySelector("svg");
    if (!svg) return;
    const markup = new XMLSerializer().serializeToString(svg);
    const url = URL.createObjectURL(
      new Blob([markup], { type: "image/svg+xml" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `coolshapes-${name}.svg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("SVG downloaded");
  }
  function changeMode(value) {
    setMode(value);
    if (value === "outline" && !outline) setOutline(2);
  }
  return (
    <main className={styles.page}>
      <SiteHeader active="playground" />
      <div className={styles.heading}>
        <h1>A little playground.</h1>
        <p>Your shape. Your little twist.</p>
      </div>
      <div className={styles.workspace}>
        <section className={styles.previewPanel} aria-label="Shape preview">
          <div className={styles.previewTop}>
            <span>{name}</span>
            <button
              onClick={() => {
                const other = names.filter((item) => item !== name);
                setName(other[Math.floor(Math.random() * other.length)]);
              }}
              aria-label="Pick a random shape"
            >
              <RiShuffleLine size={16} />
            </button>
          </div>
          <div className={styles.canvas} ref={preview}>
            <Coolshape
              {...props}
              shapeId={`${name}-${id}`}
              aria-label={`${name} preview`}
            />
          </div>
          <div className={styles.previewActions}>
            <button className={styles.button} onClick={downloadSvg}>
              <RiDownloadLine size={14} /> Download SVG
            </button>
            <button onClick={copyCode}>
              {notice === "Code copied" ? (
                <RiCheckLine size={14} />
              ) : (
                <RiFileCopyLine size={14} />
              )}{" "}
              Copy React
            </button>
          </div>
          <p className={styles.notice} role="status">
            {notice}
          </p>
        </section>
        <section className={styles.controls} aria-label="Shape settings">
          <div className={styles.controlPair}>
            <label>
              Shape
              <select
                value={type}
                onChange={(e) =>
                  setName(
                    `${e.target.value}-${e.target.value === "number" ? 0 : 1}`,
                  )
                }
              >
                {shapeTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Variant
              <select
                value={index}
                onChange={(e) => setName(`${type}-${e.target.value}`)}
              >
                {Array.from({ length: shapesCount[type] }, (_, i) =>
                  type === "number" ? i : i + 1,
                ).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.segments} role="group" aria-label="Fill style">
            {["gradient", "solid", "outline"].map((value) => (
              <button
                key={value}
                aria-pressed={mode === value}
                onClick={() => changeMode(value)}
              >
                {value}
              </button>
            ))}
          </div>
          {mode === "gradient" && (
            <label>
              Gradient
              <select
                value={gradient}
                onChange={(e) => setGradient(e.target.value)}
              >
                <option value="">Original</option>
                {Object.keys(gradients).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </label>
          )}
          {mode === "solid" && (
            <label className={styles.color}>
              Fill
              <input
                type="color"
                value={fill}
                onChange={(e) => setFill(e.target.value)}
              />
              <span>{fill}</span>
            </label>
          )}
          <label className={styles.range}>
            Size <output>{size}px</output>
            <input
              type="range"
              aria-label="Size"
              min="40"
              max="320"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </label>
          <label className={styles.check}>
            Grain
            <input
              type="checkbox"
              checked={mode === "outline" ? false : noise}
              disabled={mode === "outline"}
              onChange={(e) => setNoise(e.target.checked)}
            />
          </label>
          <label className={styles.range}>
            Outline <output>{effectiveOutline}px</output>
            <input
              type="range"
              aria-label="Outline width"
              min={mode === "outline" ? 1 : 0}
              max="20"
              value={effectiveOutline}
              onChange={(e) => setOutline(Number(e.target.value))}
            />
          </label>
          {effectiveOutline > 0 && (
            <label className={styles.color}>
              Outline color
              <input
                type="color"
                value={outlineColor}
                onChange={(e) => setOutlineColor(e.target.value)}
              />
              <span>{outlineColor}</span>
            </label>
          )}
          <details className={styles.advanced}>
            <summary>A few more details</summary>
            <label className={styles.range}>
              Blur <output>{blur}px</output>
              <input
                type="range"
                aria-label="Blur"
                min="0"
                max="50"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
              />
            </label>
            <label className={styles.check}>
              Transparent background
              <input
                type="checkbox"
                disabled={mode === "outline"}
                checked={mode === "outline" || transparent}
                onChange={(e) => setTransparent(e.target.checked)}
              />
            </label>
            <div className={styles.controlPair}>
              <label>
                Line join
                <select value={join} onChange={(e) => setJoin(e.target.value)}>
                  {["round", "bevel", "miter"].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label>
                Line cap
                <select value={cap} onChange={(e) => setCap(e.target.value)}>
                  {["round", "butt", "square"].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
            </div>
          </details>
        </section>
      </div>
      <details className={styles.code}>
        <summary>React code</summary>
        <pre tabIndex={0}>
          <code>{code}</code>
        </pre>
      </details>
      <SiteFooter />
    </main>
  );
}
