import React from 'react';
import './cancelcomplete.css';
import complete  from './complete.png';

const CancellationComplete = () => {
   const redirectToAll = () => {
      window.location.href = "all.html";
   };

   return (
      <div className="cancel-complete-container">
         <div className="cancel-complete-header">Cancellation Complete</div>
            <img src={complete} alt="Cancel Complete" className="cancel-icon" />
            <button className="btn" onClick={redirectToAll}>Okay</button>
         </div>
      </div>
   );
};

export default CancellationComplete;