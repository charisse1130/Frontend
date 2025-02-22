import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./all.css";
import header from "./header.png"; 

const ManageAppointment = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <button
          key={day}
          className={selectedDate === day ? "active" : ""}
          onClick={() => setSelectedDate(day)}
        >
          {day}
        </button>
      );
    }
    return calendarDays;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    setCurrentYear(prev => (currentMonth === 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    setCurrentYear(prev => (currentMonth === 11 ? prev + 1 : prev));
  };

  const toggleStatus = (event) => {
    event.target.classList.toggle("available");
    event.target.classList.toggle("booked");
    event.target.textContent = event.target.classList.contains("booked")
      ? "Booked"
      : "Available";
  };

  const toggleAMPM = (event) => {
    event.target.textContent = event.target.textContent === "AM" ? "PM" : "AM";
    event.target.classList.toggle("am-active");
    event.target.classList.toggle("pm-active");
  };

  const navigateTo = (path) => navigate(path);

  return (
    <div className="manage-appointment-container">
      <div className="manage-appointment-header">
        <img src={header} alt="Header" className="header-icon" />
        <div className="manage-appointment-header-text">Manage Appointment</div>
      </div>

      <div className="manage-appointment-container-tabs">
        <button className="tab-button active"><div className="tab-circle"></div> All</button>
        <button className="tab-button"><div className="tab-circle"></div> Available</button>
        <button className="tab-button"><div className="tab-circle"></div> Booked</button>
      </div>

      <div className="manage-appointment-container-tabs-search">
        <img src="search.png" alt="Search" className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
        <img src="adjust.png" alt="Adjust" className="search-icon" />
      </div>

      <div className="manage-appointment-calendar-container">
        <div className="manage-appointment-calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <div className="month-year">{months[currentMonth]} {currentYear}</div>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>

        <div className="manage-appointment-calendar-days">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="manage-appointment-calendar-dates">
          {generateCalendar()}
        </div>
      </div>

      <div className="manage-appointment-card">
        <div className="manage-appointment-card-list">
          <div className="manage-appointment-checkbox">
            <input type="checkbox" />
          </div>
          <div className="manage-appointment-profile"></div>
          <div className="manage-appointment-content">
            <p className="name">Juan Dela R. Cruz</p>
            <p className="title">
              <span className="circle-container"></span>
              Chief Engineer
            </p>
          </div>
          <div className="manage-appointment-status">
            <span className="available" onClick={toggleStatus}>Available</span>
          </div>
        </div>
      </div>

      <div className="manage-appointment-date-container">
        <div className="manage-appointment-date-dropdown-container">
          <label>Select a day</label>
          <select id="month">{months.map(m => <option key={m}>{m}</option>)}</select>
          <select id="day">{Array.from({ length: 31 }, (_, i) => <option key={i + 1}>{i + 1}</option>)}</select>
          <select id="year">{Array.from({ length: 7 }, (_, i) => <option key={2024 + i}>{2024 + i}</option>)}</select>
        </div>

        <div className="manage-appointment-time-dropdown-container">
          <div className="manage-appointment-time-container-starts">
            <label>Starts at</label>
            <select>
              {[...Array(24).keys()].map(i => <option key={i}>{`${i % 12 || 12}:00`}</option>)}
            </select>
            <button className="toggle-btn am-active" onClick={toggleAMPM}>AM</button>
          </div>

          <div className="manage-appointment-time-container-ends">
            <label>Ends at</label>
            <select>
              {[...Array(24).keys()].map(i => <option key={i}>{`${i % 12 || 12}:30`}</option>)}
            </select>
            <button className="toggle-btn pm-active" onClick={toggleAMPM}>PM</button>
          </div>
        </div>

        <div className="manage-appointment-button-container">
          <button className="button reschedule" onClick={() => navigateTo("/reschedule")}>Reschedule</button>
          <button className="button cancel" onClick={() => navigateTo("/cancel")}>Cancel Appointment</button>
          <button className="button book-now" onClick={() => navigateTo("/booking")}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ManageAppointment;
