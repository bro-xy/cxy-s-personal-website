import Image from "next/image";
import { ArrowUpRight, Clapperboard, Film } from "lucide-react";
import { videoWorks } from "@/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function VideoWorks() {
  return (
    <Section
      id="video-works"
      title="视频作品"
      description="我为计算机设计大赛制作了两件视频作品，一件是微课，一件是动画。"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {videoWorks.map((work, index) => {
          const Icon = work.format === "微课" ? Film : Clapperboard;
          return (
            <Reveal className="h-full" key={work.title} delay={index * .07} y={16}>
              <article className="video-work h-full overflow-hidden rounded-2xl border border-line bg-surface">
                {work.video ? (
                  <video
                    className="aspect-video w-full bg-primary"
                    aria-label={work.title}
                    controls
                    playsInline
                    preload="metadata"
                    src={work.video}
                    poster={work.poster}
                  >
                    {work.captions && <track kind="captions" label="简体中文" srcLang="zh-CN" src={work.captions} default />}
                  </video>
                ) : work.poster && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={work.poster} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <Icon aria-hidden size={27} strokeWidth={1.5} className="video-work-icon" />
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{work.title}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-accent">计算机设计大赛 · {work.awards.join("、")}</p>
                  <p className="mt-4 text-sm text-muted">我的分工 · {work.role}</p>
                  {work.overview && <p className="mt-3 text-sm leading-relaxed text-muted">{work.overview}</p>}
                  {work.watchUrl && (
                    <a href={work.watchUrl} target="_blank" rel="noreferrer" className="site-text-link mt-4">
                      观看完整版 <ArrowUpRight aria-hidden size={16} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
