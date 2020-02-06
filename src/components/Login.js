import React from 'react';

const Login = ({ state }) => {
	return (
		<div className='login-form-contain' style={{ display: `${state}` }}>
			<h2>Login</h2>
			<form className='login-form'>
				<label>Username</label>
				<input type='text' name='username' />
				<p className='error-text'>error txt here</p>

				<label>Password</label>
				<input type='password' name='password' />
				<p className='error-text'>error txt here</p>

				<button className='main-btn'>Submit</button>
			</form>
		</div>
	);
};

export default Login;
