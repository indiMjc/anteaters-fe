import React from 'react'

import { useForm, validateLogin, submitUserForAuth } from '../util'

const initialFormState = {
	username: '',
	password: ''
}

const loginUrl = 'https://anteaters.herokuapp.com/auth/login'

const Login = props => {
	const { values: user, handleChange, handleSubmit, errors } = useForm(
		initialFormState,
		login,
		validateLogin
	)

	function login() {
		submitUserForAuth(loginUrl, user, props)
	}
	return (
		<div className='login-form-contain' style={{ display: `${props.state}` }}>
			<h2>Login</h2>
			<div className='auth-img-filter'>
				<form className='login-form' onSubmit={handleSubmit}>
					<label htmlFor='login-username'>Username</label>
					<input
						type='text'
						name='username'
						id='login-username'
						value={user.username}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.username}</p>

					<label htmlFor='login-password'>Password</label>
					<input
						type='password'
						name='password'
						id='login-password'
						value={user.password}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.password}</p>

					<button className='main-btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
