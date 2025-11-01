// Categories for transactions
import {
  User,
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
} from "lucide-react";

export const expenseCategories = [
  { label: "خوراکی", icon: User },
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
