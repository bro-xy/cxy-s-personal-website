import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ActivityCard } from "@/components/activities/activity-card";
import { activities, otherWorks } from "@/content";

export const metadata: Metadata = {
  title: "兼职活动",
  description:
    "周中深耕职场，周末解锁多重身份：从奔驰试驾、上海马拉松到 SMG 露营、陀螺挑战赛，在真实大型活动中打磨统筹能力。",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="兼职活动"
        title="周中深耕，周末解锁多重身份"
        description="从大型赛事到品牌活动，从现场执行到全局督导，在不同场景中打磨统筹能力与临场应变力。"
      />

      <Section
        eyebrow="活动统筹经历"
        index="01"
        title="从奔驰到马拉松，在真实场景中打磨执行力"
        description="8 场大型活动，覆盖品牌体验、体育赛事、社群运营与文化教育，从现场执行到活动督导，在不同规模、不同受众的实战中积累统筹协调与临场应变能力。"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {activities.map((activity, i) => (
            <Reveal key={activity.slug} delay={(i % 2) * 0.08}>
              <ActivityCard activity={activity} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 其他兼职 */}
      <Section
        eyebrow="其他兼职实践"
        index="02"
        title="每一个身份都在积累"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {otherWorks.map((work, i) => (
            <Reveal key={work.title} delay={i * 0.08}>
              <Card className="h-full p-6">
                <h3 className="font-display text-lg font-semibold">
                  {work.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {work.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
