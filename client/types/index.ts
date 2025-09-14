export type ProductOption = {
  name: string;
  values: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
  benefits: string[];
  materials?: string[];
  care?: string[];
  badges?: string[];
};

export type CartItem = {
  id: string; // product id
  slug: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
};
