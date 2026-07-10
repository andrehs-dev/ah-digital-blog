"use client";

import { useState } from "react";

export default function CalculadoraROI() {
  const [horasPorSemana, setHorasPorSemana] = useState(10);
  const [valorHora, setValorHora] = useState(25);
  const [custoAutomacao, setCustoAutomacao] = useState(200);

  const horasPorMes = horasPorSemana * 4.3;
  const custoAtual = horasPorMes * valorHora;
  const economiaPercentual = 0.6; // 60% de economia em média
  const economiaMensal = Math.round(custoAtual * economiaPercentual);
  const economiaAnual = economiaMensal * 12;
  const lucroAnual = economiaAnual - custoAutomacao * 12;
  const retornoMeses = custoAutomacao > 0 ? Math.ceil(custoAutomacao / economiaMensal * 4.3) : 0;

  const msgWhats = encodeURIComponent(
    `Olá André! Usei a calculadora de ROI e quero automatizar meu negócio.\n\n` +
    `Gasto ${horasPorSemana}h/semana com tarefas repetitivas.\n` +
    `Minha hora vale R$ ${valorHora}.\n` +
    `Estimativa de economia: R$ ${economiaMensal}/mês.\n\n` +
    `Pode me ajudar a começar?`
  );

  return (
    <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 md:p-8">
      <h2 className="mb-2 text-xl font-bold text-[var(--theme-fg)]">
        📊 ROI da Automação
      </h2>
      <p className="mb-6 text-sm text-[var(--theme-muted)]">
        Descubra quanto dinheiro e tempo sua empresa pode economizar automatizando processos repetitivos com IA.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Controles */}
        <div className="space-y-6">
          {/* Horas por semana */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm text-[var(--theme-fg)]">
              <span>⏱️ Horas gastas por semana em tarefas repetitivas</span>
              <span className="font-bold text-blue-400">{horasPorSemana}h</span>
            </label>
            <input
              type="range"
              min={1}
              max={60}
              value={horasPorSemana}
              onChange={(e) => setHorasPorSemana(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="mt-1 flex justify-between text-xs text-[var(--theme-muted)]">
              <span>1h</span>
              <span>60h</span>
            </div>
          </div>

          {/* Valor da hora */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm text-[var(--theme-fg)]">
              <span>💰 Quanto vale sua hora (R$)</span>
              <span className="font-bold text-blue-400">R$ {valorHora}</span>
            </label>
            <input
              type="range"
              min={10}
              max={200}
              step={5}
              value={valorHora}
              onChange={(e) => setValorHora(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="mt-1 flex justify-between text-xs text-[var(--theme-muted)]">
              <span>R$ 10</span>
              <span>R$ 200</span>
            </div>
          </div>

          {/* Custo da automação */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm text-[var(--theme-fg)]">
              <span>🤖 Investimento mensal em automação (R$)</span>
              <span className="font-bold text-blue-400">R$ {custoAutomacao}</span>
            </label>
            <input
              type="range"
              min={0}
              max={2000}
              step={50}
              value={custoAutomacao}
              onChange={(e) => setCustoAutomacao(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="mt-1 flex justify-between text-xs text-[var(--theme-muted)]">
              <span>R$ 0</span>
              <span>R$ 2.000</span>
            </div>
          </div>
        </div>

        {/* Resultado */}
        <div className="flex flex-col rounded-xl border border-green-500/20 bg-green-500/5 p-6">
          <p className="mb-4 text-sm font-medium text-green-400">📊 Resultado</p>

          {/* Cartões de resultado */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-green-500/10 p-3 text-center">
              <p className="text-2xl font-bold text-green-400">{horasPorMes.toFixed(0)}h</p>
              <p className="text-xs text-[var(--theme-muted)]">Horas/mês</p>
            </div>
            <div className="rounded-lg bg-blue-500/10 p-3 text-center">
              <p className="text-2xl font-bold text-blue-400">
                R$ {custoAtual.toLocaleString("pt-BR")}
              </p>
              <p className="text-xs text-[var(--theme-muted)]">Custo atual/mês</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--theme-muted)]">Economia mensal estimada</span>
              <span className="font-bold text-green-400">
                R$ {economiaMensal.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--theme-muted)]">Economia anual</span>
              <span className="font-bold text-green-400">
                R$ {economiaAnual.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--theme-muted)]">Custo automação (12 meses)</span>
              <span className="text-[var(--theme-fg)]">
                - R$ {(custoAutomacao * 12).toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="border-t border-green-500/20 pt-3">
              <div className="flex justify-between text-base font-bold">
                <span className="text-[var(--theme-fg)]">Lucro líquido em 12 meses</span>
                <span className={lucroAnual >= 0 ? "text-green-400" : "text-red-400"}>
                  R$ {lucroAnual.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
            {retornoMeses > 0 && retornoMeses <= 12 && (
              <div className="rounded-lg bg-amber-500/10 p-3 text-center">
                <p className="text-sm font-medium text-amber-400">
                  ⏱ Retorno do investimento em ~{retornoMeses} meses
                </p>
              </div>
            )}
            {retornoMeses <= 1 && (
              <div className="rounded-lg bg-green-500/10 p-3 text-center">
                <p className="text-sm font-medium text-green-400">
                  🚀 Retorno imediato! Lucro desde o primeiro mês
                </p>
              </div>
            )}
          </div>

          <a
            href={`https://wa.me/5519993174538?text=${msgWhats}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:from-green-400 hover:to-emerald-500"
          >
            💬 Quero automatizar meu negócio
          </a>
          <p className="mt-2 text-center text-xs text-[var(--theme-muted)]">
            Economia baseada em relatos reais de pequenas empresas que automatizaram processos.
          </p>
        </div>
      </div>
    </div>
  );
}
