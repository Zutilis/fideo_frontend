import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';

import Button from '../../components/Button/Button';
import AppointmentCard from '../../components/Cards/AppointmentCard/AppointmentCard';
import NearbyBusinessCard from '../../components/Cards/NearbyBusinessCard/NearbyBusinessCard';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import Header from '../../components/Header/Header';

import { useAuth } from '../../context/AuthContext';
import { getBusinesses } from '../../services/BusinessService';

const Home: React.FC = () => {
	const { user } = useAuth();
	const navigate = useNavigate();

	const [businesses, setBusinesses] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getBusinesses()
			.then(setBusinesses)
			.catch(console.error)
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p>Chargement...</p>;

	return (
		<div id='app'>
			<Header>
				<h1>Bonjour, {user?.FirstName}</h1>
				<Button iconLeft={'assets/user/1/avatar.jpg'} variant='circle' navigateTo='/profile' />
			</Header>

			<CardSectionDisplay title={'Mes réservations'} navigateTo='/appointments'>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					service={'Coupe Étudiant Homme'}
					duration={25}
					price={15}
					day={10}
					month={2}
					hour={15}
					minute={26}
				/>
			</CardSectionDisplay>

			<CardSectionDisplay title={'Les commerces'} navigateTo='/nearby' mode="wrap">
				{businesses.slice(0, 5).map((b) => (
					<NearbyBusinessCard
						key={b.id}
						name={b.name}
						image={'assets/business/1/avatar.webp'} // remplace par b.image si dispo
						rating={4.6} // remplace si dispo en BDD
						reviewCount={99}
						onClick={() => navigate(`/business/${b.id}`)}
					/>
				))}
			</CardSectionDisplay>
		</div>
	);
};

export default Home;