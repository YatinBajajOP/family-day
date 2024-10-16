import React from 'react';
import '../styles/ButtonGroup.css';

const ButtonGroup = ({ handleAction }) => {
  return (
    <div className="button-group">
      <button className="btn check-in" onClick={() => handleAction('checkIn')}>
        Check In
      </button>
      <button className="btn cancel" onClick={() => handleAction('cancel')}>
        Cancel
      </button>
    </div>
  );
};

export default ButtonGroup;
