import React from 'react';

import './Home.module.css';

import Button from '../../components/Button/Button';
import AppointmentCard from '../../components/Cards/AppointmentCard/AppointmentCard';
import NearbyBusinessCard from '../../components/Cards/NearbyBusinessCard/NearbyBusinessCard';
import FavoriteBusinessCard from '../../components/Cards/FavoriteBusinessCard/FavoriteBusinessCard';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<h1>Bonjour, Jules</h1>
				<Button iconLeft={'assets/user/1/avatar.jpg'} variant='circle' navigateTo='/profile'/>
			</Header>
			<CardSectionDisplay title={'Mes rendez-vous'} navigateTo='/appointments'>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
			</CardSectionDisplay>
			<CardSectionDisplay title={'Commerces à proximité'} navigateTo='/nearby'>
				<NearbyBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					rating={4.6}
					reviewCount={99}
				/>
				<NearbyBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					rating={4.6}
					reviewCount={99}
				/>
				<NearbyBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					rating={4.6}
					reviewCount={99}
				/>
			</CardSectionDisplay>
			<CardSectionDisplay title={'Vos commerces favoris'} navigateTo='/favorites'>
				<FavoriteBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					userPoints={200}
					userPointsOffers={2}
					rating={4.6}
					reviewCount={99}
				/>
				<FavoriteBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					userPoints={200}
					userPointsOffers={2}
					rating={4.6}
					reviewCount={99}
				/>
				<FavoriteBusinessCard
					name={'Jazz Barber'}
					image={'assets/business/1/avatar.webp'}
					userPoints={200}
					userPointsOffers={2}
					rating={4.6}
					reviewCount={99}
				/>
			</CardSectionDisplay>
		</div>
	);
};

export default Home;