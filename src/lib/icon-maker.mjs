import { shapeTypes, shapesCount } from "coolshapes-react";

export const shapeNames = shapeTypes.flatMap((type) =>
  Array.from(
    { length: shapesCount[type] },
    (_, i) => `${type}-${type === "number" ? i : i + 1}`,
  ),
);
export const defaults = Object.freeze({
  shape: "flower-5",
  mode: "original",
  gradient: "gradient-1",
  fill: "#fff3d6",
  noise: true,
  background: "solid",
  color: "#252840",
  color2: "#63557e",
  scale: 62,
  x: 0,
  y: 0,
});
export const palettes = [
  ["Midnight", "#252840", "#63557e"],
  ["Cream", "#f4e9d4", "#e5cdbd"],
  ["Lilac", "#e1d9f3", "#ac9ecf"],
  ["Mint", "#dcebe2", "#92bca6"],
  ["Rose", "#f0dce1", "#d99cae"],
  ["Ink", "#17191e", "#454954"],
];
const colorPattern = /^#[\da-f]{6}$/i;

// Only known, bounded values can reach SVG markup or a share link.
export function normalizeSettings(input = {}) {
  if (!input || typeof input !== "object") input = {};
  const result = { ...defaults };
  if (shapeNames.includes(input.shape)) result.shape = input.shape;
  if (["original", "gradient", "solid"].includes(input.mode))
    result.mode = input.mode;
  if (/^gradient-([1-9]|[1-9]\d|10\d|11[0-5])$/.test(input.gradient))
    result.gradient = input.gradient;
  if (["solid", "gradient"].includes(input.background))
    result.background = input.background;
  for (const key of ["fill", "color", "color2"])
    if (colorPattern.test(input[key])) result[key] = input[key];
  if (input.noise === false || input.noise === "false") result.noise = false;
  for (const [key, min, max] of [
    ["scale", 30, 90],
    ["x", -20, 20],
    ["y", -20, 20],
  ]) {
    if (
      input[key] !== undefined &&
      input[key] !== "" &&
      Number.isFinite(Number(input[key]))
    )
      result[key] = Math.max(min, Math.min(max, Number(input[key])));
  }
  return result;
}

export function settingsQuery(settings) {
  return new URLSearchParams({
    v: "1",
    ...normalizeSettings(settings),
  }).toString();
}

export function geometry(settings, target = "image") {
  let scale = settings.scale / 100;
  let x = settings.x / 100;
  let y = settings.y / 100;
  if (target === "android") {
    scale *= 72 / 108;
    x *= 72 / 108;
    y *= 72 / 108;
  }
  // Bound all four corners inside the safe circle, including shifted artwork.
  const radius =
    target === "android" ? 33 / 108 : target === "maskable" ? 0.4 : null;
  let fit = 1;
  if (radius) {
    fit = Math.min(
      1,
      radius / Math.hypot(Math.abs(x) + scale / 2, Math.abs(y) + scale / 2),
    );
    scale *= fit;
    x *= fit;
    y *= fit;
  } else {
    x = Math.max(-(1 - scale) / 2, Math.min((1 - scale) / 2, x));
    y = Math.max(-(1 - scale) / 2, Math.min((1 - scale) / 2, y));
  }
  return {
    size: scale * 1024,
    left: (0.5 + x - scale / 2) * 1024,
    top: (0.5 + y - scale / 2) * 1024,
    fitted: fit < 0.999,
  };
}

export const androidViewport = `${1024 / 6} ${1024 / 6} ${(1024 * 2) / 3} ${(1024 * 2) / 3}`;

