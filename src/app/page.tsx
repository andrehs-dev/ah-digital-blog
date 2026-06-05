import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AH Digital Blog
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-white/60">
          Artigos sobre tecnologia, finanças, produtividade, desenvolvimento pessoal e o que mais der na telha.
        </p>
      </section>

      {/* Tags */}
      {tags.length > 0 && (
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 transition hover:border-blue-500/50 hover:text-white"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <div className="mb-4 text-6xl">📝</div>
          <h2 className="mb-2 text-2xl font-semibold text-white">Nenhum artigo ainda</h2>
          <p className="text-white/40">Em breve teremos conteúdo por aqui!</p>
        </div>
      ) : (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      )}
    </div>
  );
}
