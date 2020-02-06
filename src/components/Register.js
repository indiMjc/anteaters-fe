import React from 'react';

const Register = ({ state }) => {
	return (
		<div className='register-form-contain' style={{ display: `${state}` }}>
			<h2>Register</h2>
			<form className='register-form'>
				<label>Email</label>
				<input type='text' name='email' />
				<label>Username</label>
				<input type='text' name='username' />
				<label>Password</label>
				<input type='password' name='password' />
				<label>I am a...</label>
				<select className='user-select' name='role' defaultValue=''>
					<option value='' disabled hidden>
						Select role
					</option>
					<option value='user'>User</option>
					<option value='developer'>Developer</option>
				</select>
				<button className='main-btn'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
