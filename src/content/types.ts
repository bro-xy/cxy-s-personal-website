export type Category = "enterprise" | "indie" | "content";

export type HonorLevel = "国家级" | "省级" | "市级" | "校级";

export interface TextSegment {
  text: string;
  bold?: boolean;
  large?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Contact {
  phone: string;
  email: string;
  city: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  courses: string[];
}

export interface Role {
  org: string;
  role: string;
  period: string;
  highlight?: boolean;
  points: string[];
}

export interface Honor {
  title: string;
  level: HonorLevel;
  year: string;
}

export interface SkillGroup {
  category: string;
  level: "熟练掌握" | "熟悉" | "了解";
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  role: string;
  period: string;
  category: Category;
  overview: string;
  points: string[];
  tags: string[];
  video?: string;
  screenshot?: string;
  screenshots?: Array<{ src: string; label: string }>;
  qrcode?: string;
  link?: { label: string; href: string };
}

export interface ContentAccount {
  name: string;
  positioning: string;
  responsibility: string;
  image?: string;
}

export interface VideoWork {
  title: string;
  format: "微课" | "动画";
  award: string;
  role: string;
  overview?: string;
  video?: string;
  poster?: string;
  captions?: string;
}

export interface Activity {
  slug: string;
  name: string;
  role: string;
  period: string;
  sortDate?: string;
  summary: string;
  points: string[];
  photos: string[];
}

export interface OtherWork {
  id: string;
  title: string;
  description?: string;
}
