import React from 'react';
import CTABtn from 'components/CTABtn';
import '../styles/Home.css';
import PCardList from 'components/PCardList';

export const Home = () => {
  return (
    <div className="Home__content">
      <h1>Book Provider 2</h1>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>Are you sure you want to book this provider?</p>
      <CTABtn className="CTABtn--green">Confirm</CTABtn>
    </div>
  );
};

export default Home;
