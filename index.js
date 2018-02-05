import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import User from './app/screens/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={User} />
  </Router>,
  document.getElementById('container')
);
