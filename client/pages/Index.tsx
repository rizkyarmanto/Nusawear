import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/store/ProductCard";
import { products } from "@/data/products";

export default function Index() {
  const featured = products;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container py-14 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              NusaWear • Quality Basics for Tropics
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Baju Kasual Premium untuk <span className="text-primary">Setiap Hari</span>
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-prose">
              Didesain dengan pendekatan product design modern, fokus pada kenyamanan, ketahanan, dan pengalaman digital yang mulus dari browsing hingga checkout.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/products"><Button size="lg">Belanja Sekarang</Button></Link>
              <a href="#design"><Button size="lg" variant="secondary">Pelajari Desain</Button></a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-lg border p-3"><div className="font-semibold">220 GSM</div><div className="text-muted-foreground">Kain tebal berstruktur</div></div>
              <div className="rounded-lg border p-3"><div className="font-semibold">Enzyme Wash</div><div className="text-muted-foreground">Lembut dan tahan susut</div></div>
              <div className="rounded-lg border p-3"><div className="font-semibold">Oversized Fit</div><div className="text-muted-foreground">Silhouette modern</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border ring-1 ring-border shadow-xl">
              <img src={featured[0].images[0]} alt="Hero Product" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-4 right-4 rounded-xl bg-background/80 backdrop-blur border p-3 text-xs">
              Ready Stock • Pengiriman 24 Jam
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Koleksi Unggulan</h2>
          <Link to="/products" className="text-sm text-primary hover:underline">Lihat semua</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* PRODUCT DESIGN */}
      <section id="design" className="bg-muted/20 border-y">
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Product Design yang Dipikirkan Matang</h3>
            <p className="mt-3 text-muted-foreground">Setiap detail dihitung: pemilihan material, densitas kain, konstruksi jahitan, hingga finishing. Tujuannya sederhana — terasa nyaman, terlihat rapi, tahan lama.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Material premium: cotton combed 24s, linen blend, fleece 330GSM</li>
              <li>Konstruksi kuat: chain-stitch, rib tebal, bartack di titik rawan</li>
              <li>Finishing bersih: enzyme/bio-wash, pre-shrunk, colorfast dye</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-xl border object-cover aspect-square" src={featured[1].images[0]} alt="Detail 1" />
            <img className="rounded-xl border object-cover aspect-square" src={featured[2].images[0]} alt="Detail 2" />
            <img className="rounded-xl border object-cover aspect-square" src={featured[0].images[1]} alt="Detail 3" />
            <img className="rounded-xl border object-cover aspect-square" src={featured[0].images[2]} alt="Detail 4" />
          </div>
        </div>
      </section>

      {/* DIGITAL EXPERIENCE */}
      <section id="experience" className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground">Digital Experience</div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">Pengalaman Belanja yang Mulus</h3>
            <p className="mt-3 text-muted-foreground">Dari pencarian hingga checkout, kami optimalkan alur agar cepat dan jelas. Panduan ukuran yang mudah, foto detail resolusi tinggi, dan ringkasan harga transparan.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border p-4 bg-background"><div className="font-semibold">Filter Pintar</div><div className="text-muted-foreground">Cari produk dengan warna/ukuran</div></div>
              <div className="rounded-lg border p-4 bg-background"><div className="font-semibold">Keranjang Persisten</div><div className="text-muted-foreground">Tersimpan otomatis</div></div>
              <div className="rounded-lg border p-4 bg-background"><div className="font-semibold">Checkout Cepat</div><div className="text-muted-foreground">Ringkas, jelas, aman</div></div>
              <div className="rounded-lg border p-4 bg-background"><div className="font-semibold">Responsive</div><div className="text-muted-foreground">Nyaman di semua layar</div></div>
            </div>
          </div>
          <div className="rounded-2xl border p-6 bg-gradient-to-br from-primary/5 to-accent/40">
            <div className="text-sm text-muted-foreground">Pratinjau keranjang</div>
            <div className="mt-3 rounded-xl border bg-background p-4">
              <div className="flex items-center gap-3">
                <img src={featured[0].images[0]} alt="preview" className="size-14 rounded object-cover" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{featured[0].name}</div>
                  <div className="text-xs text-muted-foreground">Hitam • L</div>
                </div>
                <div className="text-sm font-semibold">Rp {featured[0].price.toLocaleString("id-ID")}</div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">Rp {(featured[0].price).toLocaleString("id-ID")}</span>
              </div>
              <Button className="w-full mt-4">Lanjutkan Checkout</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / BENEFITS */}
      <section className="bg-card border-y">
        <div className="container py-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Keunggulan & Manfaat</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl border p-6 bg-background">
              <div className="font-semibold">Nyaman Seharian</div>
              <p className="text-muted-foreground mt-2">Material breathable dan potongan ergonomis untuk aktivitas aktif maupun santai.</p>
            </div>
            <div className="rounded-xl border p-6 bg-background">
              <div className="font-semibold">Tahan Lama</div>
              <p className="text-muted-foreground mt-2">Jahitan kuat, kain berkualitas, dan treatment agar tetap bentuk dan warna.</p>
            </div>
            <div className="rounded-xl border p-6 bg-background">
              <div className="font-semibold">Mix-and-Match</div>
              <p className="text-muted-foreground mt-2">Warna netral dan silhouette modern cocok untuk berbagai style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container py-16">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Harga Transparan</h3>
        <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">Harga sudah termasuk pajak. Ongkir flat untuk seluruh Indonesia. Dapatkan diskon bundle untuk hemat maksimal.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <div className="text-sm font-semibold text-muted-foreground">Single</div>
            <div className="mt-2 text-3xl font-extrabold">Rp 259.000</div>
            <div className="text-sm text-muted-foreground">Aurora Tee</div>
            <ul className="mt-4 text-sm space-y-2 text-muted-foreground">
              <li>1 item pilihan</li>
              <li>Garansi tukar ukuran 7 hari</li>
              <li>Ongkir flat Rp 25.000</li>
            </ul>
            <Link to="/product/aurora-tee"><Button className="w-full mt-6">Pilih</Button></Link>
          </div>
          <div className="rounded-2xl border p-6 ring-2 ring-primary">
            <div className="text-sm font-semibold text-primary">Bundle Hemat</div>
            <div className="mt-2 text-3xl font-extrabold">Rp 489.000</div>
            <div className="text-sm text-muted-foreground">2 Aurora Tee</div>
            <ul className="mt-4 text-sm space-y-2 text-muted-foreground">
              <li>Hemat hingga 6%</li>
              <li>Mix warna & ukuran</li>
              <li>Gratis ongkir</li>
            </ul>
            <Link to="/products"><Button className="w-full mt-6">Belanja Bundle</Button></Link>
          </div>
          <div className="rounded-2xl border p-6">
            <div className="text-sm font-semibold text-muted-foreground">Outerwear</div>
            <div className="mt-2 text-3xl font-extrabold">Mulai Rp 389.000</div>
            <div className="text-sm text-muted-foreground">Hoodie & Shirt</div>
            <ul className="mt-4 text-sm space-y-2 text-muted-foreground">
              <li>Material premium</li>
              <li>Konstruksi kuat</li>
              <li>Desain minimal</li>
            </ul>
            <Link to="/products"><Button className="w-full mt-6" variant="secondary">Lihat Semua</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
