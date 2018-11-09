import React from "react";
import { Provider } from "react-redux";
// import './index.css';
import store from "../redux";
import { BrowserRouter, Route } from "react-router-dom";
import SideNav from "components/SideNav";
import TopNav from "components/TopNav";
import Home from "routes/pages/Home";
import SolutionList from "routes/pages/SolutionList";
import { Switch } from "react-router";

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
              <Route exact path="/solutionlist" render={SolutionList} />
              {/* <Route component={NoMatch} /> */}
            </Switch>

            {/* <Route exact path="/home" render={Home} /> */}
            {/* <Route exact path="/solutionlist" render={SolutionList} /> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
