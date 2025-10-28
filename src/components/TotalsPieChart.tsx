import { useApp } from "@/context/AppContext";

import PieChartDonut from "./charts/PieChartDonut";
import { createSummary } from "@/utils/helpers";

import type { Summary } from "@/types";

export default function TotalsPieCharts() {
  const { transactions, totals } = useApp();

  const categorySummary = createSummary(transactions);

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

    return newData;
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <PieChartDonut
        data={expenseChartData(categorySummary)}
        total={totals.income}
        title="همه درامد‌ها"
      />
      <PieChartDonut
        data={IncomeChartData(categorySummary)}
        total={totals.expense}
        title="همه هزینه‌ها"
      />
    </div>
  );
}
