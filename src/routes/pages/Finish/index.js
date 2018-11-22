import { connect } from 'react-redux';
import Finish from './Finish';
import { withRouter } from 'react-router-dom';
import { logIn } from 'redux/loggedIn/actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logIn: () => {
    dispatch(logIn());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Finish));

export default view;
