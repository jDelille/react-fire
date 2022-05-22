import { useEffect, useState } from 'react';
import Navbar from '../components/Nav/Navbar';
import Hero from '../sections/Hero/Hero';
import '../styles/App.scss';

function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
		</div>
	);
}

export default Home;
