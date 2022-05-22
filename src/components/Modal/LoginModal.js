import React from 'react';
import './Modal.scss';

const LoginModal = ({
	registerEmail,
	registerPassword,
	setRegisterEmail,
	setRegisterPassword,
	register,
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
								value={registerEmail}
								type='email'
								name='email'
								placeholder='Email'
								onChange={(e) => setRegisterEmail(e.target.value)}
							/>
						</div>
						<div className='password'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='Password'
								name='password'
								value={registerPassword}
								onChange={(e) => setRegisterPassword(e.target.value)}
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
						<button onClick={register}>Log in</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginModal;
