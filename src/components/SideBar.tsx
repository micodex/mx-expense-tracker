interface SideBarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const SideBar = ({
  activePage,
  setActivePage,
  sidebarOpen,
  setSidebarOpen,
}: SideBarProps) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      label: "داشبورد",
    },
    {
      name: "Transactions",
      icon: <GrTransaction />,
      label: "تراکنش‌ها",
    },
    {
      name: "Categories",
      icon: <FaArrowTrendUp />,
      label: "دسته‌بندی‌ها",
    },
    {
      name: "Analysis",
      icon: <TbBrandGoogleAnalytics />,
      label: "آنالیز",
    },
    {
      name: "Setting",
      icon: <IoSettingsOutline />,
      label: "تنظیمات",
    },
  ];

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
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`h-14 px-2 ${
              !sidebarOpen ? "justify-center" : ""
            } w-full flex items-center justify-between p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors`}
          >
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800">منو</h1>
            )}
            <svg
              className={`w-5 h-5 text-gray-600 ${!true ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
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
            <FiUser />
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
};

export default SideBar;
