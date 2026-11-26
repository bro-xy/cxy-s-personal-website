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
    "陈熙雅，软件工程在读。在项目管理、软件测试、内容运营和活动现场积累经验，也在继续尝试新的方向。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="关于我"
        title="关于我，也关于我做过的事。"
        description="从学校到企业项目，再到周末的活动现场，我在不同的工作里学习怎么把一件事做完、做好。"
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
