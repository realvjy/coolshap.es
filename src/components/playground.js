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
  RiArrowRightUpLine,
} from "@remixicon/react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { SelectField, ChoicePills, Switch } from "./site-controls";
import { Range, Color } from "./tool-ui";
import ui from "./tool.module.css";
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
    <main className={ui.page}>
      <SiteHeader active="playground" />
      <div className={ui.content}>
        <div className={ui.heading}>
          <h1>Playground</h1>
          <div className={ui.actions}>
            <button
              className={ui.iconButton}
              onClick={copyCode}
              aria-label="Copy React code"
              title="Copy React code"
            >
              {notice === "Code copied" ? (
                <RiCheckLine size={16} />
              ) : (
                <RiFileCopyLine size={16} />
              )}
            </button>
            <button className={ui.primary} onClick={downloadSvg}>
              <RiDownloadLine size={15} /> Download SVG
            </button>
          </div>
        </div>

        <div className={ui.workspace}>
          <section className={ui.controls} aria-label="Shape settings">
            <div className={ui.group}>
              <div className={ui.groupHeading}>
                <h2>Shape</h2>
                <button
                  className={ui.iconButton}
                  onClick={() => {
                    const other = names.filter((item) => item !== name);
                    setName(other[Math.floor(Math.random() * other.length)]);
                  }}
                  aria-label="Shuffle shape"
                  title="Shuffle shape"
                >
                  <RiShuffleLine size={15} />
                </button>
              </div>
              <div className={styles.pair}>
                <label className={ui.field}>
                  Family
                  <SelectField
                    aria-label="Shape family"
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
                  </SelectField>
                </label>
                <label className={ui.field}>
                  Variant
                  <SelectField
                    aria-label="Variant"
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
                  </SelectField>
                </label>
              </div>
              <div className={ui.selection}>
                <span>{name}</span>
                <a href={`/icons?shape=${name}`}>
                  Make app icon <RiArrowRightUpLine size={11} />
                </a>
              </div>
            </div>

            <div className={ui.group}>
              <h2>Appearance</h2>
              <ChoicePills
                label="Fill style"
                compact
                value={mode}
                onChange={changeMode}
                options={[
                  { value: "gradient", label: "Gradient" },
                  { value: "solid", label: "Solid" },
                  { value: "outline", label: "Outline" },
                ]}
              />
              {mode === "gradient" && (
                <label className={ui.field}>
                  Gradient
                  <SelectField
                    aria-label="Gradient"
                    value={gradient}
                    onChange={(e) => setGradient(e.target.value)}
                  >
                    <option value="">Original</option>
                    {Object.keys(gradients).map((key) => (
                      <option key={key} value={key}>
                        {key.replace("gradient-", "Gradient ")}
                      </option>
                    ))}
                  </SelectField>
                </label>
              )}
              {mode === "solid" && (
                <Color label="Fill" value={fill} onChange={setFill} />
              )}
              <Switch
                label="Grain"
                checked={mode === "outline" ? false : noise}
                disabled={mode === "outline"}
                onChange={setNoise}
                between
              />
            </div>

            <div className={ui.group}>
              <h2>Adjust</h2>
              <Range
                label="Size"
                unit="px"
                min={40}
                max={320}
                value={size}
                onChange={setSize}
              />
              <Range
                label="Outline"
                unit="px"
                min={mode === "outline" ? 1 : 0}
                max={20}
                value={effectiveOutline}
                onChange={setOutline}
              />
              {effectiveOutline > 0 && (
                <Color
                  label="Outline color"
                  value={outlineColor}
                  onChange={setOutlineColor}
                />
              )}
              <details className={ui.position}>
                <summary>More details</summary>
                <div className={styles.more}>
                  <Range
                    label="Blur"
                    unit="px"
                    min={0}
                    max={50}
                    value={blur}
                    onChange={setBlur}
                  />
                  <Switch
                    label="Transparent background"
                    checked={mode === "outline" || transparent}
                    disabled={mode === "outline"}
                    onChange={setTransparent}
                    between
                  />
                  <div className={styles.pair}>
                    <label className={ui.field}>
                      Line join
                      <SelectField
                        aria-label="Line join"
                        value={join}
                        onChange={(e) => setJoin(e.target.value)}
                      >
                        {["round", "bevel", "miter"].map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </SelectField>
                    </label>
                    <label className={ui.field}>
                      Line cap
                      <SelectField
                        aria-label="Line cap"
                        value={cap}
                        onChange={(e) => setCap(e.target.value)}
                      >
                        {["round", "butt", "square"].map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </SelectField>
                    </label>
                  </div>
                </div>
              </details>
            </div>
          </section>

          <section className={ui.preview} aria-label="Shape preview">
            <div className={ui.previewTop}>
              <span className={styles.label}>{name}</span>
              <span className={styles.label}>{size}px</span>
            </div>
            <div className={styles.canvas} ref={preview}>
              <Coolshape
                {...props}
                shapeId={`${name}-${id}`}
                aria-label={`${name} preview`}
              />
            </div>
            <details className={styles.code}>
              <summary>React code</summary>
              <pre tabIndex={0}>
                <code>{code}</code>
              </pre>
            </details>
          </section>
        </div>
      </div>
      <SiteFooter />
      <div className={ui.toast} role="status">
        {notice}
      </div>
    </main>
  );
}
