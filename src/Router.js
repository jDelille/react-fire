import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function RouterDOM() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default RouterDOM;
