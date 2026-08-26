import { cn } from "@/lib/utils";
import { Container } from "./container";

/** 章节小标签：编号 + 短线 + mono 文本 */
export function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
      {index && <span className="text-dim">{index}</span>}
      <span className="h-px w-8 bg-line" />
      <span>{children}</span>
    </div>
  );
}

interface SectionProps {
  eyebrow?: string;
  index?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  eyebrow,
  index,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("relative py-24 md:py-36", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-16 max-w-2xl md:mb-24">
            {eyebrow && <SectionLabel index={index}>{eyebrow}</SectionLabel>}
            {title && (
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
