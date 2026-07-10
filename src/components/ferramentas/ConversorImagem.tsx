"use client";

import { useState, useRef, useCallback } from "react";

type Formato = "image/png" | "image/jpeg" | "image/webp";

const FORMATOS: { label: string; mime: Formato; ext: string }[] = [
  { label: "PNG", mime: "image/png", ext: "png" },
  { label: "JPG", mime: "image/jpeg", ext: "jpg" },
  { label: "WebP", mime: "image/webp", ext: "webp" },
];

export default function ConversorImagem() {
  const [original, setOriginal] = useState<string | null>(null);
  const [convertida, setConvertida] = useState<string | null>(null);
  const [formato, setFormato] = useState<Formato>("image/png");
  const [carregando, setCarregando] = useState(false);
  const [nomeArquivo, setNomeArquivo] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setNomeArquivo(file.name.replace(/\.[^/.]+$/, ""));

    const reader = new FileReader();
    reader.onload = (ev) => {
      setOriginal(ev.target?.result as string);
      setConvertida(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const converter = useCallback(() => {
    if (!imgRef.current || !canvasRef.current) return;
    setCarregando(true);

    const img = imgRef.current;
    const canvas = canvasRef.current;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Se for JPG, fundo branco (PNG transparente não funciona em JPG)
    if (formato === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.drawImage(img, 0, 0);

    const qualidade = formato === "image/jpeg" ? 0.92 : 0.9;
    const dataUrl = canvas.toDataURL(formato, qualidade);
    setConvertida(dataUrl);
    setCarregando(false);
  }, [formato]);

  const download = useCallback(() => {
    if (!convertida) return;
    const ext = FORMATOS.find((f) => f.mime === formato)?.ext || "png";
    const a = document.createElement("a");
    a.href = convertida;
    a.download = `${nomeArquivo || "convertido"}.${ext}`;
    a.click();
  }, [convertida, formato, nomeArquivo]);

  return (
    <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 md:p-8">
      <h2 className="mb-2 text-xl font-bold text-[var(--theme-fg)]">
        🖼️ Conversor de Imagem
      </h2>
      <p className="mb-6 text-sm text-[var(--theme-muted)]">
        Converta suas imagens entre PNG, JPG e WebP direto no navegador.
        Nada é enviado para servidores — 100% seguro.
      </p>

      {/* Upload */}
      <div className="mb-6">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
          id="upload-img"
        />
        <label
          htmlFor="upload-img"
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] px-6 py-4 text-sm text-[var(--theme-muted)] transition hover:border-[var(--theme-primary)]/50 hover:text-[var(--theme-fg)]"
        >
          📁 {original ? "Trocar imagem" : "Clique para selecionar uma imagem"}
        </label>
      </div>

      {original && (
        <>
          {/* Preview original */}
          <div className="mb-4 overflow-hidden rounded-xl bg-black/20">
            <img
              ref={imgRef}
              src={original}
              alt="Preview"
              className="mx-auto max-h-64 object-contain"
              onLoad={() => setConvertida(null)}
            />
          </div>

          {/* Opções */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div>
              <label className="mb-1 block text-xs text-[var(--theme-muted)]">
                Formato de saída
              </label>
              <select
                value={formato}
                onChange={(e) => setFormato(e.target.value as Formato)}
                className="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-card)] px-3 py-2 text-sm text-[var(--theme-fg)]"
              >
                {FORMATOS.map((f) => (
                  <option key={f.mime} value={f.mime}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={converter}
              disabled={carregando}
              className="mt-5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:from-blue-400 hover:to-blue-500 disabled:opacity-50"
            >
              {carregando ? "Convertendo..." : "🔄 Converter"}
            </button>
          </div>

          {/* Resultado */}
          {convertida && (
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <p className="mb-3 text-sm font-medium text-green-400">
                ✅ Conversão concluída!
              </p>
              <div className="mb-4 overflow-hidden rounded-xl bg-black/20">
                <img
                  src={convertida}
                  alt="Convertida"
                  className="mx-auto max-h-64 object-contain"
                />
              </div>
              <button
                onClick={download}
                className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:from-green-400 hover:to-emerald-500"
              >
                ⬇️ Download
              </button>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </>
      )}

      {!original && (
        <div className="rounded-xl border border-dashed border-[var(--theme-border)] bg-[var(--theme-card)] p-8 text-center">
          <p className="text-4xl mb-2">🖼️</p>
          <p className="text-sm text-[var(--theme-muted)]">
            Arraste ou clique acima para selecionar uma imagem
          </p>
          <p className="mt-1 text-xs text-[var(--theme-muted)]/50">
            Compatível com PNG, JPG, WebP, GIF
          </p>
        </div>
      )}
    </div>
  );
}
