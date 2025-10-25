export interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
}

export type TransactionType = "income" | "expense";

export type Summary = {
  [key: string]: {
    total: number;
    type: "income" | "expense";
    name: string;
  };
};
