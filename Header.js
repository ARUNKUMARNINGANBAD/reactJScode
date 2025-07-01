import React from "react";

function Header({ activeTab, onTabChange }) {
  return (
    <header>
      <h1>Employee Details Service</h1>
      <nav className="tabs">
        <button
          className={activeTab === "employee" ? "active" : ""}
          onClick={() => onTabChange("employee")}
        >
          Employee Details
        </button>
        <button
          className={activeTab === "salary" ? "active" : ""}
          onClick={() => onTabChange("salary")}
        >
          Salary Details
        </button>
      </nav>
    </header>
  );
}

export default Header;