export function composeSvg(
  settings,
  shapeSvg,
  { target = "image", layer = "all", cropped = false } = {},
) {
  const s = normalizeSettings(settings);
  const box = geometry(s, target);
  const bgId = "icon-export-background";
  const background =
    layer === "foreground"
      ? ""
      : `<defs><linearGradient id="${bgId}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${s.color}"/><stop offset="1" stop-color="${s.color2}"/></linearGradient></defs><rect width="1024" height="1024" fill="${s.background === "gradient" ? `url(#${bgId})` : s.color}"/>`;
  const foreground =
    layer === "background"
      ? ""
      : `<g transform="translate(${box.left} ${box.top}) scale(${box.size / 200})">${shapeSvg}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="${cropped ? androidViewport : "0 0 1024 1024"}">${background}${foreground}</svg>`;
}

// PNG-backed ICO entries are supported by modern browsers and Windows.
export function makeIco(entries) {
  const headerSize = 6 + entries.length * 16;
  const result = new Uint8Array(
    headerSize + entries.reduce((sum, e) => sum + e.png.length, 0),
  );
  const view = new DataView(result.buffer);
  view.setUint16(2, 1, true);
  view.setUint16(4, entries.length, true);
  let offset = headerSize;
  entries.forEach(({ size, png }, i) => {
    const p = 6 + i * 16;
    result[p] = result[p + 1] = size === 256 ? 0 : size;
    view.setUint16(p + 4, 1, true);
    view.setUint16(p + 6, 32, true);
    view.setUint32(p + 8, png.length, true);
    view.setUint32(p + 12, offset, true);
    result.set(png, offset);
    offset += png.length;
  });
  return result;
}

const encoder = new TextEncoder();
const json = (value) => encoder.encode(JSON.stringify(value, null, 2));
const text = (value) => encoder.encode(value);

export async function buildIconPack(
  kind,
  settings,
  shapeSvg,
  monoSvg,
  rasterize,
) {
  const s = normalizeSettings(settings);
  const files = {};
  const svg = (options, mono = false) =>
    composeSvg(s, mono ? monoSvg : shapeSvg, options);
  const png = async (path, size, options) => {
    files[path] = await rasterize(svg(options), size, {
      transparent: options?.layer === "foreground",
    });
  };
  const intro = `Made with Coolshapes Icon Maker (https://coolshap.es/icons).\nShape: ${s.shape}. Package: coolshapes-react@2.0.0-beta.1.\n\n`;
  if (kind === "ios") {
    await png("AppIcon.appiconset/icon-1024.png", 1024);
    files["AppIcon.appiconset/Contents.json"] = json({
      images: [
        {
          filename: "icon-1024.png",
          idiom: "universal",
          platform: "ios",
          size: "1024x1024",
        },
      ],
      info: { author: "xcode", version: 1 },
    });
    files["README.txt"] = text(
      intro +
        "Drag AppIcon.appiconset into Assets.xcassets and select AppIcon as your app icon. This is a flat, opaque icon for the single-size iOS asset-catalog workflow. The system applies its corner mask. Layered Icon Composer appearances are not included.\n",
    );
  } else if (kind === "android") {
    for (const [density, factor] of [
      ["mdpi", 1],
      ["hdpi", 1.5],
      ["xhdpi", 2],
      ["xxhdpi", 3],
      ["xxxhdpi", 4],
    ]) {
      await png(
        `res/drawable-${density}/ic_launcher_foreground.png`,
        108 * factor,
        { target: "android", layer: "foreground" },
      );
      await png(
        `res/drawable-${density}/ic_launcher_background.png`,
        108 * factor,
        { target: "android", layer: "background" },
      );
      files[`res/drawable-${density}/ic_launcher_monochrome.png`] =
        await rasterize(
          svg({ target: "android", layer: "foreground" }, true),
          108 * factor,
          { transparent: true },
        );
      await png(`res/mipmap-${density}/ic_launcher.png`, 48 * factor, {
        target: "android",
        cropped: true,
      });
    }
    const xml = (mono) =>
      `<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n  <background android:drawable="@drawable/ic_launcher_background" />\n  <foreground android:drawable="@drawable/ic_launcher_foreground" />\n${mono ? '  <monochrome android:drawable="@drawable/ic_launcher_monochrome" />\n' : ""}</adaptive-icon>\n`;
    files["res/mipmap-anydpi-v26/ic_launcher.xml"] = text(xml(false));
    files["res/mipmap-anydpi-v33/ic_launcher.xml"] = text(xml(true));
    files["README.txt"] = text(
      intro +
        'Merge res/ into app/src/main/res/, reviewing any existing ic_launcher resources. Set android:icon="@mipmap/ic_launcher" on your <application>. If your manifest uses android:roundIcon, point it to the same resource or remove that attribute. Requires compileSdk 33+ for the monochrome resource.\n\nIncludes 108dp adaptive layers at five densities, legacy launcher PNGs, and a solid alpha silhouette for themed icons. Foreground placement fits within the 66dp safe circle; Android previews show the center 72dp viewport.\n',
    );
  } else if (kind === "web") {
    for (const size of [16, 32, 48, 192, 512])
      await png(`icon-${size}.png`, size);
    await png("apple-touch-icon.png", 180);
    for (const size of [192, 512])
      await png(`icon-maskable-${size}.png`, size, { target: "maskable" });
    files["favicon.ico"] = makeIco(
      [16, 32, 48].map((size) => ({ size, png: files[`icon-${size}.png`] })),
    );
    files["icon.svg"] = text(svg());
    files["site.webmanifest"] = json({
      name: "My app",
      short_name: "My app",
      start_url: "./",
      display: "standalone",
      background_color: s.color,
      theme_color: s.color,
      icons: [192, 512].flatMap((size) => [
        {
          src: `icon-${size}.png`,
          sizes: `${size}x${size}`,
          type: "image/png",
          purpose: "any",
        },
        {
          src: `icon-maskable-${size}.png`,
          sizes: `${size}x${size}`,
          type: "image/png",
          purpose: "maskable",
        },
      ]),
    });
    files["head.html"] = text(
      '<link rel="icon" href="/favicon.ico" sizes="any">\n<link rel="icon" href="/icon.svg" type="image/svg+xml">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n<link rel="manifest" href="/site.webmanifest">\n',
    );
    files["README.txt"] = text(
      intro +
        "Copy these assets into your public directory and add head.html's tags to your page head. Edit the app name, start_url, and colors in site.webmanifest. Adjust paths if deployed under a subdirectory. Maskable icons are separately fitted within the central 80% safe circle.\n",
    );
  } else throw new Error("Unknown icon pack");
  files["coolshapes-icon.json"] = json({ version: 1, ...s });
  return files;
}
