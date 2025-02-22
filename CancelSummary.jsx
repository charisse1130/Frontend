import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './cancelapt.css';

const Cancel_Appointment_Summary = () => {
    const navigate = useNavigate(); 
    
    return (
        <div className="cancel-summary-container">
            <button className="cancel-button">Cancellation</button>

            <div className="cancel-summary-header">
                <div className="cancel-summary-header-text-one">Cancellation Summary</div>
            </div>

            <div className="cancel-summary-information-container">
                <div className="cancel-summary-indicator"></div>

                <div className="cancel-summary-card">
                    <div className="cancel-summary-card-name">David C. Smith</div>
                    <div className="cancel-summary-card-job">Chief Engineer</div>
                </div>

                <div className="cancel-summary-status">Booked</div>

                <div className="cancel-summary-buttons">
                    <button 
                        className="cancel-summary-buttons-cancel" 
                        onClick={() => navigate('/all')}> 
                        Go Back
                    </button>
                    <button 
                        className="cancel-summary-buttons-book" 
                        onClick={() => navigate('/CancellationComplete')}> 
                        Cancel Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cancel_Appointment_Summary;
