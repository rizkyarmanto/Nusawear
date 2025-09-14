import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/store/ProductPrice";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();

  const shipping = items.length > 0 ? 25000 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-10 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-4">Checkout</h1>
          <div className="rounded-lg border p-6">
            <div className="font-semibold mb-3">Alamat Pengiriman</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                placeholder="Nama Lengkap"
                className="rounded-md border bg-background px-3 py-2 text-sm"
              />
              <input
                placeholder="No. Telepon"
                className="rounded-md border bg-background px-3 py-2 text-sm"
              />
              <input
                placeholder="Alamat"
                className="rounded-md border bg-background px-3 py-2 text-sm md:col-span-2"
              />
              <input
                placeholder="Kota/Kabupaten"
                className="rounded-md border bg-background px-3 py-2 text-sm"
              />
              <input
                placeholder="Provinsi"
                className="rounded-md border bg-background px-3 py-2 text-sm"
              />
              <input
                placeholder="Kode Pos"
                className="rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <div className="font-semibold mb-3">Metode Pembayaran</div>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" defaultChecked /> Transfer Bank
              (Virtual Account)
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" /> Kartu Kredit/Debit
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" /> E-Wallet
            </label>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6 h-fit sticky top-24">
        <div className="font-semibold mb-3">Ringkasan</div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <ProductPrice value={subtotal} />
          </div>
          <div className="flex justify-between">
            <span>Ongkir</span>
            <ProductPrice value={shipping} />
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total</span>
            <ProductPrice value={total} />
          </div>
        </div>
        <Button
          className="w-full mt-4"
          onClick={() => {
            clear();
            alert("Pesanan dibuat! (simulasi)");
          }}
        >
          Buat Pesanan
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          Ini adalah simulasi checkout. Integrasi pembayaran dapat ditambahkan
          kemudian.
        </p>
      </div>
    </div>
  );
}
