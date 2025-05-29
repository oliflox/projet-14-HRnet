import React, { useMemo } from 'react';
import { useEmployeeTable } from '../hooks/useEmployeeTable';
import EmployeeTable from '../components/EmployeeTable';

function Employees() {
  const employees = useMemo(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    return storedEmployees || [];
  }, []);

  const {
    employees: paginatedEmployees,
    totalRows,
    totalPages,
    currentPage,
    rowsPerPage,
    search,
    sortColumn,
    sortDirection,
    handleSort,
    handleSearch,
    handleRowsPerPageChange,
    handlePageChange,
  } = useEmployeeTable(employees);

  return (
    <div id="employee-div" className="container">
      <div className="mainTitle">Current Employees</div>
      <div className="employeeTableControls">
        <span className="employeeTableShow">
          Show
          <select 
            value={rowsPerPage} 
            onChange={(e) => handleRowsPerPageChange(e.target.value)} 
            className="employeeSelect"
            aria-label="Nombre d'entrées par page"
          >
            {[10, 25, 50, 100].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          entries
        </span>
        <span className="employeeTableSearch">
          Search: 
          <input 
            className="employeeInput" 
            value={search} 
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="Rechercher des employés"
          />
        </span>
      </div>

      <EmployeeTable 
        employees={paginatedEmployees}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />

      

      <div className="employeePagination">
      <div className="employeeTableInfo">
        Showing {totalRows === 0 ? 0 : (rowsPerPage * (currentPage-1) + 1)} to {Math.min(rowsPerPage * currentPage, totalRows)} of {totalRows} entries
      </div>
        <div className="paginationControls">
          <button 
            className="employeePaginationBtn" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            aria-label="Page précédente"
          >
            Previous
          </button>
          <input 
            type="number" 
            value={currentPage} 
            onChange={(e) => handlePageChange(Number(e.target.value) || 1)} 
            className="employeePaginationInput"
            aria-label="Numéro de page"
            min={1}
            max={totalPages}
          />
          <span>/ {totalPages}</span>
          <button 
            className="employeePaginationBtn" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            aria-label="Page suivante"
          >
            Next
          </button>
        </div>
      </div>

      <a href="/" className="employeeLink">Home</a>
    </div>
  );
}

export default Employees;
