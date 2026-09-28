import { readFile } from "node:fs/promises";
import path from "node:path";
import Documentation from "@/components/documentation";

export const metadata = {
  title: "Coolshapes V2 — Docs & agent skill",
  description:
    "Use Coolshapes in design and React: installation, live examples, gradients, outlines, recipes, V1 migration, and a downloadable agent skill.",
};

export default async function DocsPage() {
  const skill = await readFile(
    path.join(process.cwd(), "public/skills/coolshapes-react/SKILL.md"),
    "utf8",
  );
  return <Documentation skill={skill} />;
}
