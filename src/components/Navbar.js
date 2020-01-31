import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../img/search-icon-light-blue.png';

// search, home, all projects, my projects, my tickets, my replies

const Navbar = props => {
	return (
		<div className={`navbar ${props.navClass}`}>
			<div className='bar'>
				<input type='search' name='search' placeholder='Search' className='search' />
				<div className='search-btn'>
					<img src={icon} className='icon' alt='search button' />
				</div>
			</div>
			<NavLink exact={true} to={'/'}>
				Home
			</NavLink>
			<NavLink to={'/all_projects'}>All Projects</NavLink>
			<NavLink to={'/my_projects'}>My Projects</NavLink>
			<NavLink to={'/my_tickets'}>My Tickets</NavLink>
			<NavLink to={'/my_replies'}>My Replies</NavLink>
		</div>
	);
};

export default Navbar;
