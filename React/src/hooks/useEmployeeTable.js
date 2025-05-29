import { useState, useMemo, useCallback } from 'react';
import Columns from '../components/EmployeeColumns';

export function useEmployeeTable(initialEmployees = []) {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Filtrage des employés
  const filteredEmployees = useMemo(() => {
    if (!search) return initialEmployees;
    return initialEmployees.filter(emp =>
      Columns.some(col => {
        const val = col.selector(emp);
        return val && val.toString().toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, initialEmployees]);

  // Tri des employés
  const sortedEmployees = useMemo(() => {
    if (sortColumn == null) return filteredEmployees;
    const col = Columns[sortColumn];
    return [...filteredEmployees].sort((a, b) => {
      const va = col.selector(a) || '';
      const vb = col.selector(b) || '';
      if (va < vb) return sortDirection === 'asc' ? -1 : 1;
      if (va > vb) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredEmployees, sortColumn, sortDirection]);

  // Pagination
  const totalRows = sortedEmployees.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
  const paginatedEmployees = sortedEmployees.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Gestionnaires d'événements
  const handleSort = useCallback((columnIndex) => {
    if (sortColumn === columnIndex) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnIndex);
      setSortDirection('asc');
    }
  }, [sortColumn]);

  const handleSearch = useCallback((value) => {
    setSearch(value);
    setCurrentPage(1);
  }, []);

  const handleRowsPerPageChange = useCallback((value) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  return {
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
  };
} 