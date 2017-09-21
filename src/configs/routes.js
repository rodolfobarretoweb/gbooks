import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../containers/search';
import FavoriteList from '../containers/favoriteList';
import Details from '../containers/details';

export default () =>
  <Switch>
    <Route path="/" exact component = { Search }/>
    <Route path="/favorites" component = { FavoriteList }/>
    <Route path="/details/:id" component = { Details }/>
  </Switch>
