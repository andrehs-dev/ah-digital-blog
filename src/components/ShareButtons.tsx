"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname();
  const url = `https://ah-digital-blog.vercel.app${pathname}`;
  const text = encodeURIComponent(`${title} — AH Digital Blog`);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-white/30">Compartilhar:</span>

      {/* WhatsApp */}
      <Link
        href={`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm transition hover:bg-green-500/20 hover:text-green-400"
        title="Compartilhar no WhatsApp"
      >
        💬
      </Link>

      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm transition hover:bg-blue-600/20 hover:text-blue-400"
        title="Compartilhar no Facebook"
      >
        f
      </Link>

      {/* X / Twitter */}
      <Link
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm transition hover:bg-white/20 hover:text-white"
        title="Compartilhar no X"
      >
        𝕏
      </Link>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm transition hover:bg-blue-500/20 hover:text-blue-300"
        title="Compartilhar no LinkedIn"
      >
        in
      </Link>

      {/* Instagram (link do perfil) */}
      <Link
        href="https://instagram.com/andrehs.dev"
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm transition hover:bg-pink-500/20 hover:text-pink-400"
        title="Siga no Instagram"
      >
        📸
      </Link>
    </div>
  );
}
