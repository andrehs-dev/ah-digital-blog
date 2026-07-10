"use client";

import { useState } from "react";

interface PrecoItem {
  label: string;
  valor: number;
}

export default function CalculadoraSite() {
  const [paginas, setPaginas] = useState(3);
  const [ecommerce, setEcommerce] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [blog, setBlog] = useState(false);
  const [designPersonalizado, setDesignPersonalizado] = useState(false);
  const [manutencao, setManutencao] = useState(false);

  const calcular = () => {
    const precos: PrecoItem[] = [];

    // Base por página
    const base = paginas * 250;
    precos.push({ label: `${paginas} página(s)`, valor: base });

    // Adicionais
    if (ecommerce) {
      precos.push({ label: "E-commerce", valor: 1500 });
    }
    if (whatsapp) {
      precos.push({ label: "Integração WhatsApp", valor: 500 });
    }
    if (blog) {
      precos.push({ label: "Blog integrado", valor: 400 });
    }
    if (designPersonalizado) {
      precos.push({ label: "Design personalizado", valor: 800 });
    }

    const total = precos.reduce((acc, item) => acc + item.valor, 0);
    const manutencaoMensal = manutencao ? 97 : 0;
    const parcelado = Math.round(total / 12);

    return { precos, total, manutencaoMensal, parcelado };
  };

  const resultado = calcular();

  const msgWhats = encodeURIComponent(
    `Olá André! Usei a calculadora de site e quero um orçamento:\n\n` +
    `${resultado.precos.map((p) => `- ${p.label}: R$ ${p.valor}`).join("\n")}\n\n` +
    `Total estimado: R$ ${resultado.total}\n` +
    `${resultado.manutencaoMensal > 0 ? `Manutenção: R$ ${resultado.manutencaoMensal}/mês\n` : ""}\n` +
    `Pode me ajudar?`
  );

  return (
    <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 md:p-8">
      <h2 className="mb-2 text-xl font-bold text-[var(--theme-fg)]">
        💰 Calculadora de Preço de Site
      </h2>
      <p className="mb-6 text-sm text-[var(--theme-muted)]">
        Descubra quanto custa um site profissional para o seu negócio.
        Simule as características e veja o valor estimado na hora.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Controles */}
        <div className="space-y-6">
          {/* Slider de páginas */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm text-[var(--theme-fg)]">
              <span>📄 Número de páginas</span>
              <span className="font-bold text-blue-400">{paginas}</span>
            </label>
            <input
              type="range"
              min={1}
              max={20}
              value={paginas}
              onChange={(e) => setPaginas(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="mt-1 flex justify-between text-xs text-[var(--theme-muted)]">
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={ecommerce}
                onChange={(e) => setEcommerce(e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
              <div>
                <p className="text-sm text-[var(--theme-fg)]">🛒 Loja virtual (e-commerce)</p>
                <p className="text-xs text-[var(--theme-muted)]">Catálogo de produtos + carrinho + pagamento</p>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={whatsapp}
                onChange={(e) => setWhatsapp(e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
              <div>
                <p className="text-sm text-[var(--theme-fg)]">💬 Integração com WhatsApp</p>
                <p className="text-xs text-[var(--theme-muted)]">Botão de WhatsApp + chat automatizado</p>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={blog}
                onChange={(e) => setBlog(e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
              <div>
                <p className="text-sm text-[var(--theme-fg)]">📝 Blog integrado</p>
                <p className="text-xs text-[var(--theme-muted)]">Seção de blog com posts e SEO</p>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={designPersonalizado}
                onChange={(e) => setDesignPersonalizado(e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
              <div>
                <p className="text-sm text-[var(--theme-fg)]">🎨 Design exclusivo</p>
                <p className="text-xs text-[var(--theme-muted)]">Layout único, feito sob medida pra sua marca</p>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={manutencao}
                onChange={(e) => setManutencao(e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
              <div>
                <p className="text-sm text-[var(--theme-fg)]">🔧 Manutenção mensal</p>
                <p className="text-xs text-[var(--theme-muted)]">Atualizações, backup e suporte por R$ 97/mês</p>
              </div>
            </label>
          </div>
        </div>

        {/* Resultado */}
        <div className="flex flex-col rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <p className="mb-4 text-sm font-medium text-blue-400">📊 Estimativa</p>

          <div className="mb-4 space-y-2">
            {resultado.precos.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-[var(--theme-muted)]">{item.label}</span>
                <span className="text-[var(--theme-fg)]">R$ {item.valor.toLocaleString("pt-BR")}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-blue-500/20 pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-[var(--theme-fg)]">Total</span>
              <span className="text-blue-400">
                R$ {resultado.total.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between text-sm text-[var(--theme-muted)]">
              <span>Ou 12x de</span>
              <span>R$ {resultado.parcelado.toLocaleString("pt-BR")}</span>
            </div>
            {resultado.manutencaoMensal > 0 && (
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-[var(--theme-muted)]">Manutenção/mês</span>
                <span className="text-green-400">R$ {resultado.manutencaoMensal}</span>
              </div>
            )}
          </div>

          <a
            href={`https://wa.me/5519993174538?text=${msgWhats}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:from-green-400 hover:to-emerald-500"
          >
            💬 Quero este orçamento no WhatsApp
          </a>
          <p className="mt-2 text-center text-xs text-[var(--theme-muted)]">
            Valores estimados. Orçamento exato após conversa.
          </p>
        </div>
      </div>
    </div>
  );
}
