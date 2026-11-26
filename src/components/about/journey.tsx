import { education, internships, studentOrgs } from "@/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function Journey() {
  return (
    <>
      {/* 教育背景 + 学生组织 */}
      <Section
        eyebrow="成长路径"
        title="从计算机到软件工程"
        description="一路在技术、统筹与运营之间穿梭，把每一个身份都做扎实。"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <Reveal key={edu.school}>
              <Card className="h-full p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {edu.school}
                  </h3>
                  <Badge>{edu.degree}</Badge>
                </div>
                <p className="mt-1 text-sm text-primary-bright">
                  {edu.major} · {edu.period}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-line bg-white/5 px-2.5 py-1 text-xs text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {studentOrgs.map((org) => (
            <Reveal key={org.org}>
              <Card className="h-full p-6">
                <h3 className="font-display text-lg font-semibold">{org.org}</h3>
                <p className="mt-1 text-sm text-primary-bright">{org.role}</p>
                <ul className="mt-4 space-y-2">
                  {org.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-bright" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 实习经历 timeline */}
      <Section
        eyebrow="实习经历"
        title="周中深耕，多线并行"
        description="在真实项目与一线服务中打磨「盯进度、控节点、对结果负责」的执行力。"
      >
        <div className="relative mt-2 space-y-10 border-l border-line/70 pl-8">
          {internships.map((item) => (
            <Reveal key={item.org}>
              <div className="relative">
                <span
                  className={cn(
                    "absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 bg-background",
                    item.highlight
                      ? "border-primary"
                      : "border-line",
                  )}
                >
                  {item.highlight && (
                    <span className="absolute inset-0 m-auto h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
                  )}
                </span>

                <Card
                  className={cn(
                    "p-6",
                    item.highlight && "border-primary/30",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-lg font-semibold">
                      {item.org}
                    </h3>
                    {item.highlight && (
                      <Badge className="border-primary/30 bg-primary/10 text-primary-bright">
                        ★ 核心经历
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-primary-bright">
                    {item.role} · {item.period}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-bright" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
