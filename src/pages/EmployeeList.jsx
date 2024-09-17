import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../style/Home.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: row => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: row => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <DataTable
        columns={columns}
        data={employees}
        pagination 
      />
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
