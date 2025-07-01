import React from "react";

function SalaryDetails({ employees }) {
  return (
    <div>
      <h2>Salary Details</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalaryDetails;
