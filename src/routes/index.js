import React from 'react';
import { Provider } from 'react-redux';
// import './index.css';
import store from '../redux';
import { BrowserRouter, Route } from 'react-router-dom';
import TopNav from 'components/TopNav';
import Home from 'routes/pages/Home';

import SignUp from 'routes/pages/SignUp';
import SignUpPreferences from 'routes/pages/SignUp/Preferences';
import Finish from 'routes/pages/SignUp/Finish';

import Preferences from 'routes/pages/Preferences';
import SignIn from 'routes/pages/SignIn';
import ProviderList from 'routes/pages/ProviderList';
import ProviderProfile from 'routes/pages/ProviderProfile';
import { Switch } from 'react-router';
import Book from './pages/Book';
import Messenger from 'routes/pages/Messenger';
import Bookings from 'routes/pages/Bookings';

import { ProtectedRoute } from './ProtectedRoute';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="Page">
            <TopNav />
            <Switch>
              <Route exact path="/home" render={Home} />
              <Route
                exact
                path="/providers/:providerId"
                render={ProviderProfile}
              />
              <ProtectedRoute exact path="/providers" render={ProviderList} />
              <ProtectedRoute exact path="/preferences" render={Preferences} />

              <Route exact path="/signup/preferences" render={SignUpPreferences} />
              <Route exact path="/signup/finish" render={Finish} />
              <Route exact path="/signup" render={SignUp} />
              <Route exact path="/bookings" render={Bookings} />
              <Route exact path="/signin" render={SignIn} />
              <Route exact path="/book" render={Book} />
              <Route exact path="/messenger" render={Messenger} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
