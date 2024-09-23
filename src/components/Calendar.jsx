import { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/Calendar.css';

const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

const Calendar = ({ currentDate, onDateClick }) => {
  const [displayDate, setDisplayDate] = useState(currentDate);

  const startOfMonth = new Date(displayDate.getFullYear(), displayDate.getMonth(), 1);
  const endOfMonth = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const changeMonth = (offset) => {
    const newDate = new Date(displayDate.setMonth(displayDate.getMonth() + offset));
    setDisplayDate(newDate);
  };

  const getDays = () => {
    const days = [];
    for (let i = 1 - startDay; i <= daysInMonth; i++) {
      const dayDate = new Date(displayDate.getFullYear(), displayDate.getMonth(), i);
      days.push(dayDate);
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <span>{displayDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {getDays().map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day.getMonth() === displayDate.getMonth() ? '' : 'disabled'}`}
            onClick={() => onDateClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  onDateClick: PropTypes.func.isRequired,
};

export default Calendar;
