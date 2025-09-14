export default function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-xl font-extrabold tracking-tight mb-2">Nusa<span className="text-primary">Wear</span></div>
          <p className="text-muted-foreground">Gaya minimal, kualitas maksimal. Didesain di Indonesia untuk iklim tropis.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Bantuan</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Panduan Ukuran</a></li>
            <li><a href="#" className="hover:text-foreground">Pengiriman</a></li>
            <li><a href="#" className="hover:text-foreground">Retur & Tukar</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Perusahaan</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-foreground">Karir</a></li>
            <li><a href="#" className="hover:text-foreground">Kontak</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Ikuti Kami</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground">TikTok</a></li>
            <li><a href="#" className="hover:text-foreground">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">© {new Date().getFullYear()} NusaWear. All rights reserved.</div>
      </div>
    </footer>
  );
}
