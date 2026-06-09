import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPost, getAllPosts } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LeftSidebar, RightSidebar } from "@/components/SidebarAds";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      tags: post.meta.tags,
    },
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 xl:grid-cols-[280px_1fr_280px]">
      <LeftSidebar />
      <article className="min-w-0">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.meta.tags?.map((tag: string) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400 transition hover:bg-blue-500/20"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
            {post.meta.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-white/40">
            <time>{formatDate(post.meta.date)}</time>
            <span>·</span>
            <span>{post.meta.readingTime} min de leitura</span>
          </div>
        </header>

        {/* Featured Image */}
        {post.meta.image && (
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img
              src={post.meta.image}
              alt={post.meta.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
          >
            ← Voltar para o blog
          </Link>
        </div>
      </article>
      <RightSidebar />
    </div>
  );
}
