import React from 'react';
import CTABtn from 'components/CTABtn';
import '../styles/Home.css';
import PCardList from 'components/PCardList';
import ProviderCard from 'components/ProviderCard';

export const Home = () => {
  const description = 'Sample description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...';
  
  return (
    <div className="Home__content">
      <h1>Home</h1>
      <h2 style={{ fontWeight: 400 }}>Your cheap and easy storage solution provider. Follow these simple steps to get you up and running.</h2>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>1. Click on the sidebar.</p>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>2. Set your preferences.</p>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>3. Find a solution provider.</p>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>4. Book.</p>
      <p style={{ fontSize: '1.3em', fontWeight: 300 }}>5. Done!</p>
      <ProviderCard name="test" description={description} imgName="test" zipCode="55555"/>
    </div>
  );
};

export default Home;
