import React from 'react';
import Columns from './EmployeeColumns';
import EmployeeRow from './EmployeeRow';

function EmployeeTable({ employees, onSort, sortColumn, sortDirection }) {
  const headers = Columns.map((column, index) => (
    <th 
      key={index} 
      className="employeeTableHeader"
      onClick={() => onSort(index)}
      role="columnheader"
      aria-sort={sortColumn === index ? sortDirection : 'none'}
      tabIndex={0}
      style={{ cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {column.name}
        <span 
          className="sort-icon" 
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '0.8em',
            color: sortColumn === index ? '#028090' : '#bbb',
            userSelect: 'none',
          }}
        >
          <span style={{ 
            color: sortColumn === index && sortDirection === 'asc' ? 'black' : '#bbb',
            lineHeight: '0.8'
          }}>▲</span>
          <span style={{ 
            color: sortColumn === index && sortDirection === 'desc' ? 'black' : '#bbb',
            lineHeight: '0.8'
          }}>▼</span>
        </span>
      </div>
    </th>
  ));

  const rows = employees.map((employee, index) => (
    <EmployeeRow key={employee.id || index} employee={employee} />
  ));

  return (
    <div className="table-responsive">
      <table 
        className="employeeTable"
        role="grid"
        aria-label="Liste des employés"
      >
        <thead className="employeeTableHead">
          <tr className="employeeTableRow" role="row" style={{ backgroundColor: '#fff' }}>{headers}</tr>
        </thead>
        <tbody className="employeeTableBody" role="rowgroup">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={Columns.length} className="no-data-message">
                Aucun employé trouvé
              </td>
            </tr>
          ) : (
            rows
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
