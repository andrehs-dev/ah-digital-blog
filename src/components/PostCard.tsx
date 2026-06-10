import Link from "next/link";
import type { PostMeta } from "@/lib/types";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/post/${post.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 transition-all duration-300 hover:border-[var(--theme-primary)]/50 hover:bg-[var(--theme-card-hover)]">
        {post.image && (
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--theme-primary)]/10 px-3 py-1 text-xs text-[var(--theme-primary)]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h2 className="mb-2 text-xl font-semibold text-[var(--theme-fg)] transition group-hover:text-[var(--theme-primary)]">
          {post.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/60">
          {post.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-white/40">
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} min de leitura</span>
        </div>
      </article>
    </Link>
  );
}
