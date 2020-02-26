import React from 'react'
import { NavLink } from 'react-router-dom'
import searchIcon from '../img/search-icon-light-blue.png'
import closeIcon from '../img/close-button-light-blue.png'

const Navbar = props => {
	const setVisibility = () => {
		props.close()
		props.showHamburger()
	}

	const search = () => setVisibility()

	return (
		<div className='navbar' id={props.navClass}>
			<div className='bar'>
				<img src={closeIcon} className='close-icon' alt='close menu button' onClick={setVisibility} />
				<input type='search' name='search' placeholder='Search' className='search' />
				<div className='search-btn'>
					<img src={searchIcon} className='icon' alt='search button' onClick={search} />
				</div>
			</div>
			<NavLink exact={true} to={'/app'} onClick={setVisibility}>
				Home
			</NavLink>
			<NavLink to={'/app/all_projects'} onClick={setVisibility}>
				All Projects
			</NavLink>
			<NavLink to={'/app/my_projects'} onClick={setVisibility}>
				My Projects
			</NavLink>
			<NavLink to={'/app/my_tickets'} onClick={setVisibility}>
				My Tickets
			</NavLink>
			<NavLink to={'/app/my_replies'} onClick={setVisibility}>
				My Replies
			</NavLink>
			<NavLink to={'/app/menu'} onClick={setVisibility}>
				Menu
			</NavLink>
		</div>
	)
}

export default Navbar
