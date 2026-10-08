import React from "react";
import Image from "next/image";

const ProductSummary = ({ data }) => {
  const isUp = data.change.dir === "up";
  function getUnitLabel(unit) {
    const units = {
      kg: "প্রতি কেজি",
      litre: "প্রতি লিটার",
      dozen: "প্রতি ডজন",
      piece: "প্রতি পিস",
    };

    return units[unit] || unit;
  }
  const difference = data.today - data.yesterday;

  return (
    <div className="mx-auto max-w-7xl px-2 xl:px-0">
      <div className="flex w-full items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50">
            <span
              className="text-2xl"
              role="img"
              aria-label={data.categoryNameBn}
            >
              {data.categoryIcon}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[17px] font-bold leading-tight text-gray-900">
              {data.nameBn}
            </h3>

            <p className="mt-1 text-[11px] text-gray-500">
              {getUnitLabel(data.unit)} · {data.categoryNameBn}
            </p>

            <p className="mt-1.5 truncate text-[11px] text-gray-600">
              গতকালের তুলনায় আজ দাম {isUp ? "বেড়েছে" : "কমেছে"} · {difference}{" "}
              টাকা
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-gray-50 px-5 py-3">
          <span className="mb-1 text-[9px] font-medium text-gray-500">
            আজকের দাম
          </span>

          <span className="text-2xl font-extrabold leading-none text-gray-900">
            ৳{data.today}
          </span>

          <span className="mt-1 text-[9px] text-gray-500">
            টাকা / {getUnitLabel(data.unit)}
          </span>

          <div
            className={`mt-1.5 flex items-center gap-1 text-[9px] font-bold ${
              isUp ? "text-red-500" : "text-green-500"
            }`}
          >
            <span className="text-[7px]">{isUp ? "▲" : "▼"}</span>
            <span>{data.change.pct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
