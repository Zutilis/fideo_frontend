import React from 'react';
import { ArrowLeft, Archive } from 'lucide-react';

import './Appointments.module.css';

import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import AppointmentCard from '../../components/Cards/AppointmentCard/AppointmentCard';
import Header from '../../components/Header/Header';

const Appointments: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='small'
					navigateTo='back'
				/>
				<Button
					iconLeft={<Archive width={20} height={20} />}
					variant='circle'
					size='small'
					navigateTo='/appointments/history'
				/>
			</Header>
			<CardSectionDisplay title={'Mes rendez-vous'} mode='wrap'>
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
		</div>
	);
};

export default Appointments;