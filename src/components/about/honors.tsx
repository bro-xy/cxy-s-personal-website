import { honors, type HonorLevel } from "@/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const levelBadge: Record<HonorLevel, string> = {
  国家级: "bg-foreground text-background",
  省级: "bg-foreground/10 text-foreground border border-foreground/30",
  市级: "bg-surface-2 text-foreground/80 border border-line",
  校级: "bg-surface text-muted border border-line/70",
};

export function Honors() {
  return (
    <Section
      eyebrow="荣誉奖项"
      title="用结果证明实力"
      description="覆盖技术竞赛、学业荣誉、创新创业多个维度，按含金量与岗位相关性排序。"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {honors.map((h, i) => (
          <Reveal key={h.title} delay={(i % 3) * 0.05}>
            <div
              className={cn(
                "group relative flex h-full flex-col justify-between rounded-2xl border p-5 transition-all hover:-translate-y-0.5",
                h.level === "国家级"
                  ? "border-foreground/30 bg-foreground/[0.03] shadow-card"
                  : "border-line bg-surface/60 hover:shadow-card",
              )}
            >
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  h.level === "国家级"
                    ? "font-medium text-foreground"
                    : "text-foreground/90",
                )}
              >
                {h.title}
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px]",
                    levelBadge[h.level],
                  )}
                >
                  {h.level}
                </span>
                <span className="font-mono text-xs text-dim">{h.year}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
