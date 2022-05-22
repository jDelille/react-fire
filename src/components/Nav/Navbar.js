import { useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { Link } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import './Navbar.scss';
const Navbar = () => {
	// register | login state
	const [registerEmail, setRegisterEmail] = useState();
	const [registerPassword, setRegisterPassword] = useState();
	const [loginEmail, setLoginEmail] = useState();
	const [loginPassword, setLoginPassword] = useState();
	const [registerUser, setRegisterUser] = useState(false);
	const [loginUser, setLoginUser] = useState(false);

	// current user
	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	// register function
	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (err) {
			console.log(err.message);
		}
	};

	// login function
	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
		} catch (err) {
			console.log(err.message);
		}
	};

	// logout function
	const logout = async () => {
		await signOut(auth);
	};

	return (
		<>
			<nav>
				<div className='brand'>
					<Link to='/'> Project Tracker </Link>
				</div>
				<div className='nav-links'>
					<Link to='/dashboard'>Dashboard</Link>
				</div>
				<div className='user-links'>
					{!user && (
						<div
							className='login'
							onClick={() => {
								setLoginUser(true);
								setRegisterUser(false);
							}}>
							Login
						</div>
					)}

					{!user && (
						<div
							className='register'
							onClick={() => {
								setRegisterUser(true);
								setLoginUser(false);
							}}>
							Sign up
						</div>
					)}
					{user?.email}
					{user && <div onClick={logout}>Logout</div>}
				</div>
			</nav>
			{registerUser && (
				<RegisterModal
					registerEmail={registerEmail}
					registerPassword={registerPassword}
					setRegisterEmail={setRegisterEmail}
					setRegisterPassword={setRegisterPassword}
					register={register}
					setRegisterUser={setRegisterUser}
					setLoginUser={setLoginUser}
				/>
			)}
			{loginUser && (
				<LoginModal
					loginEmail={loginEmail}
					loginPassword={loginPassword}
					setLoginEmail={setLoginEmail}
					setLoginPassword={setLoginPassword}
					login={login}
					setRegisterUser={setRegisterUser}
					setLoginUser={setLoginUser}
				/>
			)}
		</>
	);
};

export default Navbar;
