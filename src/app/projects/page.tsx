import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ContentOps } from "@/components/projects/content-ops";
import { enterpriseProjects } from "@/content";

export const metadata: Metadata = {
  title: "项目与作品",
  description:
    "企业项目（IMS 销量报表系统、经销商管理平台）、独立开发（古诗词练习微信小程序）与 5 个公众号的内容运营作品集。",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="项目与作品"
        title="每一个项目，都有结果"
        description="覆盖企业项目、产品开发、内容运营三类成果，用真实交付证明能力。"
      />

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
