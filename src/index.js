import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from './configs/store';
import Main from './containers/main';

configureStore();

ReactDOM.render(
  <Router>
    <Main/>
  </Router>,

  document.getElementById('root')
);
