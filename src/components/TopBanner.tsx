import Link from "next/link";

export function TopBanner() {
  return (
    <div className="group relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent">
      {/* Camada animada — brilho varrendo da esquerda pra direita */}
      <div className="absolute inset-0 -translate-x-full animate-[sweep_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />

      {/* Bolinhas brilhantes flutuando */}
      <div className="absolute left-1/4 top-1/2 h-1 w-1 animate-pulse rounded-full bg-blue-400/30" />
      <div className="absolute left-3/4 top-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-cyan-400/30 [animation-delay:1s]" />
      <div className="absolute left-1/2 bottom-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-blue-300/20 [animation-delay:2s]" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 text-sm text-white/80">
        <span>
          🚀 Precisa de um site profissional?{" "}
          <Link
            href="https://ah-digitalsolutions.vercel.app"
            className="font-medium text-blue-400 transition-colors hover:text-blue-300"
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
