import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const Nav = () => (
    <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-sm">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }
      >
        Beranda
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }
      >
        Koleksi
      </NavLink>
      <a
        href="/#design"
        className="text-muted-foreground hover:text-foreground"
      >
        Product Design
      </a>
      <a
        href="/#experience"
        className="text-muted-foreground hover:text-foreground"
      >
        Digital Experience
      </a>
      <a
        href="/#pricing"
        className="text-muted-foreground hover:text-foreground"
      >
        Harga
      </a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            <Menu className="size-6" />
          </button>
          <Link to="/" className="text-xl font-extrabold tracking-tight">
            Nusa<span className="text-primary">Wear</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="secondary" className="relative">
              <ShoppingBag className="mr-2" /> Keranjang
              {count > 0 && (
                <span className="absolute -right-2 -top-2 rounded-full bg-primary text-primary-foreground text-xs w-5 h-5 grid place-items-center">
                  {count}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <Nav />
          </div>
        </div>
      )}
    </header>
  );
}
