function MarketPrices({ data }) {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
        <h2 className="text-lg font-bold text-gray-900">বাজারভিত্তিক দাম</h2>

        <p className="mt-1 text-sm text-gray-500">
          বিভিন্ন বাজারে {data.nameBn} এর বর্তমান দাম
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-xs font-semibold text-gray-500">
                বাজার
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-gray-500">
                বিভাগ
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-gray-500">
                সর্বনিম্ন
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-gray-500">
                সর্বোচ্চ
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-gray-500">
                গড়
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.markets.map((market) => {
              const average = (market.min + market.max) / 2;

              return (
                <tr
                  key={`${market.market}-${market.division}`}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {market.market}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500">
                    {market.division}
                  </td>

                  <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                    {market.min} টাকা
                  </td>

                  <td className="px-4 py-4 text-sm font-semibold text-gray-900">
                    {market.max} টাকা
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-md bg-green-50 px-2 py-1 font-medium ">
                      {average} টাকা
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarketPrices;
