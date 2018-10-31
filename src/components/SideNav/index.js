import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './view/SideNav';
import { hideSideNav } from 'redux/SideNavShown/actions';

const mapStateToProps = state => ({
  sideNavShown: state.sideNavShown,
});

const mapDispatchToProps = dispatch => ({
  hideSideNav: () => {
    dispatch(hideSideNav());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNav));

export default view;