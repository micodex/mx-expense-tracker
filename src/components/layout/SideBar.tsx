import { useApp } from "@/context/AppContext";

// icons
import {
  LayoutDashboard,
  ArrowRightLeft,
  ChartPie,
  Settings,
  SwatchBook,
  X,
} from "lucide-react";

import Logo from "@/assets/logo.png";

export default function SideBar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      label: "داشبورد",
    },
    {
      name: "Transactions",
      icon: ArrowRightLeft,
      label: "تراکنش‌ها",
    },
    {
      name: "Categories",
      icon: SwatchBook,
      label: "دسته‌بندی‌ها",
    },
    {
      name: "Analysis",
      icon: ChartPie,
      label: "آنالیز",
    },
    {
      name: "Settings",
      icon: Settings,
      label: "تنظیمات",
    },
  ];

  const { activePage, setActivePage, sidebarOpen, toggleSidebar } = useApp();
  return (
    <aside
      className={`fixed z-3 top-0 right-0 w-64 h-screen transform md:translate-x-0 transition-all shadow-md bg-white/70 backdrop-blur-lg
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"} `}
    >
      <div className="h-18 px-6 flex items-center justify-between border-gray-200 border-b">
        <div className="relative">
          <img className="block w-22" src={Logo} alt="logo" />
        </div>
        <button
          className="p-2 rounded-sm md:hidden hover:bg-gray-100 active:bg-gray-200"
          onClick={() => toggleSidebar()}
        >
          <X />
        </button>
      </div>

      <nav className="px-2 py-6">
        <ul>
          {menuItems.map(({ name, label, icon: Icon }) => (
            <li key={name}>
              <button
                onClick={() => setActivePage(name)}
                className={`
                  w-full px-4 py-2 rounded-md flex items-center gap-4
                  transition duration-60 text-gray-800 cursor-pointer
                  ${activePage === name ? "bg-blue-500 text-white" : ""}
                  hover:bg-gray-200 hover:text-gray-800
                `}
              >
                <Icon size={22} />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
