import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {

	render() {
		return (
			<div className="login-page">
				<h2> Login Form </h2>
				<LoginForm/>
			</div>
		);
	}
}

export default LoginPage;
