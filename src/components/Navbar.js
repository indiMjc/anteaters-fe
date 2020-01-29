import React from 'react';
import { NavLink } from 'react-router-dom';

// search, home, all projects, my projects, my tickets, my replies

const Navbar = props => {
	return (
		<div className='navbar'>
			<input type='search' />
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
