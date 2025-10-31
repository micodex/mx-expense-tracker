// fixed side bar and nav bar components layout

import { useApp } from "@/context/AppContext";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { sidebarOpen } = useApp();
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <div
        className={`flex-1 mt-17 transition-all duration-300 p-6 ${
          sidebarOpen ? "mr-20 md:mr-64" : "mr-20"
        }`}
      >
        <TopBar />
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
