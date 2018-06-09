import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Wrapper/Login';
import Signup from '../Wrapper/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Signup} />
      <Redirect to="/login" />
    </Switch>
  </Router>
);

export default Routes;
