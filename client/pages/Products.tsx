import { products } from "@/data/products";
import ProductCard from "@/components/store/ProductCard";
import { useMemo, useState } from "react";

export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [color, setColor] = useState("Semua");

  const colors = useMemo(() => Array.from(new Set(products.flatMap((p) => p.colors))), []);
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchQ = q ? (p.name + " " + (p.subtitle ?? "")).toLowerCase().includes(q.toLowerCase()) : true;
      const matchColor = color === "Semua" ? true : p.colors.includes(color);
      return matchQ && matchColor;
    });
  }, [q, color]);

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Koleksi</h1>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari produk..."
            className="w-full md:w-72 rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option>Semua</option>
            {colors.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
