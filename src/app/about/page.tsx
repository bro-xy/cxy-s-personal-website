import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { Intro } from "@/components/about/intro";
import { Journey } from "@/components/about/journey";
import { Honors } from "@/components/about/honors";
import { Skills } from "@/components/about/skills";

export const metadata: Metadata = {
  title: "关于我",
  description:
    "陈熙雅：软件工程本科生，聚焦项目管理、软件测试与内容运营，一个习惯把日程排满、把事情做实的高能量执行者。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="关于我"
        title="一个高能量全能执行派"
        description="技术有底色、做事有章法、落地有结果 —— 从企业系统到线下大型活动，都能稳稳盯到收尾。"
      />
      <Container className="pb-20">
        <Intro />
      </Container>
      <Journey />
      <Honors />
      <Skills />
    </>
  );
}
