import { connect } from 'react-redux';
import TopNav from './view/TopNav';
import { showSideNav } from 'redux/SideNavShown/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  sideNavShown: state.sideNavShown,
});

const mapDispatchToProps = dispatch => ({
  showSideNav: () => {
    dispatch(showSideNav());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNav));

export default view;
