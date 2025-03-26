import React from 'react';
import Columns from './EmployeeColumns';
import EmployeeRow from './EmployeeRow';

function EmployeeTable({ employees }) {
  const headers = Columns.map((column, index) => (
    <th key={index} className="employeeTableHeader">{column.name}</th>
  ));

  const rows = employees.map((employee, index) => (
    <EmployeeRow key={index} employee={employee} />
  ));

  return (
    <table className="employeeTable">
      <thead className="employeeTableHead">
        <tr className="employeeTableRow">{headers}</tr>
      </thead>
      <tbody className="employeeTableBody">{rows}</tbody>
    </table>
  );
}

export default EmployeeTable;
