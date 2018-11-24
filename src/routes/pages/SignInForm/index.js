import { connect } from 'react-redux';
import SignInForm from './SignInForm';
import { withRouter } from 'react-router-dom';
import { updateUser } from 'redux/user/actions';
import { logIn } from 'redux/loggedIn/actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
  logIn: () => {
    dispatch(logIn());
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm));

export default view;
