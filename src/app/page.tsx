import Link from "next/link";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import RotatingNews from "@/components/RotatingNews";
import ServicesBanner from "@/components/ServicesBanner";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Rotating News — substitui o hero antigo */}
      <RotatingNews posts={posts} />

      {/* Tags */}
      {tags.length > 0 && (
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {tags
              .map((tag) => ({
                tag,
                count: posts.filter((p) => p.tags?.includes(tag)).length,
              }))
              .filter((t) => t.count >= 2)
              .sort((a, b) => b.count - a.count)
              .slice(0, 8)
              .map(({ tag }) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full border border-[var(--theme-border)] bg-[var(--theme-card)] px-4 py-1.5 text-sm text-[var(--theme-muted)] transition hover:border-[var(--theme-primary)]/50 hover:text-[var(--theme-fg)]"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Conteúdo principal + Sidebar */}
      <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Posts Grid */}
        <div>
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-4 text-6xl">📝</div>
              <h2 className="mb-2 text-2xl font-semibold text-[var(--theme-fg)]">Nenhum artigo ainda</h2>
              <p className="text-[var(--theme-muted)]">Em breve teremos conteúdo por aqui!</p>
            </div>
          ) : (
            <section className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </section>
          )}
        </div>

        {/* Sidebar — Banner de Serviços */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <ServicesBanner />
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section className="mb-16">
        <NewsletterForm />
      </section>
    </div>
  );
}
