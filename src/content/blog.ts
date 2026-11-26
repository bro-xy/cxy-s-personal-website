export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  paragraphs: string[];
}

const posts: BlogPost[] = [];

export const blogPosts = [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
