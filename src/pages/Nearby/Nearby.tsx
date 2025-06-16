import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import './Nearby.module.css';

import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import NearbyBusinessCard from '../../components/Cards/NearbyBusinessCard/NearbyBusinessCard';
import Header from '../../components/Header/Header';

import { getBusinesses } from '../../services/BusinessService';

const Nearby: React.FC = () => {
	const [businesses, setBusinesses] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

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
				<Button 
					iconLeft={<ArrowLeft width={20} height={20}/>} 
					variant='circle' 
					size='medium'
					navigateTo='back'
				/>
				<h1>Les commerces</h1>
			</Header>

			<CardSectionDisplay mode='wrap'>
				{businesses.map((b) => (
					<NearbyBusinessCard
						key={b.id}
						name={b.name}
						image={'assets/business/1/avatar.webp'}
						rating={4.6}
						reviewCount={99}
						onClick={() => navigate(`/business/${b.id}`)}
					/>
				))}
			</CardSectionDisplay>
		</div>
	);
};

export default Nearby;