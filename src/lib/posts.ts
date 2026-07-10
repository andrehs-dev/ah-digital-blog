import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostMeta, Post } from "./types";

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      const { data, content } = matter(fs.readFileSync(path.join(postsDir, f), "utf-8"));
      const wordsPerMinute = 200;
      const wordCount = content.split(/\s+/).length;
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        tags: data.tags || [],
        image: data.image || null,
        readingTime: Math.max(1, Math.ceil(wordCount / wordsPerMinute)),
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      tags: data.tags || [],
      image: data.image || null,
      readingTime: Math.max(1, Math.ceil(wordCount / wordsPerMinute)),
    },
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
