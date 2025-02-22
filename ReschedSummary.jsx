import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './reschedapt.css';
import calendar from './calendar.png';
import time from './time.png';

const Rescheduling_Appointment_Summary = () => {
    const navigate = useNavigate(); 

    return (
        <div className="resched-summary-container">
            <button className="resched-button">Rescheduling</button>

            <div className="resched-summary-header">
                <div className="resched-summary-header-text-one">Appointment Summary</div>
                <div className="resched-summary-header-text-two">Date and Time</div>
            </div>

            <div className="resched-summary-information-container">
                <div className="resched-summary-date">
                    <img src={calendar} alt="Calendar" className="calendar-icon" />
                    <div className="resched-summary-label-header">Appointment Date</div>
                    <div className="resched-summary-label-value">DEC-19-2024</div>
                </div>

                <div className="resched-summary-time">
                    <div className="resched-summary-time-start">
                        <img src={time} alt="Time" className="time-icon" />
                        <div className="resched-summary-label-header">Starts at:</div>
                        <div className="resched-summary-label-value">12:30 PM</div>
                    </div>

                    <div className="resched-summary-time-end">
                        <img src={time} alt="Time" className="time-icon" />
                        <div className="resched-summary-label-header">Ends at:</div>
                        <div className="resched-summary-label-value">1:00 PM</div>
                    </div>
                </div>
            </div>

            <div className="resched-summary-indicator"></div>

            <div className="resched-summary-card">
                <div className="resched-summary-card-name">David C. Smith</div>
                <div className="resched-summary-card-job">Chief Engineer</div>
            </div>

            <div className="resched-summary-status">Booked</div>

            <div className="resched-summary-buttons">
                <button 
                    className="resched-summary-buttons-cancel" 
                    onClick={() => navigate('/all')}> 
                    Cancel
                </button>
                <button 
                    className="resched-summary-buttons-book" 
                    onClick={() => navigate('/ReschedulingComplete')}> Book Now
                </button>
            </div>
        </div>
    );
};

export default Rescheduling_Appointment_Summary;
