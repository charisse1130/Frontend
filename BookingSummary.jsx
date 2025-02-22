import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './bookingapt.css';
import calendar from './calendar.png';
import time from './time.png';

const Booking_Appointment_Summary = () => {
    const navigate = useNavigate(); 

    return (
        <div className="booking-summary-container">
            <button className="booking-button">Booking</button>

            <div className="booking-summary-header">
                <div className="booking-summary-header-text-one">Appointment Summary</div>
                <div className="booking-summary-header-text-two">Date and Time</div>
            </div>

            <div className="booking-summary-information-container">
                <div className="booking-summary-date">
                    <img src={calendar} alt="Calendar" className="calendar-icon" />
                    <div className="booking-summary-label-header">Appointment Date</div>
                    <div className="booking-summary-label-value">DEC-19-2024</div>
                </div>

                <div className="booking-summary-time">
                    <div className="booking-summary-time-start">
                        <img src={time} alt="Time" className="time-icon" />
                        <div className="booking-summary-label-header">Starts at:</div>
                        <div className="booking-summary-label-value">12:30 PM</div>
                    </div>

                    <div className="booking-summary-time-end">
                        <img src={time} alt="Time" className="time-icon" />
                        <div className="booking-summary-label-header">Ends at:</div>
                        <div className="booking-summary-label-value">1:00 PM</div>
                    </div>
                </div>
            </div>

            <div className="booking-summary-indicator"></div>

            <div className="booking-summary-card">
                <div className="booking-summary-card-name">Juan Dela R. Cruz</div>
                <div className="booking-summary-card-job">Chief Engineer</div>
            </div>

            <div className="booking-summary-status">Available</div>

            <div className="booking-summary-buttons">
                <button 
                    className="booking-summary-buttons-cancel" 
                    onClick={() => navigate('/all')}> 
                    Cancel
                </button>
                <button 
                    className="booking-summary-buttons-book" 
                    onClick={() => navigate('/BookingComplete')}> 
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Booking_Appointment_Summary;
