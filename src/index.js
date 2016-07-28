import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Home from './home/Home'
import Projects from './projects/Projects'
import Blog from './blog/Blog'
import About from './about/About'
import Post from './blog/Post'
import './index.css';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to="/home" />
      <Route path='/home' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
      <Route path='/blog/:id' component={Post} />
      <Route path='/blog' component={Blog}/>
    </Route>
  </Router>,

  document.getElementById('root')
);
