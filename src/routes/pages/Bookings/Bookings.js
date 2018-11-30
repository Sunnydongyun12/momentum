import React from 'react';
import PCardList from 'components/PCardList';
import TagList from 'components/TagList';
import styled from 'styled-components';
import { eggshell } from 'lib/stylesConstants';

const ListView = styled.div`
  background: ${eggshell};
  margin-bottom: 200px;
`;

export const Bookings = () => {
  return (
    <ListView>
      <h1 style={{ marginLeft: '20px' }}>Bookings</h1>
      <PCardList booking={true}/>
    </ListView>
  );
};

export default Bookings;
