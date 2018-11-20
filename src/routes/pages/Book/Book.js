import React from 'react';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';

const Content = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Book = () => {
  return (
    <Content>
      <h1>Book Provider 2</h1>
      <p style={{ fontSize: '1.3em' }}>Are you sure you want to book this provider?</p>
      <CTABtn theme="green">Confirm</CTABtn>
    </Content>
  );
};

export default Book;
