import React, { Component } from 'react';
import ProviderCard from 'components/ProviderCard';
import '../styles/PCardList.css';

class PCardList extends Component {
  render() {
    const cards = [
      {
        name: 'Perfect storage for summer',
        image: 'http://picsum.photos/200',
        imgName: 'test',
        description: '10 * 10 ft storage place during summer 2018',
        zipCode: '55555',
      },
      {
        name: 'Westwood...',
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
        name: 'Perfect storage for summer',
        image: 'http://picsum.photos/223',
        imgName: 'test',
        description: '10 * 10 ft storage place during summer 2018',
        zipCode: '55555',
      },
      {
        name: 'Westwood...',
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
    
    return (
      <div className="PCardList">
        {cards.map(({ ...rest }) => (
          <ProviderCard {...rest} />
        ))}
      </div>
    );
  }
}

export default PCardList;
