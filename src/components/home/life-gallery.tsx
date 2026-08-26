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
      index="03"
      title="工作之外，攒满生活的热乎气"
      description="爱徒步走线、爱用镜头记录日常，爱往新鲜的人和事里钻。保持对生活的热忱，也是我保持高执行力的小秘诀。"
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
