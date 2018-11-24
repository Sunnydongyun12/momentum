import { connect } from 'react-redux';
import PCardList from './PCardList';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  providerFilters: state.providerFilters,
});

const mapDispatchToProps = dispatch => ({
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PCardList));

export default view;
