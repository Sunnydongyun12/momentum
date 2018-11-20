import { connect } from 'react-redux';
import TopNav from './TopNav';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const view = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNav));

export default view;
