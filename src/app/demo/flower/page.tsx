import type { Metadata, Viewport } from "next";
import { FlowerOpening } from "./flower-opening";

export const metadata: Metadata = {
  title: "墙角小花 · 开场预览",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#16221b",
};

export default function FlowerDemoPage() {
  return <FlowerOpening />;
}
