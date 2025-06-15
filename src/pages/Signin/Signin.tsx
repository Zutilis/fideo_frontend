import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import styles from './Signin.module.css';

import { signinApi, SigninData } from '../../services/AuthService';
import { useAuth } from '../../context/AuthContext';

const Signup: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [error, setError] = useState('');

	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const token = await signinApi({ 
				Email: email, 
				Password: password, 
				FirstName: firstName, 
				LastName: lastName 
			});
			login(token);
			navigate('/');
		} catch (err) {
			setError("Échec d'inscription. Vérifie tes identifiants.");
			console.error(err);
		}
	};

	return (
		<div id='app' className='nomargin'>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1>S'inscrire</h1>
				{error && <p className="text-red-500 mb-2">{error}</p>}
				<div className={styles.inputsWrapper}>
					<div className={styles.inputWrapper}>
						<label htmlFor="firstName" className='subTitle'>Prénom</label>
						<input
							id="firstName"
							type="text"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							placeholder="Votre prénom"
							className="border"
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="lastName" className='subTitle'>Nom</label>
						<input
							id="lastName"
							type="text"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							placeholder="Votre nom"
							className="border"
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="email" className='subTitle'>Email</label>
						<input
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder="Email"
							className="border"
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="password" className='subTitle'>Mot de passe</label>
						<input
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder="Mot de passe"
							className="border"
							autoComplete="false"
							required
						/>
					</div>
				</div>
				<button type="submit" className={styles.button}>
					S'inscrire
				</button>
				<p className="subTitle">
					Vous avez un compte ?{' '}
					<Link to="/login">
						Se connecter
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Signup;