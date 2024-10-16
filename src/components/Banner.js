import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/banner.jpg';

const Banner = () => {
  return ( 
        
        <div className='banner-container'>
        <div className="banner">
        <img src={bannerImage} alt="Event Banner" className="banner-image" />
      </div>
      </div>
    
  );
};

export default Banner;
