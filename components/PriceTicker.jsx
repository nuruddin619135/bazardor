"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text";

function PriceTicker() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/bazardor/products",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Product fetch error:", error);
      }
    }

    getProducts();
  }, []);

  if (!products.length) return null;

  return (
    <div className="overflow-hidden border-y border-gray-200 py-2">
      <MarqueeText direction="right">
        <div className="flex items-center gap-6 whitespace-nowrap">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="shrink-0 text-sm"
            >
              <span className="font-medium">{product.nameBn}</span>

              <span className="mx-1 text-gray-500">
                ৳{product.today}/{product.unit}
              </span>

              {product.change?.dir === "up" && (
                <span className="text-green-600">▲ {product.change.pct}%</span>
              )}

              {product.change?.dir === "down" && (
                <span className="text-red-500">▼ {product.change.pct}%</span>
              )}

              {product.change?.dir === "same" && (
                <span className="text-gray-400">— 0%</span>
              )}
            </Link>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
}

export default PriceTicker;
