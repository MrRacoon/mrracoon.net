import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Home from './home/Home'
import Blog from './blog/Blog'
import About from './about/About'
import './index.css';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

ReactDOM.render(
  
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to="/home" />
      <Route path='/home' component={Home}></Route>
      <Route path='/blog' component={Blog}></Route>
      <Route path='/about' component={About}></Route>
    </Route>
  </Router>,

  document.getElementById('root')
);
