import Link from "next/link";
const products = [
  { id: 1, name: "โทรศัพท์มือถือ Samsung Galaxy S24", price: 25900 },
  { id: 2, name: "แล็ปท็อป MacBook Air M3", price: 42900 },
  { id: 3, name: "หูฟังไร้สาย AirPods Pro", price: 8990 },
  { id: 4, name: "แท็บเล็ต iPad Air", price: 21900 },
];
export default function ProductsPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>รายการสินค้า</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {product.name}
            </h2>
            <p style={{ color: "#0070f3", fontWeight: "bold" }}>
              ฿{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
      23
    </main>
  );
}
