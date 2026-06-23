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
      {/* Hero Grid — Rotating News (esquerda) + Quadrado (direita) */}
      <div className="mb-16 grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Notícias rotativas — puxada pra esquerda */}
        <RotatingNews posts={posts} />

        {/* Quadrado — Anuncie Aqui */}
        <aside className="hidden rounded-2xl border border-[var(--theme-border)] bg-gradient-to-br from-amber-600/10 via-yellow-500/10 to-orange-600/10 p-6 lg:block">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="mb-3 inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
              📢 PUBLICIDADE
            </span>
            <h3 className="mb-2 text-lg font-bold text-[var(--theme-fg)]">
              Seu anúncio aqui!
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--theme-muted)]">
              Alcance milhares de leitores apaixonados por tecnologia, inovação e negócios digitais.
            </p>
            <a
              href="https://ah-digitalsolutions.vercel.app"
              target="_blank"
              className="inline-block rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-amber-400 hover:to-orange-400"
            >
              Quero anunciar 📩
            </a>
            <p className="mt-3 text-xs text-[var(--theme-muted)]">
              Planos a partir de <strong className="text-[var(--theme-fg)]">R$ 49</strong>
            </p>
          </div>
        </aside>
      </div>

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
