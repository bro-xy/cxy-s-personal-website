import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const entries = [
  { index: "01", title: "关于我", desc: "成长路径 · 荣誉 · 技能", href: "/about" },
  {
    index: "02",
    title: "项目与作品",
    desc: "企业项目 · 独立开发 · 运营",
    href: "/projects",
  },
  {
    index: "03",
    title: "兼职活动",
    desc: "大型活动 · 现场统筹",
    href: "/activities",
  },
  { index: "04", title: "联系我", desc: "期待与你的合作机会", href: "/contact" },
];

export function QuickLinks() {
  return (
    <Section eyebrow="快速入口" index="01" title="想先了解哪一面？">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {entries.map((e, i) => (
          <Reveal key={e.href} delay={i * 0.06}>
            <Link
              href={e.href}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-dim">{e.index}</span>
                  <ArrowUpRight className="h-5 w-5 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold tracking-tight text-foreground">
                  {e.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{e.desc}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
