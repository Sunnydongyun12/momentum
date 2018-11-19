import React from 'react';
import { Provider } from 'react-redux';
// import './index.css';
import store from '../redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SideNav from 'components/SideNav';
import TopNav from 'components/TopNav';
import Home from 'routes/pages/Home';
import Preferences from 'routes/pages/Preferences';
import SignUp from 'routes/pages/SignUp';
import SolutionList from 'routes/pages/SolutionList';
import ProviderProfile from 'routes/pages/ProviderProfile';
import { Switch } from 'react-router';
import Book from './pages/Book';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="Page">
            <TopNav />
            <SideNav />
            <Switch>
              <Route exact path="/home" render={Home} />
              <Route exact path="/providers/:providerId" render={ProviderProfile} />
              <Route exact path="/providers" render={SolutionList} />
              <Route exact path="/preferences" render={Preferences} />
              <Route exact path="/signup" render={SignUp} />
              <Route exact path="/Book" render={Book} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
