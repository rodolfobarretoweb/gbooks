import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../containers/search';
import FavoriteList from '../containers/favoriteList';

export default () =>
  <Switch>
    <Route path="/" exact component = { Search }/>
    <Route path="/favorites" component = { FavoriteList }/>
  </Switch>
