import React from 'react';
import { Provider } from 'react-redux';
// import './index.css';
import store from '../redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SideNav from 'components/SideNav';
import TopNav from 'components/TopNav';
import Home from 'routes/pages/Home';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="Page">
            <TopNav />
            <SideNav />
            <Route exact path="/home" render={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
