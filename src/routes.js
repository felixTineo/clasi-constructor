import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'pages/login';
import Home from 'pages/home';
import Floop from 'pages/floop'

export default ()=> {

  return(
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/floop" component={Floop} />
      <Route path="/" component={Floop} />
    </Switch>
  )
}