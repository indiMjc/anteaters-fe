import React from 'react';

const Login = ({ state }) => {
	return (
		<div className='login-form-contain' style={{ display: `${state}` }}>
			<h2>Login</h2>
			<form className='login-form'>
				<label>Username</label>
				<input type='text' name='username' placeholder='Enter username' />
				<label>Password</label>
				<input type='password' name='password' placeholder='Enter password' />
				<button className='main-btn'>Submit</button>
			</form>
		</div>
	);
};

export default Login;
