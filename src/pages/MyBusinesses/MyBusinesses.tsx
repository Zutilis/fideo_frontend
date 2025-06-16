import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './MyBusinesses.module.css';

import Header from '../../components/Header/Header';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';

import MyBusinessCard from '../../components/Cards/MyBusinessCard/MyBusinessCard';
import { useAuth } from '../../context/AuthContext';
import { getBusinessByUser } from '../../services/BusinessService';

const MyBusinesses: React.FC = () => {
	const { user } = useAuth();
	const navigate = useNavigate();

	const [businesses, setBusinesses] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user?.Id) {
			getBusinessByUser(user.Id)
				.then(setBusinesses)
				.catch(console.error)
				.finally(() => setLoading(false));
		}
	}, [user?.Id]);

	if (loading) return <p>Chargement...</p>;

	return (
		<div id='app'>
			<Header nobg>
				<h1>Mes Commerces</h1>
				<></>
			</Header>
			<CardSectionDisplay mode='wrap' itemsPerRow={1}>
				{businesses.map((business) => (
					<MyBusinessCard
						key={business.id}
						name={business.name}
						image={'../assets/business/1/avatar.webp'}
						description={business.description}
						onClick={() => navigate(`/business/${business.id}`)}
					/>
				))}
			</CardSectionDisplay>
			<div className={styles.addBusinessContainer}>
				<button
					className={styles.addBusinessButton}
					onClick={() => navigate(`/business/create`)}
				>
					Créer un commerce
				</button>
			</div>
		</div>
	);
};

export default MyBusinesses;