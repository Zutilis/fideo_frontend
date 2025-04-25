import React from 'react';
import { ArrowLeft } from 'lucide-react';

import './Nearby.module.css';

import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import NearbyBusinessCard from '../../components/Cards/NearbyBusinessCard/NearbyBusinessCard';
import Header from '../../components/Header/Header';

const Nearby: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<Button 
					iconLeft={<ArrowLeft width={20} height={20}/>} 
					variant='circle' 
					size='small'
					navigateTo='back'
				/>
				<></>
			</Header>
			<CardSectionDisplay title={'Commerces à proximité'} mode='wrap'>
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
		</div>
	);
};

export default Nearby;