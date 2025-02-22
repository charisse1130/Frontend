import React from 'react';
import './bookingcomplete.css';
import complete from './complete.png';

const BookingComplete = () => {
   const redirectToAll = () => {
      window.location.href = "all.html";
   };

 return (
    <div className="booking-complete-container">
        <div className="booking-complete-header">Booking Complete</div>
        <img src={complete.png} alt="Booking Complete" class="booking-icon">
        <button className="button" onclick="redirectToAll()">Okay</button>
    </div>
  </div>
 );
};

export default BookingComplete;  