"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Coolshape, gradients, shapeTypes } from "coolshapes-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  RiDownloadLine,
  RiLink,
  RiRefreshLine,
  RiShuffleLine,
  RiCloseLine,
  RiCheckLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { SearchField, Switch, ChoicePills, SelectField } from "./site-controls";
import {
  defaults,
  palettes,
  normalizeSettings,
  shapeNames,
  settingsQuery,
  geometry,
  androidViewport,
} from "@/lib/icon-maker.mjs";
import { Range, Color } from "./tool-ui";
import styles from "./tool.module.css";

const storageKey = "coolshapes-icon-v1";
const exportOptions = [
  ["png", "PNG image", "1024 × 1024"],
  ["svg", "Editable SVG", "Vector artwork"],
  ["ios", "iOS", "App icon asset catalog"],
  ["android", "Android", "Adaptive + themed icons"],
  ["web", "Web", "Favicons + PWA icons"],
];

function shapeProps(s) {
  return {
    name: s.shape,
    noise: s.noise,
    ...(s.mode === "solid"
      ? { fill: s.fill }
      : s.mode === "gradient"
        ? { gradient: gradients[s.gradient] }
        : {}),
  };
}

function Shape({ settings, mono = false }) {
  const id = useId().replace(/:/g, "");
  return (
    <Coolshape
      {...shapeProps(settings)}
      {...(mono ? { fill: "#ffffff", noise: false, gradient: undefined } : {})}
      size={200}
      shapeId={`icon-shape-${id}`}
      aria-hidden="true"
    />
  );
}

