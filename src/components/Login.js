import React from 'react';

const Login = ({ state }) => {
	return (
		<div className='login-form-contain' style={{ display: `${state}` }}>
			<h2>Login</h2>
			<div className='auth-img-filter'>
				<form className='login-form'>
					<label>Username</label>
					<input type='text' name='username' />
					<p className='error-text'></p>

					<label>Password</label>
					<input type='password' name='password' />
					<p className='error-text'></p>

					<button className='main-btn'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
