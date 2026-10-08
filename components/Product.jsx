"use client";

import { useEffect, useState } from "react";
import ProductSection from "./ProductSection";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://api.api-store.workers.dev/api/bazardor/products",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Product fetch error:", error);
        setError("পণ্যের তথ্য লোড করা যায়নি।");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center text-sm text-gray-500">
        পণ্যের তথ্য লোড হচ্ছে...
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-10 text-center text-sm text-red-500">{error}</div>
    );
  }
  if (!products.length) {
    return (
      <div className="py-10 text-center text-sm text-gray-500">
        কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }
  const risers = products
    .filter((product) => product.change?.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((product) => product.change?.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="max-w-7xl xl:mx-auto px-2">
      <ProductSection
        title="আজ দাম বেড়েছে ▲"
        subtitle="যেসব পণ্যের দাম আজ বেড়েছে"
        products={risers}
      />
      <ProductSection
        title="আজ দাম কমেছে ▼"
        subtitle="যেসব পণ্যের দাম আজ কমেছে"
        products={fallers}
      />

      <div id="সব-পণ্য" className="scroll-mt-20">
        <ProductSection
          title="সব পণ্য"
          subtitle="সব পণ্যের আজকের বাজার দর এক নজরে"
          products={products}
        />
      </div>
    </div>
  );
}
