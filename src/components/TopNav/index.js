import { connect } from 'react-redux';
import TopNav from './view/TopNav';
import { showSideNav } from 'redux/SideNavShown/actions';

const mapStateToProps = state => ({
  sideNavShown: state.sideNavShown,
});

const mapDispatchToProps = dispatch => ({
  showSideNav: () => {
    dispatch(showSideNav());
  },
});

const view = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNav);

export default view;
