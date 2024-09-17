import { useState } from 'react';
import '../style/Home.css';
import { states } from '../data/states';

const Home = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const saveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    alert('Employee Created!'); 
  };

  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <a href="employee-list">View Current Employees</a>
      <h2>Create Employee</h2>
      <form id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="firstName" value={employee.firstName} onChange={handleChange} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="lastName" value={employee.lastName} onChange={handleChange} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input type="date" id="date-of-birth" value={employee.dateOfBirth} onChange={handleChange} />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" value={employee.startDate} onChange={handleChange} />

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" value={employee.street} onChange={handleChange} />

          <label htmlFor="city">City</label>
          <input type="text" id="city" value={employee.city} onChange={handleChange} />

          <label htmlFor="state">State</label>
          <select id="state" value={employee.state} onChange={handleChange}>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" value={employee.zipCode} onChange={handleChange} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" value={employee.department} onChange={handleChange}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
      </form>
      <button onClick={saveEmployee}>Save</button>
    </div>
  );
};

export default Home;
