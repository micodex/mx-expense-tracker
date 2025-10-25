// interface SideBarProps {
//   activePage: string;
//   setActivePage: (page: string) => void;
//   sidebarOpen: boolean;
//   setSidebarOpen: (open: boolean) => void;
// }

// icons
import { LayoutDashboard } from "lucide-react";
import { ArrowRightLeft } from "lucide-react";
import { ChartPie } from "lucide-react";
import { Settings } from "lucide-react";
import { SwatchBook } from "lucide-react";
import { User } from "lucide-react";
import { Menu } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function SideBar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
      label: "داشبورد",
    },
    {
      name: "Transactions",
      icon: <ArrowRightLeft />,
      label: "تراکنش‌ها",
    },
    {
      name: "Categories",
      icon: <SwatchBook />,
      label: "دسته‌بندی‌ها",
    },
    {
      name: "Analysis",
      icon: <ChartPie />,
      label: "آنالیز",
    },
    {
      name: "Setting",
      icon: <Settings />,
      label: "تنظیمات",
    },
  ];

  const { activePage, setActivePage, sidebarOpen, toggleSidebar } = useApp();

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-white shadow-lg transition-all duration-300 ease-in-out fixed top-0 right-0 h-full z-10`}
    >
      {/* header */}
      <div className="p-2 border-b border-gray-200">
        <div className="">
          <button
            onClick={() => toggleSidebar()}
            className={`h-14 px-3 ${
              !sidebarOpen ? "justify-center" : ""
            } w-full flex items-center justify-between p-1 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors`}
          >
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800">منو</h1>
            )}
            <Menu />
          </button>
        </div>
      </div>
      {/* sidenav pages */}
      <nav className="mt-5">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActivePage(item.name)}
                className={`w-full flex items-center p-3 rounded-lg${
                  !sidebarOpen ? " justify-center" : ""
                } ${
                  activePage === item.name
                    ? "bg-blue-100 text-blue-500"
                    : "text-gray-800 hover:bg-gray-100"
                } `}
              >
                <span
                  className={`${
                    activePage === item.name ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {item.icon}
                </span>

                {sidebarOpen && (
                  <span className="mr-3 font-medium ">{item.label}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* profile */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            <User />
          </div>
          {sidebarOpen && (
            <div className="mr-3">
              <p className="text-sm font-medium text-gray-800">نام کاربری</p>
              <p className="mt-1 text-xs text-gray-500">مشاهده پروفایل</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
