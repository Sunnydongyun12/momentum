import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRouteView = ({ render: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signup',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
});

export const ProtectedRoute = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProtectedRouteView));
