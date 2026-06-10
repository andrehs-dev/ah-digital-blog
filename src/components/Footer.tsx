export default function Footer() {
  return (
    <footer className="border-t border-[var(--theme-border)] py-8 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-3 flex items-center justify-center gap-4 text-sm text-[var(--theme-muted)]">
          <a href="/politica-de-privacidade" className="transition hover:text-[var(--theme-fg)]">
            Privacidade
          </a>
          <span>·</span>
          <a href="/termos-de-uso" className="transition hover:text-[var(--theme-fg)]">
            Termos
          </a>
          <span>·</span>
          <a href="/politica-de-afiliados" className="transition hover:text-[var(--theme-fg)]">
            Afiliados
          </a>
          <span>·</span>
          <span>© {new Date().getFullYear()} AH Digital Blog</span>
        </div>
        <p className="text-sm text-[var(--theme-muted)]">
          Feito com Next.js
        </p>
      </div>
    </footer>
  );
}
