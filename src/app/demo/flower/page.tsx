import type { Metadata } from "next";
import { FlowerOpening } from "./flower-opening";

export const metadata: Metadata = {
  title: "墙角小花 · 开场预览",
  robots: { index: false, follow: false },
};

export default function FlowerDemoPage() {
  return <FlowerOpening />;
}
