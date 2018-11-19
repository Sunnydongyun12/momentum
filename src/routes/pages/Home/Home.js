import React from 'react';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';
import Stepper from 'components/Stepper/Stepper';

const Content = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-column-gap: 2em;
`;

const Direction = styled.p`
  font-size: 1.3em;
  font-weight: 300;
`;

export const Home = () => {
  
  return (
    <Content>
      <Stepper currentStep={0} steps={['Account Information', 'Storage Information', 'Finish']} />
      <h1>Home</h1>
      <h2 style={{ fontWeight: 400 }}>Your cheap and easy storage solution provider. Follow these simple steps to get you up and running.</h2>
      <Direction>1. Click on the sidebar.</Direction>
      <Direction>2. Set your preferences.</Direction>
      <Direction>3. Find a solution provider.</Direction>
      <Direction>4. Book.</Direction>
      <Direction>5. Done!</Direction>

      <ButtonGrid>
        <CTABtn theme="outlineBlue">Sign In</CTABtn>
        <CTABtn theme="pink">Sign Up</CTABtn>
      </ButtonGrid>
    </Content>
  );
};

export default Home;
