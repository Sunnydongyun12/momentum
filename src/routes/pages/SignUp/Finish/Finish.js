import { databaseRef } from 'config/firebase';
import React from 'react';
import styled from 'styled-components';
import Stepper from 'components/Stepper';
import PropTypes from 'prop-types';
import { blue } from 'lib/stylesConstants';
import CTABtn from 'components/CTABtn';

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

const StyledP = styled.div`
  margin-top: 1em;
  font-size: 1.3em;
`;

const SpecialText = styled.div`
  display: inline-block;
  font-weight: 600;
  color: ${blue};
`;

const handleSubmit = ({ user, history, logIn }) => () => {
  var newUser = {};
  newUser[user.username] = {};
  newUser[user.username]['email'] = user.email;
  newUser[user.username]['password'] = user.password;
  newUser[user.username]['preferences'] = user.preferences;

  databaseRef.child('user').update(newUser);
  logIn();
  history.push('/providers');
};

export const Finish = ({ user, history, logIn }) => (
  <Content>
    <Stepper currentStep={2} steps={['Account Information', 'Storage Information', 'Finish']} />
    <Heading>Confirm Account</Heading>
    <StyledP>Please confirm that <SpecialText>{user.email}</SpecialText> is your email.</StyledP>
    <StyledP>Click on the <SpecialText>Previous</SpecialText> button below to edit your information.</StyledP>

    <CTABtn theme="outlineBlue" style={{ height: '50px', marginTop: '1em' }} onClick={() => history.goBack()}>Previous</CTABtn>
    <CTABtn theme="pink" style={{ height: '50px', marginTop: '1em' }} onClick={handleSubmit({ user, history, logIn })}>Submit</CTABtn>
  </Content>
);

Finish.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
  logIn: PropTypes.func,
};

export default Finish;
