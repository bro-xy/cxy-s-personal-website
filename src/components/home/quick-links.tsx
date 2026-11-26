import Link from "next/link";
import { ArrowUpRight, BookOpen, ClipboardCheck, Code, GraduationCap, Megaphone, Store } from "lucide-react";
import { otherWorks, recentActivities } from "@/content";
import { ActivityPhotos } from "@/components/activities/activity-photos";
import { Container } from "@/components/ui/container";

const fieldLinks = [
  {
    title: "项目测试",
    description: "IMS 销量报表和经销商管理平台的功能测试、用例设计与验收。",
    href: "/projects#project-testing",
    icon: ClipboardCheck,
  },
  {
    title: "公众号运营",
    description: "诗行小筑，以及在校园、企业和青少年服务机构做过的内容。",
    href: "/projects#wechat-operations",
    icon: Megaphone,
  },
  {
    title: "项目开发",
    description: "从产品策划到正式上线，我做的古诗词练习微信小程序。",
    href: "/projects#project-development",
    icon: Code,
  },
  {
    title: "我的 1688 店铺",
    description: otherWorks.find((work) => work.id === "shop")?.description,
    href: "/activities#shop",
    icon: Store,
  },
  {
    title: "家教辅导",
    description: "辅导中小学生计算机和数学。",
    href: "/activities#tutoring",
    icon: BookOpen,
  },
  {
    title: "SPIKE 课程老师",
    href: "/activities#spike",
    icon: GraduationCap,
  },
];

export function QuickLinks() {
  const latest = recentActivities[0];

  return (
    <section id="current-work" className="home-work" aria-labelledby="home-work-title">
      <Container>
        <div className="home-work-heading">
          <h2 id="home-work-title">项目与经历</h2>
          <Link href="/about" className="site-text-link">
            更多关于我 <ArrowUpRight aria-hidden size={16} />
          </Link>
        </div>
        <div className="home-field-links">
          {fieldLinks.map(({ title, description, href, icon: Icon }) => (
            <Link href={href} key={href} className="home-field-link">
              <Icon aria-hidden size={23} strokeWidth={1.6} />
              <h3>{title}</h3>
              {description && <p>{description}</p>}
              <ArrowUpRight className="field-arrow" aria-hidden size={18} />
            </Link>
          ))}
        </div>
        {latest && (
          <article className="home-latest">
            <ActivityPhotos name={latest.name} photos={latest.photos} className="home-latest-photo" />
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
