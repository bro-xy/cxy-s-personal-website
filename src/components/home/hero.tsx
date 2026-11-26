import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { hero, lifePhotos, site } from "@/content";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Hero() {
  return (
    <section className="home-hero">
      <Container className="home-hero-grid">
        <div className="home-hero-copy">
          <p className="home-greeting">{hero.greeting}</p>
          <h1>
            {hero.headline[0]}
            <span>{hero.headline[1]}</span>
          </h1>
          <p className="home-hero-description">{hero.subtitle}</p>
          <div className="home-hero-actions">
            <Link href="/projects" className="site-action site-action-primary">
              看我的作品 <ArrowUpRight aria-hidden size={17} />
            </Link>
            <Link href="/contact#resumes" className="site-action site-action-secondary">
              <FileText aria-hidden size={16} /> 选择简历
            </Link>
          </div>
        </div>

        <figure className="home-photo-stack">
          <div className="home-photo-main">
            <Image
              src={lifePhotos[0]}
              alt="旅行中站在彩色经幡下的陈熙雅"
              fill
              preload
              sizes="(min-width: 1024px) 385px, (min-width: 768px) 44vw, 76vw"
              className="object-cover"
            />
          </div>
          <div className="home-photo-inset">
            <Image
              src={lifePhotos[7]}
              alt="徒步途中望向远处的山"
              fill
              sizes="(min-width: 768px) 170px, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption>陈熙雅的旅行相册</figcaption>
        </figure>

        <div className="home-hero-foot">
          <span>{site.location} · 软件工程在读</span>
          <a href="#current-work">继续往下看 <ArrowDown aria-hidden size={15} /></a>
        </div>
      </Container>
    </section>
  );
}
