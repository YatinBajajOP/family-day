import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummyData from '../dummyData';
import '../styles/Banner.css';

const LandingPage = () => {
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === dummyData.unique_code) {
      if (dummyData.checkedIn) {
        navigate('/barcode');
      } else {
        navigate('/form');
      }
    } else {
      setErrorMessage('Entered ID is incorrect. Please try again.');
    }
  };

  return (
    <div className="landing-container">
      <div className="banner" />
      <form onSubmit={handleSubmit} className="landing-form">
        <label htmlFor="userId">Enter Your 6-Digit Code</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={handleInputChange}
          placeholder="Enter your ID"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default LandingPage;
