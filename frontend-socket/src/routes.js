import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/chat" exact component={Chat}/>
    </Switch>
  )
}

export default Routes
