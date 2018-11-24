import { connect } from 'react-redux';
import TopNav from './TopNav';
import { withRouter } from 'react-router-dom';
import { logOut } from 'redux/loggedIn/actions';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOut());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNav));

export default view;
