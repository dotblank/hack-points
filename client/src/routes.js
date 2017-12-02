// src/routes.js
import React from 'react';
// import { Router, Route } from 'react-router';s
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Bounty from './Components/Bounty.js';
import Login from './Components/Login.js';
import Profile from './Components/Profile.js';
import TopNav from './Components/TopNav.js';
import App from './App';
// import About from './Components/About';
// import NotFound from './Components/NotFound';



const Routes = (props) => (
  <Router>
      <div>
        <TopNav />
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/new-bounty" component={Bounty}/>

      </div>
    </Router>
);

export default Routes;


// <ul>
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/about">About</Link></li>
//   <li><Link to="/logout">Logout</Link></li>
// </ul>
