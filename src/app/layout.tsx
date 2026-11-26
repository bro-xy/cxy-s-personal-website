import type { Metadata, Viewport } from "next";
import { Sora, Noto_Sans_SC, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "陈熙雅 · 全能派个人作品站",
    template: "%s · 陈熙雅",
  },
  description:
    "陈熙雅的个人作品站。从软件工程、项目管理和测试，到独立开发、内容运营、兼职活动和 1688 店铺。",
  keywords: [
    "陈熙雅",
    "项目管理",
    "软件测试",
    "内容运营",
    "软件工程",
    "应届生",
    "作品集",
  ],
  authors: [{ name: "陈熙雅" }],
  openGraph: {
    title: "陈熙雅 · 全能派个人作品站",
    description:
      "从写代码到做生意。看看陈熙雅做过的项目、作品和兼职活动。",
    type: "website",
    locale: "zh_CN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8f5ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      className={`${sora.variable} ${notoSansSC.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
