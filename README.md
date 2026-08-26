# 陈熙雅 · 个人作品站

> 技术有底色 · 做事有章法 · 落地有结果

软件工程应届生陈熙雅的个人作品集网站，展示项目管理、功能测试、活动统筹、独立开发与内容运营的实战经历。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS v4 |
| 动画 | Framer Motion |
| 图标 | Lucide React |
| 字体 | Sora · Noto Sans SC · Geist Mono (next/font) |
| 构建 | Standalone 自包含输出 |

## 项目结构

```
src/
├── app/                    # 页面路由 (App Router)
│   ├── page.tsx            # 首页
│   ├── about/page.tsx     # 关于我
│   ├── projects/page.tsx   # 项目与作品
│   ├── activities/page.tsx # 兼职活动
│   ├── contact/page.tsx    # 联系我
│   ├── layout.tsx          # 根布局 (字体 / SEO / 全局组件)
│   ├── globals.css         # 全局样式 + 设计令牌
│   ├── robots.ts            # robots.txt 生成
│   └── sitemap.ts          # sitemap.xml 生成
├── components/
│   ├── home/               # 首页组件 (Hero / 生活图集 / 快捷入口)
│   ├── about/              # 关于页组件 (介绍 / 技能雷达图 / 荣誉 / 成长路径)
│   ├── projects/           # 项目组件 (独立项目 / 企业项目 / 内容运营)
│   ├── activities/         # 活动组件 (自动轮播卡片)
│   ├── contact/            # 联系页组件 (vCard 下载)
│   ├── ui/                 # 基础 UI 组件 (Badge / Button / Card / Reveal / Section)
│   ├── navbar.tsx          # 导航栏
│   ├── footer.tsx          # 页脚
│   └── background.tsx      # 全局背景效果
├── content/               # 内容数据层 (集中管理所有页面文案)
│   ├── site.ts             # 站点信息 / 导航 / 联系方式 / Hero 文案
│   ├── about.ts            # 个人介绍 / 技能 / 荣誉 / 成长路径
│   ├── projects.ts         # 项目列表 / 小程序 / 公众号
│   ├── activities.ts       # 兼职活动 / 其他兼职
│   ├── types.ts            # TypeScript 类型定义
│   └── index.ts            # 统一导出
└── lib/
    ├── utils.ts            # cn() 类名合并工具
    └── vcard.ts            # vCard 名片文件生成

public/                     # 静态资源
├── images/                 # 图片 (头像 / 活动 / 小程序截图 / 公众号)
├── resume/                 # PDF 简历
└── videos/                 # 演示视频
```

## 本地开发

### 环境要求

- Node.js >= 18.18.0 (推荐 20 LTS)
- npm 10+ (或 pnpm / yarn)

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)

### 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
# 可选：生产站点 URL（用于 sitemap.xml / robots.txt 生成正确的绝对路径）
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 构建与生产预览

```bash
# 构建生产版本
npm run build

# 本地启动生产服务器 (端口 3000)
npm run start

# 代码检查
npm run lint
```

## 内容修改指南

所有页面文案集中在 `src/content/` 目录，修改后无需改动组件代码：

| 文件 | 控制内容 |
|------|----------|
| `site.ts` | 站点名称、导航菜单、联系方式、首页 Hero 文案、生活照 |
| `about.ts` | 个人介绍（支持富文本加粗/加大）、技能雷达图数据、荣誉列表、成长路径 |
| `projects.ts` | 企业项目、独立开发小程序、公众号运营列表 |
| `activities.ts` | 兼职活动（含照片轮播）、其他兼职经历 |

### 添加新活动

在 `src/content/activities.ts` 的 `activities` 数组中新增条目：

```ts
{
  slug: "event-slug",
  name: "活动名称",
  role: "督导",
  period: "2026.08",
  summary: "一句话概述",
  points: ["要点一", "要点二"],
  photos: ["/images/activities/event-slug/01.jpg"],
}
```

照片放在 `public/images/activities/<slug>/` 目录下，命名 `01.jpg`、`02.jpg`...

## 设计系统

采用 Apple 风格的黑白灰单色调设计系统，通过 CSS 变量（设计令牌）统一管理：

- **颜色**：`--color-foreground`（近黑）、`--color-muted`（灰）、`--color-dim`（浅灰）、`--color-surface`（卡片白）
- **字体**：Sora（标题）、Noto Sans SC（正文）、Geist Mono（等宽 / 标签）
- **动效**：Framer Motion 滚动渐入 + `prefers-reduced-motion` 降级
- **响应式**：移动优先，断点 `sm:640px` → `md:768px` → `lg:1024px`

## SEO 优化

- 自动生成 `sitemap.xml` 和 `robots.txt`
- Open Graph 元数据
- 语义化 HTML + 无障碍 aria 标签
- 图片自动优化 (AVIF / WebP)

## 部署

项目已配置 `output: "standalone"` 自包含构建，适合部署到自有服务器。

详细部署教程见 [DEPLOY.md](./DEPLOY.md)。
