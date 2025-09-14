import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice && product.originalPrice > product.price;
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-xl border bg-card">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="font-medium">{product.name}</div>
          <div className="text-sm text-muted-foreground">
            {product.subtitle}
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold">
            Rp {product.price.toLocaleString("id-ID")}
          </div>
          {discount && (
            <div className="text-xs text-muted-foreground line-through">
              Rp {product.originalPrice!.toLocaleString("id-ID")}
            </div>
          )}
        </div>
      </div>
      <div className="mt-3">
        <Button className="w-full" variant="secondary">
          Lihat Detail
        </Button>
      </div>
    </Link>
  );
}
