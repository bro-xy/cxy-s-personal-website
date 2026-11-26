import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/container";

type ArticleProps = { params: Promise<{ slug: string }> };

async function articleFor({ params }: ArticleProps) {
  const { slug } = await params;
  const post = blogPosts.find((article) => article.slug === slug);
  if (!post) notFound();
  return post;
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: ArticleProps): Promise<Metadata> {
  const post = await articleFor(props);
  return { title: post.title, description: post.summary };
}

export default async function ArticlePage(props: ArticleProps) {
  const post = await articleFor(props);

  return (
    <Container className="max-w-3xl py-16">
      <Link href="/blog" className="site-text-link"><ArrowLeft aria-hidden size={16} /> 返回博客</Link>
      <article className="mt-8">
        <time dateTime={post.publishedAt} className="font-mono text-xs text-muted">{post.publishedAt}</time>
        <h1 className="mt-3 font-editorial text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{post.summary}</p>
        <div className="mt-8 space-y-5 leading-8">
          {post.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </article>
    </Container>
  );
}
