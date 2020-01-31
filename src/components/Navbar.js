import React from 'react';
import { NavLink } from 'react-router-dom';
import searchIcon from '../img/search-icon-light-blue.png';
import closeIcon from '../img/close-button-light-blue.png';

const Navbar = props => {
	const search = () => props.close();

	return (
		<div className={`navbar ${props.navClass}`}>
			<div className='bar'>
				<img src={closeIcon} className='close-icon' alt='close menu button' onClick={props.close} />
				<input type='search' name='search' placeholder='Search' className='search' />
				<div className='search-btn'>
					<img src={searchIcon} className='icon' alt='search button' onClick={search} />
				</div>
			</div>
			<NavLink exact={true} to={'/'} onClick={props.close}>
				Home
			</NavLink>
			<NavLink to={'/all_projects'} onClick={props.close}>
				All Projects
			</NavLink>
			<NavLink to={'/my_projects'} onClick={props.close}>
				My Projects
			</NavLink>
			<NavLink to={'/my_tickets'} onClick={props.close}>
				My Tickets
			</NavLink>
			<NavLink to={'/my_replies'} onClick={props.close}>
				My Replies
			</NavLink>
		</div>
	);
};

export default Navbar;
