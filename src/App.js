import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FormComponent from './components/FormComponent';
import BarcodePage from './components/BarcodeComponent';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/barcode" element={<BarcodePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
