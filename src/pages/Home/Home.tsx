import React from 'react';
import './Home.module.css';
import { ArrowLeft } from 'lucide-react';

import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import NearbyBusinessCard from '../../components/NearbyBusinessCard/NearbyBusinessCard';
import FavoriteBusinessCard from '../../components/FavoriteBusinessCard/FavoriteBusinessCard';

const Home: React.FC = () => {
	return (
		<div id='app'>
			<h1>Bonjour, Jules</h1>
			<div>
				<h3>Mes rendez-vous</h3>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
			</div>
			<div>
				<h3>Commerces près de chez vous</h3>
				<NearbyBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					rating={4.6}
					reviewCount={99}
				/>
			</div>
			<div>
				<h3>Vos commerces favoris</h3>
				<FavoriteBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					userPoints={200}
					userPointsOffers={2}
					rating={4.6}
					reviewCount={99}
				/>
			</div>
		</div>
	);
};

export default Home;