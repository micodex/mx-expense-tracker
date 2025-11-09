// Categories for transactions
import {
  House,
  Popcorn,
  ReceiptText,
  HeartPlus,
  Handbag,
  ShoppingBag,
  HandCoins,
  BadgeDollarSign,
  Gift,
  CreditCard,
  CarTaxiFront,
  Pizza,
} from "lucide-react";

export const expenseCategories = [
  { label: "خوراکی", icon: Pizza },
  { label: "حمل و نقل", icon: CarTaxiFront },
  { label: "خانه", icon: House },
  { label: "سرگرمی", icon: Popcorn },
  { label: "شارژ و قبض", icon: ReceiptText },
  { label: "سلامتی", icon: HeartPlus },
  { label: "خرید", icon: Handbag },
  { label: "دیگر", icon: ShoppingBag },
];

export const incomeCategories = [
  { label: "حقوق", icon: HandCoins },
  { label: "سرمایه گذاری", icon: BadgeDollarSign },
  { label: "هدیه", icon: Gift },
  { label: "واریزی", icon: CreditCard },
  { label: "دیگر", icon: ShoppingBag },
];

export const sampleData = [
  {
    id: 1761990198112,
    name: "حقوق",
    amount: 10000,
    type: "income",
    category: "حقوق",
    date: "2025-11-08",
  },
  {
    id: 1762620672195,
    name: "اسنپ",
    amount: 120,
    type: "expense",
    category: "حمل و نقل",
    date: "2025-11-07",
  },
  {
    id: 1762620707063,
    name: "سوپرمارکت",
    amount: 530,
    type: "expense",
    category: "خوراکی",
    date: "2025-11-07",
  },
  {
    id: 1762620743452,
    name: "سود بانکی",
    amount: 2000,
    type: "income",
    category: "سرمایه گذاری",
    date: "2025-11-06",
  },
  {
    id: 1762620780515,
    name: "اینترنت",
    amount: 60,
    type: "expense",
    category: "شارژ و قبض",
    date: "2025-11-05",
  },
];
