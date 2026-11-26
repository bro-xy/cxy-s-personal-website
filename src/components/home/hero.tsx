import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, NotebookPen } from "lucide-react";
import { hero, lifePhotos, site } from "@/content";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Hero() {
  return (
    <section className="home-hero">
      <Container className="home-hero-grid">
        <div className="home-hero-copy">
          <p className="home-profile"><span lang="en">{site.englishName}</span> <span>{site.personality}</span></p>
          <h1>
            <span>{hero.greeting}</span><span className="home-name">{site.name}。</span>
          </h1>
          <p className="home-hero-description">{hero.subtitle}</p>
          <div className="home-hero-actions">
            <Link href="/projects" className="site-action site-action-primary">
              看作品集 <ArrowUpRight aria-hidden size={17} />
            </Link>
            <Link href="/blog" className="site-action site-action-secondary">
              <NotebookPen aria-hidden size={16} /> 读博客
            </Link>
            <Link href="/contact#resumes" className="home-resume-link site-text-link">
              <FileText aria-hidden size={16} /> 选择简历
            </Link>
          </div>
        </div>

        <figure className="home-photo-stack">
          <div className="home-photo-main">
            <Image
              src={lifePhotos[7]}
              alt="陈熙雅在徒步路上望向层叠的山"
              fill
              preload
              sizes="(min-width: 1024px) 530px, (min-width: 768px) 48vw, 88vw"
              className="object-cover"
            />
          </div>
          <div className="home-photo-inset">
            <Image
              src={lifePhotos[0]}
              alt="旅行中站在彩色经幡下的陈熙雅"
              fill
              sizes="(min-width: 768px) 156px, 34vw"
              className="object-cover"
            />
          </div>
          <figcaption>我的徒步和旅行照片</figcaption>
        </figure>

        <div className="home-hero-foot">
          <span>{site.location} · 软件工程在读</span>
          <a href="#current-work">继续往下看 <ArrowDown aria-hidden size={15} /></a>
        </div>
      </Container>
    </section>
  );
}
