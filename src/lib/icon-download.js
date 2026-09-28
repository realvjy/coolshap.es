import { buildIconPack, composeSvg } from "./icon-maker.mjs";

export async function rasterizeSvg(markup, size, { transparent = false } = {}) {
  const url = URL.createObjectURL(
    new Blob([markup], { type: "image/svg+xml;charset=utf-8" }),
  );
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const context = canvas.getContext("2d", { alpha: transparent });
    if (!context) throw new Error("Canvas unavailable");
    context.drawImage(image, 0, 0, size, size);
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );
    if (!blob) throw new Error("PNG export failed");
    return new Uint8Array(await blob.arrayBuffer());
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function saveIcon(blob, name) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

export async function downloadIcon(kind, settings, shapeSvg, monoSvg) {
  const name = `coolshapes-${settings.shape}`;
  if (kind === "svg") {
    saveIcon(
      new Blob([composeSvg(settings, shapeSvg)], { type: "image/svg+xml" }),
      `${name}.svg`,
    );
  } else if (kind === "png") {
    const png = await rasterizeSvg(composeSvg(settings, shapeSvg), 1024);
    saveIcon(new Blob([png], { type: "image/png" }), `${name}.png`);
  } else {
    const { zipSync, strToU8 } = await import("fflate");
    const files = await buildIconPack(
      kind,
      settings,
      shapeSvg,
      monoSvg,
      rasterizeSvg,
    );
    const license = await fetch("/licenses/coolshapes-react.txt");
    if (!license.ok) throw new Error("Could not load asset license");
    files["LICENSE.txt"] = strToU8(await license.text());
    saveIcon(
      new Blob([zipSync(files, { level: 0 })], { type: "application/zip" }),
      `${name}-${kind}.zip`,
    );
  }
}
