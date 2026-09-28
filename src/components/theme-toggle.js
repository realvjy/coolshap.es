"use client";

import { useEffect } from "react";
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
  // Follow the system theme until the visitor picks one.
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    function onChange(event) {
      let stored = null;
      try {
        stored = localStorage.getItem(storageKey);
      } catch {}
      if (stored !== "light" && stored !== "dark") {
        applyTheme(event.matches ? "dark" : "light");
      }
    }
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
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

    // Reveal the new theme in a circle growing from the top center. The
    // origin is a percentage so it resolves against the transition layer
    // itself, which keeps it centered regardless of scrollbars or zoom.
    const radius = Math.hypot(
      document.documentElement.clientWidth / 2,
      innerHeight,
    );
    document
      .startViewTransition(() => applyTheme(next))
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at 50% 0%)`,
              `circle(${Math.ceil(radius)}px at 50% 0%)`,
            ],
          },
          {
            duration: 700,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
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
