"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function CategoryProduct({ products = [] }) {
  const [filter, setFilter] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const sortedProducts = [...products];

    if (filter === "price-asc") {
      sortedProducts.sort((a, b) => Number(a.today) - Number(b.today));
    } else if (filter === "price-desc") {
      sortedProducts.sort((a, b) => Number(b.today) - Number(a.today));
    }

    setFilteredProducts(sortedProducts);
  }, [filter, products]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">
          মোট {filteredProducts.length} টি পণ্য দেখানো হচ্ছে
        </h3>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="whitespace-nowrap text-sm">
            সাজান:
          </label>

          <select
            id="sort"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
          >
            <option value="default">ডিফল্ট</option>

            <option value="price-asc">দাম: কম থেকে বেশি</option>

            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProduct;
