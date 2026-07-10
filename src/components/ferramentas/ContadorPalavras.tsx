"use client";

import { useState, useCallback } from "react";

export default function ContadorPalavras() {
  const [texto, setTexto] = useState("");

  const stats = useCallback(() => {
    const palavras = texto.trim()
      ? texto.trim().split(/\s+/).length
      : 0;
    const caracteres = texto.length;
    const caracteresSemEspaco = texto.replace(/\s/g, "").length;
    const paragrafos = texto.trim()
      ? texto.trim().split(/\n+/).filter(Boolean).length
      : 0;
    const linhas = texto ? texto.split("\n").length : 0;
    const frases = texto
      ? texto.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;

    // Palavras mais comuns
    const palavrasArray = texto.toLowerCase().match(/\b[a-záéíóúâêîôûãõçà]+/g) || [];
    const frequencia: Record<string, number> = {};
    palavrasArray.forEach((p) => {
      if (p.length > 2) {
        frequencia[p] = (frequencia[p] || 0) + 1;
      }
    });
    const topPalavras = Object.entries(frequencia)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    // Tempo de leitura
    const minLeitura = Math.max(1, Math.round(palavras / 200));

    return {
      palavras,
      caracteres,
      caracteresSemEspaco,
      paragrafos,
      linhas,
      frases,
      topPalavras,
      minLeitura,
    };
  }, [texto]);

  const s = stats();

  return (
    <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 md:p-8">
      <h2 className="mb-2 text-xl font-bold text-[var(--theme-fg)]">
        📝 Contador de Palavras
      </h2>
      <p className="mb-6 text-sm text-[var(--theme-muted)]">
        Conte palavras, caracteres, parágrafos e frases do seu texto.
        Ideal para redações, posts de blog, legendas e conteúdo em geral.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Área de texto */}
        <div>
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Cole ou digite seu texto aqui..."
            rows={12}
            className="w-full resize-y rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-4 text-sm text-[var(--theme-fg)] placeholder-[var(--theme-muted)]/40 outline-none transition focus:border-blue-500/50"
          />
          {texto && (
            <button
              onClick={() => setTexto("")}
              className="mt-2 text-xs text-[var(--theme-muted)] transition hover:text-red-400"
            >
              🗑️ Limpar texto
            </button>
          )}
          {!texto && (
            <div className="mt-4 rounded-xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] p-6 text-center">
              <p className="text-sm text-[var(--theme-muted)]/50">
                Comece a digitar ou cole um texto para ver as estatísticas
              </p>
            </div>
          )}
        </div>

        {/* Estatísticas */}
        <div className="space-y-4">
          {texto ? (
            <>
              {/* Cartões principais */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-blue-500/10 p-4 text-center">
                  <p className="text-3xl font-bold text-blue-400">{s.palavras}</p>
                  <p className="text-xs text-[var(--theme-muted)]">Palavras</p>
                </div>
                <div className="rounded-lg bg-purple-500/10 p-4 text-center">
                  <p className="text-3xl font-bold text-purple-400">{s.caracteres}</p>
                  <p className="text-xs text-[var(--theme-muted)]">Caracteres</p>
                </div>
                <div className="rounded-lg bg-green-500/10 p-4 text-center">
                  <p className="text-3xl font-bold text-green-400">{s.caracteresSemEspaco}</p>
                  <p className="text-xs text-[var(--theme-muted)]">Caracteres (sem espaço)</p>
                </div>
                <div className="rounded-lg bg-amber-500/10 p-4 text-center">
                  <p className="text-3xl font-bold text-amber-400">{s.minLeitura} min</p>
                  <p className="text-xs text-[var(--theme-muted)]">Tempo de leitura</p>
                </div>
              </div>

              {/* Detalhes */}
              <div className="space-y-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--theme-muted)]">Parágrafos</span>
                  <span className="text-[var(--theme-fg)]">{s.paragrafos}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--theme-muted)]">Linhas</span>
                  <span className="text-[var(--theme-fg)]">{s.linhas}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--theme-muted)]">Frases</span>
                  <span className="text-[var(--theme-fg)]">{s.frases}</span>
                </div>
              </div>

              {/* Palavras mais frequentes */}
              {s.topPalavras.length > 0 && (
                <div className="rounded-xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-4">
                  <p className="mb-2 text-xs font-medium text-[var(--theme-muted)]">
                    🔤 Palavras mais frequentes
                  </p>
                  <div className="space-y-1.5">
                    {s.topPalavras.map(([palavra, freq], i) => (
                      <div key={palavra} className="flex items-center gap-2">
                        <span className="w-5 text-right text-xs text-[var(--theme-muted)]/50">
                          {i + 1}.
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-[var(--theme-fg)]">{palavra}</span>
                            <span className="text-xs text-[var(--theme-muted)]">{freq}x</span>
                          </div>
                          <div className="mt-0.5 h-1.5 rounded-full bg-[var(--theme-border)]">
                            <div
                              className="h-full rounded-full bg-blue-500"
                              style={{
                                width: `${Math.min(
                                  100,
                                  (freq / s.topPalavras[0][1]) * 100
                                )}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            // Placeholder vazio
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <p className="text-5xl mb-3">📊</p>
                <p className="text-sm text-[var(--theme-muted)]/50">
                  Estatísticas aparecerão aqui
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
