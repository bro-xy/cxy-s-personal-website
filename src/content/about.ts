import type { Education, Honor, Role, SkillGroup, TextSegment } from "./types";

export const basicInfo: { label: string; value: string }[] = [
  { label: "姓名", value: "陈熙雅" },
  { label: "出生年月", value: "2004 年 3 月" },
  { label: "籍贯", value: "浙江义乌" },
  { label: "学历", value: "本科在读" },
  { label: "学校", value: "上海第二工业大学 · 软件工程" },
  { label: "期望城市", value: "上海" },
  { label: "当前状态", value: "周中实习 + 周末多场景实践中" },
];

export const intro: TextSegment[][] = [
  [
    { text: "我是" },
    { text: "陈熙雅", bold: true, large: true },
    { text: "，" },
    { text: "上海第二工业大学软件工程专业", bold: true },
    { text: "本科生。我做过企业项目和测试，也做内容、跑活动现场，还经营自己的店铺。" },
  ],
  [
    { text: "专业上我聚焦" },
    { text: "项目交付与质量保障", bold: true },
    { text: "：在" },
    { text: "阙天商务", bold: true },
    { text: "担任" },
    { text: "项目助理兼测试", bold: true },
    { text: "期间，全程参与" },
    { text: "IMS 销量报表系统、经销商管理平台", bold: true },
    { text: "从需求对接、进度跟进到测试验收的完整周期 —— 既能和客户对齐业务口径、用 Jira 看板盯紧开发节点，也能独立输出测试用例、主导功能测试、撰写用户培训手册，把项目推进到平稳上线。" },
  ],
  [
    { text: "课堂之外我始终保持多线运转：周中在公司深耕项目与测试能力，周末就切换到线下活动场 —— 做过" },
    { text: "品牌活动督导、赛事执行、研学指导老师", bold: true },
    { text: "，也带过家教、运营过" },
    { text: "多个官方公众号", bold: true },
    { text: "。我还有自己的 1688 店铺，平时也担任 SPIKE 课程老师。这些经历让我有机会在不同场合跟不同的人一起做事。" },
  ],
  [
    { text: "我还从零到一独立策划开发了" },
    { text: "「古诗词练习」微信小程序", bold: true, large: true },
    { text: "，走完了从产品设计、开发到测试和发布的全过程。我喜欢把不同场合里学到的东西用到下一件事上，也欢迎你来聊新的合作。" },
  ],
];

export const education: Education[] = [
  {
    school: "上海第二工业大学",
    degree: "本科",
    major: "软件工程",
    period: "2025.09 - 2027.06",
    courses: [
      "软件测试",
      "计算机网络",
      "数据库",
      "软件项目管理",
      "需求工程",
      "移动软件开发",
    ],
  },
  {
    school: "上海城建职业学院",
    degree: "大专",
    major: "计算机及应用技术",
    period: "2022.09 - 2025.06",
    courses: [
      "计算机操作系统",
      "数据结构与算法",
      "Python 程序设计基础",
      "SSM 框架",
      "机器学习",
    ],
  },
];

export const studentOrgs: Role[] = [
  {
    org: "学生会学术部负责人",
    role: "策划与统筹",
    period: "在校期间",
    points: [
      "策划组织学院及校级学术活动，制作活动宣传推文",
      "配合各部门完成大型活动落地，协助党委老师开展学生工作",
    ],
  },
  {
    org: "金海通讯社社长",
    role: "内容运营",
    period: "在校期间",
    points: [
      "负责校官方账号运营管理，辅助党委宣传部完成校园宣传工作",
      "统筹内容产出与账号日常维护",
    ],
  },
];

