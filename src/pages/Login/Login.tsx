import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import styles from './Login.module.css';

import { loginApi, LoginData } from '../../services/AuthService';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await loginApi({ 
				Email: email, 
				Password: password 
			});
			login(response);
			navigate('/');
		} catch (err) {
			setError('Échec de connexion. Vérifie tes identifiants.');
			console.error(err);
		}
	};

	return (
		<div id='app' className='nomargin'>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1>Se connecter</h1>
				{error && <p className="text-red-500 mb-2">{error}</p>}
				<div className={styles.inputsWrapper}>
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
					Se connecter
				</button>
				<p className="subTitle">
					Vous n'avez pas de compte ?{' '}
					<Link to="/signup">
						S'inscrire
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;