import type { Metadata, Viewport } from "next";
import { Sora, Noto_Sans_SC, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";
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
    "软件工程应届生陈熙雅的个人作品站：技术有底色、做事有章法、落地有结果。蓝桥杯软件测试全国二等奖，独立上线微信小程序，统筹奔驰 / 上海马拉松等大型活动。",
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
      "技术有底色、做事有章法、落地有结果 —— 软件工程应届生的个人作品站。",
    type: "website",
    locale: "zh_CN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
        <Background />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
