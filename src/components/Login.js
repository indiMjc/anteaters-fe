import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { useForm, validateLogin } from '../util'
import { decodeToken } from '../actions/token'

const initialFormState = {
	username: '',
	password: ''
}

const Login = props => {
	const { values: user, handleChange, handleSubmit, errors } = useForm(
		initialFormState,
		login,
		validateLogin
	)

	const dispatch = useDispatch()

	async function login() {
		try {
			const response = await axios.post('https://anteaters.herokuapp.com/auth/login', user)

			if (response.data.token) {
				localStorage.setItem('uid', response.data.token)

				dispatch(decodeToken(response.data.token))

				props.history.push('/')
			}

			return response
		} catch (err) {
			console.log(err)
		}
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
