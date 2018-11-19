import React from 'react';
import CTABtn from 'components/CTABtn';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="Home__content">
      <h1>Profile of Provider 2</h1>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>Zip Code: 12011</p>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>Details.... about provider........</p>
      <Link to="/book"><CTABtn className="CTABtn--dark">Book</CTABtn></Link>
    </div>
  );
};

export default Home;
