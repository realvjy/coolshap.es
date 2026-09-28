"use client";

import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Coolshape, shapeTypes, shapesCount } from "coolshapes-react";
import {
  RiArrowDownLine as ArrowDown,
  RiArrowLeftSLine as ArrowLeft,
  RiArrowRightSLine as ArrowRight,
  RiArrowRightUpLine as ArrowUpRight,
  RiCheckLine as Check,
  RiFileCopyLine as Copy,
  RiDownloadLine as Download,
  RiCloseLine as X,
} from "@remixicon/react";
import { GoogleTagManager } from "@next/third-parties/google";
import styles from "./homepage.module.css";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { SearchField, Switch, ChoicePills } from "./site-controls";

const families = {
  star: ["Stars", "Star"],
  triangle: ["Triangles", "Triangle"],
  moon: ["Moons", "Moon"],
  polygon: ["Polygons", "Polygon"],
  flower: ["Flowers", "Flower"],
  rectangle: ["Rectangles", "Rectangle"],
  ellipse: ["Ellipses", "Ellipse"],
  wheel: ["Wheels", "Wheel"],
  misc: ["Misc", "Misc"],
  number: ["Numbers", "Number"],
};

// Canonical catalogue order gives every shape a stable serial number.
const allShapes = shapeTypes
  .flatMap((type) =>
    Array.from({ length: shapesCount[type] }, (_, i) => ({
      type,
      index: type === "number" ? i : i + 1,
    })),
  )
  .map((shape, i) => ({ ...shape, serial: i + 1 }));

// "All" interleaves families so the first rows show the whole range.
const mixedShapes = (() => {
  const queues = shapeTypes
    .filter((type) => type !== "number")
    .map((type) => allShapes.filter((shape) => shape.type === type));
  const mixed = [];
  while (queues.some((queue) => queue.length)) {
    queues.forEach((queue) => queue.length && mixed.push(queue.shift()));
  }
  return [...mixed, ...allShapes.filter((shape) => shape.type === "number")];
})();

const exhibits = [
  ["flower", 5],
  ["star", 1],
  ["wheel", 4],
  ["moon", 8],
  ["polygon", 3],
  ["misc", 4],
  ["ellipse", 9],
  ["triangle", 6],
].map(([type, index]) =>
  allShapes.find((shape) => shape.type === type && shape.index === index),
);

const filters = [
  { id: "all", label: "All", count: allShapes.length },
  ...shapeTypes.map((type) => ({
    id: type,
    label: families[type][0],
    count: shapesCount[type],
  })),
];

const keyOf = (shape) => `${shape.type}-${shape.index}`;
const nameOf = (shape) => `${families[shape.type][1]} ${shape.index}`;
const serialOf = (shape) => String(shape.serial).padStart(3, "0");

const ease = [0.2, 0.8, 0.2, 1];
const glide = { type: "spring", bounce: 0.14, duration: 0.6 };

// Tilt a shape toward the cursor. CSS reads these variables, so hover stays
// on the compositor and React never re-renders while the mouse moves.
function tiltMove(event) {
  if (event.pointerType !== "mouse") return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--rx", `${(y * -18).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
  el.style.setProperty("--tx", `${(x * 8).toFixed(1)}px`);
  el.style.setProperty("--ty", `${(y * 8).toFixed(1)}px`);
}

function tiltReset(event) {
  for (const name of ["--rx", "--ry", "--tx", "--ty"]) {
    event.currentTarget.style.removeProperty(name);
  }
}

