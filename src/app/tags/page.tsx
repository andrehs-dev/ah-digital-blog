import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Tags",
  description: "Navegue por categorias no AH Digital Blog.",
};

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-white">Todas as Tags</h1>

      <div className="mb-12 flex flex-wrap gap-3">
        {tags.map((tag: string) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:border-blue-500/50 hover:text-white"
          >
            #{tag} ({posts.filter((p: any) => p.tags?.includes(tag)).length})
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
