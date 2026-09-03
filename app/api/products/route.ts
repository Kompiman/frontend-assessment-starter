import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const query = searchParams.get("q") ?? "";
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "The product API is not configured" },
      { status: 500 }
    );
  }

  const upstreamUrl = id
    ? `https://api.example-store.com/products/${encodeURIComponent(id)}`
    : `https://api.example-store.com/products?q=${encodeURIComponent(query)}`;
  const res = await fetch(upstreamUrl, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Unable to load products" },
      { status: res.status }
    );
  }

  return NextResponse.json(await res.json());
}
