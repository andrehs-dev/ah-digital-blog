"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/types";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });
}

export default function RotatingNews({ posts }: { posts: PostMeta[] }) {
  const [index, setIndex] = useState(0);

  // Pick posts — 8 slides no total
  const today = posts[0] ?? null;
  const destaque = posts.length > 3 ? posts[3] : posts[posts.length - 1] ?? null;

  // 6 aleatórios, todos diferentes entre si e dos dois primeiros
  const usedSlugs = new Set([today?.slug, destaque?.slug].filter(Boolean));
  const available = posts.filter(p => !usedSlugs.has(p.slug));
  const randomSlides: (PostMeta | null)[] = [];
  for (let i = 0; i < 6 && available.length > 0; i++) {
    const idx = Math.floor(Math.random() * available.length);
    randomSlides.push(available[idx]);
    available.splice(idx, 1);
  }

  const slides: PostMeta[] = [today, destaque, ...randomSlides].filter((s): s is PostMeta => s !== null);

  // Rotate every 3s
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const current = slides[index];
  if (!current) return null;

  return (
    <section className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-8 text-left transition-all duration-500">
        {/* Label */}
        <span className="mb-3 inline-block w-fit rounded-full bg-[var(--theme-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--theme-primary)]">
          {index === 0 ? "📰 Última notícia" : index === 1 ? "📅 Destaque" : "🎲 Aleatória"}
        </span>

        {/* Content */}
        <Link href={`/post/${current.slug}`} className="group flex-1">
          <h2 className="mb-3 text-2xl font-bold text-[var(--theme-fg)] transition group-hover:text-[var(--theme-primary)] md:text-3xl">
            {current.title}
          </h2>
          {current.description && (
            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[var(--theme-muted)]">
              {current.description}
            </p>
          )}
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--theme-muted)]">
          <time>{formatDate(current.date)}</time>
          <span>·</span>
          <span>{current.readingTime} min de leitura</span>
          {current.tags?.slice(0, 3).map((t) => (
            <Link
              key={t}
              href={`/tags/${t}`}
              className="rounded-full border border-[var(--theme-border)] px-2 py-0.5 hover:text-[var(--theme-primary)]"
            >
              #{t}
            </Link>
          ))}
        </div>

        {/* Dots */}
        {slides.length > 1 && (
          <div className="mt-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-[var(--theme-primary)]"
                    : "bg-[var(--theme-border)] hover:bg-[var(--theme-muted)]"
                }`}
                aria-label={`Notícia ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
