import type { Metadata } from "next";
import { ArrowDown, BookOpen, Boxes, BriefcaseBusiness, Store } from "lucide-react";
import { ActivityLog } from "@/components/activities/activity-log";
import { Container } from "@/components/ui/container";
import { otherWorks, recentActivities } from "@/content";

export const metadata: Metadata = {
  title: "兼职与副业",
  description: "陈熙雅的兼职现场记录，以及 1688 店铺、家教、SPIKE 课程老师和采购助理经历。",
};

const workIcons: Record<string, typeof Store> = {
  shop: Store,
  tutoring: BookOpen,
  spike: Boxes,
  procurement: BriefcaseBusiness,
};

export default function ActivitiesPage() {
  return (
    <Container className="activities-page">
      <header className="activity-intro">
        <div>
          <p className="editorial-eyebrow">兼职与副业</p>
          <h1>走进现场，<br />也做自己的事。</h1>
        </div>
        <div>
          <p>我常做品牌活动督导、赛事执行和研学指导。这里会持续更新我的兼职现场，也记录我在做的副业。</p>
          <div className="activity-jump-links">
            <a className="site-text-link" href="#activity-log">看活动记录 <ArrowDown aria-hidden size={16} /></a>
            <a className="site-text-link" href="#side-work">看其他副业 <ArrowDown aria-hidden size={16} /></a>
          </div>
        </div>
      </header>

      <ActivityLog activities={recentActivities} />

      <section id="side-work" className="side-work" aria-labelledby="side-work-title">
        <h2 id="side-work-title">现场之外，我还在做这些</h2>
        <div className="side-work-list">
          {otherWorks.map((work) => {
            const Icon = workIcons[work.id] ?? BriefcaseBusiness;
            return (
              <article id={work.id} key={work.id} className="side-work-item">
                <Icon aria-hidden size={24} strokeWidth={1.6} />
                <h3>{work.title}</h3>
                {work.description && <p>{work.description}</p>}
              </article>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
