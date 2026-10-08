import ProductCard from "./ProductCard";

export default function ProductSection({ title, subtitle, products }) {
  if (!products?.length) {
    return null;
  }

  return (
    <section className="py-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>

        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
