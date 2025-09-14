import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/store/ProductPrice";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, remove, updateQty, subtotal } = useCart();

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold tracking-tight mb-6">Keranjang</h1>

      {items.length === 0 ? (
        <div className="rounded-lg border p-6 text-center text-muted-foreground">
          Keranjang kosong. <Link to="/products" className="text-primary underline">Lihat koleksi</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((i) => (
              <div key={`${i.id}-${i.color}-${i.size}`} className="flex items-center gap-4 rounded-lg border p-4">
                <img src={i.image} alt={i.name} className="size-24 rounded-md object-cover" />
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-muted-foreground">{i.color} • {i.size}</div>
                  <div className="mt-2">
                    <label className="text-xs text-muted-foreground">Qty</label>
                    <input type="number" min={1} value={i.quantity} onChange={(e)=>updateQty({id:i.id,color:i.color,size:i.size}, Math.max(1, Number(e.target.value)))} className="ml-2 w-20 rounded-md border bg-background px-3 py-1 text-sm" />
                  </div>
                </div>
                <div className="text-right">
                  <ProductPrice value={i.price * i.quantity} />
                  <div>
                    <button className="text-xs text-destructive underline" onClick={()=>remove({id:i.id,color:i.color,size:i.size})}>Hapus</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Subtotal</span>
              <ProductPrice value={subtotal} />
            </div>
            <p className="text-xs text-muted-foreground">Belum termasuk ongkir. Pajak dihitung saat checkout.</p>
            <Link to="/checkout">
              <Button className="w-full mt-4">Lanjut ke Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
