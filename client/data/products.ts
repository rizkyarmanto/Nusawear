import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "tee-aurora",
    slug: "aurora-tee",
    name: "Aurora Tee",
    subtitle: "Kaos premium oversized fit",
    price: 259000,
    originalPrice: 299000,
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    ],
    colors: ["Hitam", "Putih", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Aurora Tee dibuat dari katun combed 24s dengan sentuhan enzyme wash untuk rasa lembut, breathable, dan jatuh sempurna. Potongan oversized modern dengan bahu jatuh dan rib collar tebal.",
    features: [
      "Kain katun combed 24s, 220 GSM",
      "Enzyme + bio-wash: halus dan minim susut",
      "Jahitan rantai (chain-stitch) di bahu",
      "Rib collar 1.5cm yang rapat",
      "Pre-shrunk: bentuk tetap setelah dicuci",
    ],
    benefits: [
      "Nyaman dipakai seharian di iklim tropis",
      "Siluet oversized yang flattering untuk semua bentuk badan",
      "Tahan lama dan tidak mudah melar",
      "Warna deep-dye yang tidak mudah pudar",
    ],
    materials: ["100% cotton combed 24s", "Rib: cotton + elastane"],
    care: ["Cuci terbalik", "Gunakan air dingin", "Jemur di tempat teduh"],
  },
  {
    id: "hoodie-semaya",
    slug: "semaya-hoodie",
    name: "Semaya Hoodie",
    subtitle: "Hoodie fleece brushed, relaxed fit",
    price: 459000,
    images: [
      "https://images.unsplash.com/photo-1618933980858-cf73c3f2d3d7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975922322-48f4b5b6c6b4?q=80&w=1600&auto=format&fit=crop",
    ],
    colors: ["Charcoal", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Semaya Hoodie menggunakan fleece 330GSM dengan brushed interior yang sangat lembut. Desain minimal, detail bersih, dan kantong kangaroo tersembunyi.",
    features: [
      "Fleece 330GSM, brushed inside",
      "Drawcord flat matte-metal aglets",
      "Kantong kangaroo tersembunyi",
      "Rib cuff dan hem elastis",
    ],
    benefits: [
      "Hangat tanpa gerah",
      "Look clean cocok casual hingga smart-casual",
      "Konstruksi kuat untuk pemakaian harian",
    ],
  },
  {
    id: "shirt-bali",
    slug: "bali-linen-shirt",
    name: "Bali Linen Shirt",
    subtitle: "Kemeja linen campuran, airy drape",
    price: 389000,
    images: [
      "https://images.unsplash.com/photo-1520975693410-001d1eacd8b8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop",
    ],
    colors: ["Natural", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Kemeja linen blend dengan tekstur natural yang sejuk. Cocok untuk cuaca tropis, terasa ringan dan jatuh mengikuti tubuh.",
    features: [
      "Linen blend breathable",
      "Kancing resin premium",
      "Hem lurus dengan slit samping",
      "Kerah camp collar",
    ],
    benefits: [
      "Tetap sejuk di siang terik",
      "Mudah dipadu-padankan",
      "Style santai nan rapi",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
