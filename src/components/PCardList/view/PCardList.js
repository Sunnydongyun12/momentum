import React, { Component } from 'react';
import PCard from 'components/PCard';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class PCardList extends Component {
  state = {
    cards: [
      {
        title: 'Perfect storage for summer',
        image: 'http://picsum.photos/200',
        content: '10 * 10 ft storage place during summer 2018',
      },
      {
        title: 'Westwood...',
        image: 'http://picsum.photos/201',
        content: '5 * 5 ft storage place during summer 2018',
      },
      {
        title: 'hmm',
        image: 'http://picsum.photos/222',
        content: '10 * 10 ft storage place during summer 2018',
      },
    ],
    cards2: [
      {
        title: 'Perfect storage for summer',
        image: 'http://picsum.photos/223',
        content: '10 * 10 ft storage place during summer 2018',
      },
      {
        title: 'Westwood...',
        image: 'http://picsum.photos/256',
        content: '5 * 5 ft storage place during summer 2018',
      },
      {
        title: 'hmm',
        image: 'http://picsum.photos/504',
        content: '10 * 10 ft storage place during summer 2018',
      },
    ],
  };

  render() {
    return (
      <div className={styles.root}>
        <Grid container spacing={24}>
          {this.state.cards.map(card => (
            <Grid item xs={4}>
              <PCard
                className="PCard"
                title={card.title}
                image={card.image}
                content={card.content}
              />
              <input type="text" placeholder="message"></input>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={24}>
          {this.state.cards2.map(card => (
            <Grid item xs={4}>
              <PCard
                className="PCard"
                title={card.title}
                image={card.image}
                content={card.content}
              />
              <input type="text" placeholder="message"></input>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default PCardList;
