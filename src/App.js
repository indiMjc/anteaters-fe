import React, { useState } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import { Navbar, Hamburger, AuthForms, Ticket } from './components'

const App = props => {
	const [menuClass, setMenuClass] = useState('closed')
	const [hamburgerVis, setHamburgerVis] = useState('visible')

	const navClick = () => {
		setMenuClass(menuClass === 'closed' ? 'opened' : 'closed')
	}

	const hamburgerClick = () => {
		setHamburgerVis(hamburgerVis === 'visible' ? 'not-visible' : 'visible')
	}

	const fieldClick = () => {
		menuClass === 'opened' && setMenuClass('closed')
	}

	return (
		<div className='App'>
			<Route path='/'>
				<Navbar {...props} navClass={menuClass} close={fieldClick} showHamburger={hamburgerClick} />
			</Route>

			<Route path='/app'>
				<Hamburger showNav={navClick} hideHamburger={hamburgerClick} hamburgerClass={hamburgerVis} />
				{/* <h1>test</h1> */}
			</Route>

			<Link to='/auth' className='auth-link'>
				Sign in/Sign up
			</Link>

			<Route>
				<AuthForms {...props} />
			</Route>
			<div onClick={fieldClick} className='body' />
		</div>
	)
}

export default withRouter(App)
