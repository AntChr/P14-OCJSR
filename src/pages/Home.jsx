import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeeSlice';
import DatePicker from '../components/DatePicker';
import Modal from '../components/Modal'; 
import '../style/Home.css';
import { states } from '../data/states';

const Home = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  const handleDateChange = (date, field) => {
    setEmployee(prevState => ({
      ...prevState,
      [field]: date
    }));
  };
  const saveEmployee = () => {
    dispatch(addEmployee(employee));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

        <DatePicker
          label="Date of Birth"
          selectedDate={employee.dateOfBirth}
          onDateChange={(date) => handleDateChange(date, 'dateOfBirth')}
        />

        <DatePicker
          label="Start Date"
          selectedDate={employee.startDate}
          onDateChange={(date) => handleDateChange(date, 'startDate')}
        />

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
      {isModalOpen && <Modal message="Employee Created!" onClose={closeModal} />}
    </div>
  );
};

export default Home;
