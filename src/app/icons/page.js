import IconMaker from "@/components/icon-maker";

export const metadata = {
  title: "Cool Icon Maker — Coolshapes",
  description:
    "Turn a Coolshape into your next app icon. Customize colors and download icons for iOS, Android, and the web.",
};

export default function IconsPage({ searchParams }) {
  return <IconMaker initialSettings={searchParams} />;
}
