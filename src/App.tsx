import "./App.css";
import { useState } from "react";

import { TransactionForm } from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import TotalsPieCharts from "./components/TotalsPieChart";
import Dashboard from "./components/Dashboard";
import Layout from "./components/layout/Layout";
import SummaryPage from "./pages/Summary";

function App() {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <Dashboard />
        <div className="mb-10">
          <TotalsPieCharts />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TransactionForm
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          </div>
          <div className="lg:col-span-2 ">
            <TransactionList setIsEditing={setIsEditing} />
          </div>
        </div>
        <SummaryPage />
      </div>
    </Layout>
  );
}

export default App;
