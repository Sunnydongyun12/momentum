import { connect } from 'react-redux';
import PCardList from './PCardList';
import { withRouter } from 'react-router-dom';
import { fetchProviders } from 'redux/providers/actions';

const mapStateToProps = state => ({
  providerFilters: state.providerFilters,
  providers: state.providers,
});

const mapDispatchToProps = dispatch => ({
  fetchProviders: () => {
    dispatch(fetchProviders());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PCardList));

export default view;
