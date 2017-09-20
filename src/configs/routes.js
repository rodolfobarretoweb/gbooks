import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../containers/search';

export default () =>
  <Switch>
    <Route path="/" exact component = { Search }/>
  </Switch>
