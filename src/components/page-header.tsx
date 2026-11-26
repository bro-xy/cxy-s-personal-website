import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pb-10 pt-12 md:pb-14 md:pt-20">
      <Container>
        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-4 font-editorial text-4xl font-bold tracking-tight md:text-5xl">
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
