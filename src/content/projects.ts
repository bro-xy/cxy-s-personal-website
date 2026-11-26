import type { ContentAccount, Project, VideoWork } from "./types";

export const videoWorks: VideoWork[] = [
  {
    title: "微课视频",
    format: "微课",
    awards: ["全国三等奖", "上海市一等奖"],
    role: "作品负责人 · 微课视频制作",
  },
  {
    title: "动画视频",
    format: "动画",
    awards: ["全国三等奖"],
    role: "作品负责人 · 动画视频制作",
  },
];

export const enterpriseProjects: Project[] = [
  {
    slug: "ims-sales-report",
    name: "IMS 销量报表系统",
    role: "项目助理（兼测试）",
    period: "2024.07 - 2025.02",
    category: "enterprise",
    overview:
      "为制药企业搭建全链路销量数据统计分析系统，支持多维度可视化展示与定期报表输出，服务销售与管理层日常决策。",
    points: [
      "对接客户澄清需求口径，梳理业务逻辑与数据字段规则，同步变更需求至开发团队",
      "通过 Jira 看板跟进开发进度、协调迭代节奏，定期向项目经理同步风险与进展",
      "设计并执行功能测试，校验报表数据准确性，跟踪缺陷修复闭环，推动系统按期上线",
    ],
    tags: ["需求分析", "Jira 看板", "功能测试", "缺陷跟踪", "项目推进"],
  },
  {
    slug: "dealer-platform",
    name: "经销商管理平台",
    role: "项目助理（兼测试）",
    period: "2024.08 - 2024.12",
    category: "enterprise",
    overview:
      "搭建经销商全流程数字化管理平台，实现渠道运营可视化、规范化管控。",
    points: [
      "调研客户功能需求，输出需求文档、测试计划与测试用例",
      "协调开发与客户两端资源，跟进项目节点，推动问题及时闭环",
      "主导全流程功能测试，组织项目验收，撰写用户培训手册，保障系统平稳交付",
    ],
    tags: ["需求文档", "测试用例", "跨团队协调", "项目验收", "培训手册"],
  },
];

export const indieProject: Project = {
  slug: "poetry-miniapp",
  name: "古诗词练习微信小程序",
  role: "产品策划 · 独立开发 · 上线负责人",
  period: "2026.02 - 2026.04（已上线）",
  category: "indie",
  overview:
    "面向学生群体的对话式古诗词学习小程序，已正式上线微信小程序平台。",
  points: [
    "主导产品全流程策划，完成需求文档、功能规格、系统设计等全套文档输出",
    "设计「AI 诗人对话」核心交互，搭配阅读、选择、默写、赏析、贪吃蛇填空等多元学习模式",
    "基于 Taro + React + TypeScript 独立完成开发，全程负责功能测试、问题修复与平台审核上线",
  ],
  tags: ["Taro", "React", "TypeScript", "产品策划", "独立开发", "已上线"],
  screenshots: [
    { src: "/images/miniapp/01-home.png", label: "首页" },
    { src: "/images/miniapp/02-read.png", label: "阅读模式" },
    { src: "/images/miniapp/03-choice.png", label: "选择题练习" },
    { src: "/images/miniapp/04-dictation.png", label: "默写模式" },
    { src: "/images/miniapp/05-analysis.png", label: "赏析模式" },
    { src: "/images/miniapp/06-poet.png", label: "诗人对话" },
    { src: "/images/miniapp/07-modes.png", label: "模式选择" },
    { src: "/images/miniapp/08-ai-chat.jpg", label: "AI 对话" },
    { src: "/images/miniapp/09-game.jpg", label: "贪吃蛇填空" },
  ],
  qrcode: "/images/miniapp/qrcode.jpg",
};

export const contentAccounts: ContentAccount[] = [
  {
    name: "诗行小筑",
    positioning: "个人诗词文化分享号",
    responsibility: "全平台内容策划、推文撰写与排版，打造古诗词学习内容矩阵",
    image: "/images/wechat/shixingxiaozhu.jpg",
  },
  {
    name: "阙天咨询",
    positioning: "企业官方服务号",
    responsibility: "行业内容更新、业务推文排版，配合项目输出品牌内容",
    image: "/images/wechat/quetianzixun.jpg",
  },
  {
    name: "上海第二工业大学",
    positioning: "校官方公众号",
    responsibility: "配合党委宣传部完成校园活动宣传、官方通知发布、内容编审",
    image: "/images/wechat/sspudev.jpg",
  },
  {
    name: "义乌市青少年综合服务中心",
    positioning: "官方青少年服务号",
    responsibility: "活动预告、公益宣传、日常推文制作与视频剪辑",
    image: "/images/wechat/ywqsn.jpg",
  },
  {
    name: "城建 AI 智绘未来",
    positioning: "学院官方公众号",
    responsibility: "配合党委老师完成学院活动宣传；负责宣传推文制作、照片拍摄、视频制作剪辑",
    image: "/images/wechat/chengjianai.jpg",
  },
];
