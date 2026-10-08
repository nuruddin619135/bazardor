function PriceSummary({ data }) {
  function getUnitLabel(unit) {
    const units = {
      kg: "প্রতি কেজি",
      litre: "প্রতি লিটার",
      dozen: "প্রতি ডজন",
      piece: "প্রতি পিস",
    };

    return units[unit] || unit;
  }

  const minPrice = Math.min(...data.markets.map((market) => market.min));
  const maxPrice = Math.max(...data.markets.map((market) => market.max));

  const averagePrice =
    data.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0,
    ) / data.markets.length;

  return (
    <div className="mx-auto max-w-7xl px-2 xl:px-0">
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">সর্বনিম্ন দাম</p>

          <span className="mt-1 block text-2xl font-bold text-gray-900">
            ৳{minPrice}
          </span>

          <p className="mt-1 text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">সর্বাধিক দাম</p>

          <span className="mt-1 block text-2xl font-bold text-gray-900">
            ৳{maxPrice}
          </span>

          <p className="mt-1 text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">গড় দাম</p>

          <span className="mt-1 block text-2xl font-bold text-gray-900">
            ৳{averagePrice.toFixed(1)}
          </span>

          <p className="mt-1 text-xs text-gray-500">
            {getUnitLabel(data.unit)}-এর হিসাবে
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceSummary;
