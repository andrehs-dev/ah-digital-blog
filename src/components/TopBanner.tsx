import Link from "next/link";

export function TopBanner() {
  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 text-sm text-white/80">
        <span>
          🚀 Precisa de um site profissional?{" "}
          <Link
            href="https://ah-digitalsolutions.vercel.app"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            AH Digital Solutions
          </Link>
        </span>
        <span className="hidden text-xs text-white/50 sm:inline">
          Sites, sistemas e automação com IA — preço justo, sem mensalidade
        </span>
      </div>
    </div>
  );
}
