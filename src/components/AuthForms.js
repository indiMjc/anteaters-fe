import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthForms = () => {
	//
	// check for token here and if true, set login to true and register to false
	//
	const [visibility, setVisibility] = useState({
		login: 'none',
		register: 'flex'
	});
	console.log(' : AuthForms -> visibility', visibility.register);

	const showLogin = () => {
		setVisibility({
			login: 'flex',
			register: 'none'
		});
	};

	const showRegister = () => {
		setVisibility({
			login: 'none',
			register: 'flex'
		});
	};

	return (
		<div className='auth-forms'>
			<div className='auth-nav'>
				<button className='main-btn' onClick={showLogin}>
					Login
				</button>
				<button className='main-btn' onClick={showRegister}>
					Register
				</button>
			</div>
			<Login state={visibility.login} />
			<Register state={visibility.register} />
		</div>
	);
};

export default AuthForms;
