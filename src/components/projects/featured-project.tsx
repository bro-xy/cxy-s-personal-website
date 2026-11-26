import Image from "next/image";
import { QrCode } from "lucide-react";
import { indieProject } from "@/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function FeaturedProject() {
  const p = indieProject;
  const shots = p.screenshots ?? [];

  return (
    <Section
      id="project-development"
      eyebrow="项目开发"
      title="从想法到上线"
    >
      <Reveal>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-card sm:h-48 sm:w-48">
            <Image
              src={p.qrcode ?? "/images/miniapp/qrcode.jpg"}
              alt={`${p.name} 二维码`}
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
              <span className="h-1.5 w-1.5 rounded-full bg-background animate-pulse" />
              已正式上线
            </span>

            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-muted">
              {p.role} · {p.period}
            </p>

            <p className="mt-4 leading-relaxed text-muted">{p.overview}</p>

            <ul className="mt-5 space-y-3">
              {p.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-muted">
              <QrCode className="h-4 w-4 text-foreground/70" />
              微信扫一扫，立即体验
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-card"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-surface-2">
                <Image
                  src={shot.src}
                  alt={shot.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-3 py-2.5 text-center text-xs font-medium text-muted">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
