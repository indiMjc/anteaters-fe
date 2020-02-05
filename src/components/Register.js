import React from 'react';

const Register = () => {
	return (
		<div className='register-form'>
			<h2>Register</h2>
			<form>
				<label>Email</label>
				<input type='text' name='email' placeholder='Enter email' />
				<label>Username</label>
				<input type='text' name='username' placeholder='Enter username' />
				<label>Password</label>
				<input type='password' name='password' placeholder='Enter password' />
				<select className='user-select' name='role' defaultValue=''>
					<option value='' disabled hidden>
						Select role
					</option>
					<option value='user'>User</option>
					<option value='developer'>developer</option>
				</select>
			</form>
		</div>
	);
};

export default Register;
