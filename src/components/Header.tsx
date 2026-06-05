'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AH Digital
          </span>
          <span className="text-white/60">Blog</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-white/60 transition hover:text-white">
            Home
          </Link>
          <Link href="/tags" className="text-sm text-white/60 transition hover:text-white">
            Tags
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <Link href="/" className="block py-2 text-white/60" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/tags" className="block py-2 text-white/60" onClick={() => setMenuOpen(false)}>
            Tags
          </Link>
        </div>
      )}
    </header>
  );
}
