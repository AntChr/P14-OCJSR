import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import '../style/Home.css';

const EmployeeList = () => {
  const employees = useSelector(state => state.employee.employees);
  const [search, setSearch] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);


  useEffect(() => {
    const filteredData = employees.filter(employee => 
      employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase()) ||
      employee.state.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEmployees(filteredData);
  }, [search, employees]);

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
      <input
        type="text"
        placeholder="Recherche"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-bar"
      />
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination 
      />
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
