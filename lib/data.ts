export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export async function fetchProducts(query: string): Promise<Product[]> {
  const res = await fetch(
    `/api/products?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error(`Unable to load products (${res.status})`);
  }

  const data = await res.json();
  return data.products;
}
