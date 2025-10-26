import { Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function TopBar() {
  const { sidebarOpen } = useApp();

  return (
    <div
      className={`$text-xl bg-white shadow-sm flex items-center justify-between h-18 py-2 px-8 fixed left-0 top-0 z-10 transition-all duration-300`}
      style={{ right: sidebarOpen ? "256px" : "80px" }}
    >
      <div className="">
        <h2 className="text-lg font-semibold text-gray-700">مدیریت هزینه‌ها</h2>
        <span className="text-sm text-gray-600">
          هزینه‌های روزانه‌ات رو به راحتی ثبت کن
        </span>
      </div>
      <div className="text-gray-600">
        <Moon />
      </div>
    </div>
  );
}
