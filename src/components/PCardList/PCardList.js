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
  providerList = [];

  componentDidMount() {
    this.props.fetchProviders();
  }

  render() {
    const { providerFilters, providers } = this.props;

    if (providers.isFetching) {
      return (<div>fetching</div>);
    }

    for (const key of Object.keys(providers.items)) {
      this.providerList.push({ provider_id: key, ...providers.items[key] });
    }
    
    return (
      <List>
        {this.providerList
          .filter(({ tags }) => numOverlapping(tags, providerFilters) === providerFilters.length)
          .map(props => (
            <ProviderCard {...props} />
          ))}
      </List>
    );
  }
}

PCardList.propTypes = {
  providerFilters: PropTypes.arrayOf(PropTypes.string),
  providers: PropTypes.object,
  fetchProviders: PropTypes.func,
};

export default PCardList;
