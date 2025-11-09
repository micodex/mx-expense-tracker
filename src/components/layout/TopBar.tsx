import { Menu, User } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function TopBar() {
  const { toggleSidebar } = useApp();

  return (
    <header className="z-2 fixed top-0 right-0 left-0 bg-white px-2 md:px-6 h-16 border-b border-gray-200 shadow md:pr-70 transition-all flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 active:bg-gray-200"
          onClick={() => toggleSidebar()}
        >
          <Menu />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">مدیریت هزینه‌ها</h1>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <span>ورود</span>
        <div className="w-8 flex justify-center items-center bg-gray-200 aspect-square rounded-full">
          <User size={16} />
        </div>
      </div>
    </header>
  );
}
