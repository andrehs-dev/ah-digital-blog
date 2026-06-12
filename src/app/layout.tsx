import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TopBanner } from "@/components/TopBanner";

export const metadata: Metadata = {
  title: {
    default: "AH Digital Blog — IA, Automação e Tecnologia para PME",
    template: "%s — AH Digital Blog",
  },
  description: "Guias práticos sobre IA, automação, segurança digital e crescimento para pequenas empresas. Sem jargão técnico, só conteúdo útil.",
  metadataBase: new URL("https://ah-digital-blog.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AH Digital Blog — IA, Automação e Tecnologia para PME",
    description: "Guias práticos sobre IA, automação, segurança digital e crescimento para pequenas empresas.",
    siteName: "AH Digital Blog",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
        <TopBanner />
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
