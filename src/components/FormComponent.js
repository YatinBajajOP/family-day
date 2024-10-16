import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummyData from '../dummyData';
import '../styles/FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    accompanyingPeople: dummyData.totalMembers - 1,
    kid1: dummyData.kid1,
    kid2: dummyData.kid2,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the form
    dummyData.totalMembers = parseInt(formData.accompanyingPeople) + 1;
    dummyData.kid1 = formData.kid1;
    dummyData.kid2 = formData.kid2;
    dummyData.checkedIn = true;
    navigate('/barcode');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="accompanyingPeople">Accompanying People (0-7)</label>
        <input
          type="number"
          id="accompanyingPeople"
          name="accompanyingPeople"
          min="0"
          max="7"
          value={formData.accompanyingPeople}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="kid1">Age of Child 1</label>
        <select name="kid1" value={formData.kid1} onChange={handleInputChange} required>
          <option value="N/A">N/A</option>
          <option value="0-3">0-3</option>
          <option value="4-6">4-6</option>
          <option value="7-9">7-9</option>
          <option value="10 and above">10 and above</option>
        </select>

        <label htmlFor="kid2">Age of Child 2</label>
        <select name="kid2" value={formData.kid2} onChange={handleInputChange} required>
          <option value="N/A">N/A</option>
          <option value="0-3">0-3</option>
          <option value="4-6">4-6</option>
          <option value="7-9">7-9</option>
          <option value="10 and above">10 and above</option>
        </select>

        <button type="submit" className="btn">Check In</button>
        <button type="button" className="btn cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
