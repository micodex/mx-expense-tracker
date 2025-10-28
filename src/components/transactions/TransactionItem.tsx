// icons
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import type { Transaction } from "@/types";

interface Props {
  transaction: Transaction;
  handleDelete: (id: number) => void;
  handleEdit: (
    event: React.MouseEvent<HTMLButtonElement>,
    trans: Transaction
  ) => void;
}

const ExpenseItem = ({ transaction, handleDelete, handleEdit }: Props) => {
  return (
    <div
      dir="rtl"
      key={transaction.id}
      className={`transaction
          flex justify-between items-center rounded-sm border-b-2
        bg-white border-gray-200 hover:bg-gray-50 transition-border duration-60 p-4
      `}
    >
      <div className="">
        <h3 className="font-semibold">{transaction.name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">{transaction.category}</span>
          <span className="text-sm text-gray-600">{transaction.date}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {transaction.type === "income" ? (
          <div className="text-green-500">
            <FaArrowTrendUp />
          </div>
        ) : (
          <div className="text-red-500">
            <FaArrowTrendDown />
          </div>
        )}
        <div className="font-semibold text-gray-800 pr-2">
          {transaction.amount}{" "}
          <span className="text-xs text-gray-700">تومان</span>
        </div>
        {/* edit button */}
        <button
          className="text-blue-600 hover:text-blue-800 p-1"
          onClick={(event) => handleEdit(event, transaction)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        {/* delete button */}
        <button
          onClick={() => handleDelete(transaction.id)}
          className="text-red-600 hover:text-red-800 p-1"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
