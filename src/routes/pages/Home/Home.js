import React from 'react';
import PropTypes from 'prop-types';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';
import { getSvg } from 'lib/assetsUtils';
import { Link } from 'react-router-dom';


const Content = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  background: url(${getSvg('bg')})  no-repeat center center fixed;
  background-size: cover;
  min-height: calc(100vh - 50px);
  color: white;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-column-gap: 2em;
`;

export const Home = ({ loggedIn }) => {

  const SignUp = (
    <Link to="/signup" >
      <CTABtn style={{ width: '430px' }} theme="pink">Sign Up</CTABtn>
    </Link>);
  
  const Providers = (
    <Link to="/providers" >
      <CTABtn style={{ width: '430px' }} theme="pink">Providers</CTABtn>
    </Link>);
  
  return (
    <Content>
      <div style={{ margin: '0', paddingTop: '2em', fontWeight: '600', fontSize: '4em' }}>Momentum</div>
      <div style={{ color: 'white', fontSize: '1.7em', marginBottom: '2em' }}>Find storage providers near you.</div>
      <div style={{ width: '400px', padding: '20px', borderRadius: '0.5rem', backgroundColor: '#242729', fontSize: '1.2em', lineHieght: '1.2em', marginBottom: '1em' }}>
        Ever wanted to store something locally, but the solutions you found were too expensive? Momentum will match you with
        storage providers in your area at a reasonable price.
      </div>

      <ButtonGrid>
        {loggedIn ? Providers : SignUp}
      </ButtonGrid>
    </Content>
  );
};

Home.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Home;
