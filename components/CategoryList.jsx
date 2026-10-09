"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/categories`,
      );

      const data = await response.json();
      setCategories(data);
    }

    getCategories();
  }, []);

  return (
    <nav className="py-3">
      <div className="flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((category) => (
          <Link
            href={`/category/${category.id}`}
            key={category.id}
            className={`shrink-0 text-sm transition sm:text-base ${
              pathname === `/category/${category.slug}`
                ? "text-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            {category.icon} {category.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default CategoryList;
