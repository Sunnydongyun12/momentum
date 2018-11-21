import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActiveStep = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  color: white;
  box-sizing: border-box;
  background-color: #F95E66;
  text-align: center;
  margin-right: 10px;
  border: 2px solid #F95E66;
  border-radius: 1em 1em;
  font-size: 0.9rem;
`;

const FinishedStep = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  color: white;
  box-sizing: border-box;
  background-color: #F95E66;
  text-align: center;
  margin-right: 10px;
  border: 2px solid #F95E66;
  border-radius: 1em 1em;
  font-size: 0.9rem;
`;

const Step = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  color: gray;
  border: 2px solid gray;
  text-align: center;
  margin-right: 10px;
  box-sizing: border-box;
  border-radius: 1em 1em;
  font-size: 0.9rem;
`;

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-around;
`;

const Divider = styled.span`
  flex-grow: 1;
  border-top: 2px solid #565A5C;
  margin: 0 5px;
  margin-top: 10px;
`;

const Active = styled.div`
  font-weight: 600;
`;

const Inactive = styled.div`
  color: gray;
`;

const Check = styled(FontAwesomeIcon)`
  display: inline-block;
  font-size: 13px;
  vertical-align: middle;
`;

// currentStep is zero-indexed
const Stepper = ({ currentStep, steps }) => {
  const newSteps = steps.map((el, i) => {
    if ( i < currentStep) {
      return <div><FinishedStep><Check icon="check" /></FinishedStep>{el}</div>;
    } else if ( i > currentStep) {
      return <Inactive><Step>{i+1}</Step>{el}</Inactive>;
    } else {
      return <Active><ActiveStep>{i+1}</ActiveStep>{el}</Active>;
    }
  });
  let nSteps = [];

  for (let i = 0; i < newSteps.length - 1; i++) {
    nSteps.push(newSteps[i]);
    nSteps.push(<Divider />);
  }
  nSteps.push(newSteps[newSteps.length - 1]);

  return (
    <Container>
      {nSteps}
    </Container>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number,
  steps: PropTypes.any,
};

export default Stepper;
