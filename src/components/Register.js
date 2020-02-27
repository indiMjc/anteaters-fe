import React from 'react'

import { useForm, validateRegistration, submitUserForAuth } from '../util'

const initialFormState = {
	email: '',
	username: '',
	password: '',
	role: ''
}

const registerUrl = 'https://anteaters.herokuapp.com/auth/register'

const Register = props => {
	const { values: user, handleChange, handleSubmit, errors } = useForm(
		initialFormState,
		register,
		validateRegistration
	)

	function register() {
		submitUserForAuth(registerUrl, user, props)
	}
	return (
		<div className='register-form-contain' style={{ display: `${props.state}` }}>
			<h2>Register</h2>
			<div className='auth-img-filter'>
				<form className='register-form' onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' value={user.email} onChange={handleChange} />
					<p className='error-text'>{errors.email}</p>

					<label htmlFor='register-username'>Username</label>
					<input
						type='text'
						name='username'
						id='register-username'
						value={user.username}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.username}</p>

					<label htmlFor='register-password'>Password</label>
					<input
						type='password'
						name='password'
						id='register-password'
						value={user.password}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.password}</p>

					<label htmlFor='role'>I am a...</label>
					<select className='user-select' name='role' id='role' defaultValue='' onChange={handleChange}>
						<option value='' disabled hidden>
							Select role
						</option>
						<option value='user'>User</option>
						<option value='developer'>Developer</option>
					</select>
					<p className='error-text'>{errors.role}</p>

					<button className='main-btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
