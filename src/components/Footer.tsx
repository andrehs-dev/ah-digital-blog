export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} AH Digital Blog — Feito com Next.js
        </p>
      </div>
    </footer>
  );
}
