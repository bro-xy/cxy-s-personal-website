import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  index,
  title,
  description,
}: {
  eyebrow: string;
  index?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pb-12 pt-28 md:pt-36">
      <Container>
        <Reveal>
          <SectionLabel index={index}>{eyebrow}</SectionLabel>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
