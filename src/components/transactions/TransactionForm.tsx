import { useApp } from "@/context/AppContext";

// helpers
import { incomeCategories, expenseCategories } from "@/lib/constants";
import { removeDashedBorder } from "@/utils/helpers";

// types
import type { Transaction, TransactionType } from "@/types";

export function TransactionForm({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (e: boolean) => void;
}) {
  const { transaction, setTransactions, setTransaction } = useApp();

  // ------ create a new transaction ------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !transaction.name ||
      !transaction.amount ||
      !transaction.category ||
      !transaction.date
    ) {
      alert("لطفا همه فیلد ها رو پر کنید ");
      return;
    }

    if (isEditing) {
      // Update existing transaction
      setTransactions((prev) =>
        prev.map((trans) =>
          trans.id === transaction.id ? { ...transaction } : trans
        )
      );

      setIsEditing(false);
    } else {
      const newTransaction: Transaction = {
        ...transaction,
        id: Date.now(),
      };
      // add new transaction
      setTransactions((prev) => [...prev, newTransaction]);
    }

    removeDashedBorder();
  };

  //  ------ Handle input change ------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // console.log(name, "→ ", value);

    setTransaction((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) || 0 : value,
    }));
  };

  // income & expense buttons
  const handleTypeChange = (type: TransactionType) => {
    setTransaction((prev) => ({ ...prev, type: type }));
  };

  return (
    <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">تراکنش جدید</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-700 mb-2" htmlFor="name">
            نام هزینه
          </label>
          <input
            type="text"
            name="name"
            value={transaction.name}
            onChange={handleChange}
            placeholder="سوپرمارکت"
            className="w-full border-none outline-2 outline-gray-300 rounded-lg px-4 py-2 focus:outline-sky-300 "
          />
        </div>
        <label className="block text-sm text-gray-700 mb-2">نوع</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleTypeChange("income")}
            className="w-full text-md bg-gray-100 py-1 px-4 rounded-md text-gray-800 ring ring-gray-200 cursor-pointer hover:bg-gray-200 transition-colors duration-100"
            style={{
              outline: transaction.type === "income" ? "2px solid #22c55e" : "",
              color: transaction.type === "income" ? "#22c55e" : "",
              background: transaction.type === "income" ? "#ecfdf5" : "",
            }}
          >
            درامد
          </button>
          <button
            type="button"
            onClick={() => handleTypeChange("expense")}
            className="w-full text-md bg-gray-100 py-1 px-4 rounded-md text-gray-800 ring ring-gray-200 cursor-pointer hover:bg-gray-200 transition-colors duration-100"
            style={{
              outline:
                transaction.type === "expense" ? "2px solid #ef4444" : "",
              color: transaction.type === "expense" ? "#ef4444" : "",
              background: transaction.type === "expense" ? "#fef2f2" : "",
            }}
          >
            هزینه
          </button>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2" htmlFor="amount">
            مقدار <span className="text-xs">(تومان)</span>
          </label>
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className="w-full border-none outline-2 outline-gray-300 rounded-lg px-4 py-2 focus:outline-sky-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2" htmlFor="amount">
            دسته
          </label>
          <select
            className="w-full outline-2 outline-gray-300 rounded-lg px-4 py-2 focus:outline-sky-300"
            name="category"
            value={transaction.category}
            onChange={handleChange}
          >
            <option value="">انتخاب دسته</option>
            {transaction.type === "expense"
              ? expenseCategories.map(({ label }) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))
              : incomeCategories.map(({ label }) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2" htmlFor="date">
            تاریخ
          </label>
          <input
            className="w-full outline-2 outline-gray-300 rounded-lg px-4 py-2 focus:outline-sky-300"
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
          />
        </div>
        <div className="border-b border-gray-300 py-2"></div>
        <div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-lg rounded-lg text-white bg-blue-500 cursor-pointer hover:bg-blue-600"
          >
            {isEditing ? "ویرایش" : "اضافه کن"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                // reset transaction
                setTransaction({
                  id: 0,
                  name: "",
                  amount: 0,
                  type: "expense",
                  category: "",
                  date: new Date().toISOString().split("T")[0],
                });
                removeDashedBorder();
              }}
              className="w-full py-2 mt-2 font-bold text-lg rounded-lg text-zinc-200 bg-zinc-800 cursor-pointer hover:bg-zinc-900"
            >
              بازگشت
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
