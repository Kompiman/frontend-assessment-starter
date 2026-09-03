export function ProductCard({ product }: { product: any }) {
  return (
    <div className="card" onClick={() => alert(`Added ${product.name}`)}>
      <img src={product.image} width={200} height={200} />
      <h2>{product.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      <p>${product.price}</p>
    </div>
  );
}
