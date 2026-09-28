"use client";

import { useEffect, useRef, useState } from "react";
import {
  RiArrowRightUpLine as ArrowUpRight,
  RiCheckLine as Check,
  RiFileCopyLine as Copy,
} from "@remixicon/react";
import { CoolShapeLogo } from "./icons";
import styles from "./site-footer.module.css";

const installCommand = "npm i coolshapes-react@2.0.0-beta.1";

export default function SiteFooter() {
  const [copyState, setCopyState] = useState("idle");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyInstall() {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("idle"), 2400);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.resources} aria-label="Use Coolshapes">
        <a
          className={styles.resource}
          href="https://www.figma.com/community/file/1367467631420622345/cool-shapes-100-abstract-shapes"
        >
          <span className={styles.label}>Figma</span>
          <span className={styles.title}>
            Community file <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </a>
        <button
          type="button"
          className={styles.resource}
          onClick={copyInstall}
          aria-label="Copy npm install command"
        >
          <span className={styles.label}>React</span>
          <span className={styles.title} aria-live="polite">
            {copyState === "copied" ? (
              <>
                Copied <Check size={13} aria-hidden="true" />
              </>
            ) : copyState === "error" ? (
              "Couldn’t copy — see docs"
            ) : (
              <>
                <code>{installCommand}</code>
                <Copy size={12} aria-hidden="true" />
              </>
            )}
          </span>
        </button>
        <a className={styles.resource} href="/docs#agent-skill">
          <span className={styles.label}>Agents</span>
          <span className={styles.title}>
            Skill for your AI tools{" "}
            <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </a>
      </div>
      <div className={styles.colophon}>
        <a className={styles.brand} href="/" aria-label="Coolshapes home">
          <CoolShapeLogo size={14} aria-hidden="true" />
          coolshapes
        </a>
        <p>
          <a href="https://vjy.me?ref=cs">Made by realvjy</a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/realvjy/coolshapes-react/blob/main/LICENSE">
            MIT
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://www.buymeacoffee.com/realvjy">Support</a>
        </p>
      </div>
    </footer>
  );
}
