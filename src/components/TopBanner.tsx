import Link from "next/link";

export function TopBanner() {
  return (
    <div className="border-b border-white/5 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-white/50">
        <span>
          🚀 Precisa de um site profissional?{" "}
          <Link
            href="https://ah-digitalsolutions.vercel.app"
            className="text-blue-400 hover:text-blue-300"
          >
            AH Digital Solutions
          </Link>
        </span>
        <span className="hidden sm:inline">
          Sites, sistemas e automação com IA — preço justo, sem mensalidade
        </span>
      </div>
    </div>
  );
}
