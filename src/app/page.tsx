import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { FeaturedProject } from "@/components/projects/featured-project";
import { LifeGallery } from "@/components/home/life-gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <FeaturedProject />
      <LifeGallery />
    </>
  );
}
