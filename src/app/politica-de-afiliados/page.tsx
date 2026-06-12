import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Afiliados",
  description: "Transparência sobre links de afiliado no AH Digital Blog.",
  alternates: {
    canonical: "/politica-de-afiliados",
  },
};

export default function PoliticaAfiliados() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 leading-relaxed text-gray-700 dark:text-white/80">
      <span className="text-xs uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-semibold">
        Transparência
      </span>
      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        Política de Afiliados
      </h1>

      <p className="mt-6">
        No <strong>AH Digital Blog</strong>, nossa prioridade é entregar conteúdo
        útil, honesto e transparente. Esta página explica como links de afiliado
        funcionam por aqui.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">O que são links de afiliado?</h2>
      <p className="mt-3">
        Links de afiliado são URLs especiais que usamos para recomendar produtos
        ou serviços. Se você clicar em um desses links e realizar uma compra,
        podemos receber uma pequena comissão — <strong>sem custo adicional para você</strong>.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">Isso afeta minhas escolhas?</h2>
      <p className="mt-3">
        Não. Nossas recomendações são baseadas em <strong>análise real e experiência
        de uso</strong>, não em comissão. Se um produto não vale a pena, não será
        recomendado aqui, independentemente de ter programa de afiliados ou não.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">Quais programas usamos?</h2>
      <p className="mt-3">
        Atualmente, participamos dos seguintes programas de afiliados:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li><strong>Amazon Associados</strong> — links para produtos na Amazon Brasil</li>
        <li><strong>Hotmart</strong> — cursos e infoprodutos digitais</li>
      </ul>
      <p className="mt-4">
        Podemos incluir outros programas no futuro. Esta página será atualizada
        sempre que isso acontecer.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">Como identificar um link de afiliado?</h2>
      <p className="mt-3">
        Links de afiliado podem vir acompanhados de uma observação como
        &ldquo;com links de afiliado&rdquo; no início ou final do post. Também
        é possível identificar pelo próprio link, que pode conter parâmetros
        específicos dos programas.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">Isso é obrigatório?</h2>
      <p className="mt-3">
        Sim. Esta página atende aos requisitos do <strong>Código de Defesa do
        Consumidor</strong> (Lei nº 8.078/90) e das diretrizes da <strong>Amazon
        Associates</strong>, que exigem transparência sobre links de afiliado.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">Dúvidas?</h2>
      <p className="mt-3">
        Se tiver qualquer pergunta sobre esta política, entre em contato pelo
        WhatsApp:{" "}
        <a
          href="https://wa.me/5519993174538"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300"
        >
          (19) 99317-4538
        </a>.
      </p>

      <p className="mt-10 text-sm text-gray-500 dark:text-white/40">
        Última atualização: 06 de junho de 2026.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300"
        >
          ← Voltar para o início
        </Link>
      </div>
    </article>
  );
}
