import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPost, getAllPosts } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogPostSchema } from "@/components/BlogPostSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { AuthorBox } from "@/components/AuthorBox";
import { FaqSchema } from "@/components/FaqSchema";
import { ProductBanner } from "@/components/ProductBanner";

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
    alternates: {
      canonical: `/post/${slug}`,
    },
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

  const baseUrl = "https://ah-digital-blog.vercel.app";
  const faq = (post.meta as any).faq;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="lg:flex lg:gap-10">
        {/* Sidebar esquerda — produtos (só desktop) */}
        <aside className="hidden lg:block lg:w-72 lg:shrink-0">
          <div className="sticky top-24">
            <ProductBanner />
          </div>
        </aside>

        {/* Conteúdo principal */}
        <article className="min-w-0 flex-1">
          <BreadcrumbSchema
            items={[
              { name: "Home", url: baseUrl },
              { name: post.meta.title, url: `${baseUrl}/post/${slug}` },
            ]}
          />
          <BlogPostSchema
            title={post.meta.title}
            description={post.meta.description}
            image={post.meta.image}
            datePublished={post.meta.date}
            slug={slug}
            wordCount={post.content.split(/\s+/).length}
            tags={post.meta.tags}
          />
          {faq && faq.length > 0 && <FaqSchema items={faq} />}

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
                alt={`Ilustração do post: ${post.meta.title}`}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>

          {/* Banner de produtos no mobile (depois do conteúdo) */}
          <div className="mt-10 lg:hidden">
            <ProductBanner />
          </div>

          {/* Author Box */}
          <AuthorBox />

          {/* Footer */}
          <div className="border-t border-white/10 pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
            >
              ← Voltar para o blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
