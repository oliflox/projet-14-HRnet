import React, { useEffect, useState } from 'react';
import Columns from '../components/Columns';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {employees.length > 0 ? (
        <table className="employeeTable">
          <thead className="employeeTableHead">
            <tr className="employeeTableRow">
              {Columns.map((column, index) => (
                <th key={index} className="employeeTableHeader">{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="employeeTableBody">
            {employees.map((employee, index) => (
              <tr key={index} className="employeeTableRow">
                {Columns.map((column, colIndex) => (
                  <td key={colIndex} className="employeeTableCell">{column.selector(employee)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
      <a href="/">Home</a>
    </div>
  );
}

export default Employees;
