import React from 'react';
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

const Direction = styled.p`
  font-size: 1.3em;
  font-weight: 300;
`;

export const Home = () => {
  
  return (
    <Content>
      <div style={{ margin: '0', paddingTop: '2em', fontWeight: '600', fontSize: '4em' }}>Momentum</div>
      <div style={{ color: 'white', fontSize: '1.7em', marginBottom: '2em' }}>Find storage providers near you.</div>
      <div style={{ width: '400px', padding: '20px', borderRadius: '0.5rem', backgroundColor: '#242729', fontSize: '1.2em', lineHieght: '1.2em', marginBottom: '1em' }}>
        Ever wanted to store something locally, but all those solutions were too expensive? Momentum will match you with
        storage providers in your area and give you a cheap and convenient storage solution.
      </div>

      <ButtonGrid>
        <Link to="/signup" >
          <CTABtn style={{ width: '430px' }} theme="pink">Sign Up</CTABtn>
        </Link>
      </ButtonGrid>
    </Content>
  );
};

export default Home;
