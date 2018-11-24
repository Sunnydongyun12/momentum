import React from 'react';
import PropTypes from 'prop-types';
import ProviderCard from 'components/ProviderCard';
import styled from 'styled-components';

const cards = [
  {
    name: 'First Last',
    image: 'http://picsum.photos/200',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Winter'],
  },
  {
    name: 'First Last',
    image: 'http://picsum.photos/201',
    imgName: 'test',
    description: '5 * 5 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['5x5', 'Summer'],
  },
  {
    name: 'hmm',
    image: 'http://picsum.photos/222',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Summer'],
  },
  {
    name: 'First Last',
    image: 'http://picsum.photos/223',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Summer'],
  },
  {
    name: 'First Last',
    image: 'http://picsum.photos/256',
    imgName: 'test',
    description: '5 * 5 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['10x10', 'Summer'],
  },
  {
    name: 'hmm',
    image: 'http://picsum.photos/504',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
    tags: ['5x5'],
  },
];

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-row-gap: 2em;
`;

const numOverlapping = (list1, list2) => {
  return list1.reduce((acc, el) => list2.includes(el) ? acc + 1 : acc, 0);
};

// add the tag filtering stuff here
const PCardList = ({ providerFilters }) => {
  return (
    <List>
      {cards
        .filter(({ tags }) => numOverlapping(tags, providerFilters) === providerFilters.length)
        .map(props => (
          <ProviderCard {...props} />
        ))}
    </List>
  );
};

PCardList.propTypes = {
  providerFilters: PropTypes.arrayOf(PropTypes.string),
};

export default PCardList;
