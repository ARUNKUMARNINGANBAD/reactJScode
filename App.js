import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeDetails from "./pages/EmployeeDetails";
import SalaryDetails from "./pages/SalaryDetails";
import initialEmployees from "./data/initialEmployees";

function App() {
  const [activeTab, setActiveTab] = useState("employee");
  const [employees, setEmployees] = useState(initialEmployees);

  return (
    <div className="app-container">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeTab === "employee" && (
          <EmployeeDetails employees={employees} setEmployees={setEmployees} />
        )}
        {activeTab === "salary" && <SalaryDetails employees={employees} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
