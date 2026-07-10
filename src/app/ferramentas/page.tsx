import type { Metadata } from "next";
import ConversorImagem from "@/components/ferramentas/ConversorImagem";
import CalculadoraSite from "@/components/ferramentas/CalculadoraSite";
import CalculadoraROI from "@/components/ferramentas/CalculadoraROI";
import ContadorPalavras from "@/components/ferramentas/ContadorPalavras";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ferramentas Grátis Online para Pequenas Empresas",
  description:
    "Ferramentas gratuitas: conversor de imagem, calculadora de preço de site, contador de palavras e calculadora de ROI de automação. 100% online, sem cadastro.",
  openGraph: {
    title: "Ferramentas Grátis Online — AH Digital Blog",
    description:
      "Conversor de imagem, calculadora de site, contador de palavras e ROI de automação.",
  },
  alternates: {
    canonical: "/ferramentas",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Conversor de Imagem Online",
      url: "https://ah-digital-blog.vercel.app/ferramentas#conversor",
      operatingSystem: "All",
      applicationCategory: "Multimedia",
      offers: { "@type": "Offer", price: "0" },
    },
    {
      "@type": "WebApplication",
      name: "Calculadora de Preço de Site",
      url: "https://ah-digital-blog.vercel.app/ferramentas#calculadora-site",
      operatingSystem: "All",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0" },
    },
    {
      "@type": "WebApplication",
      name: "Calculadora de ROI de Automação",
      url: "https://ah-digital-blog.vercel.app/ferramentas#roi-automacao",
      operatingSystem: "All",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0" },
    },
    {
      "@type": "WebApplication",
      name: "Contador de Palavras Online",
      url: "https://ah-digital-blog.vercel.app/ferramentas#contador",
      operatingSystem: "All",
      applicationCategory: "Utilities",
      offers: { "@type": "Offer", price: "0" },
    },
  ],
};

export default function FerramentasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            🛠️ FERRAMENTAS GRÁTIS
          </span>
          <h1 className="mb-4 text-3xl font-bold text-[var(--theme-fg)] md:text-4xl">
            Ferramentas gratuitas para o seu negócio
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--theme-muted)]">
            Use nossas ferramentas online sem complicação. Nada é enviado para
            servidores — tudo roda no seu navegador. Rápido, seguro e grátis.
          </p>
        </div>

        {/* Grid de ferramentas */}
        <div className="mb-16 space-y-8">
          {/* Ferramenta 1 — Conversor de Imagem */}
          <section id="conversor">
            <ConversorImagem />
          </section>

          {/* Ferramenta 2 — Calculadora de Site */}
          <section id="calculadora-site">
            <CalculadoraSite />
          </section>

          {/* Ferramenta 3 — ROI da Automação */}
          <section id="roi-automacao">
            <CalculadoraROI />
          </section>

          {/* Ferramenta 4 — Contador de Palavras */}
          <section id="contador">
            <ContadorPalavras />
          </section>
        </div>

        {/* Banner AH Digital Solutions */}
        <div className="mb-16 rounded-2xl border border-[var(--theme-border)] bg-gradient-to-br from-blue-600/10 via-purple-500/10 to-indigo-600/10 p-8 text-center">
          <h2 className="mb-3 text-xl font-bold text-[var(--theme-fg)]">
            Quer transformar seu negócio com tecnologia?
          </h2>
          <p className="mb-6 text-sm text-[var(--theme-muted)]">
            A <strong className="text-[var(--theme-fg)]">AH Digital Solutions</strong> cria sites
            profissionais, sistemas de automação e integrações inteligentes para
            pequenas empresas. Preço justo, sem mensalidade abusiva.
          </p>
          <a
            href="https://wa.me/5519993174538?text=Ol%C3%A1%20Andr%C3%A9!%20Vi%20as%20ferramentas%20do%20blog%20e%20quero%20saber%20mais%20sobre%20sites%20e%20automa%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-green-400 hover:to-emerald-500"
          >
            💬 Fale com a gente no WhatsApp
          </a>
        </div>

        {/* CTA Final */}
        <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-8 text-center">
          <h2 className="mb-3 text-xl font-bold text-[var(--theme-fg)]">
            Gostou das ferramentas?
          </h2>
          <p className="mb-6 text-sm text-[var(--theme-muted)]">
            Leia nossos guias sobre tecnologia e automação para pequenas empresas.
          </p>
          <Link
            href="/"
            className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-blue-500"
          >
            📚 Ver todos os artigos
          </Link>
        </div>
      </div>
    </>
  );
}
