import { useApp } from "@/context/AppContext";

import { createSummary } from "@/utils/helpers";

import type { Summary } from "@/types";

export default function SummaryPage() {
  const { transactions } = useApp();
  const categorySummary: Summary = createSummary(transactions);

  return (
    <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6 mt-6">
      <h2 className="text-lg font-semibold text-gray-800">خلاصه هزینه‌ها</h2>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {Object.keys(categorySummary).length !== 0 ? (
          Object.entries(categorySummary).map(
            ([category, { type, total, icon: Icon }], index) => (
              <div
                key={index}
                className={`flex flex-col gap-6 rounded-md p-6 text-gray-800 ${
                  type === "income"
                    ? "ring-green-200 from-white text-green-700"
                    : ""
                } ring-2 bg-gradient-to-br ring-gray-200 from-gray-50 to-slate-50 `}
              >
                <div className="flex justify-between text-md">
                  <span>{category}</span>
                  <span
                    className={`${
                      type === "income" ? " text-green-700" : ""
                    } text-xs text-gray-600`}
                  >
                    <Icon size={22} />
                  </span>
                </div>
                <div className="font-bold text-4xl">
                  {total} <span className="text-xs">تومان</span>
                </div>
              </div>
            )
          )
        ) : (
          <span className="text-sm text-gray-600">تراکنشی پیدا نشد!</span>
        )}
      </div>
    </div>
  );
}
