import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ContentOps } from "@/components/projects/content-ops";
import { VideoWorks } from "@/components/projects/video-works";
import { enterpriseProjects } from "@/content";

export const metadata: Metadata = {
  title: "作品集",
  description:
    "陈熙雅的作品集，收录计算机设计大赛获奖视频、企业项目、独立开发小程序和公众号作品。",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="作品集"
        title="我做过的一些作品"
        description="从微课和动画，到软件项目、小程序和公众号。"
      />

      <VideoWorks />

      {/* 企业项目 */}
      <Section
        id="project-testing"
        eyebrow="项目测试"
        title="从需求到上线的全流程"
        description="在真实企业系统中承担项目助理与测试角色，盯进度、控节点、保质量。"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {enterpriseProjects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <FeaturedProject />
      <ContentOps />
    </>
  );
}
