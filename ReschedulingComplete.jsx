import React from 'react';
import './reschedcomplete.css';
import complete from './complete.png';

const ReschedulingComplete = () => {
   const redirectToAll = () => {
      window.location.href = "all.html";
   };

 return (
    <div className="rescheduling-complete-container">
        <div className="rescheduling-complete-header">Rescheduling Complete</div>
        <img src={complete.png} alt="Rescheduling Complete" class="resched-icon">
        <button className="button" onclick="redirectToAll()">Okay</button>
    </div>
  </div>
 );
};

export default ReschedulingComplete;  