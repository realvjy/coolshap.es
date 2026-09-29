import { RiGithubFill as Github } from "@remixicon/react";
import { Coolshape } from "coolshapes-react";
import ThemeToggle from "./theme-toggle";
import styles from "./site-header.module.css";

export default function SiteHeader({ active }) {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="Coolshapes home">
        <span className={styles.mark} aria-hidden="true">
          <Coolshape name="moon-4" shapeId="brand-moon-4" size={22} noise={false} />
        </span>
        <span className={styles.wordmark}>coolshapes</span>
        <span className={styles.version}>v2 beta</span>
      </a>
      <nav className={styles.nav} aria-label="Main navigation">
        <a
          className={styles.home}
          href="/"
          aria-current={active === "shapes" ? "page" : undefined}
        >
          Shapes
        </a>
        <a
          href="/v2"
          aria-current={active === "playground" ? "page" : undefined}
        >
          Playground
        </a>
        <a href="/icons" aria-current={active === "icons" ? "page" : undefined}>
          App Icons
        </a>
        <a href="/docs" aria-current={active === "docs" ? "page" : undefined}>
          Docs
        </a>
        <a
          className={styles.github}
          aria-label="GitHub repository"
          title="GitHub"
          href="https://github.com/realvjy/coolshapes-react"
        >
          <Github size={15} aria-hidden="true" />
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
