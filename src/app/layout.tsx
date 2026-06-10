import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AH Digital Blog",
    template: "%s — AH Digital Blog",
  },
  description: "Artigos sobre tecnologia, finanças, produtividade e mais.",
  openGraph: {
    title: "AH Digital Blog",
    description: "Artigos sobre tecnologia, finanças, produtividade e mais.",
    siteName: "AH Digital Blog",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