export const internships: Role[] = [
  {
    org: "上海阙天商务信息咨询有限公司",
    role: "项目助理兼测试",
    period: "2024.06 - 2025.03 / 2026.03 - 至今",
    highlight: true,
    points: [
      "核心经历：IMS 销量报表系统、经销商管理平台的全流程测试与项目管理均由此积累",
      "协调开发、客户等多方资源，跟进项目进度，按计划推进交付",
      "通过 Jira 看板跟进开发进度、协调迭代节奏，定期向项目经理同步进展",
      "整理归档项目文档，监控关键节点、参与系统测试并跟进缺陷修复",
    ],
  },
  {
    org: "上海触众信息科技有限公司",
    role: "运营实习生",
    period: "2025.06 - 2025.09",
    points: [
      "负责品牌官方社群（微信、小红书等）日常运营维护，协助发布活动话题",
      "运用 AI 工具辅助撰写社群及小红书互动文案与活动内容，提升内容产出效率",
      "通过 Excel 系统整理社群用户反馈、常见问题与优质内容，建立归档与需求跟踪机制",
      "协助积分数据导出、清理与汇总，支持积分运营与用户激励项目",
    ],
  },
  {
    org: "义乌市青年之家青少年综合服务中心",
    role: "社工实习生",
    period: "2023.06 - 2023.09",
    points: [
      "负责公众号编辑制作、视频剪辑与照片处理，完成活动内容输出",
      "负责活动摄像及氛围引导，协助活动现场执行",
      "协助社工站项目管理与运营，负责青益书屋管理和运营",
      "负责对接个别案例，积累沟通与协调能力",
    ],
  },
];

export const honors: Honor[] = [
  {
    title: "蓝桥杯全国软件和信息技术专业人才大赛 · 软件测试赛 国家级二等奖",
    level: "国家级",
    year: "2026",
  },
  {
    title: "蓝桥杯全国软件和信息技术专业人才大赛 · 软件测试赛 省级一等奖",
    level: "省级",
    year: "2026",
  },
  {
    title: "全国大学生软件测试大赛 省级二等奖",
    level: "省级",
    year: "2025",
  },
  {
    title: "上海市大学生计算机设计大赛 一等奖",
    level: "市级",
    year: "2026",
  },
  {
    title: "中国大学生计算机设计大赛 三等奖",
    level: "国家级",
    year: "2026",
  },
  {
    title: "上海市优秀毕业生",
    level: "市级",
    year: "2025",
  },
  {
    title: "大学生金融智能工程应用创新大赛 二等奖",
    level: "省级",
    year: "2024",
  },
  {
    title: "「互联网 +」大学生创新创业大赛 上海市铜奖",
    level: "市级",
    year: "2023",
  },
  {
    title: "「互联网 +」大学生创新创业大赛 校赛一等奖",
    level: "校级",
    year: "2023",
  },
  {
    title: "金砖国家技能大赛机器学习与大数据（决赛）三等奖",
    level: "国家级",
    year: "2023",
  },
  {
    title: "「知行杯」大学生社会实践大赛 校赛一等奖",
    level: "校级",
    year: "2023",
  },
  {
    title: "校一等奖学金",
    level: "校级",
    year: "2023",
  },
  {
    title: "校优秀共青团干部",
    level: "校级",
    year: "2024",
  },
  {
    title: "校学生会优秀工作人员",
    level: "校级",
    year: "2023",
  },
  {
    title: "校志愿先进个人",
    level: "校级",
    year: "2023",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "测试技能",
    level: "熟练掌握",
    items: [
      "自动化测试",
      "单元测试",
      "功能测试",
      "接口测试",
      "测试用例设计",
      "测试计划与报告",
      "用户操作手册编写",
    ],
  },
  {
    category: "项目与文档",
    level: "熟练掌握",
    items: ["需求分析", "项目进度管理", "节点监控", "跨团队协调"],
  },
  {
    category: "工具与语言",
    level: "熟悉",
    items: ["MySQL", "Python", "Excel / WPS", "SQL 查询验证"],
  },
  {
    category: "内容创作",
    level: "熟悉",
    items: ["公众号推文制作", "摄影", "海报制作", "3D 建模"],
  },
  {
    category: "前后端开发",
    level: "了解",
    items: ["Java", "Spring", "Vue", "Redis", "MongoDB"],
  },
];

export const certificates: string[] = [
  "1+x 职业技能证书",
  "大学英语四级",
  "上海市计算机一级",
];

export const selfEvaluation =
  "长期在学生组织、项目助理和活动统筹中做协调推进的工作，盯进度、控节点、对结果负责；熟悉 Jira 看板与 AI 辅助等协作工具，软件工程背景让我能和技术团队顺畅对话。";
