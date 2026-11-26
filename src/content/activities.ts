import type { Activity, OtherWork } from "./types";

/** 生成活动照片路径 */
const photos = (slug: string, count: number) =>
  Array.from(
    { length: count },
    (_, i) => `/images/activities/${slug}/${String(i + 1).padStart(2, "0")}.jpg`,
  );

export const activities: Activity[] = [
  {
    slug: "benz-testdrive",
    name: "上海奔驰纯电 GLC 产品体验活动",
    role: "督导",
    period: "2026.08",
    summary: "统筹现场执行流程，把控活动节点与人员分工。",
    points: [
      "统筹现场执行流程，把控活动节点与人员分工",
      "负责嘉宾接待、物料管理与突发情况协调，保障品牌体验活动顺利落地",
    ],
    photos: photos("benz-testdrive", 3),
  },
  {
    slug: "spinning-top",
    name: "上海市霸旋陀螺挑战赛",
    role: "督导",
    period: "2026.07",
    summary: "统筹协调选手、裁判与志愿者，管控活动全流程与时间节点。",
    points: [
      "统筹协调选手、裁判与志愿者，管控活动全流程与时间节点",
      "管理活动物料，完成物资清点、分发与回收，处理现场突发状况",
    ],
    photos: photos("spinning-top", 6),
  },
  {
    slug: "study-tour",
    name: "研学课程活动",
    role: "研学指导老师",
    period: "2026.01",
    summary: "负责研学课程与活动的组织策划与现场执行。",
    points: [
      "负责研学课程与活动的组织策划与现场执行",
      "引导学员完成研学任务，维护现场秩序与学习氛围",
    ],
    photos: photos("study-tour", 4),
  },
  {
    slug: "smg-camping",
    name: "SMG 青年城市露营交友活动",
    role: "活动执行",
    period: "2025.10",
    summary: "参与现场统筹、嘉宾对接与氛围引导。",
    points: [
      "参与现场统筹、嘉宾对接与氛围引导",
      "协助活动物料管理与秩序维护，提升参与者体验",
    ],
    photos: photos("smg-camping", 4),
  },
  {
    slug: "love-festival",
    name: "虹口青年爱情节",
    role: "活动执行",
    period: "2025.09",
    summary: "负责现场秩序维护与氛围引导，保障活动流程顺畅推进。",
    points: [
      "负责现场秩序维护与氛围引导",
      "保障活动流程顺畅推进",
    ],
    photos: photos("love-festival", 4),
  },
  {
    slug: "frog-storytelling",
    name: "小青蛙讲故事演讲比赛",
    role: "督导",
    period: "2025.06 - 2025.08",
    summary: "参与活动策划与执行，协助选手报名、流程设计与现场支持。",
    points: [
      "参与活动策划与执行，协助完成选手报名、流程设计与现场支持",
      "负责现场物料管理与选手对接，保障活动顺利推进",
    ],
    photos: photos("frog-storytelling", 4),
  },
  {
    slug: "community-festival",
    name: "上海西郊闲人社区节",
    role: "活动执行",
    period: "2025",
    summary: "协助现场统筹与秩序维护，完成物料管理与嘉宾对接。",
    points: [
      "协助现场统筹与秩序维护",
      "完成物料管理与嘉宾对接工作",
    ],
    photos: photos("community-festival", 4),
  },
  {
    slug: "marathon",
    name: "上海马拉松",
    role: "活动执行",
    period: "2024.12",
    summary: "参与大型赛事现场执行，负责物资分发、秩序维护与氛围引导。",
    points: [
      "参与大型赛事现场执行",
      "负责物资分发、秩序维护与氛围引导",
    ],
    photos: photos("marathon", 3),
  },
];

export const otherWorks: OtherWork[] = [
  {
    id: "shop",
    title: "我的 1688 店铺",
    description: "我有一家自己经营的 1688 店铺，也在摸索怎样做好一门自己的生意。",
  },
  {
    id: "tutoring",
    title: "家教辅导",
    description:
      "课余教中小学生计算机和数学，根据每个学生的情况调整讲解方式和学习计划。",
  },
  {
    id: "spike",
    title: "SPIKE 课程",
  },
  {
    id: "procurement",
    title: "采购助理",
    description:
      "协助采购经理对接物料供应商，做询价、比价与样品评估，参与供应商筛选和合作对接。",
  },
];

function activityDate(activity: Activity) {
  if (activity.sortDate) return activity.sortDate;

  const [periodStart] = activity.period.split(" - ");
  const [year, month = "00", day = "00"] = periodStart.split(".");
  return [year, month, day].join("-");
}

export const recentActivities = [...activities].sort((first, second) =>
  activityDate(second).localeCompare(activityDate(first)),
);
