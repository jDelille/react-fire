import React from 'react';
import CurrentProjects from '../components/CurrentProjects/CurrentProjects';
import Navbar from '../components/Nav/Navbar';
import './Dashboard.scss';
const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className='dashboard'>
				<div className='sub-nav'>
					<p>Projects</p>
				</div>
				<CurrentProjects />
			</div>
		</>
	);
};

export default Dashboard;
