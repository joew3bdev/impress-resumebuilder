/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

// import HomePage from "./NotFoundPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Home from "./home";
import commonContainer from "../containers";
import Create from "./create";
import Edit from "./edit";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={commonContainer(Home)} />
          <Route exact path="/create" component={commonContainer(Create)} />
          <Route exact path="/edit" component={commonContainer(Edit)} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
