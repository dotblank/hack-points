import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div>
      		<div className="container">
      			<div className="login">
      				<img src="/public/img/clementine_150.png" />
      				<br />

      				<a href="/auth/github">
      					<div className="btn" id="login-btn">
      						<img src="/public/img/github_32px.png" alt="github logo" />
      						<p>LOGIN WITH GITHUB</p>
      					</div>
      				</a>
      			</div>
      		</div>
	</div>
    );
  }
}

export default Login;
