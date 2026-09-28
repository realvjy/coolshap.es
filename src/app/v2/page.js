import Playground from "@/components/playground";

export const metadata = {
  title: "Playground — Coolshapes",
  description: "A little space to make a shape your own.",
};

export default function V2Page({ searchParams }) {
  return <Playground initialShape={searchParams.shape} />;
}
