import { HiOutlineCreditCard } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { useTransactions } from "@/hooks/useTransactions";

const Dashboard = () => {
  const { totals } = useTransactions();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex gap-4 bg-white border border-gray-200 rounded-md shadow-xl shadow-slate-100 p-6">
        <div className="flex justify-center items-center text-xl p-4 bg-green-50 text-green-500 rounded-full aspect-1/1">
          <FaArrowTrendUp />
        </div>
        <div>
          <h3 className="text-gray-500 text-sm font-medium">مجموع درامد‌ها</h3>
          <p className="text-2xl font-bold text-gray-600 mt-1">
            {totals.income} <span className="text-sm">تومان</span>
          </p>
        </div>
      </div>

      <div className="flex gap-4 bg-white border border-gray-200 rounded-md shadow-xl shadow-slate-100 p-6 ">
        <div className="flex justify-center items-center text-xl p-4 bg-red-50 text-red-500 rounded-full aspect-1/1 ">
          <FaArrowTrendDown />
        </div>
        <div>
          <h3 className="text-gray-500 text-sm font-medium">مجموع هزینه‌ها</h3>
          <p className="text-2xl font-bold text-gray-600 mt-1">
            {totals.expense} <span className="text-sm">تومان</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4 bg-white border border-gray-200 rounded-md shadow-xl shadow-slate-100 p-6 ">
        <div className="flex justify-center items-center text-2xl p-4 bg-blue-50 text-blue-500 rounded-full aspect-1/1">
          <HiOutlineCreditCard />
        </div>
        <div>
          <h3 className="text-gray-500 text-sm font-medium">موجودی</h3>
          <p className="text-2xl font-bold text-gray-600 mt-1">
            {totals.income - totals.expense}
            <span className="text-sm">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
