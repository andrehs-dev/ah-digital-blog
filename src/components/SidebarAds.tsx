import Link from "next/link";

const products = [
  {
    title: "Inteligência Artificial — uma abordagem moderna",
    description: "O livro referência em IA, usado em universidades do mundo todo.",
    price: "R$ 259,90",
    url: "https://www.amazon.com.br/Intelig%C3%AAncia-Artificial-Uma-Abordagem-Moderna/dp/8595158878?tag=ahdigitalblog-20",
    image: "/images/ads/ia-moderna.png",
  },
  {
    title: "Kindle 11ª Geração",
    description: "Leve, compacto, bateria de longa duração. Ideal para leitura.",
    price: "R$ 479,10",
    url: "https://www.amazon.com.br/kindle-16gb-preto/dp/B0CP31L73X?tag=ahdigitalblog-20",
    image: "/images/ads/kindle.png",
  },
  {
    title: "Python para Análise de Dados",
    description: "Domine pandas, NumPy e matplotlib para análise de dados.",
    price: "R$ 139,90",
    url: "https://www.amazon.com.br/Python-Para-An%C3%A1lise-Dados-Tratamento/dp/8575226479?tag=ahdigitalblog-20",
    image: "/images/ads/python-analise.png",
  },
  {
    title: "Head First Java",
    description: "Aprendizado visual e prático de programação Java.",
    price: "R$ 289,90",
    url: "https://www.amazon.com.br/Head-First-Java-Brain-Friendly-Guide/dp/1491910771?tag=ahdigitalblog-20",
    image: "/images/ads/head-first-java.png",
  },
];

function AdCard({ product }: { product: typeof products[0] }) {
  return (
    <Link
      href={product.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-500/40 hover:bg-white/10"
    >
      <div className="mb-3 aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mb-1 text-sm font-semibold text-white/90 line-clamp-2">
        {product.title}
      </h3>
      <p className="mb-2 text-xs leading-relaxed text-white/50 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-emerald-400">{product.price}</span>
        <span className="text-xs text-blue-400 opacity-0 transition group-hover:opacity-100">
          Ver na Amazon →
        </span>
      </div>
    </Link>
  );
}

export function LeftSidebar() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 space-y-4">
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
            🛒 Recomendados
          </p>
          <div className="mt-2 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>
        <AdCard product={products[0]} />
        <AdCard product={products[1]} />
      </div>
    </aside>
  );
}

export function RightSidebar() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 space-y-4">
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
            📚 Para estudar
          </p>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>
        <AdCard product={products[2]} />
        <AdCard product={products[3]} />
      </div>
    </aside>
  );
}
