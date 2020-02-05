import React from 'react';

const Login = () => {
	return (
		<div className='login-form'>
			<h2>Login</h2>
			<form>
				<label>Username</label>
				<input type='text' name='username' placeholder='Enter username' />
				<label>Password</label>
				<input type='password' name='password' placeholder='Enter password' />
			</form>
		</div>
	);
};

export default Login;
