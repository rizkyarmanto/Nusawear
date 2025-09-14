import { useParams } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/store/ProductPrice";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const { add } = useCart();

  const [image, setImage] = useState(0);
  const [color, setColor] = useState(product?.colors[0] ?? "");
  const [size, setSize] = useState(product?.sizes[0] ?? "");
  const [qty, setQty] = useState(1);

  if (!product)
    return <div className="container py-10">Produk tidak ditemukan.</div>;

  return (
    <div className="container py-10 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="aspect-[4/5] overflow-hidden rounded-xl border bg-card">
          <img
            src={product.images[image]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {product.images.map((img, i) => (
            <button
              key={i}
              className={`aspect-[4/5] overflow-hidden rounded-lg border ${i === image ? "ring-2 ring-primary" : ""}`}
              onClick={() => setImage(i)}
            >
              <img
                src={img}
                alt={`${product.name} ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
        {product.subtitle && (
          <p className="text-muted-foreground mt-1">{product.subtitle}</p>
        )}

        <div className="mt-4 flex items-end gap-3">
          <ProductPrice value={product.price} className="text-2xl" />
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-muted-foreground line-through">
              Rp {product.originalPrice.toLocaleString("id-ID")}
            </span>
          )}
        </div>

        <div className="mt-6 space-y-5">
          {product.colors.length > 0 && (
            <div>
              <div className="text-sm font-medium mb-2">Warna</div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-3 py-2 rounded-md border text-sm ${color === c ? "bg-primary text-primary-foreground border-primary" : "bg-background"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes.length > 0 && (
            <div>
              <div className="text-sm font-medium mb-2">Ukuran</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-2 rounded-md border text-sm ${size === s ? "bg-secondary border-secondary-foreground" : "bg-background"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <label className="text-sm text-muted-foreground">Qty</label>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="w-20 rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => add(product, { color, size, quantity: qty })}
            >
              Tambah ke Keranjang
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => add(product, { color, size, quantity: qty })}
            >
              Beli Sekarang
            </Button>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="font-semibold mb-2">Deskripsi</div>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Fitur Utama</div>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {product.benefits?.length ? (
          <div className="mt-8">
            <div className="font-semibold mb-2">Keunggulan</div>
            <ul className="text-muted-foreground grid md:grid-cols-2 gap-2 list-disc list-inside">
              {product.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
