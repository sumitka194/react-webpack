import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Wrapper/Login';
import Signup from '../Wrapper/Signup';
import Home from '../Wrapper/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Signup} />
      <Route path="/home" exact component={Home} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);

export default Routes;
