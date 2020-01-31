import React from 'react';

const Hamburger = props => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='80'
			fill='none'
			viewBox='0 0 37 23'
			className='hamburger'
			onClick={props.onClick}
		>
			<path stroke='#fff' strokeWidth='3' d='M0 1.5L37 1.5'></path>
			<path stroke='#fff' strokeWidth='3' d='M0 11.5L29 11.5'></path>
			<path stroke='#fff' strokeWidth='3' d='M0 21.5L15 21.5'></path>
		</svg>
	);
};

export default Hamburger;
