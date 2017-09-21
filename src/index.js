import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './configs/store';
import Main from './containers/main';

const store = configureStore();

ReactDOM.render(
  <Provider store = { store }>
    <Router><Main/></Router>
  </Provider>,

  document.getElementById('root')
);
