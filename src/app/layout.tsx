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
    default: "陈熙雅 · 项目管理 / 测试 / 运营",
    template: "%s · 陈熙雅",
  },
  description:
    "陈熙雅的个人作品站。软件工程在读，记录企业项目、软件测试、独立开发、内容运营，以及上海的兼职活动和副业。",
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
    title: "陈熙雅 · 项目管理 / 测试 / 运营",
    description:
      "我想多试一点，再找到自己的方向。陈熙雅的项目、作品和兼职记录。",
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
