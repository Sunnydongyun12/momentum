import { connect } from 'react-redux';
import Tag from './Tag';
import { withRouter } from 'react-router-dom';
import { addFilter, removeFilter } from 'redux/providerFilters/actions';

const mapStateToProps = state => ({
  providerFilters: state.providerFilters,
});

const mapDispatchToProps = dispatch => ({
  addFilter: (filter) => {
    dispatch(addFilter(filter));
  },
  removeFilter: (filter) => {
    dispatch(removeFilter(filter));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tag));

export default view;
