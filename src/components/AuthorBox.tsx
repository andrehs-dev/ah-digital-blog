import Link from "next/link";

export function AuthorBox() {
  return (
    <div className="my-12 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      {/* Avatar/Monograma */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white">
        AH
      </div>

      {/* Info */}
      <div className="min-w-0">
        <p className="font-semibold text-white">André Henrique</p>
        <p className="mt-1 text-sm leading-relaxed text-white/60">
          Engenheiro de Software em formação e criador da{" "}
          <Link
            href="https://ah-digitalsolutions.vercel.app"
            className="text-blue-400 hover:text-blue-300"
          >
            AH Digital Solutions
          </Link>
          . Obsessivo por automatizar processos, explorar IA e construir negócios
          digitais que façam sentido. Escrevo sobre o que aprendo no caminho —
          tecnologia real, sem marketing fake.
        </p>
        <div className="mt-3 flex gap-3 text-sm">
          <Link
            href="https://ah-digitalsolutions.vercel.app"
            className="text-blue-400 hover:text-blue-300"
          >
            🌐 Site
          </Link>
          <span className="text-white/20">|</span>
          <Link
            href="https://instagram.com/andrehs.dev"
            className="text-blue-400 hover:text-blue-300"
          >
            📸 @andrehs.dev
          </Link>
        </div>
      </div>
    </div>
  );
}
