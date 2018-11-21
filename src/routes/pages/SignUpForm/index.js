import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { withRouter } from 'react-router-dom';
import { updateUser } from 'redux/user/actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => {
    dispatch(updateUser(user));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm));

export default view;
