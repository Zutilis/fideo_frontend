import React from 'react';
import { ArrowLeft } from 'lucide-react';

import styles from './Business.module.css';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import LoyaltyOfferCard from '../../components/Cards/LoyaltyOfferCard/LoyaltyOfferCard';
import OfferCard from '../../components/Cards/OfferCard/OfferCard';

const Business: React.FC = () => {
	return (
		<div id='app' className='nomargin'>
			<Header nobg>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='small'
					navigateTo='back'
				/>
				<></>
			</Header>
			<section className={styles.descriptionSection}>
				<img src="assets/business/1/avatar.webp" alt="" className={styles.avatar} />
				<div className={styles.descriptionWrapper}>
					<div className={styles.description}>
						<h3>Ja'z Barber</h3>
						<p className='summary'>Test</p>
					</div>
					<div className={styles.userPoints}>
						50 Points
					</div>
				</div>
			</section>
			<CardSectionDisplay title={'Offre de fidelité (3)'} mode='wrap' itemsPerRow={1}>
				<LoyaltyOfferCard
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25} 
					description={'Avec Jaouad'} 
					rating={4.5} 
					reviewCount={101}
					pricePoints={20}
				/>
				<LoyaltyOfferCard
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25} 
					description={'Avec Jaouad'} 
					rating={4.5} 
					reviewCount={101}
					pricePoints={20}
				/>
				<LoyaltyOfferCard
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25} 
					description={'Avec Jaouad'} 
					rating={4.5} 
					reviewCount={101}
					pricePoints={20}
				/>
			</CardSectionDisplay>
			<CardSectionDisplay title={'Toutes les offres (15)'} mode='wrap'>
				<OfferCard
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25} 
					description={'Avec Jaouad'} 
					rating={4.5} 
					reviewCount={101}
					price={20}
				/>
				<OfferCard
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25} 
					description={'Avec Jaouad'} 
					rating={4.5} 
					reviewCount={101}
					price={20}
				/>
				<OfferCard
					image={'../assets/business/1/avatar.webp'}
					service={'Coupe Etudiant Homme'}
					duration={25} 
					description={'Avec Jaouad'} 
					rating={4.5} 
					reviewCount={101}
					price={20}
				/>
			</CardSectionDisplay>
		</div>
	);
};

export default Business;