// transaction logic

import { useState, useEffect, useMemo } from "react";
import type { Transaction } from "@/types";

export function useTransactions() {
  const [transaction, setTransaction] = useState<Transaction>({
    id: 0,
    name: "",
    amount: 0,
    type: "expense",
    category: "",
    date: "",
  });

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // add

  // edit

  // delete

  // calculate total income and expense
  const totals = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((s, t) => s + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((s, t) => s + t.amount, 0);

    return { income, expense };
  }, [transactions]);

  return { totals, transactions, setTransactions, transaction, setTransaction };
}
