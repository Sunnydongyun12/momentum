import React, { Component } from 'react';
import TopNav from './components/TopNav';
import { Provider } from 'react-redux';
import store from './redux'; // need ../redux or else it'll think it's from the redux npm package...

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TopNav></TopNav>
        </div>
      </Provider>
    );
  }
}

export default App;
