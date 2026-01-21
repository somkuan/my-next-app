// app/components/add-to-cart-button.tsx - Client Component
"use client";

import { useState } from "react";

interface AddToCartButtonProps {
  productId: number;
  productName: string;
  productPrice: number;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // ในโปรเจกต์จริง เราจะส่ง request ไปยัง API
    console.log("เพิ่มสินค้าลงตะกร้า:", { productId, quantity });
    setIsAdded(true);

    // รีเซ็ตสถานะหลัง 2 วินาที
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <span style={{ minWidth: "2rem", textAlign: "center" }}>
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          padding: "0.75rem 2rem",
          backgroundColor: isAdded ? "#10b981" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "600",
        }}
      >
        {isAdded ? "✓ เพิ่มแล้ว" : "เพิ่มลงตะกร้า"}
      </button>
    </div>
  );
}
