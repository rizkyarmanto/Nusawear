import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Product } from "@/types";

const STORAGE_KEY = "cart:v1";

type CartContextType = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (
    product: Product,
    opts: { color: string; size: string; quantity?: number },
  ) => void;
  remove: (key: { id: string; color: string; size: string }) => void;
  updateQty: (
    key: { id: string; color: string; size: string },
    quantity: number,
  ) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: CartContextType["add"] = (product, opts) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === product.id && i.color === opts.color && i.size === opts.size,
      );
      if (existing) {
        return prev.map((i) =>
          i === existing
            ? { ...i, quantity: i.quantity + (opts.quantity ?? 1) }
            : i,
        );
      }
      const item: CartItem = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: opts.color,
        size: opts.size,
        quantity: opts.quantity ?? 1,
      };
      return [...prev, item];
    });
  };

  const remove: CartContextType["remove"] = (key) => {
    setItems((prev) =>
      prev.filter(
        (i) =>
          !(i.id === key.id && i.color === key.color && i.size === key.size),
      ),
    );
  };

  const updateQty: CartContextType["updateQty"] = (key, quantity) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === key.id && i.color === key.color && i.size === key.size
            ? { ...i, quantity }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  const clear = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items],
  );
  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({ items, add, remove, updateQty, clear, subtotal, count }),
    [items, subtotal, count],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
