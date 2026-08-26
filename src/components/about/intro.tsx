import Image from "next/image";
import { basicInfo, intro, portrait, selfEvaluation, type TextSegment } from "@/content";
import { Reveal } from "@/components/ui/reveal";

function renderSegment(seg: TextSegment, i: number) {
  if (seg.large) {
    return (
      <span
        key={i}
        className="font-display text-xl font-bold text-foreground sm:text-2xl"
      >
        {seg.text}
      </span>
    );
  }
  if (seg.bold) {
    return (
      <span key={i} className="font-semibold text-foreground">
        {seg.text}
      </span>
    );
  }
  return <span key={i}>{seg.text}</span>;
}

export function Intro() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal>
        <div className="flex flex-col gap-6">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border-2 border-foreground/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line/60 shadow-card">
              <Image
                src={portrait}
                alt="陈熙雅证件照"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6">
            {basicInfo.map((item) => (
              <div key={item.label}>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim">
                  {item.label}
                </span>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              陈熙雅
            </h1>
            <p className="mt-2 font-mono text-sm tracking-[0.2em] text-dim">
              CHEN XIYA
            </p>
            <div className="mt-6 space-y-5 leading-relaxed text-muted">
              {intro.map((paragraph, pi) => (
                <p key={pi} className="space-y-0">
                  {paragraph.map((seg, si) => renderSegment(seg, si))}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mt-10 rounded-2xl border border-line bg-surface/60 p-6">
            <div className="absolute -top-2.5 left-6 flex items-center gap-1 rounded-full bg-foreground px-3 py-0.5 text-[10px] font-medium uppercase tracking-widest text-background">
              <span className="font-mono">◆</span> 自我评价
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              {selfEvaluation}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