// Fly a copy of an SVG between two boxes (FLIP). The copy lives inside the
// open dialog so it draws above the backdrop.
function fly(layer, svg, from, to, duration) {
  const copy = svg.cloneNode(true);
  copy.removeAttribute("class");
  Object.assign(copy.style, {
    position: "fixed",
    left: `${to.left}px`,
    top: `${to.top}px`,
    width: `${to.width}px`,
    height: `${to.height}px`,
    margin: "0",
    zIndex: "5",
    pointerEvents: "none",
    transformOrigin: "0 0",
    filter: "var(--cs-shape-shadow)",
  });
  layer.appendChild(copy);
  const flight = copy.animate(
    [
      {
        transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width})`,
      },
      { transform: "none" },
    ],
    { duration, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
  );
  return flight.finished.catch(() => {}).then(() => copy.remove());
}

function Shape({ type, index, noise = true, size = 160 }) {
  const id = useId().replace(/:/g, "");
  return (
    <Coolshape
      name={`${type}-${index}`}
      shapeId={`${type}-${index}-${id}`}
      noise={noise}
      size={size}
      aria-hidden="true"
    />
  );
}

function Exhibit({ onOpen }) {
  const reducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const shape = exhibits[current];

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      if (!document.hidden) setCurrent((i) => (i + 1) % exhibits.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <button
      type="button"
      className={styles.exhibit}
      onClick={(event) => {
        const shapes = event.currentTarget.querySelectorAll("[data-art]");
        onOpen(shape, shapes[shapes.length - 1]);
      }}
      onPointerMove={reducedMotion ? undefined : tiltMove}
      onPointerLeave={tiltReset}
      aria-label={`Open ${nameOf(shape)}`}
    >
      <span className={styles.exhibitStage}>
        <span className={styles.exhibitFloat}>
          <span className={styles.exhibitTilt}>
            <AnimatePresence initial={false}>
              <motion.span
                key={keyOf(shape)}
                className={styles.exhibitShape}
                data-art
                initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
                transition={{ duration: 1, ease }}
              >
                <Shape {...shape} size={220} />
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <span className={styles.exhibitShadow} aria-hidden="true" />
      </span>
      <span className={styles.exhibitCaption} key={keyOf(shape)}>
        <span>No. {serialOf(shape)}</span>
        <span>{nameOf(shape)}</span>
      </span>
    </button>
  );
}

const Tile = memo(
  forwardRef(function Tile({ shape, index, noise, tilt, onOpen }, ref) {
    return (
      <motion.button
        ref={ref}
        layout="position"
        type="button"
        data-shape={keyOf(shape)}
        className={styles.tile}
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
        transition={{
          layout: glide,
          default: { duration: 0.6, ease, delay: Math.min(index, 28) * 0.014 },
        }}
        onClick={(event) =>
          onOpen(shape, event.currentTarget.querySelector("[data-art]"))
        }
        onPointerMove={tilt ? tiltMove : undefined}
        onPointerLeave={tiltReset}
        aria-label={`Open ${nameOf(shape)}`}
      >
        <span className={styles.tileArt} data-art>
          <Shape {...shape} noise={noise} size={120} />
        </span>
        <span className={styles.tileMeta} aria-hidden="true">
          <span>{nameOf(shape)}</span>
          <span>{serialOf(shape)}</span>
        </span>
      </motion.button>
    );
  }),
);

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function Homepage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [noise, setNoise] = useState(true);
  const [selected, setSelected] = useState(null);
  const [notice, setNotice] = useState("");
  const [exporting, setExporting] = useState(false);
  const [stepped, setStepped] = useState(false);
  const reducedMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const previewRef = useRef(null);
  const searchRef = useRef(null);
  const noticeTimer = useRef(null);
  const flightRef = useRef(null);
  const liftedRef = useRef(new Set());
  const closingRef = useRef(false);
  const selectedRef = useRef(null);
  const reducedRef = useRef(reducedMotion);
  selectedRef.current = selected;
  reducedRef.current = reducedMotion;
  const isOpen = selected !== null;

  const search = query.toLowerCase().trim();
  const filtered = (category === "all" ? mixedShapes : allShapes).filter(
    (shape) =>
      (category === "all" || shape.type === category) &&
      `${families[shape.type].join(" ")} ${shape.type}-${shape.index} ${shape.index} ${serialOf(shape)}`
        .toLowerCase()
        .includes(search),
  );
  const browseList = selected
    ? filtered.some((shape) => keyOf(shape) === keyOf(selected))
      ? filtered
      : mixedShapes
    : filtered;
  const position = selected
    ? browseList.findIndex((shape) => keyOf(shape) === keyOf(selected))
    : -1;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    dialog.showModal();
    dialog.querySelector(`.${styles.close}`)?.focus();
    document.body.style.overflow = "hidden";

    // Lift the clicked shape out of the page and land it on the stage.
    const flight = flightRef.current;
    flightRef.current = null;
    const target = previewRef.current?.querySelector("svg");
    const source = flight?.holder?.querySelector("svg");
    if (flight && source && target && !reducedRef.current) {
      const from = source.getBoundingClientRect();
      if (from.width > 0) {
        target.style.visibility = "hidden";
        flight.holder.style.visibility = "hidden";
        liftedRef.current.add(flight.holder);
        fly(dialog, source, from, target.getBoundingClientRect(), 620).then(
          () => (target.style.visibility = ""),
        );
      }
    }
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(event) {
      const typing = /input|textarea|select/i.test(
        document.activeElement?.tagName,
      );
      if (event.key === "/" && !typing && !isOpen) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => () => clearTimeout(noticeTimer.current), []);

  function notify(message) {
    setNotice(message);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(""), 2400);
  }
  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      notify(message);
    } catch {
      notify("Copy unavailable — try downloading instead");
    }
  }
  const restoreLifted = useCallback(() => {
    liftedRef.current.forEach((el) => (el.style.visibility = ""));
    liftedRef.current.clear();
  }, []);

  const openShape = useCallback((shape, holder) => {
    if (closingRef.current) return;
    flightRef.current = holder ? { holder } : null;
    setStepped(false);
    setSelected(shape);
  }, []);

  const closeDialog = useCallback(() => {
    const dialog = dialogRef.current;
    const current = selectedRef.current;
    if (closingRef.current || !dialog || !current) return;
    closingRef.current = true;
    dialog.classList.add(styles.closing);

    // Fly home to the tile when it is on screen; otherwise just fade.
    const holder = document.querySelector(
      `[data-shape="${keyOf(current)}"] [data-art]`,
    );
    const home = holder?.querySelector("svg")?.getBoundingClientRect();
    const stage = previewRef.current?.querySelector("svg");
    const onScreen =
      home && home.width > 0 && home.bottom > 56 && home.top < innerHeight;
    let landed;
    if (stage && onScreen && !reducedRef.current) {
      holder.style.visibility = "hidden";
      liftedRef.current.add(holder);
      const from = stage.getBoundingClientRect();
      stage.style.visibility = "hidden";
      landed = fly(dialog, stage, from, home, 520);
    } else {
      landed = new Promise((resolve) => setTimeout(resolve, 200));
    }
    landed.then(() => {
      restoreLifted();
      closingRef.current = false;
      setSelected(null);
    });
  }, [restoreLifted]);

  function step(direction) {
    if (!browseList.length || closingRef.current) return;
    const next =
      (Math.max(position, 0) + direction + browseList.length) %
      browseList.length;
    restoreLifted();
    setStepped(true);
    setSelected(browseList[next]);
  }
  function getSvg() {
    const svg = previewRef.current.querySelector("svg").cloneNode(true);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "800");
    svg.setAttribute("height", "800");
    svg.removeAttribute("aria-hidden");
    return new XMLSerializer().serializeToString(svg);
  }
  function downloadSvg() {
    saveBlob(
      new Blob([getSvg()], { type: "image/svg+xml" }),
      `coolshapes-${keyOf(selected)}.svg`,
    );
    notify("SVG downloaded");
  }
  async function downloadPng() {
    setExporting(true);
    const url = URL.createObjectURL(
      new Blob([getSvg()], { type: "image/svg+xml;charset=utf-8" }),
    );
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1600;
      canvas.getContext("2d").drawImage(image, 0, 0, 1600, 1600);
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png"),
      );
      if (!blob) throw new Error("PNG export failed");
      saveBlob(blob, `coolshapes-${keyOf(selected)}.png`);
      notify("PNG downloaded");
    } catch {
      notify("PNG export failed — try the SVG");
    } finally {
      URL.revokeObjectURL(url);
      setExporting(false);
    }
  }
  function chooseCategory(next) {
    setCategory(next);
    // Keep the grid's first row in view once the index bar is pinned.
    const collection = document.getElementById("collection");
    if (collection && collection.getBoundingClientRect().top < 0) {
      collection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const snippet = selected
    ? `import { Coolshape } from "coolshapes-react";\n\n<Coolshape name="${keyOf(selected)}" size={120}${noise ? "" : " noise={false}"} />`
    : "";

  return (
    <main className={styles.page}>
      <GoogleTagManager gtmId="GTM-5RDFZ5TN" />
      <a className={styles.skip} href="#collection">
        Skip to shapes
      </a>
      <SiteHeader active="shapes" />

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            <span className={styles.pulse} aria-hidden="true" />
            {allShapes.length} shapes · {shapeTypes.length} families · Free
          </p>
          <h1>
            Little shapes,
            <br />
            <em>with a little grain.</em>
          </h1>
          <p className={styles.lede}>
            Abstract gradient shapes for interfaces, decks, avatars and
            everything in between. Download them, or drop them into React.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primary} href="#collection">
              Browse shapes <ArrowDown size={14} aria-hidden="true" />
            </a>
            <button
              type="button"
              className={styles.install}
              onClick={() =>
                copyText(
                  "npm i coolshapes-react@beta",
                  "Install command copied",
                )
              }
              aria-label="Copy npm install command"
            >
              <code>npm i coolshapes-react@beta</code>
              <Copy size={12} aria-hidden="true" />
            </button>
          </div>
        </div>
        <Exhibit onOpen={openShape} />
      </section>

      <div className={styles.indexBar}>
        <div className={styles.indexInner}>
          <ChoicePills
            className={styles.categories}
            label="Shape family"
            value={category}
            onChange={chooseCategory}
            options={filters.map(({ id, label, count }) => ({
              value: id,
              label,
              count,
            }))}
          />
          <div className={styles.tools}>
            <SearchField
              ref={searchRef}
              value={query}
              onChange={setQuery}
              title="Search ( / )"
            />
            <Switch label="Grain" checked={noise} onChange={setNoise} />
          </div>
        </div>
      </div>

      <section
        id="collection"
        className={styles.collection}
        aria-label="Shapes"
      >
        <p className={styles.visuallyHidden} role="status">
          {filtered.length} shapes
        </p>
        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((shape, i) => (
              <Tile
                key={keyOf(shape)}
                shape={shape}
                index={i}
                noise={noise}
                tilt={!reducedMotion}
                onOpen={openShape}
              />
            ))}
          </AnimatePresence>
        </div>
        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>Nothing matches “{query}”.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Show all shapes
            </button>
          </div>
        )}
      </section>

      <SiteFooter />

      {selected && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          onCancel={(event) => {
            event.preventDefault();
            closeDialog();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
          onKeyDown={(event) => {
            if (event.target.tagName === "INPUT") return;
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
          }}
          aria-labelledby="shape-dialog-title"
        >
          <div className={styles.sheet}>
            <div ref={previewRef} className={styles.stage}>
              <span
                className={`${styles.stageShape} ${stepped ? styles.stageStep : ""}`}
                key={keyOf(selected)}
              >
                <Shape {...selected} noise={noise} size={240} />
              </span>
              <span className={styles.stageSerial}>
                No. {serialOf(selected)}
              </span>
            </div>
            <div className={styles.details}>
              <div className={styles.detailsTop}>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous shape"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span>
                    {position + 1} / {browseList.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next shape"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
                <button
                  type="button"
                  className={styles.close}
                  onClick={closeDialog}
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className={styles.titleBlock}>
                <p>{families[selected.type][0]}</p>
                <h2 id="shape-dialog-title">{nameOf(selected)}</h2>
              </div>

              <div className={styles.row}>
                <span>Grain</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={noise}
                  aria-label="Grain texture"
                  className={styles.switch}
                  onClick={() => setNoise(!noise)}
                >
                  <span />
                </button>
              </div>

              <div className={styles.downloads}>
                <button
                  type="button"
                  className={styles.primary}
                  onClick={downloadSvg}
                >
                  <Download size={14} aria-hidden="true" /> SVG
                </button>
                <button
                  type="button"
                  className={styles.secondary}
                  onClick={downloadPng}
                  disabled={exporting}
                >
                  <Download size={14} aria-hidden="true" />
                  {exporting ? "Exporting…" : "PNG"}
                </button>
                <button
                  type="button"
                  className={styles.secondary}
                  onClick={() => copyText(getSvg(), "SVG copied")}
                >
                  <Copy size={13} aria-hidden="true" /> Copy
                </button>
              </div>

              <div className={styles.code}>
                <div className={styles.codeHead}>
                  <span>React</span>
                  <button
                    type="button"
                    onClick={() => copyText(snippet, "Snippet copied")}
                    aria-label="Copy React snippet"
                  >
                    <Copy size={12} aria-hidden="true" /> Copy
                  </button>
                </div>
                <pre>
                  <code>{snippet}</code>
                </pre>
              </div>

              <a
                className={styles.playgroundLink}
                href={`/v2?shape=${keyOf(selected)}`}
              >
                Customize in playground
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a
                className={styles.playgroundLink}
                href={`/icons?shape=${keyOf(selected)}`}
              >
                Make app icon
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles.dialogNotice} role="status">
            {notice && (
              <>
                <Check size={13} aria-hidden="true" /> {notice}
              </>
            )}
          </div>
        </dialog>
      )}

      <div className={styles.toast} role="status">
        {notice && !selected && (
          <>
            <Check size={14} aria-hidden="true" />
            {notice}
          </>
        )}
      </div>
    </main>
  );
}
