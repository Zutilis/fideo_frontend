import React from 'react';
import clsx from 'clsx';

import './Home.module.css';
import { ArrowRight } from 'lucide-react';

import Button from '../../components/Button/Button';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import NearbyBusinessCard from '../../components/NearbyBusinessCard/NearbyBusinessCard';
import FavoriteBusinessCard from '../../components/FavoriteBusinessCard/FavoriteBusinessCard';
import ScrollableCardList from '../../components/ScrollableCardsList/ScrollableCardList';
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<h1>Bonjour, Jules</h1>
				<Button iconLeft={<ArrowRight width={15} height={15}/>} variant='circle' size='medium' />
			</Header>
			<ScrollableCardList title={'Mes rendez-vous'}>
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
			</ScrollableCardList>
			<ScrollableCardList title={'Commerces près de chez vous'}>
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
			</ScrollableCardList>
			<ScrollableCardList title={'Vos commerces favoris'}>
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
			</ScrollableCardList>
		</div>
	);
};

export default Home;