import React from 'react';
import PropTypes from 'prop-types';
import ProviderCard from 'components/ProviderCard';
import styled from 'styled-components';

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
class PCardList extends React.Component {

  componentDidMount() {
    this.props.fetchProviders();
    this.props.fetchBookings();
  }

  render() {
    const providerList = [];
    const { providerFilters, providers, booking, bookings, user } = this.props;

    if (providers.isFetching || bookings.isFetching) {
      return (<div>fetching</div>);
    }

    for (const key of Object.keys(providers.items)) {
      if (booking) {
        for (let i = 0; i < bookings.items.length; i++) {
          if (bookings.items[i].providerId == key && bookings.items[i].username == user.username) {
            providerList.push({ providerId: key, ...providers.items[key], startDate: bookings.items[i].startDate, endDate: bookings.items[i].endDate  });
            break;
          }
        }
      } else {
        providerList.push({ providerId: key, ...providers.items[key] });
      }
    }
    
    return (
      <List>
        {providerList
          .filter(({ tags }) => numOverlapping(tags, providerFilters) === providerFilters.length)
          .map(props => (
            <ProviderCard {...props} key={props.providerId} />
          ))}
      </List>
    );
  }
}

PCardList.propTypes = {
  providerFilters: PropTypes.arrayOf(PropTypes.string),
  providers: PropTypes.object,
  fetchProviders: PropTypes.func,
  booking: PropTypes.bool,
};

export default PCardList;
