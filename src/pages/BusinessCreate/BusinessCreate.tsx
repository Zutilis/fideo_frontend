import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BusinessCreate.module.css';

import { useAuth } from '../../context/AuthContext';
import { createBusiness } from '../../services/BusinessService';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { ArrowLeft } from 'lucide-react';

const BusinessCreate: React.FC = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	const [form, setForm] = useState({
		Name: '',
		Description: '',
		Street: '',
		City: '',
		PostalCode: '',
		Country: '',
		PhoneNumber: '',
		PointsPerEuro: 0
	});

	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({
			...prev,
			[name]: ['PointsPerEuro'].includes(name)
				? Number(value)
				: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createBusiness({
				...form,
				CreatedAt: new Date().toISOString(),
				OwnerId: user?.Id ?? '',
			});
			navigate('/');
		} catch (err: any) {
			console.error(err);
			setError('Erreur lors de la création du business.');
		}
	};

	return (
		<div id='app'>
			<Header nobg>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='medium'
					navigateTo='back'
				/>
				<></>
			</Header>

			<form onSubmit={handleSubmit} className={styles.form}>
				<h1>Créer un business</h1>
				{error && <p className="text-red-500 mb-2">{error}</p>}
				<div className={styles.inputsWrapper}>
					<div className={styles.inputWrapper}>
						<label htmlFor="Name">Nom du business</label>
						<input 
							type="text" 
							id="Name" 
							name="Name" 
							value={form.Name} 
							onChange={handleChange} 
							placeholder='Nom'
							className='border'
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="Description">Description</label>
						<input 
							type="text" 
							id="Description" 
							name="Description" 
							value={form.Description} 
							onChange={handleChange} 
							placeholder='Description'
							className='border'
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="Street">Adresse</label>
						<input 
							type="text" 
							id="Street" 
							name="Street" 
							value={form.Street} 
							onChange={handleChange} 
							placeholder='Adresse'
							className='border'
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="City">Ville</label>
						<input 
							type="text" 
							id="City" 
							name="City" 
							value={form.City} 
							onChange={handleChange} 
							placeholder='Ville'
							className='border'
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="PostalCode">Code Postal</label>
						<input 
							type="text" 
							id="PostalCode" 
							name="PostalCode" 
							value={form.PostalCode} 
							onChange={handleChange} 
							placeholder='Code Postal'
							className='border'
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="Country">Pays</label>
						<input 
							type="text" 
							id="Country" 
							name="Country" 
							value={form.Country} 
							onChange={handleChange} 
							placeholder='Pays'
							className='border'
							required
						/>
					</div>

					<div className={styles.inputWrapper}>
						<label htmlFor="PhoneNumber">Téléphone</label>
						<input 
							type="text" 
							id="PhoneNumber" 
							name="PhoneNumber" 
							value={form.PhoneNumber} 
							onChange={handleChange} 
							placeholder='Numéro de téléphone'
							className='border'
							required
						/>	
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="PointsPerEuro">Points par €</label>
						<input 
							type="text" 
							id="PointsPerEuro" 
							name="PointsPerEuro" 
							value={form.PointsPerEuro} 
							onChange={handleChange} 
							placeholder='Points par €'
							className='border'
							required
						/>	
					</div>
				</div>
				<button type="submit" className={styles.button}>Créer le business</button>
			</form>
		</div>
	);
};

export default BusinessCreate;