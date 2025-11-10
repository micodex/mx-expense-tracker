// fixed side bar and nav bar components layout

import { useApp } from "@/context/AppContext";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, toggleSidebar } = useApp();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* fixed sidenav */}
      <SideBar />

      {/* overlay */}
      {sidebarOpen && (
        <div
          onClick={() => toggleSidebar()}
          className="z-1 fixed inset-0 bg-blue-900/10 md:hidden"
        ></div>
      )}

      {/* fixed topbar */}
      <TopBar />

      {/* main content */}
      <div className="p-2 pt-24 md:px-6 md:mr-64 transition-all duration-300 overflow-hidden">
        <main className="z-0">{children}</main>
      </div>
    </div>
  );
}
