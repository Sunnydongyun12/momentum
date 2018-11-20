import React from 'react';
import CTABtn from 'components/CTABtn';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  box-sizing: border-box;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const ProviderProfile = () => {
  return (
    <Content>
      <h1>Profile of Provider 2</h1>
      <p style={{ fontSize: '1.3em' }}>Zip Code: 12011</p>
      <p style={{ fontSize: '1.3em' }}>Details.... about provider........</p>
      <Link to="/book"><CTABtn theme="pink">Book</CTABtn></Link>
    </Content>
  );
};

export default ProviderProfile;
