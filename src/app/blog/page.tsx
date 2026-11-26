import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "博客",
  description: "陈熙雅的博客，记录作品、活动和出门走走的日子。",
  robots: { index: blogPosts.length > 0, follow: true },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="博客"
        title="写给生活，也写给路上"
        description="做作品的过程，活动现场的事，还有出去走走时想记下来的东西。"
      />
      <Container className="pb-20">
        {blogPosts.length === 0 ? (
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="text-muted">文章还在整理中。</p>
            <Link href="/projects" className="site-text-link mt-4">
              看看我的作品 <ArrowUpRight aria-hidden size={16} />
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-line border-y border-line">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-6 focus-visible:outline-2 focus-visible:outline-accent">
                  <time dateTime={post.publishedAt} className="font-mono text-xs text-muted">{post.publishedAt}</time>
                  <h2 className="mt-2 flex items-center gap-2 font-display text-xl font-semibold">
                    {post.title} <ArrowUpRight aria-hidden size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h2>
                  <p className="mt-2 text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
