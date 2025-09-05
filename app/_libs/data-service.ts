import { Product } from "@/app/_types/Types";

export async function getProductsByCategory(categoryName: string) {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();

  const category = data.filter(
    (cat: Product) => cat.category.toLowerCase() === categoryName.toLowerCase()
  );
  return category;
}

export async function getProductsBySlug(slug: string) {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();

  const product = data.find((products: Product) => products.slug === slug);

  return product;
}

export async function getAllProducts() {
  const res = await fetch("http://localhost:3000/data/data.json");
  const data = await res.json();

  return data;
}
