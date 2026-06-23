import Link from "next/link";

export default function ServicesBanner() {
  return (
    <aside className="rounded-2xl border border-[var(--theme-border)] bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-purple-600/20 p-6">
      {/* Header */}
      <div className="mb-4 text-center">
        <span className="mb-2 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
          💼 Serviços
        </span>
        <h3 className="text-lg font-bold text-[var(--theme-fg)]">
          Precisa de um site?
        </h3>
        <p className="mt-1 text-sm text-[var(--theme-muted)]">
          Sites profissionais, landing pages, sistemas sob medida e automação para seu negócio.
        </p>
      </div>

      {/* Services */}
      <ul className="mb-5 space-y-3">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg">🌐</span>
          <div>
            <p className="text-sm font-medium text-[var(--theme-fg)]">Landing Page</p>
            <p className="text-xs text-[var(--theme-muted)]">Página única pra divulgar seu serviço</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg">🛒</span>
          <div>
            <p className="text-sm font-medium text-[var(--theme-fg)]">Site Institucional</p>
            <p className="text-xs text-[var(--theme-muted)]">Sua empresa na internet com estilo</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg">⚙️</span>
          <div>
            <p className="text-sm font-medium text-[var(--theme-fg)]">Automação</p>
            <p className="text-xs text-[var(--theme-muted)]">Chatbots, agendamento, CRM</p>
          </div>
        </li>
      </ul>

      {/* CTA */}
      <Link
        href="https://wa.me/5519993174538"
        target="_blank"
        className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:from-blue-500 hover:to-blue-400"
      >
        Solicitar Orçamento
      </Link>

      <p className="mt-3 text-center text-xs text-[var(--theme-muted)]">
        Parcele em até 12x · Suporte incluso
      </p>
    </aside>
  );
}
