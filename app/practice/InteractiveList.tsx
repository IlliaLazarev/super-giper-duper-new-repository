"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export default function InteractiveList({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");
  const [onlyCheap, setOnlyCheap] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = !onlyCheap || product.price <= 10000;

    return matchesSearch && matchesPrice;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук товару..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={onlyCheap}
            onChange={(e) => setOnlyCheap(e.target.checked)}
          />
          {" "}Тільки до 10 000 грн
        </label>
      </div>

      <h2>Список товарів ({filteredProducts.length})</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "15px"
      }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <h3>{product.name}</h3>
            <p>Категорія: {product.category}</p>
            <strong>{product.price.toLocaleString("uk-UA")} грн</strong>
          </div>
        ))}
      </div>
{filteredProducts.length === 0 && (
        <p>Нічого не знайдено</p>
      )}
    </div>
  );
}