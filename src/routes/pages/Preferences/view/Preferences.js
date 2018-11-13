import React from 'react';
import '../styles/Preferences.css';
import PrefForm from '../../PrefForm/view/PrefForm';

const Preferences = () => {
  return (
    <div className="Preferences__content">
      <h1>Set Your Preferences</h1>
      <p style={{ fontSize: '1.1em', fontWeight: '300' }}>These preferences will be used to match you with potential solution providers.</p>
      <PrefForm />
    </div>
  );

};

export default Preferences;
