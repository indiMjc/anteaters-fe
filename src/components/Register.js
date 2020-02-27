import React from 'react'
import axios from 'axios'
import { useForm, validateRegistration } from '../util'

const initialFormState = {
	email: '',
	username: '',
	password: '',
	type: ''
}

const Register = ({ state, history }) => {
	const { values: user, handleChange, handleSubmit, errors } = useForm(
		initialFormState,
		register,
		validateRegistration
	)
	console.log(
		'errors %c --> ',
		'font-size: 20px; color: black; font-weight: bold; background: linear-gradient(red, black); border: 2px solid black; border-radius: 6px;',
		errors
	)

	async function register() {
		try {
			await axios.post('https://anteaters.herokuapp.com/auth/login', user)

			history.push('/')
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div className='register-form-contain' style={{ display: `${state}` }}>
			<h2>Register</h2>
			<div className='auth-img-filter'>
				<form className='register-form' onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' value={user.email} onChange={handleChange} />
					<p className='error-text'>{errors.email}</p>

					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						id='username'
						value={user.username}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.username}</p>

					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						value={user.password}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.password}</p>

					<label htmlFor='role'>I am a...</label>
					<select
						className='user-select'
						name='role'
						id='role'
						defaultValue=''
						value={user.role}
						onChange={handleChange}
					>
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
