// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import ProductSearch from "@/components/product-search";

interface Product {
  id: number;
  name: string;
  price: number;
  barcode?: string;
  image?: string;
}

interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

async function getProducts() {
  const res = await fetch("https://backend.codingthailand.com/v2/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data as Product[];
}

async function searchProducts(query: string) {
  const products = await getProducts();
  return products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const search = (await searchParams).search?.trim();

  const products = search ? await searchProducts(search) : await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">รายการสินค้า</h1>

      <ProductSearch initialQuery={search} />

      {products.length === 0 ? (
        <p className="text-slate-600">ไม่พบสินค้าที่ค้นหา</p>
      ) : (
        <>
          <p className="mb-4 text-slate-600">
            พบ {products.length} รายการ
            {search ? ` สำหรับ "${search}"` : ""}
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block overflow-hidden rounded-lg border border-slate-200 transition hover:shadow-md"
              >
                <div className="relative h-48 bg-slate-100">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(width < 768px) 50vw, (width < 1200px) 33vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h2 className="mb-2 text-sm font-medium line-clamp-2">
                    {product.name}
                  </h2>

                  <p className="font-bold text-blue-600">
                    ฿{product.price?.toLocaleString() || "ไม่ระบุ"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
