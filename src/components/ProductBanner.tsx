import Link from "next/link";

const products = [
  {
    name: "Kindle 11ª Geração",
    desc: "Leve, bateria que dura semanas, sem distrações.",
    amazon: "https://www.amazon.com.br/dp/B0CP31L73X?tag=ahdigitalblog-20",
    shopee: null,
  },
  {
    name: "Echo Dot 5G",
    desc: "Automação por voz, timer, lembretes, música.",
    amazon: "https://www.amazon.com.br/dp/B09B8VGCR8?tag=ahdigitalblog-20",
    shopee: null,
  },
  {
    name: "Timer Pomodoro",
    desc: "Display grande, alerta sonoro, sem depender de app.",
    amazon: "https://www.amazon.com.br/dp/B0H29LQVXF?tag=ahdigitalblog-20",
    shopee: "https://s.shopee.com.br/30lZBjOv0j",
  },
  {
    name: "Tomada WiFi",
    desc: "Liga/desliga pelo celular ou comando de voz.",
    amazon: null,
    shopee: "https://s.shopee.com.br/2g8in987nE",
  },
  {
    name: "Câmera Segurança",
    desc: "Visão noturna, detecção de movimento, app.",
    amazon: "https://www.amazon.com.br/dp/B0CYPPS4VG?tag=ahdigitalblog-20",
    shopee: "https://s.shopee.com.br/qh4bXozye",
  },
];

export function ProductBanner() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-400">
        💡 Recomendados
      </p>
      <div className="space-y-3">
        {products.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-blue-500/20"
          >
            <p className="text-sm font-medium text-white">{p.name}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-white/40">
              {p.desc}
            </p>
            <div className="mt-2 flex gap-2">
              {p.amazon && (
                <Link
                  href={p.amazon}
                  target="_blank"
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  Amazon →
                </Link>
              )}
              {p.shopee && (
                <Link
                  href={p.shopee}
                  target="_blank"
                  className="text-xs text-green-400 hover:text-green-300"
                >
                  Shopee →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-white/20">
        Links de afiliado. Compro uma pizza de vez em quando sem custo extra pra
        você.
      </p>
    </div>
  );
}
