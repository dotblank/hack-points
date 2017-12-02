import React, { Component } from 'react';
import Users from './Components/Users.js';
// import Logout from './Components/NavMenu.js';
// import {Router, Route} from 'react-router';
// import {Link} from 'react-router-dom';
// import Bounty from './Components/Bounty.js';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  getUserFromApi(){
    let that = this;
    return fetch(`http://localhost:8080/api/user/`,{credentials:'same-origin'})
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson)
      that.setState({userInfo:responseJson})
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });

  }
  render() {
    return (
      <div className="App">
      

      </div>
    );
  }
}

export default App;
