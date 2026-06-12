import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do AH Digital Blog.",
  alternates: {
    canonical: "/termos-de-uso",
  },
};

export default function TermosDeUso() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 leading-relaxed text-gray-700 dark:text-white/80">
      <span className="text-xs uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-semibold">
        Legal
      </span>
      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        Termos de Uso
      </h1>

      <p className="mt-6">
        Ao acessar e utilizar o <strong>AH Digital Blog</strong>, você concorda com os
        termos e condições descritos nesta página. Se não concordar com algum dos termos,
        recomendamos que não utilize o site.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">1. Conteúdo</h2>
      <p className="mt-3">
        Todo o conteúdo publicado no AH Digital Blog é produzido com base em pesquisas
        e experiências pessoais. Embora nos esforcemos para manter as informações
        precisas e atualizadas, não garantimos a completeza, exatidão ou atualidade
        do conteúdo.
      </p>
      <p className="mt-3">
        O conteúdo tem <strong>caráter informativo e educacional</strong>, não
        constituindo aconselhamento profissional, financeiro ou jurídico.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">2. Links de afiliado</h2>
      <p className="mt-3">
        Este site pode conter links de afiliado (Amazon, Shopee, Hotmart e outros).
        Ao clicar nesses links e realizar uma compra, podemos receber uma comissão,
        <strong> sem custo adicional para você</strong>.
      </p>
      <p className="mt-3">
        Nossas recomendações são baseadas em avaliação real dos produtos ou serviços,
        nunca apenas pela comissão. Veja nossa{" "}
        <Link
          href="/politica-de-afiliados"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300"
        >
          Política de Afiliados
        </Link>{" "}
        para mais detalhes.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">3. Propriedade intelectual</h2>
      <p className="mt-3">
        Todo o conteúdo publicado — textos, imagens, logotipos e demais materiais —
        é de propriedade do AH Digital Blog ou utilizado com permissão.
      </p>
      <p className="mt-3">
        É proibida a reprodução, distribuição ou modificação do conteúdo sem
        autorização prévia por escrito, exceto para compartilhamento de trechos
        com atribuição e link para o site original.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">4. Comentários e interação</h2>
      <p className="mt-3">
        Usuários podem interagir com o conteúdo através de comentários (quando
        disponíveis) e redes sociais. É proibido:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li>Publicar conteúdo ofensivo, difamatório ou ilegal</li>
        <li>Spam ou autopromoção excessiva</li>
        <li>Divulgar informações pessoais de terceiros</li>
      </ul>
      <p className="mt-3">
        Reservamo-nos o direito de moderar ou excluir comentários sem aviso prévio.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">5. Limitação de responsabilidade</h2>
      <p className="mt-3">
        O AH Digital Blog não se responsabiliza por:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li>Danos diretos ou indiretos decorrentes do uso das informações publicadas</li>
        <li>Conteúdo de sites terceiros linkados a partir deste site</li>
        <li>Perda de dados ou interrupção de serviço</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">6. Alterações nos termos</h2>
      <p className="mt-3">
        Estes Termos de Uso podem ser atualizados periodicamente. Recomendamos
        revisar esta página regularmente. O uso continuado do site após alterações
        constitui aceitação dos novos termos.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">7. Contato</h2>
      <p className="mt-3">
        Para dúvidas sobre estes Termos de Uso, entre em contato:
      </p>
      <p className="mt-2">
        WhatsApp:{" "}
        <a
          href="https://wa.me/5519993174538"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300"
        >
          (19) 99317-4538
        </a>
      </p>

      <p className="mt-10 text-sm text-gray-500 dark:text-white/40">
        Última atualização: 10 de junho de 2026.
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
