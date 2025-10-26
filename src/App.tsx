import "./App.css";
import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import SideBar from "./components/layout/SideBar";
import Topbar from "./components/layout/TopBar";
import PieChartDonut from "@/components/charts/PieChartDonut";
import { useApp } from "./context/AppContext";

import type { Transaction } from "./types";

import type { Summary } from "./types";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { useTransactions } from "./hooks/useTransactions";
import TransactionList from "./components/transactions/TransactionList";
import SummaryPage from "./pages/Summary";
import Layout from "./components/layout/Layout";
function App() {
  const { transactions, setTransactions } = useTransactions();

  const { sidebarOpen } = useApp();

  // get saved transactions from local storage or []
  // const [transactions, setTransactions] = useState<Transaction[]>(() => {
  //   const saved = localStorage.getItem("transactions");
  //   return saved ? JSON.parse(saved) : [];
  // });

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    ) as Transaction[];
    setTransactions(savedTransactions);

    // Set default date to today
    // setTransaction((prev) => ({
    //   ...prev,
    //   date: new Date().toISOString().split("T")[0],
    // }));
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // total expense
  const totalExpense = transactions
    .filter((exp) => exp.type === "expense")
    .reduce((sum, exp) => sum + exp.amount, 0);

  // total income
  const totalIncome = transactions
    .filter((exp) => exp.type === "income")
    .reduce((sum, exp) => sum + exp.amount, 0);

  //  ------ Handle input change ------

  // ------ create a new transaction ------

  // ------ delete a transaction ------
  // filter transaction

  const expenseChartData = (categorySummary: Summary) => {
    const fill = [
      "var(--color-chrome)",
      "var(--color-safari)",
      "var(--color-firefox)",
      "var(--color-edge)",
      "var(--color-other)",
    ];
    const newData = Object.values(categorySummary).map((item, index) => {
      // skip incomes
      if (item.type === "expense") {
        const newItem = { ...item, fill: fill[index] };
        return newItem;
      }
    });
    console.log(newData);
    return newData;
  };

  const IncomeChartData = (categorySummary: Summary) => {
    const fill = [
      "var(--color-chrome)",
      "var(--color-safari)",
      "var(--color-firefox)",
      "var(--color-edge)",
      "var(--color-other)",
    ];
    const newData = Object.values(categorySummary).map((item, index) => {
      // skip expense
      if (item.type === "income") {
        const newItem = { ...item, fill: fill[index] };
        return newItem;
      }
    });
    console.log(newData);
    return newData;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* dashboards cards */}
        <Dashboard />
        <div className="mb-10">
          <div className="grid grid-cols-2 gap-6">
            {/* <PieChartDonut
                // data={expenseChartData(categorySummary)}
                total={totalExpense}
              />
              <PieChartDonut
                // data={IncomeChartData(categorySummary)}
                total={totalIncome}
              /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <TransactionForm />
          </div>
          {/* Expenses List Section */}
          <div className="lg:col-span-2 ">
            <TransactionList />
            {/* category break down */}
            <SummaryPage />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
