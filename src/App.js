import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';

const App = props => {
	const [menuClass, setMenuClass] = useState('closed');

	const navClick = () => {
		setMenuClass(menuClass === 'closed' ? 'opened' : 'closed');
	};

	const fieldClick = () => {
		menuClass === 'opened' && setMenuClass('closed');
	};

	return (
		<div className='App'>
			<Hamburger onClick={navClick} />
			<div className='nav'>
				<Navbar {...props} navClass={menuClass} close={fieldClick} />
			</div>
			<div onClick={fieldClick} className='body' />
		</div>
	);
};

export default withRouter(App);
