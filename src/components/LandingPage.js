import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../assets/banner.png'
import axios from 'axios'
import '../styles/LandingPage.css'

const LandingPage = () => {
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.userId.value
    let response
    try{
      response = await axios.get(`https://fu721ee2ff.execute-api.eu-north-1.amazonaws.com/dev/getUserDetails/${id}`)
      if (response.data.checkedIn) {
        navigate('/barcode');
      } else {
        navigate('/form');
      }
    } catch(e) {
      setErrorMessage('Entered ID is incorrect. Please try again.');
    }
  };

  return (
    <div className="landing-page">
      <img src = {Banner} className='banner'/>
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
