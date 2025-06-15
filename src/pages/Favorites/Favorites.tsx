import React from 'react';
import { ArrowLeft } from 'lucide-react';

import './Favorites.module.css';

import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import FavoriteBusinessCard from '../../components/Cards/FavoriteBusinessCard/FavoriteBusinessCard';
import Header from '../../components/Header/Header';

const Favorites: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='medium'
					navigateTo='back'
				/>
				<></>
			</Header>
			<CardSectionDisplay title={'Vos commerces favoris'} mode='wrap'>
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

export default Favorites;