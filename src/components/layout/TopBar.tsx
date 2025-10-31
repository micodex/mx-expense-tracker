import { Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function TopBar() {
  const { sidebarOpen } = useApp();

  return (
    <div
      className={`${
        sidebarOpen ? "right-20 md:right-64" : "right-20"
      } text-xl bg-white shadow-sm flex items-center justify-between h-18 py-2 px-8 fixed left-0 top-0 z-5 transition-all duration-300`}
    >
      <div className="">
        <h2 className="text-lg font-semibold text-gray-700">مدیریت هزینه‌ها</h2>
        <span className="text-xs md:text-sm text-gray-600">
          هزینه‌های روزانه‌ات رو به راحتی ثبت کن
        </span>
      </div>
      <div className="text-gray-600">
        <Moon />
      </div>
    </div>
  );
}
