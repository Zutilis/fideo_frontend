import React from 'react';
import { ArrowLeft } from 'lucide-react';

import './AppointmentsHistory.module.css';

import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import AppointmentCard from '../../components/Cards/AppointmentCard/AppointmentCard';
import Header from '../../components/Header/Header';

const AppointmentsHistory: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='medium'
					navigateTo='back'
				/>
				<h1>Réservations passées</h1>
			</Header>
			<CardSectionDisplay mode='wrap'>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
				<AppointmentCard
					name={'Jazz Barber'}
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25}
					price={15}
					day={10} month={2} hour={15} minute={26}
				/>
			</CardSectionDisplay>
		</div>
	);
};

export default AppointmentsHistory;