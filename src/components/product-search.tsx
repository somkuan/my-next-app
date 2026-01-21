"use client";

import { useRouter, useSearchParams } from "next/navigation";

type ProductSearchProps = {
  initialQuery?: string;
};

export default function ProductSearch({
  initialQuery = "",
}: ProductSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("search") || initialQuery;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("search") as string;

    if (q?.trim()) {
      router.push(`/products?search=${encodeURIComponent(q.trim())}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <input
        type="text"
        name="search"
        defaultValue={query}
        placeholder="ค้นหาสินค้า..."
        className="w-full rounded-lg border border-slate-300 px-3 py-3 text-base"
      />
    </form>
  );
}
