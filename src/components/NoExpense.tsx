import { useApp } from "@/context/AppContext";
import { sampleData } from "@/lib/constants";

const NoExpense = () => {
  const { setTransactions } = useApp();
  return (
    <div className="text-center py-12">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        تراکنشی پیدا نشد
      </h3>
      <p className="mt-1 text-sm text-gray-500">برای شروع یک هزینه اضافه کن</p>
      <button
        onClick={() => setTransactions(sampleData)}
        className="mt-2 px-4 py-2 bg-gray-300 rounded-sm cursor-pointer active:scale-90 text-gray-800"
      >
        لود نمونه تراکنش
      </button>
    </div>
  );
};

export default NoExpense;
