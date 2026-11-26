import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Boxes, Store } from "lucide-react";
import { otherWorks, recentActivities } from "@/content";
import { Container } from "@/components/ui/container";

const fieldLinks = [
  {
    title: "项目、测试和运营",
    description: "阙天的企业项目、独立开发的古诗词小程序，以及我做过的公众号内容。",
    href: "/projects",
    icon: Boxes,
  },
  {
    title: "我的 1688 店铺",
    description: otherWorks.find((work) => work.id === "shop")?.description,
    href: "/activities#shop",
    icon: Store,
  },
  {
    title: "家教与 SPIKE 课",
    description: "辅导中小学生计算机和数学，平时也会上 SPIKE 课。",
    href: "/activities#tutoring",
    icon: BookOpen,
  },
];

export function QuickLinks() {
  const latest = recentActivities[0];

  return (
    <section id="current-work" className="home-work" aria-labelledby="home-work-title">
      <Container>
        <div className="home-work-heading">
          <h2 id="home-work-title">我在做的事</h2>
          <Link href="/about" className="site-text-link">
            更多关于我 <ArrowUpRight aria-hidden size={16} />
          </Link>
        </div>
        <div className="home-field-links">
          {fieldLinks.map(({ title, description, href, icon: Icon }) => (
            <Link href={href} key={href} className="home-field-link">
              <Icon aria-hidden size={23} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="field-arrow" aria-hidden size={18} />
            </Link>
          ))}
        </div>
        {latest && (
          <article className="home-latest">
            {latest.photos[0] && (
              <div className="home-latest-photo">
                <Image
                  src={latest.photos[0]}
                  alt={latest.name + "现场"}
                  fill
                  sizes="(min-width: 768px) 48vw, 92vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="home-latest-copy">
              <p className="editorial-eyebrow">最近的兼职现场</p>
              <p className="editorial-date">{latest.period} · {latest.role}</p>
              <h3>{latest.name}</h3>
              <p>{latest.summary}</p>
              <Link href="/activities#activity-log" className="site-text-link">
                查看兼职记录 <ArrowUpRight aria-hidden size={16} />
              </Link>
            </div>
          </article>
        )}
      </Container>
    </section>
  );
}
