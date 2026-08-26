import type { Contact, NavItem } from "./types";

export const site = {
  name: "陈熙雅",
  englishName: "Chen Xiya",
  title: "项目管理 / 测试 / 运营",
  slogan: "技术有底色 · 做事有章法 · 落地有结果",
  status: "周中实习 · 周末多场景实践中",
  location: "上海",
} as const;

export const nav: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "项目与作品", href: "/projects" },
  { label: "兼职活动", href: "/activities" },
  { label: "联系我", href: "/contact" },
  { label: "下载简历", href: "/resume/chenxiya-resume.pdf", external: true },
];

export const contact: Contact = {
  phone: "15005794616",
  email: "2641172506@qq.com",
  city: "上海",
};

export const roles: string[] = [
  "项目管理 · 进度管控",
  "功能测试 · 用例设计",
  "活动统筹 · 现场督导",
  "内容运营 · 公众号操盘",
  "独立开发小程序上线",
  "高能量多线执行者",
];

export const hero = {
  greeting: "嗨，我是陈熙雅。",
  subtitle:
    "软件工程专业在读，是周中泡在项目里的助理兼测试，也是周末跑遍上海的活动督导、研学老师。",
  description:
    "懂技术逻辑，能和开发团队顺畅对话；会跨方协调，能把多方资源拧成一股劲；擅长落地执行，从企业系统项目到线下大型活动都能稳稳盯到收尾。",
  tagline:
    "永远精力满格，习惯多线并行，想做一个「技术有底色、做事有章法、落地有结果」的多面手。",
};

export const lifePhotos: string[] = [
  "/images/avatar/about-01.jpg",
  "/images/avatar/about-02.jpg",
  "/images/avatar/about-03.jpg",
  "/images/avatar/about-04.jpg",
  "/images/avatar/about-05.jpg",
  "/images/avatar/about-06.jpg",
  "/images/avatar/about-07.jpg",
  "/images/avatar/about-08.jpg",
];

export const portrait = "/images/avatar/portrait.jpg";

export const resumePath = "/resume/chenxiya-resume.pdf";
