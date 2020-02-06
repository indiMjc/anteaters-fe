import React, { useState } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';
import AuthForms from './components/AuthForms';

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
			<Link to='/auth' className='auth-link'>
				Sign in/Sign up
			</Link>
			<Route exact path='/auth' component={AuthForms} />
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
