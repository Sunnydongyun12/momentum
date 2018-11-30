import { connect } from 'react-redux';
import PCardList from './PCardList';
import { withRouter } from 'react-router-dom';
import { fetchProviders } from 'redux/providers/actions';
import { fetchBookings } from 'redux/bookings/actions';

const mapStateToProps = state => ({
  providerFilters: state.providerFilters,
  providers: state.providers,
  bookings: state.bookings,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchProviders: () => {
    dispatch(fetchProviders());
  },
  fetchBookings: () => {
    dispatch(fetchBookings());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PCardList));

export default view;
