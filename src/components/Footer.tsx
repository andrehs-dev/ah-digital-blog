export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-3 flex items-center justify-center gap-4 text-sm text-white/40">
          <a href="/politica-de-afiliados" className="transition hover:text-white/60">
            Política de Afiliados
          </a>
          <span>·</span>
          <span>© {new Date().getFullYear()} AH Digital Blog</span>
        </div>
        <p className="text-sm text-white/40">
          Feito com Next.js
        </p>
      </div>
    </footer>
  );
}
