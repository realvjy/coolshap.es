import test from "node:test";
import assert from "node:assert/strict";
import {
  defaults,
  normalizeSettings,
  settingsQuery,
  shapeNames,
  geometry,
  composeSvg,
  buildIconPack,
  makeIco,
} from "../src/lib/icon-maker.mjs";

test("untrusted URL settings cannot inject markup or select invalid shapes", () => {
  const s = normalizeSettings({
    shape: "number-10",
    color: '"/><script/>',
    scale: "Infinity",
    x: "10000",
    y: "-10000",
    noise: "false",
    gradient: "gradient-116",
  });
  assert.equal(s.shape, defaults.shape);
  assert.equal(s.color, defaults.color);
  assert.equal(s.scale, defaults.scale);
  assert.equal(s.x, 20);
  assert.equal(s.y, -20);
  assert.equal(s.noise, false);
  assert.equal(s.gradient, defaults.gradient);
  assert.equal(shapeNames.length, 115);
  assert.ok(shapeNames.includes("number-0"));
  assert.ok(!shapeNames.includes("number-10"));
});

test("share URLs round-trip a complete composition, including number zero", () => {
  const s = {
    ...defaults,
    shape: "number-0",
    mode: "solid",
    fill: "#abcdef",
    noise: false,
    background: "gradient",
    scale: 79,
    x: -11,
    y: 17,
  };
  assert.deepEqual(
    normalizeSettings(
      Object.fromEntries(new URLSearchParams(settingsQuery(s))),
    ),
    s,
  );
});

test("all shifted icon bounds stay in Android and web safe circles", () => {
  for (const [target, radius] of [
    ["android", (1024 * 33) / 108],
    ["maskable", 409.6],
  ]) {
    for (const scale of [30, 62, 90])
      for (const x of [-20, 0, 20])
        for (const y of [-20, 0, 20]) {
          const g = geometry({ ...defaults, scale, x, y }, target);
          for (const px of [g.left, g.left + g.size])
            for (const py of [g.top, g.top + g.size])
              assert.ok(Math.hypot(px - 512, py - 512) <= radius + 1e-8);
        }
  }
});

test("full square exports retain gradients and separate adaptive layers", () => {
  const shape = '<svg width="200" height="200"><path id="test-shape"/></svg>';
  const s = { ...defaults, background: "gradient" };
  const fg = composeSvg(s, shape, { target: "android", layer: "foreground" });
  assert.match(fg, /test-shape/);
  assert.doesNotMatch(fg, /linearGradient/);
  const bg = composeSvg(s, shape, { target: "android", layer: "background" });
  assert.match(bg, /linearGradient/);
  assert.doesNotMatch(bg, /test-shape/);
  assert.match(composeSvg(s, shape), /viewBox="0 0 1024 1024"/);
});

test("platform packs contain resolvable assets and correct raster requests", async () => {
  const requests = [];
  const rasterize = async (svg, size, options) => {
    requests.push({ svg, size, options });
    return new Uint8Array([1, 2, 3]);
  };
  const shape = '<svg width="200" height="200"><path id="color-shape"/></svg>';
  const mono = '<svg width="200" height="200"><path id="mono-shape"/></svg>';
  const decode = (bytes) => new TextDecoder().decode(bytes);
  const ios = await buildIconPack("ios", defaults, shape, mono, rasterize);
  const catalog = JSON.parse(decode(ios["AppIcon.appiconset/Contents.json"]));
  assert.ok(ios[`AppIcon.appiconset/${catalog.images[0].filename}`]);
  assert.equal(requests[0].size, 1024);
  assert.equal(requests[0].options.transparent, false);
  requests.length = 0;
  const android = await buildIconPack(
    "android",
    defaults,
    shape,
    mono,
    rasterize,
  );
  assert.equal(requests.length, 20);
  assert.deepEqual(
    [
      ...new Set(
        requests.filter((r) => r.options.transparent).map((r) => r.size),
      ),
    ],
    [108, 162, 216, 324, 432],
  );
  assert.equal(requests.filter((r) => r.svg.includes("mono-shape")).length, 5);
  const v33 = decode(android["res/mipmap-anydpi-v33/ic_launcher.xml"]);
  for (const [, resource] of v33.matchAll(/@drawable\/(\w+)/g))
    assert.ok(android[`res/drawable-mdpi/${resource}.png`]);
  assert.doesNotMatch(
    decode(android["res/mipmap-anydpi-v26/ic_launcher.xml"]),
    /monochrome/,
  );
  const web = await buildIconPack("web", defaults, shape, mono, rasterize);
  const manifest = JSON.parse(decode(web["site.webmanifest"]));
  for (const icon of manifest.icons) assert.ok(web[icon.src]);
  assert.deepEqual(
    [...new Set(manifest.icons.map((i) => i.purpose))],
    ["any", "maskable"],
  );
  assert.ok(web["favicon.ico"]);
  assert.ok(web["apple-touch-icon.png"]);
  await assert.rejects(
    buildIconPack("invalid", defaults, shape, mono, rasterize),
  );
});

test("ICO directory offsets and lengths point to their respective PNG data", () => {
  const entries = [
    { size: 16, png: new Uint8Array([1, 2, 3]) },
    { size: 32, png: new Uint8Array([4, 5]) },
  ];
  const ico = makeIco(entries);
  const view = new DataView(ico.buffer);
  assert.equal(view.getUint16(2, true), 1);
  assert.equal(view.getUint16(4, true), 2);
  entries.forEach(({ size, png }, i) => {
    const p = 6 + i * 16;
    const offset = view.getUint32(p + 12, true);
    assert.equal(ico[p], size);
    assert.equal(view.getUint32(p + 8, true), png.length);
    assert.deepEqual(ico.slice(offset, offset + png.length), png);
  });
});
