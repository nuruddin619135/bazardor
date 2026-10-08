import Link from "next/link";

function toBanglaNumber(value) {
  return String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

function getUnitLabel(unit) {
  const units = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
  };

  return units[unit] || `প্রতি ${unit}`;
}

export default function ProductCard({ product }) {
  const direction = product.change?.dir;
  const percentage = product.change?.pct ?? 0;

  const isUp = direction === "up";
  const isDown = direction === "down";

  const changeStyle = isUp
    ? "bg-green-50 text-green-600"
    : "bg-red-50 text-red-500";

  const changeIcon = isUp ? "▲" : isDown ? "▼" : "—";

  return (
    <Link href={`/product/${product.slug}`}>
      <article className="rounded-2xl border border-gray-200 bg-white p-4 transition duration-200  hover:border-green-300  sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl sm:h-16 sm:w-16 sm:text-4xl">
            {product.image}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-green-600 sm:text-lg">
              {product.nameBn}
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {getUnitLabel(product.unit)}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <div>
            <p className="text-xs text-gray-500">আজকের দাম</p>

            <p className="mt-0.5 text-lg font-bold text-gray-900 sm:text-xl">
              {toBanglaNumber(product.today)} টাকা
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium sm:px-2.5 ${changeStyle}`}
          >
            {changeIcon} {toBanglaNumber(percentage)}%
          </span>
        </div>
      </article>
    </Link>
  );
}
