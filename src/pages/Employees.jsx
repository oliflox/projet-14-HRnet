import React from 'react';
import EmployeeTable from '../components/EmployeeTable';

function Employees() {
  const employees = (() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    return storedEmployees || [];
  }, []);

  const employeesContent = (() => {
    return employees.length > 0 ? (
      <EmployeeTable employees={employees} />
    ) : (
      <p>No employees found.</p>
    );
  }, [employees]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {employeesContent}
      <a href="/">Home</a>
    </div>
  );
}

export default Employees;
