import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Storefront</h1>
      <Link href="/products">Browse products</Link>
    </main>
  );
}
