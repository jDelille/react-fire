import React, { useEffect, useState } from 'react';
// import { auth, firestore, functions } from './firebase';
import { auth, firestore, functions } from '../../firebase/firebase-config';
import './CurrentProjects.scss';
import { httpsCallable } from 'firebase/functions';
import { collection, onSnapshot, serverTimestamp } from 'firebase/firestore';

const addProject = httpsCallable(functions, 'addProject');

const CurrentProjects = () => {
	// current user data
	const user = auth.currentUser;
	// firebase path
	const query = collection(firestore, `users/${auth?.uid}/projects`);

	const [projectArr, setProjectArr] = useState([
		'Fretchord',
		'Project Tracker',
		'NBA Pickem',
	]);
	const [project, setProject] = useState('');

	useEffect(() => {
		onSnapshot(query, (snapshot) => {
			setProjectArr(
				snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
			);
		});
	}, []);

	// add project to the projects array on submit
	const onSubmitProject = (e) => {
		e.preventDefault();
		setProject('');
		addProject({
			project: 'project',
			complete: false,
			createdAt: serverTimestamp(),
		});
	};

	return (
		<div className='current-projects-container'>
			<div className='header'>
				<p>Current Projects</p>
				<div className='btns-wrapper'>
					<button>Add Project</button>
					<button>Remove Project</button>
				</div>
			</div>
			<div className='show-projects'>
				{projectArr.map((project, index) => {
					return <p> {project}</p>;
				})}
			</div>
			<div className='add-project'>
				<form onSubmit={onSubmitProject}>
					<input
						required
						type='text'
						value={project}
						onChange={(e) => setProject(e.target.value)}
						placeholder='Add project'
					/>
					<button type='submit'>Add</button>b
				</form>
			</div>
		</div>
	);
};

export default CurrentProjects;
