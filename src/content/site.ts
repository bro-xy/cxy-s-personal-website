import type { Contact, NavItem } from "./types";

export const site = {
  name: "陈熙雅",
  englishName: "lvy",
  personality: "ENFJ",
  title: "项目管理 / 测试 / 运营",
  slogan: "项目、测试、内容运营、活动和我的 1688 店铺。",
  status: "周中实习 · 周末多场景实践中",
  location: "上海",
} as const;

export const nav: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "作品集", href: "/projects" },
  { label: "博客", href: "/blog" },
  { label: "兼职与副业", href: "/activities" },
  { label: "联系我", href: "/contact" },
  { label: "下载简历", href: "/contact#resumes" },
];

export const contact: Contact = {
  phone: "15005794616",
  email: "2641172506@qq.com",
  city: "上海",
};

export const hero = {
  greeting: "嗨，我是",
  subtitle:
    "我在上海读软件工程，平时做项目、做测试，周末常在活动现场。我喜欢跟人打交道，也喜欢往山里走。这里放了我做过的作品，以后也会写写路上和日常的事。",
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

export const resumes = [
  {
    title: "项目管理简历",
    description: "企业项目协调、交付跟进、活动统筹与独立开发。",
    href: "/resume/chenxiya-resume.pdf",
    filename: "陈熙雅-项目管理简历.pdf",
  },
  {
    title: "软件测试简历",
    description: "测试竞赛、企业系统测试、用例设计与测试工具。",
    href: "/resume/chenxiya-resume-testing.pdf",
    filename: "陈熙雅-软件测试简历.pdf",
  },
] as const;
