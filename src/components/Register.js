import React from 'react';

const Register = ({ state }) => {
	return (
		<div className='register-form-contain' style={{ display: `${state}` }}>
			<h2>Register</h2>
			<div className='auth-img-filter'>
				<form className='register-form'>
					<label>Email</label>
					<input type='text' name='email' />
					<p className='error-text'></p>

					<label>Username</label>
					<input type='text' name='username' />
					<p className='error-text'></p>

					<label>Password</label>
					<input type='password' name='password' />
					<p className='error-text'></p>

					<label>I am a...</label>
					<select className='user-select' name='role' defaultValue=''>
						<option value='' disabled hidden>
							Select role
						</option>
						<option value='user'>User</option>
						<option value='developer'>Developer</option>
					</select>
					<p className='error-text'></p>

					<button className='main-btn'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
