import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 自包含输出：构建后在 .next/standalone 生成最小可部署产物，
  // 无需在服务器安装完整 node_modules，适合部署到自有服务器。
  output: "standalone",
  images: {
    // 优先输出体积更小、更现代的格式（保留 webp 兜底）
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
