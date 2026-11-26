import { lifePhotos } from "@/content";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { DepthCarousel } from "@/components/ui/depth-carousel";

export function LifeGallery() {
  const items = lifePhotos.map((src, i) => ({
    src,
    alt: `生活照片 ${i + 1}`,
  }));

  return (
    <Section
      eyebrow="生活碎片"
      title="徒步、旅行，还有一些日常"
    >
      <Reveal>
        <DepthCarousel
          items={items}
          cardWidth={300}
          cardHeight={400}
          autoplayDelay={2800}
        />
      </Reveal>
    </Section>
  );
}
