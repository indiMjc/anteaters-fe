import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';

const App = props => {
	const [menuClass, setMenuClass] = useState('open');

	const navClick = () => {
		const css = menuClass === 'closed' ? 'opened' : 'closed';
		setMenuClass(css);
	};

	return (
		<div className='App'>
			<div className='nav'>
				<Navbar {...props} navClass={menuClass} />
				<Hamburger onClick={navClick} />
			</div>
		</div>
	);
};

export default withRouter(App);
