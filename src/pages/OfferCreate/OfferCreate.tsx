import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import styles from './OfferCreate.module.css';

import { useAuth } from '../../context/AuthContext';
import { createOffer } from '../../services/OfferService';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const OfferCreate: React.FC = () => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const { id } = useParams<{ id: string }>();
	const businessId = parseInt(id ?? "-1");

	const [form, setForm] = useState({
		Name: '',
		Description: '',
		Price: 0,
		Duration: 0,
	});

	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({
			...prev,
			[name]: ['Price', 'Duration'].includes(name)
				? Number(value)
				: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createOffer(businessId, { ...form });
			navigate(`/business/${businessId}`);
		} catch (err: any) {
			console.error(err);
			setError('Erreur lors de la création de l\'offre.');
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
				<h1>Créer une offre</h1>
				{error && <p className="text-red-500 mb-2">{error}</p>}
				<div className={styles.inputsWrapper}>
					<div className={styles.inputWrapper}>
						<label htmlFor="Name">Nom de l'offre</label>
						<input 
							type="text" 
							id="Name" 
							name="Name" 
							value={form.Name} 
							onChange={handleChange} 
							placeholder="Nom de l'offre"
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
						<label htmlFor="Price">Prix en €</label>
						<input 
							type="number"
							id="Price" 
							name="Price" 
							value={form.Price} 
							onChange={handleChange} 
							placeholder='Prix en €'
							className='border'
							required
						/>	
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="Duration">Durée en secondes</label>
						<input 
							type="number"
							id="Duration" 
							name="Duration" 
							value={form.Duration} 
							onChange={handleChange} 
							placeholder='Durée en secondes'
							className='border'
							required
						/>	
					</div>
				</div>
				<button type="submit" className={styles.button}>Créer l'offre</button>
			</form>
		</div>
	);
};

export default OfferCreate;