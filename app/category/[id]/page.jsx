import CategoryProduct from "@/components/CategoryProduct";
import { notFound } from "next/navigation";

async function Page({ params }) {
  const { id } = await params;
  function toBanglaNumber(value) {
    return String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
  }

  const [categoryResponse, productResponse] = await Promise.all([
    fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${id}`),
    fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${id}`),
  ]);

  if (!categoryResponse.ok) {
    notFound();
  }

  if (!productResponse.ok) {
    throw new Error("Failed to fetch category products");
  }

  let products = await productResponse.json();
  let categoryData = await categoryResponse.json();

  return (
    <div className="mx-auto max-w-7xl px-2 xl:px-0">
      <div className="flex flex-row items-center gap-3 rounded-lg border border-gray-300 p-3">
        <div>
          <p className="text-5xl">{categoryData.icon}</p>
        </div>

        <div>
          <h1>{categoryData.nameBn}</h1>
          <p>{toBanglaNumber(products.length)} পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>

      <CategoryProduct products={products} />
    </div>
  );
}

export default Page;
