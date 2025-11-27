import NoExpense from "@/components/NoExpense";
import { useApp } from "@/context/AppContext";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const TransactionsPage = () => {
  const { transactions } = useApp();
  return (
    <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start gap-4 w-full sm:w-auto mb-6">
        <h2 className="flex-grow text-xl font-semibold text-gray-800">
          همه تراکنش‌ها
        </h2>
      </div>
      {/* Expense Item */}
      {transactions.length === 0 ? (
        <NoExpense />
      ) : (
        <div className="space-y-2">
          {transactions.map((exp) => (
            <div
              dir="rtl"
              key={exp.id}
              className={`exp
                      flex justify-between items-center border-b-2
                    bg-white border-gray-200 hover:bg-gray-50 transition-border duration-60 p-4
                  `}
            >
              <div className="space-y-1">
                <h3 className="font-semibold">{exp.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{exp.category}</span>
                  <span className="text-sm text-gray-600">{exp.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {exp.type === "income" ? (
                  <div className="text-green-500">
                    <FaArrowTrendUp />
                  </div>
                ) : (
                  <div className="text-red-500">
                    <FaArrowTrendDown />
                  </div>
                )}
                <div className="font-semibold text-gray-800 pr-2">
                  {exp.amount}{" "}
                  <span className="text-xs text-gray-700">تومان</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