function Artwork({
  settings,
  target,
  size,
  guide = false,
  mask = "rounded",
  mono = false,
}) {
  const id = `icon-bg-${useId().replace(/:/g, "")}`;
  const box = geometry(
    settings,
    target === "android" ? "android" : target === "web" ? "maskable" : "image",
  );
  return (
    <svg
      width={size}
      height={size}
      viewBox={target === "android" ? androidViewport : "0 0 1024 1024"}
      className={styles.artwork}
      style={{
        borderRadius:
          target === "web" ? "18%" : mask === "circle" ? "50%" : "23%",
      }}
      role="img"
      aria-label={`${settings.shape} ${target} icon preview`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={settings.color} />
          <stop offset="1" stopColor={settings.color2} />
        </linearGradient>
      </defs>
      <rect
        width="1024"
        height="1024"
        fill={
          mono
            ? "#dcebe2"
            : settings.background === "gradient"
              ? `url(#${id})`
              : settings.color
        }
      />
      <g
        transform={`translate(${box.left} ${box.top}) scale(${box.size / 200})`}
      >
        {mono ? (
          <Coolshape
            name={settings.shape}
            shapeId={`${id}-mono`}
            fill="#254a39"
            noise={false}
            size={200}
          />
        ) : (
          <Shape settings={settings} />
        )}
      </g>
      {guide && target !== "ios" && (
        <circle
          cx="512"
          cy="512"
          r={target === "android" ? (1024 * 33) / 108 : 409.6}
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="10 10"
          style={{ filter: "drop-shadow(0 1px 2px #000)" }}
        />
      )}
    </svg>
  );
}

export default function IconMaker({ initialSettings = {} }) {
  const [settings, setSettings] = useState(() =>
    normalizeSettings(initialSettings),
  );
  const [ready, setReady] = useState(false);
  const [category, setCategory] = useState("flower");
  const [query, setQuery] = useState("");
  const [target, setTarget] = useState("ios");
  const [mask, setMask] = useState("rounded");
  const [guide, setGuide] = useState(false);
  const [mono, setMono] = useState(false);
  const [format, setFormat] = useState("png");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const source = useRef(null);
  const monoSource = useRef(null);
  const dialog = useRef(null);
  const noticeTimer = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let value = normalizeSettings(initialSettings);
    if (!Object.keys(initialSettings).length) {
      try {
        value = normalizeSettings(
          JSON.parse(localStorage.getItem(storageKey)) || defaults,
        );
      } catch {}
    }
    setSettings(value);
    setCategory(value.shape.split("-")[0]);
    setReady(true);
    // Restore once; subsequent edits belong to this editor session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(settings));
      } catch {}
    }
  }, [ready, settings]);
  useEffect(() => () => clearTimeout(noticeTimer.current), []);

  const change = (patch) =>
    setSettings((old) => normalizeSettings({ ...old, ...patch }));
  const filtered = shapeNames.filter(
    (name) =>
      (category === "all" || name.startsWith(`${category}-`)) &&
      name.includes(query.toLowerCase().trim().replace(/\s+/g, "-")),
  );
  const fitted = geometry(
    settings,
    target === "android" ? "android" : target === "web" ? "maskable" : "image",
  ).fitted;
  function notify(message) {
    setNotice(message);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(""), 4000);
  }
  async function share() {
    const url = new URL("/icons", window.location.origin);
    url.search = settingsQuery(settings);
    try {
      await navigator.clipboard.writeText(url.href);
      notify("Link copied");
    } catch {
      notify("Copy unavailable. Your settings are saved on this device.");
    }
  }
  function shuffle() {
    const pool = shapeNames.filter((name) => name !== settings.shape);
    const shape = pool[Math.floor(Math.random() * pool.length)];
    change({ shape });
    setCategory(shape.split("-")[0]);
    setQuery("");
  }
  async function download() {
    if (busy) return;
    setBusy(true);
    try {
      const { downloadIcon } = await import("@/lib/icon-download");
      const serialize = (ref) =>
        new XMLSerializer().serializeToString(ref.current.querySelector("svg"));
      await downloadIcon(
        format,
        settings,
        serialize(source),
        serialize(monoSource),
      );
      dialog.current.close();
      notify("Your icon is ready. Download started.");
    } catch (error) {
      notify("Couldn’t export. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className={styles.page}>
      <SiteHeader active="icons" />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>Cool Icon Maker</h1>
          <div className={styles.actions}>
            <button
              className={styles.iconButton}
              onClick={share}
              aria-label="Copy icon link"
              title="Copy link"
            >
              <RiLink size={17} />
            </button>
            <button
              className={styles.primary}
              onClick={() => {
                setFormat(target === "ios" ? "png" : target);
                dialog.current.showModal();
              }}
            >
              <RiDownloadLine size={15} /> Download
            </button>
          </div>
        </div>

        <div className={styles.workspace}>
          <section className={styles.controls} aria-label="Icon settings">
            <div className={styles.group}>
              <div className={styles.groupHeading}>
                <h2>Shape</h2>
                <button
                  className={styles.iconButton}
                  onClick={shuffle}
                  aria-label="Shuffle shape"
                  title="Shuffle shape"
                >
                  <RiShuffleLine size={15} />
                </button>
              </div>
              <div className={styles.pickerTools}>
                <SelectField
                  aria-label="Shape family"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">All shapes</option>
                  {shapeTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </SelectField>
                <SearchField
                  value={query}
                  onChange={(value) => {
                    setQuery(value);
                    setCategory("all");
                  }}
                />
              </div>
              <div className={styles.shapes} aria-label="Choose a shape">
                {filtered.map((shape) => (
                  <button
                    key={shape}
                    aria-label={`Use ${shape}`}
                    aria-pressed={settings.shape === shape}
                    onClick={() => change({ shape })}
                  >
                    <Coolshape
                      name={shape}
                      size={36}
                      noise={false}
                      shapeId={`picker-${shape}`}
                      aria-hidden="true"
                    />
                  </button>
                ))}
                {!filtered.length && (
                  <p className={styles.empty}>No shapes found.</p>
                )}
              </div>
              <div className={styles.selection}>
                <span>{settings.shape}</span>
                <a href={`/v2?shape=${settings.shape}`}>
                  Playground <RiArrowRightUpLine size={11} />
                </a>
              </div>
            </div>

            <div className={styles.group}>
              <h2>Appearance</h2>
              <ChoicePills
                label="Shape appearance"
                compact
                value={settings.mode}
                onChange={(mode) => change({ mode })}
                options={[
                  { value: "original", label: "Original" },
                  { value: "gradient", label: "Gradient" },
                  { value: "solid", label: "Solid" },
                ]}
              />
              {settings.mode === "gradient" && (
                <label className={styles.field}>
                  Gradient
                  <SelectField
                    aria-label="Gradient"
                    value={settings.gradient}
                    onChange={(e) => change({ gradient: e.target.value })}
                  >
                    {Object.keys(gradients).map((key) => (
                      <option key={key} value={key}>
                        {key.replace("gradient-", "Gradient ")}
                      </option>
                    ))}
                  </SelectField>
                </label>
              )}
              {settings.mode === "solid" && (
                <Color
                  label="Shape color"
                  value={settings.fill}
                  onChange={(fill) => change({ fill })}
                />
              )}
              <Switch
                label="Grain"
                checked={settings.noise}
                onChange={(noise) => change({ noise })}
                between
              />
            </div>

            <div className={styles.group}>
              <div className={styles.groupHeading}>
                <h2>Background</h2>
                <ChoicePills
                  label="Background style"
                  compact
                  value={settings.background}
                  onChange={(background) => change({ background })}
                  options={[
                    { value: "solid", label: "Solid" },
                    { value: "gradient", label: "Gradient" },
                  ]}
                />
              </div>
              <div className={styles.swatches}>
                {palettes.map(([label, color, color2]) => (
                  <button
                    key={label}
                    title={label}
                    aria-label={`${label} background`}
                    aria-pressed={
                      settings.color === color && settings.color2 === color2
                    }
                    style={{
                      background:
                        settings.background === "gradient"
                          ? `linear-gradient(135deg,${color},${color2})`
                          : color,
                    }}
                    onClick={() => change({ color, color2 })}
                  >
                    {settings.color === color && settings.color2 === color2 && (
                      <RiCheckLine
                        size={14}
                        color={
                          label === "Ink" || label === "Midnight"
                            ? "#fff"
                            : "#222"
                        }
                      />
                    )}
                  </button>
                ))}
              </div>
              <Color
                label={settings.background === "gradient" ? "From" : "Color"}
                value={settings.color}
                onChange={(color) => change({ color })}
              />
              {settings.background === "gradient" && (
                <Color
                  label="To"
                  value={settings.color2}
                  onChange={(color2) => change({ color2 })}
                />
              )}
            </div>

            <div className={styles.group}>
              <Range
                label="Shape size"
                min={30}
                max={90}
                value={settings.scale}
                onChange={(scale) => change({ scale })}
              />
              <details className={styles.position}>
                <summary>Position</summary>
                <Range
                  label="Horizontal"
                  min={-20}
                  max={20}
                  value={settings.x}
                  onChange={(x) => change({ x })}
                />
                <Range
                  label="Vertical"
                  min={-20}
                  max={20}
                  value={settings.y}
                  onChange={(y) => change({ y })}
                />
              </details>
              <button
                className={styles.reset}
                onClick={() => {
                  setSettings({ ...defaults, shape: settings.shape });
                  setMono(false);
                }}
              >
                <RiRefreshLine size={12} /> Reset style
              </button>
            </div>
          </section>

          <section className={styles.preview} aria-label="Live icon preview">
            <div className={styles.previewTop}>
              <ChoicePills
                label="Preview platform"
                compact
                value={target}
                onChange={setTarget}
                options={[
                  { value: "ios", label: "iOS" },
                  { value: "android", label: "Android" },
                  { value: "web", label: "Web" },
                ]}
              />
            </div>
            <motion.div
              className={styles.stage}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.35 }}
            >
              <Artwork
                settings={settings}
                target={target}
                size={256}
                guide={guide}
                mask={target === "android" ? mask : "rounded"}
                mono={target === "android" && mono}
              />
              <span className={styles.appName}>Your little app</span>
            </motion.div>
            <div className={styles.previewOptions}>
              {target === "android" && (
                <>
                  <ChoicePills
                    label="Android mask"
                    compact
                    value={mask}
                    onChange={setMask}
                    options={[
                      { value: "rounded", label: "Rounded" },
                      { value: "circle", label: "Circle" },
                    ]}
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={mono}
                      onChange={(e) => setMono(e.target.checked)}
                    />{" "}
                    Themed
                  </label>
                </>
              )}
              {target !== "ios" && (
                <label>
                  <input
                    type="checkbox"
                    checked={guide}
                    onChange={(e) => setGuide(e.target.checked)}
                  />{" "}
                  Safe area
                </label>
              )}
              {target === "ios" && (
                <span>Rounded here. Full square in your download.</span>
              )}
            </div>
            <div className={styles.scaleStrip}>
              {[64, 40, 24].map((size) => (
                <div key={size}>
                  <Artwork
                    settings={settings}
                    target={target}
                    size={size}
                    mask={target === "android" ? mask : "rounded"}
                    mono={target === "android" && mono}
                  />
                  <span>{size}px</span>
                </div>
              ))}
            </div>
            <p className={styles.previewNote}>
              {fitted
                ? "Fitted to the safe area for this platform."
                : target === "web"
                  ? "Maskable PWA preview. Favicons use your full composition."
                  : target === "android"
                    ? "Ready for different launcher shapes."
                    : "A flat icon, ready for your asset catalog."}
            </p>
          </section>
        </div>
        <p className={styles.saved}>
          Made in your browser. Saved on this device.
        </p>
      </div>
      <SiteFooter />
      <div hidden ref={source}>
        <Shape settings={settings} />
      </div>
      <div hidden ref={monoSource}>
        <Shape settings={settings} mono />
      </div>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby="icon-download-title"
        onClick={(e) => {
          if (e.target === e.currentTarget && !busy) dialog.current.close();
        }}
        onCancel={(e) => {
          if (busy) e.preventDefault();
        }}
      >
        <div className={styles.dialogHeading}>
          <div>
            <h2 id="icon-download-title">Take your icon.</h2>
          </div>
          <button
            className={styles.iconButton}
            disabled={busy}
            aria-label="Close download"
            onClick={() => dialog.current.close()}
          >
            <RiCloseLine size={18} />
          </button>
        </div>
        <fieldset className={styles.formats} disabled={busy}>
          <legend>Choose a format</legend>
          {exportOptions.map(([value, title, description]) => (
            <label key={value}>
              <input
                type="radio"
                name="icon-format"
                value={value}
                checked={format === value}
                onChange={() => setFormat(value)}
              />
              <span>
                {title}
                <small>{description}</small>
              </span>
            </label>
          ))}
        </fieldset>
        <button className={styles.primary} disabled={busy} onClick={download}>
          <RiDownloadLine size={15} />
          {busy
            ? "Making your icons…"
            : format === "png" || format === "svg"
              ? `Download ${format.toUpperCase()}`
              : "Download icon pack"}
        </button>
        <p className={styles.downloadNote}>
          {format === "ios"
            ? "Flat artwork · 1024px · No Icon Composer layers"
            : format === "android"
              ? "PNG layers · 5 densities · Setup notes included"
              : format === "web"
                ? "ICO, SVG, PNGs + manifest · Setup notes included"
                : "Full square composition, without the preview mask"}
        </p>
        <p className={styles.dialogStatus} role="status">
          {notice}
        </p>
      </dialog>
      <div className={styles.toast} role="status">
        {notice}
      </div>
    </main>
  );
}
