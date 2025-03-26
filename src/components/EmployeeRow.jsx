import React from 'react';
import Columns from './EmployeeColumns';

function EmployeeRow({ employee }) {
  const cells = (() => {
    return Columns.map((column, colIndex) => (
      <td key={colIndex} className="employeeTableCell">{column.selector(employee)}</td>
    ));
  }, [employee]);

  return <tr className="employeeTableRow">{cells}</tr>;
}

export default EmployeeRow;
