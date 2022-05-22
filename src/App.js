import { useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from './firebase/firebase-config';
import Navbar from './components/Nav/Navbar';
import RegisterModal from './components/Modal/RegisterModal';
import './styles/App.scss';
import LoginModal from './components/Modal/LoginModal';

function App() {
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
		<div className='App'>
			<Navbar
				setRegisterUser={setRegisterUser}
				logout={logout}
				setLoginUser={setLoginUser}
				user={user}
			/>
			<p> Hey </p>
			<input type='text' />
			{user?.email}
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

			{/* <div className='form login-form'>
				<h1> Login </h1>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(e) => setLoginPassword(e.target.value)}
				/>
				<button onClick={login}>Login</button>
			</div> */}
		</div>
	);
}

export default App;
