// global state for layout and navigation

import { createContext, useContext, useState } from "react";

interface AppContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

// create context
const AppContext = createContext<AppContextType | null>(null);

// provider
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <AppContext.Provider
      value={{ activePage, setActivePage, sidebarOpen, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useApp = () => {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
