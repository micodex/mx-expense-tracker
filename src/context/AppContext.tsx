// global states for the app

import type { Transaction } from "@/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AppContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  transaction: Transaction;
  setTransaction: React.Dispatch<React.SetStateAction<Transaction>>;
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;

  totals: {
    income: number;
    expense: number;
  };
}

// create context
const AppContext = createContext<AppContextType | null>(null);

// provider
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // navigations state
  const [activePage, setActivePage] = useState("Transactions");
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved ? JSON.parse(saved) : true;
  });

  const toggleSidebar = () => setSidebarOpen((prev: boolean) => !prev);

  // save sidebar state to local storage
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // transactions state
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

  // Save transactions to local storage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        sidebarOpen,
        toggleSidebar,
        transaction,
        setTransaction,
        transactions,
        setTransactions,
        totals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useApp = () => {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
