import { useState } from "react";
import { incomeCategories, expenseCategories } from "@/lib/constants";
import { useTransactions } from "@/hooks/useTransactions";
import NoExpense from "@/components/NoExpense";
import TransactionItem from "./TransactionItem";
import type { Summary } from "@/types";
import type { Transaction } from "@/types";

export default function TransactionList() {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setTransactions, transactions, setTransaction } = useTransactions();

  const filteredTransactions = transactions.filter((exp) => {
    const matchesFilter = filter === "all" || exp.category === filter;
    const matchesSearch = exp.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDelete = (id: number): void => {
    const element = document.querySelector(`[data-id="${id}"]`);
    if (element) {
      element.classList.add("animate-fadeout");
    }
    // wait for the fade out animation to finish
    setTimeout(() => {
      setTransactions((prev) => prev.filter((exp) => exp.id !== id));
    }, 250);
  };

  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    trans: Transaction
  ) => {
    // remove all dashed borders
    removeDashedBorder();
    // add black border to editing item
    event.currentTarget.closest(".transaction")?.classList.add("dashed-border");

    setTransaction({
      id: trans.id,
      name: trans.name,
      amount: trans.amount,
      type: trans.type,
      category: trans.category,
      date: trans.date,
    });

    // setIsEditing(true);
  };

  const removeDashedBorder = (): void => {
    // function to remove dashed border from all transaction elements
    const transItems = document.querySelectorAll(".transaction");
    transItems.forEach((item) => item.classList.remove("dashed-border"));
  };

  return (
    <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start gap-4 w-full sm:w-auto mb-6">
        <h2 className="flex-grow text-xl font-semibold text-gray-800">
          تراکنش‌ها
        </h2>
        <div className="relative w-full ">
          <input
            type="text"
            // value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجو"
            className="w-full border-none outline-2 outline-gray-300 rounded-lg pr-4 pl-10 py-2 focus:outline-sky-300"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <select
          className="w-fullsm:w-64 outline-2 outline-gray-300 rounded-lg px-4 py-2 text-gray-800  focus:outline-sky-300"
          name="categories"
          id="gategories"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">همه دسته‌بندی‌ها</option>
          {expenseCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {/* Expense Item */}
      {filteredTransactions.length === 0 ? (
        <NoExpense />
      ) : (
        <div className="space-y-2">
          {filteredTransactions.map((exp) => (
            <div key={exp.id} className="animate-fadeIn" data-id={exp.id}>
              <TransactionItem
                transaction={exp}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
