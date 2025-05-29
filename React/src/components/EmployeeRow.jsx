import React from 'react';
import Columns from './EmployeeColumns';

function EmployeeRow({ employee }) {
  const cells = Columns.map((column, colIndex) => {
    const cellValue = column.selector(employee);
    return (
      <td key={colIndex} className="employeeTableCell">
        {typeof cellValue === 'object' ? JSON.stringify(cellValue) : cellValue}
      </td>
    );
  });

  return <tr className="employeeTableRow">{cells}</tr>;
}

export default EmployeeRow;
