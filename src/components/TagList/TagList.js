import React from 'react';
import PropTypes from 'prop-types';
import Tag from 'components/Tag';
import styled from 'styled-components';

const Heading = styled.h3`
  letter-spacing: 3px;
  font-weight: 400;
  color: #121212;
`;

export const TagList = ({ filters, ...rest }) => {
  return (
    <div>
      <Heading>FILTERS</Heading>
      {filters.map(el =>  <Tag>{el}</Tag> )}
    </div>
  );
};

TagList.propTypes = {
  children: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string),
};

export default TagList;
