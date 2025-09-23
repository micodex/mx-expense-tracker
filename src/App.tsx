import "./App.css";
import { useEffect, useState } from "react";

import ExpenseItem from "./components/ExpenseItem";
import NoExpense from "./components/NoExpense";
import Dashboard from "./components/Dashboard";
import CategorySummary from "./components/CategorySummary";

export interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}

function App() {
  // get saved transactions from local storage or []
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [transaction, setTransaction] = useState<Transaction>({
    id: 0,
    name: "",
    amount: 0,
    type: "expense",
    category: "",
    date: "",
  });

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    ) as Transaction[];
    setTransactions(savedTransactions);

    // Set default date to today
    setTransaction((prev) => ({
      ...prev,
      date: new Date().toISOString().split("T")[0],
    }));
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // total expense
  const totalExpense = transactions
    .filter((exp) => exp.type === "expense")
    .reduce((sum, exp) => sum + exp.amount, 0);

  // total income
  const totalIncome = transactions
    .filter((exp) => exp.type === "income")
    .reduce((sum, exp) => sum + exp.amount, 0);

  // Categories for transactions
  const expenseCategories: string[] = [
    "خوراکی",
    "حمل و نقل",
    "خانه",
    "سرگرمی",
    "شارژ و قبض",
    "سلامتی",
    "خرید",
    "دیگر",
  ];
  const incomeCategories: string[] = [
    "حقوق",
    "سرمایه گذاری",
    "هدیه",
    "واریزی",
    "دیگر",
  ];
  // Handle input change
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

  // create a new transaction
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
  };

  // delete a transaction
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

  const categorySummary: Record<string, number> = transactions.reduce(
    (acc, exp) => {
      const category = exp.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += Math.abs(exp.amount);
      console.log(acc);
      return acc;
    },
    {} as Record<string, number>
  );

  // filter transaction
  const filteredTransactions = transactions.filter((exp) => {
    const matchesFilter = filter === "all" || exp.category === filter;
    const matchesSearch = exp.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleTypeChange = (type: "income" | "expense") => {
    setTransaction((prev) => ({ ...prev, type: type }));
  };

  // handle edit a transaction
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleEdit = (trans: Transaction) => {
    setTransaction({
      id: trans.id,
      name: trans.name,
      amount: trans.amount,
      type: trans.type,
      category: trans.category,
      date: trans.date,
    });

    setIsEditing(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-8 px-8">
      <div className="font-mono absolute bottom-2 right-0 left-0 text-center text-gray-400">
        Coded with coffee by Milad
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-14">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            مدیریت هزینه‌ها
          </h1>
          <p className="text-gray-600">
            هزینه‌های روزانه‌ات رو به راحتی ثبت کن
          </p>
        </header>
        {/* dashboards cards */}
        <Dashboard totalIncome={totalIncome} totalExpense={totalExpense} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl shadow-slate-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                تراکنش جدید
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="block text-sm text-gray-700 mb-2"
                    htmlFor="name"
                  >
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
                      outline:
                        transaction.type === "income"
                          ? "2px solid #22c55e"
                          : "",
                      color: transaction.type === "income" ? "#22c55e" : "",
                      background:
                        transaction.type === "income" ? "#ecfdf5" : "",
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
                        transaction.type === "expense"
                          ? "2px solid #ef4444"
                          : "",
                      color: transaction.type === "expense" ? "#ef4444" : "",
                      background:
                        transaction.type === "expense" ? "#fef2f2" : "",
                    }}
                  >
                    هزینه
                  </button>
                </div>
                <div>
                  <label
                    className="block text-sm text-gray-700 mb-2"
                    htmlFor="amount"
                  >
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
                  <label
                    className="block text-sm text-gray-700 mb-2"
                    htmlFor="amount"
                  >
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
                      ? expenseCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))
                      : incomeCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm text-gray-700 mb-2"
                    htmlFor="date"
                  >
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
                        setTransaction({
                          id: 0,
                          name: "",
                          amount: 0,
                          type: "expense",
                          category: "",
                          date: new Date().toISOString().split("T")[0],
                        });
                      }}
                      className="w-full py-2 mt-2 font-bold text-lg rounded-lg text-zinc-200 bg-zinc-800 cursor-pointer hover:bg-zinc-900"
                    >
                      بازگشت
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          {/* Expenses List Section */}
          <div className="lg:col-span-2 ">
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
                    <div
                      key={exp.id}
                      className="animate-fadeIn"
                      data-id={exp.id}
                    >
                      <ExpenseItem
                        transaction={exp}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* category break down */}
            <CategorySummary categorySummary={categorySummary} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
