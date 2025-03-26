import React from 'react';

const Columns = [
  { name: "First Name", selector: row => row.firstName },
  { name: "Last Name", selector: row => row.lastName },
  { name: "Start Date", selector: row => row.startDate },
  { name: "Department", selector: row => row.department },
  { name: "Date of Birth", selector: row => row.dateOfBirth },
  { name: "Street", selector: row => row.street },
  { name: "City", selector: row => row.city },
  { name: "State", selector: row => row.state },
  { name: "Zip Code", selector: row => row.zipCode },
];

export default Columns;