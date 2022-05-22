import React from 'react';
import './Navbar.scss';
const Navbar = ({ logout, setRegisterUser, setLoginUser, user }) => {
	return (
		<nav>
			<div className='user-links'>
				<div
					className='login'
					onClick={() => {
						setLoginUser(true);
						setRegisterUser(false);
					}}>
					Login
				</div>
				<div
					className='register'
					onClick={() => {
						setRegisterUser(true);
						setLoginUser(false);
					}}>
					Sign up
				</div>
				{user && <div onClick={logout}>Logout</div>}
			</div>
		</nav>
	);
};

export default Navbar;
