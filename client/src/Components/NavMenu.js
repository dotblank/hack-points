import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavMenu extends Component {
  render() {
    return (
      <div>
      <p>Welcome to Hack Points<span id="display-name"></span>!</p>
      <Link className="menu" to="/">Browse</Link>
  		<p>|</p>
      <Link className="menu" to="/new-bounty">Add</Link>
      <p>|</p>
      <Link className="menu" to="/profile">Profile</Link>
      <p>|</p>
      <a className="menu" href='/logout'>Logout</a>

	</div>
    );
  }
}

export default NavMenu;
