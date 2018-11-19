import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
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
  margin-top: 20px;
  font-size: 1.5em;
  /* color: #555; */
  font-weight: 600;
`;

const SignUp = () => {
  return (
    <Content>
      <Stepper currentStep={0} steps={['Account Information', 'Storage Information', 'Finish']} />
      <Heading>Create an Account</Heading>
      <SignUpForm />
    </Content>
  );

};

export default SignUp;
