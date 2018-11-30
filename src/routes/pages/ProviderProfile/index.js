import { connect } from 'react-redux';
import ProviderProfile from './ProviderProfile';
import { withRouter } from 'react-router-dom';
import { fetchProviders } from 'redux/providers/actions';
import { addBooking } from 'redux/bookings/actions';

const mapStateToProps = state => ({
  providerFilters: state.providerFilters,
  providers: state.providers,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchProviders: () => {
    dispatch(fetchProviders());
  },
  addBooking: (username, providerId, startDate, endDate) => {
    dispatch(addBooking(username, providerId, startDate, endDate));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProviderProfile));

export default view;
