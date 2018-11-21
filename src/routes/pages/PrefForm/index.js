import { connect } from 'react-redux';
import PrefForm from './PrefForm';
import { withRouter } from 'react-router-dom';
import { updatePreferences } from 'redux/user/actions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updatePreferences: (preferences) => {
    dispatch(updatePreferences(preferences));
  },
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrefForm));

export default view;
