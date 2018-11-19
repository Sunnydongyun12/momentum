import React from 'react';
import ProviderCard from 'components/ProviderCard';
import styled from 'styled-components';

const cards = [
  {
    name: 'First Last',
    image: 'http://picsum.photos/200',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
  },
  {
    name: 'First Last',
    image: 'http://picsum.photos/201',
    imgName: 'test',
    description: '5 * 5 ft storage place during summer 2018',
    zipCode: '55555',
  },
  {
    name: 'hmm',
    image: 'http://picsum.photos/222',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
  },
  {
    name: 'First Last',
    image: 'http://picsum.photos/223',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
  },
  {
    name: 'First Last',
    image: 'http://picsum.photos/256',
    imgName: 'test',
    description: '5 * 5 ft storage place during summer 2018',
    zipCode: '55555',
  },
  {
    name: 'hmm',
    image: 'http://picsum.photos/504',
    imgName: 'test',
    description: '10 * 10 ft storage place during summer 2018',
    zipCode: '55555',
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

const PCardList = () => {
  return (
    <List>
      {cards.map(props => (
        <ProviderCard {...props} />
      ))}
    </List>
  );
};

export default PCardList;
