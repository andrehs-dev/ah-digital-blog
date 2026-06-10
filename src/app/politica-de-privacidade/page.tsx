import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o AH Digital Blog coleta, usa e protege seus dados pessoais.",
};

export default function PoliticaPrivacidade() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 leading-relaxed text-gray-700 dark:text-white/80">
      <span className="text-xs uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 font-semibold">
        Privacidade
      </span>
      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        Política de Privacidade
      </h1>

      <p className="mt-6">
        Esta Política de Privacidade descreve como o <strong>AH Digital Blog</strong> coleta,
        utiliza e protege as informações pessoais dos usuários. Ao utilizar este site,
        você concorda com os termos descritos aqui.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">1. Informações que coletamos</h2>
      <p className="mt-3">
        Podemos coletar as seguintes informações:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li><strong>Informações de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência — coletados automaticamente por ferramentas como Google Analytics.</li>
        <li><strong>Informações fornecidas voluntariamente:</strong> nome e e-mail ao assinar a newsletter ou entrar em contato pelo formulário.</li>
        <li><strong>Cookies:</strong> pequenos arquivos armazenados no seu navegador para melhorar a experiência de navegação.</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">2. Como usamos suas informações</h2>
      <p className="mt-3">
        As informações coletadas são utilizadas para:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li>Melhorar o conteúdo e a experiência do site</li>
        <li>Enviar newsletters (apenas com seu consentimento)</li>
        <li>Analisar tráfego e comportamento de navegação</li>
        <li>Cumprir obrigações legais e regulatórias</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">3. Cookies</h2>
      <p className="mt-3">
        Utilizamos cookies essenciais para o funcionamento do site e cookies de terceiros
        (como Google Analytics e Google AdSense, quando aplicável) para análise de tráfego.
        Você pode configurar seu navegador para recusar cookies, mas isso pode afetar
        algumas funcionalidades do site.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">4. Compartilhamento com terceiros</h2>
      <p className="mt-3">
        Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros,
        exceto:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li>Quando exigido por lei</li>
        <li>Para processamento por parceiros de confiança (como Google Analytics), que concordam em manter os dados sigilosos</li>
        <li>Links de afiliado (Amazon, Shopee, Hotmart) podem registrar que você veio deste site, mas não compartilhamos seus dados pessoais com eles</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">5. Seus direitos (LGPD)</h2>
      <p className="mt-3">
        Com base na Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li>Solicitar a confirmação da existência de tratamento de dados</li>
        <li>Acessar seus dados pessoais</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
        <li>Solicitar a exclusão dos dados</li>
        <li>Revogar o consentimento a qualquer momento</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">6. Segurança</h2>
      <p className="mt-3">
        Adotamos medidas de segurança técnicas e organizacionais para proteger suas
        informações contra acesso não autorizado, alteração, divulgação ou destruição.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">7. Alterações nesta política</h2>
      <p className="mt-3">
        Esta política pode ser atualizada periodicamente. Recomendamos revisar esta página
        regularmente. O uso continuado do site após alterações constitui aceitação dos
        novos termos.
      </p>

      <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">8. Contato</h2>
      <p className="mt-3">
        Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade,
        entre em contato:
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
