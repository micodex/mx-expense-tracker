import { expenseCategories, incomeCategories } from "@/lib/constants";
import type { Summary, Transaction } from "@/types";
import { type LucideIcon } from "lucide-react";
export const removeDashedBorder = (): void => {
  // function to remove dashed border from all transaction elements
  const transItems = document.querySelectorAll(".transaction");
  transItems.forEach((item) => item.classList.remove("dashed-border"));
};

const findIcon = (cat: string): LucideIcon => {
  return (
    (expenseCategories.find((e) => e.label === cat)?.icon as LucideIcon) ||
    (incomeCategories.find((e) => e.label === cat)?.icon as LucideIcon)
  );
};
// function to create a summary from transactions
// e.g. -> shopping: {name: shopping, total: 100, type: expense}
export const createSummary = (tx: Transaction[]) => {
  const summary = tx.reduce((acc, trans) => {
    const category = trans.category;
    if (!acc[category]) {
      acc[category] = {
        total: 0,
        type: trans.type,
        name: trans.name,
        icon: findIcon(category),
      };
    }

    acc[category].total += Math.abs(trans.amount);

    return acc;
  }, {} as Summary);
  // console.log(summary);
  return summary;
};
