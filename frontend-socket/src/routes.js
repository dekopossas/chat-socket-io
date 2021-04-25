import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChatList from './pages/ChatList';
import Chat from './pages/Chat';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/chat" exact component={ChatList}/>
      <Route path="/chat/:username" exact component={Chat}/>
    </Switch>
  )
}

export default Routes
