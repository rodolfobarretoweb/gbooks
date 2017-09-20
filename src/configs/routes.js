import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../containers/list';

export default () =>
  <Switch>
    <Route path="/" exact component = { List }/>
  </Switch>
