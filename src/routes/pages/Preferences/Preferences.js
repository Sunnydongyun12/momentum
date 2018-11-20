import React from 'react';
import PrefForm from '../PrefForm/PrefForm';
import Stepper from 'components/Stepper/Stepper';
import styled from 'styled-components';

const Content = styled.div`
  box-sizing: border-box;
  padding-bottom: 100px;
  display: grid;
  padding: 0 40px;
`;

const Heading = styled.div`
  margin-top: 1em;
  font-weight: 700;
  font-size: 2em;
`;

const Subheading = styled.div`
  margin: 2em 0 1em 0;
  font-size: 1.5em;
  /* color: #555; */
  font-weight: 600;
`;

const Preferences = () => {
  return (
    <Content>
      <Stepper currentStep={1} steps={['Account Information', 'Storage Information', 'Finish']} />
      {/* <Heading>Storage Information</Heading> */}
      <Subheading>These preferences will be used to match you with potential storage providers.</Subheading>
      <PrefForm />
    </Content>
  );

};

export default Preferences;
