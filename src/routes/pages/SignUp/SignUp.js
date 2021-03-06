import React from 'react';
import SignUpForm from '../SignUpForm';
import Stepper from 'components/Stepper';
import styled from 'styled-components';

const Content = styled.div`
  box-sizing: border-box;
  padding-bottom: 100px;
  display: grid;
  padding: 0 40px;
`;

const Heading = styled.div`
  margin: 2em 0 0 0;
  font-weight: 700;
  font-size: 2em;
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
