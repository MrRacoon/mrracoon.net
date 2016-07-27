import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header currentPath={this.props.location.pathname}/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
