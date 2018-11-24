import React from 'react';
import SignInForm from '../SignInForm';
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

const SignIn = () => {
  return (
    <Content>
      <Heading>Sign In</Heading>
      <SignInForm />
    </Content>
  );
};

export default SignIn;
