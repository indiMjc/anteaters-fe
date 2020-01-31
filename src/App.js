import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';

const App = props => {
	const [menuClass, setMenuClass] = useState('closed');

	const navClick = () => {
		const css = menuClass === 'closed' ? 'opened' : 'closed';
		setMenuClass(css);
	};

	return (
		<div className='App'>
			<Hamburger onClick={navClick} />
			<div className='nav'>
				<Navbar {...props} navClass={menuClass} />
			</div>
		</div>
	);
};

export default withRouter(App);
