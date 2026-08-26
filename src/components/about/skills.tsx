import { certificates, skillGroups } from "@/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SkillRadar } from "./skill-radar";
import { cn } from "@/lib/utils";

const levelStyles: Record<string, string> = {
  熟练掌握: "text-foreground border-foreground/30 bg-foreground/10",
  熟悉: "text-foreground/70 border-foreground/20 bg-foreground/5",
  了解: "text-muted border-line bg-white/5",
};

export function Skills() {
  return (
    <Section
      eyebrow="专业技能"
      index="04"
      title="能力地图"
      description="技术打底 + 统筹协调 + 落地执行，多栈能力在不同场景中反复验证。"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* skill groups */}
        <div className="space-y-6">
          {skillGroups.map((g) => (
            <Reveal key={g.category}>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold">
                    {g.category}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                      levelStyles[g.level],
                    )}
                  >
                    {g.level}
                  </span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex items-center gap-2 border-t border-line/60 pt-5">
              <span className="font-mono text-xs text-dim">证书</span>
              {certificates.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </Reveal>
        </div>

        {/* radar */}
        <Reveal className="flex justify-center">
          <SkillRadar />
        </Reveal>
      </div>
    </Section>
  );
}
