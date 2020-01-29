import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = props => {
	return (
		<div className='App'>
			<Navbar {...props} />
		</div>
	);
};

export default withRouter(App);
