import React, { useState } from "react";


function EmployeeDetails({ employees, setEmployees }) {
  const [newEmp, setNewEmp] = useState({
    name: "",
    designation: "",
    department: "",
    salary: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setNewEmp({ ...newEmp, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = employees.length + 1;
    setEmployees([...employees, { id, ...newEmp }]);
    setNewEmp({ name: "", designation: "", department: "", salary: "" });
    setShowModal(false); // Close modal
  };

  return (
    <div className="employee-container">
      <div className="header-row">
        <h2>Employee List</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add New Employee
        </button>
      </div>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.designation} ({emp.department})
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Employee</h3>
            <form onSubmit={handleSubmit} className="form">
              <input
                name="name"
                placeholder="Name"
                value={newEmp.name}
                onChange={handleChange}
                required
              />
              <input
                name="designation"
                placeholder="Designation"
                value={newEmp.designation}
                onChange={handleChange}
                required
              />
              <input
                name="department"
                placeholder="Department"
                value={newEmp.department}
                onChange={handleChange}
                required
              />
              <input
                name="salary"
                placeholder="Salary"
                value={newEmp.salary}
                onChange={handleChange}
                required
              />
              <div className="modal-buttons">
                <button type="submit">Add</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;
