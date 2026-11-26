import { cn } from "@/lib/utils";
import { Container } from "./container";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-accent">
      <span className="h-px w-5 bg-accent" />
      <span>{children}</span>
    </div>
  );
}

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative border-t border-line py-12 md:py-20", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl md:mb-12">
            {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
            {title && (
              <h2 className="mt-4 font-editorial text-3xl font-bold tracking-tight text-foreground md:text-4xl">
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
