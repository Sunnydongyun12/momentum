import React from 'react';
import { Provider } from 'react-redux';
// import './index.css';
import store from '../redux';
import { BrowserRouter } from 'react-router-dom';
import SideNav from 'components/SideNav';
import TopNav from 'components/TopNav';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="Page">
            <TopNav />
            <SideNav />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
