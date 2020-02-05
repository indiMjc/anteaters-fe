import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';

const App = props => {
	const [menuClass, setMenuClass] = useState('closed');
	const [hamburgerVis, setHamburgerVis] = useState('visible');

	const navClick = () => {
		setMenuClass(menuClass === 'closed' ? 'opened' : 'closed');
	};

	const hamburgerClick = () => {
		setHamburgerVis(hamburgerVis === 'visible' ? 'not-visible' : 'visible');
	};

	const fieldClick = () => {
		menuClass === 'opened' && setMenuClass('closed');
	};

	return (
		<div className='App'>
			<Route
				path='/app'
				render={() => (
					<Hamburger showNav={navClick} hideHamburger={hamburgerClick} hamburgerClass={hamburgerVis} />
				)}
			/>
			<Route
				path='/app'
				render={props => (
					<Navbar {...props} navClass={menuClass} close={fieldClick} showHamburger={hamburgerClick} />
				)}
			/>
			<div onClick={fieldClick} className='body' />
		</div>
	);
};

export default withRouter(App);
