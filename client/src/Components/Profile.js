import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const username = 'dfirebaugh'
class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {userInfo:{hackPoints:{},slack:{user:{}}}}
  }
  componentDidMount(){
    this.getUserFromApi()
    // console.log(userInfo)
  }
  getUserFromApi(){
    let that = this;
    return fetch(`http://localhost:8080/api/`,{credentials:'same-origin'})
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
    // console.log(this.state.userInfo)
    // console.log(this.state.points.points)
    //
    console.log(this.state.userInfo)


    return (
      <div>
      <div className="container">
        <div className="github-profile">
          <img src={this.state.userInfo.slack.user.image_48} alt="user logo" />
          <p><span>Display Name: </span><span id="display-name" className="profile-value">{this.state.userInfo.slack.displayName}</span></p>
          <p><span>Email: </span><span id="email" className="email">{this.state.userInfo.slack.user.email}</span></p>
          <p><span>Points: </span><span id="user-points" className="user-points">{this.state.userInfo.hackPoints.points}</span></p>
          <a className="menu" href="/">Home</a>
          <p id="menu-divide">|</p>
          <a className="menu" href="/logout">Logout</a>
        </div>
      </div>

      <script type="text/javascript" src="common/ajax-functions.js"></script>
      <script type="text/javascript" src="controllers/userController.client.js"></script>

      	</div>
    );
  }
}

export default Profile;
