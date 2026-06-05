"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Algo deu errado.");
      }
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Tenta de novo.");
    }
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-pink-950/40 p-8 md:p-12">
      {/* Background ornament */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">
        <h3 className="mb-2 text-2xl font-bold text-white">
          Receba os posts no seu email 📬
        </h3>
        <p className="mb-6 max-w-lg text-sm text-white/60">
          Nada de spam. Só aviso quando sair post novo. Sem pressão, sem notificação enchendo o saco.
        </p>

        {status === "success" ? (
          <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-green-400">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-blue-500 hover:to-purple-500 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                "Assinar 💜"
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">{message}</p>
        )}

        {status === "idle" && (
          <p className="mt-4 text-xs text-white/30">
            Sem spam. Cancele quando quiser.
          </p>
        )}
      </div>
    </section>
  );
}
