import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Tags",
  description: "Navegue por categorias no AH Digital Blog.",
  alternates: {
    canonical: "/tags",
  },
};

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  // Contar quantos posts por tag e filtrar só as com 2+ posts
  const tagCounts = tags
    .map((tag: string) => ({
      tag,
      count: posts.filter((p: any) => p.tags?.includes(tag)).length,
    }))
    .filter((t) => t.count >= 2)
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-white">Tags</h1>

      <div className="mb-12 flex flex-wrap gap-3">
        {tagCounts.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:border-blue-500/50 hover:text-white"
          >
            #{tag} ({count})
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
