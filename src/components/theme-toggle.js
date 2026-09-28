"use client";

import { RiMoonLine as Moon, RiSunLine as Sun } from "@remixicon/react";
import styles from "./site-header.module.css";

const storageKey = "cs-theme";

// Swap tokens with transitions paused, so every surface changes at once
// instead of fading through gray at its own speed.
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.add("cs-theme-switching");
  root.dataset.theme = theme;
  void document.body.offsetHeight;
  requestAnimationFrame(() =>
    requestAnimationFrame(() => root.classList.remove("cs-theme-switching")),
  );
}

export default function ThemeToggle() {
  function toggle(event) {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(storageKey, next);
    } catch {}

    const reducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!document.startViewTransition || reducedMotion) {
      applyTheme(next);
      return;
    }

    // Keep the clip geometry relative to the transition snapshot. Chrome can
    // scale pixel clip coordinates differently on high-density displays.
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const width = innerWidth;
    const height = innerHeight;
    const origin = `${(x / width) * 100}% ${(y / height) * 100}%`;
    // circle() percentages use the reference box's normalized diagonal.
    const radius =
      (Math.hypot(Math.max(x, width - x), Math.max(y, height - y)) /
        (Math.hypot(width, height) / Math.SQRT2)) *
        100 +
      0.1;
    document
      .startViewTransition(() => applyTheme(next))
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0% at ${origin})`,
              `circle(${radius}% at ${origin})`,
            ],
          },
          {
            duration: 850,
            // Keep the opening visible at the icon before expanding across the page.
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
  }

  return (
    <button
      type="button"
      className={styles.theme}
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      <Moon size={15} className={styles.moon} aria-hidden="true" />
      <Sun size={15} className={styles.sun} aria-hidden="true" />
    </button>
  );
}
