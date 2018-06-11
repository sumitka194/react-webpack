import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Login from '../Wrapper/Login';
import Signup from '../Wrapper/Signup';
import Home from '../Wrapper/Home';
import store from '../redux/store';

const browserHistory = createBrowserHistory();

const History = syncHistoryWithStore(
  browserHistory,
  store,
);

const Routes = () => (
  <Router history={History}>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Signup} />
      <Route path="/home" exact component={Home} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);

export default Routes;
