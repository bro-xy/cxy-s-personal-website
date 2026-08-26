import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { hero, portrait, resumePath, site } from "@/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RoleRotator } from "./role-rotator";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center pb-24 pt-24 md:pb-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* 左：文案 */}
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-dim">
              {site.status}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-7xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-8xl">
              {site.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <RoleRotator />
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/projects" size="lg">
                查看项目
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={resumePath} download variant="secondary" size="lg">
                <Download className="h-4 w-4" />
                下载简历
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 右：人像 */}
        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-[280px] overflow-hidden rounded-[2rem] border border-line bg-surface shadow-card sm:w-[340px] md:w-[380px]">
            <Image
              src={portrait}
              alt={site.name}
              fill
              priority
              sizes="(max-width: 1024px) 340px, 380px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
