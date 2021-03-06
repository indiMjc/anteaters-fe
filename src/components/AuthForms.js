import React, { useState, useEffect } from 'react'
import Login from './Login'
import Register from './Register'

const AuthForms = props => {
	const [visibility, setVisibility] = useState({
		login: 'none',
		register: 'flex'
	})

	const [highlight, setHighlight] = useState({
		login: '',
		register: 'highlight-register'
	})

	const showLogin = () => {
		setVisibility({
			login: 'flex',
			register: 'none'
		})

		setHighlight({
			login: 'highlight-login',
			register: ''
		})
	}

	const showRegister = () => {
		setVisibility({
			login: 'none',
			register: 'flex'
		})

		setHighlight({
			login: '',
			register: 'highlight-register'
		})
	}

	useEffect(() => {
		localStorage.getItem('uid') && showLogin()
	}, [])

	return (
		<section className='log-reg-forms-contain'>
			<section className='out-to-in auth-forms'>
				<div className='auth-nav'>
					<div className={`login-form-btn ${highlight.login}`}>
						<button className='main-btn' name='login' onClick={showLogin}>
							Login
						</button>
					</div>
					<div className={`register-form-btn ${highlight.register}`}>
						<button className='main-btn' name='register' onClick={showRegister}>
							Register
						</button>
					</div>
				</div>
				<div>
					<Login {...props} state={visibility.login} />
				</div>
				<div>
					<Register {...props} state={visibility.register} />
				</div>
			</section>
		</section>
	)
}

export default AuthForms
