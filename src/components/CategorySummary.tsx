interface Props {
  categorySummary: Record<string, number>;
}

const CategorySummary = ({ categorySummary }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6 mt-6">
      <h2 className="text-lg font-semibold text-gray-800">خلاصه هزینه‌ها</h2>
      <div className="flex flex-wrap gap-2 mt-4 ">
        {Object.entries(categorySummary).length !== 0 ? (
          Object.entries(categorySummary).map(([category, amount], index) => (
            <div
              key={index}
              className="rounded-md ring ring-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 px-10 py-2"
            >
              <div className="mb-2 font-semibold text-sm text-gray-600">
                {category}
              </div>
              <div className="font-bold text-lg text-center text-gray-800">
                {amount} <span className="text-xs">تومان</span>
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
