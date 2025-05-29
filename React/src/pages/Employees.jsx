import React, { useState, useMemo } from 'react';
import Columns from '../components/EmployeeColumns';

function Employees() {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const employees = useMemo(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    return storedEmployees || [];
  }, []);

  // Filtrage
  const filtered = useMemo(() => {
    if (!search) return employees;
    return employees.filter(emp =>
      Columns.some(col => {
        const val = col.selector(emp);
        return val && val.toString().toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, employees]);

  // Tri
  const sorted = useMemo(() => {
    if (!sortCol) return filtered;
    const col = Columns[sortCol];
    return [...filtered].sort((a, b) => {
      const va = col.selector(a) || '';
      const vb = col.selector(b) || '';
      if (va < vb) return sortDir === 'asc' ? -1 : 1;
      if (va > vb) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, sortCol, sortDir]);

  // Pagination
  const totalRows = sorted.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
  const paginated = sorted.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Changement de tri
  const handleSort = idx => {
    if (sortCol === idx) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(idx);
      setSortDir('asc');
    }
  };

  // Changement de page
  const goToPage = p => {
    if (p < 1 || p > totalPages) return;
    setCurrentPage(p);
  };

  // Changement du nombre de lignes
  const handleRowsPerPage = e => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div id="employee-div" className="container">
      <div className="mainTitle">Current Employees</div>
      <div className="employeeTableControls">
        <span className="employeeTableShow">Show
          <select value={rowsPerPage} onChange={handleRowsPerPage} className="employeeSelect">
            {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          entries
        </span>
        <span className="employeeTableSearch">Search: <input className="employeeInput" value={search} onChange={e => {setSearch(e.target.value); setCurrentPage(1);}} /></span>
      </div>
      <table className="employeeTable">
        <thead>
          <tr className="employeeTableRow">
            {Columns.map((col, idx) => {
              const isActive = sortCol === idx;
              const icon = isActive ? (sortDir === 'asc' ? '▲' : '▼') : '▲';
              return (
                <th
                  key={col.name}
                  className="employeeTableHeader"
                  style={{cursor:'pointer', fontWeight:isActive?'bold':'normal'}}
                  onClick={() => handleSort(idx)}
                >
                  {col.name}
                  <span
                    style={{
                      marginLeft: 3,
                      color: isActive ? '#028090' : '#bbb',
                      fontWeight: isActive ? 'bold' : 'normal',
                      userSelect: 'none',
                    }}
                  >
                    {icon}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {paginated.length === 0 ? (
            <tr><td colSpan={Columns.length} style={{textAlign:'center'}}>No employees found.</td></tr>
          ) : paginated.map((emp, i) => (
            <tr key={i} className="employeeTableRow" style={{background:i%2?"#f6f6f6":"#fff"}}>
              {Columns.map((col, j) => (
                <td key={j} className="employeeTableCell">{col.selector(emp)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{width:'98%', maxWidth:'98vw', margin:'0 auto', display:'flex', alignItems:'center', fontSize:'0.97rem', marginTop:'0.2rem'}}>
        <span style={{marginRight:8}}>
          Showing {totalRows === 0 ? 0 : (rowsPerPage * (currentPage-1) + 1)} to {Math.min(rowsPerPage * currentPage, totalRows)} of {totalRows} entries
        </span>
      </div>
      <div className="employeePagination">
        <div style={{display:'flex', alignItems:'center', gap:2}}>
          <button className="employeePaginationBtn" onClick={()=>goToPage(currentPage-1)} disabled={currentPage===1}>Previous</button>
          <input type="text" value={currentPage} onChange={e=>goToPage(Number(e.target.value)||1)} className="employeePaginationInput" />
          <span>/ {totalPages}</span>
          <button className="employeePaginationBtn" onClick={()=>goToPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
        </div>
      </div>
      <a href="/" className="employeeLink" style={{marginTop:16}}>Home</a>
    </div>
  );
}

export default Employees;
