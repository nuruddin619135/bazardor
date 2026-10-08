import MarketPrices from "@/components/MarketPrices ";
import PriceSummary from "@/components/PriceSummary ";
import ProductSummary from "@/components/ProductSummary";
import { notFound } from "next/navigation";

async function page({ params }) {
  var { id: productId } = await params;

  let response = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );

  if (!response.ok) {
    notFound();
  }

  let data = await response.json();

  return (
    <div className="space-y-4">
      <ProductSummary data={data} />
      <PriceSummary data={data} />
      <MarketPrices data={data} />
    </div>
  );
}

export default page;
