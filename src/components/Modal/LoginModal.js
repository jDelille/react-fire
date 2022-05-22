import React from 'react';
import './Modal.scss';

const LoginModal = ({
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
	login,
	setRegisterUser,
	setLoginUser,
}) => {
	return (
		<>
			<div className='overlay'>
				<div className='modal'>
					<div className='form'>
						<h1 className='close-btn' onClick={() => setLoginUser(false)}>
							&#10006;
						</h1>
						<h1> Login </h1>
						<div className='email'>
							<label htmlFor='email'>Email address</label>
							<input
								value={loginEmail}
								type='email'
								name='email'
								placeholder='Email'
								onChange={(e) => setLoginEmail(e.target.value)}
							/>
						</div>
						<div className='password'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='Password'
								name='password'
								value={loginPassword}
								onChange={(e) => setLoginPassword(e.target.value)}
							/>
						</div>
						<p> Forgot your password?</p>
						<p
							onClick={() => {
								setRegisterUser(true);
								setLoginUser(false);
							}}>
							Create an account?
						</p>
						<button
							onClick={() => {
								login();
								setLoginUser(false);
							}}>
							Log in
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginModal;
