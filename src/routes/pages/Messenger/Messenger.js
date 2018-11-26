import React from 'react';
import SideMessenger from 'components/SideMessenger';
// import TagList from 'components/TagList';
import styled from 'styled-components';

const Content = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 130px 1fr;
  padding: 0 40px;
`;

export const Messenger = () => {
  return (
    <Content>
      <SideMessenger />
    </Content>
  );
};

export default Messenger;
