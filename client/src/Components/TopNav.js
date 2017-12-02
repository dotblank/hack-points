import React, { Component } from 'react';
import Users from './Users.js';
import NavMenu from './NavMenu.js';
// import {Router, Route} from 'react-router';
// import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';




class TopNav extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavMenu />
          </header>
      </div>
    );
  }
}

export default TopNav;
