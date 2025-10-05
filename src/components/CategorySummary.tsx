import type { Summary } from "../App";

interface Props {
  categorySummary: Summary;
}

const CategorySummary = ({ categorySummary }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6 mt-6">
      <h2 className="text-lg font-semibold text-gray-800">خلاصه هزینه‌ها</h2>
      <div className="flex flex-wrap gap-2 mt-4 ">
        {Object.keys(categorySummary).length !== 0 ? (
          Object.entries(categorySummary).map(([category, data], index) => (
            <div
              key={index}
              className={`rounded-md px-10 py-2 text-gray-800 ${
                data.type === "income"
                  ? "ring-green-200 from-green-50 text-green-800"
                  : ""
              } ring-2 bg-gradient-to-br ring-gray-200 from-gray-50 to-slate-50 `}
            >
              <div className="mb-2 font-semibold text-sm">{category}</div>
              <div
                className={`${
                  data.type === "income" ? "" : ""
                } font-bold text-lg text-center `}
              >
                {data.total} <span className="text-xs">تومان</span>
              </div>
            </div>
          ))
        ) : (
          <span className="text-sm text-gray-600">تراکنشی پیدا نشد!</span>
        )}
      </div>
    </div>
  );
};

export default CategorySummary;
