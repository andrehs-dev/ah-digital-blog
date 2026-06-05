import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export async function generateStaticParams() {
  const tags = new Set<string>();
  getAllPosts().forEach((p: any) => p.tags?.forEach((t: string) => tags.add(t)));
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag}`,
    description: `Artigos sobre ${tag} no AH Digital Blog.`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = getAllPosts().filter((p) => p.tags?.includes(tag));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <Link href="/tags" className="mb-4 inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Todas as tags
        </Link>
        <h1 className="text-3xl font-bold text-white">
          Artigos sobre <span className="text-blue-400">#{tag}</span>
        </h1>
        <p className="mt-2 text-white/60">{posts.length} artigo(s)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
