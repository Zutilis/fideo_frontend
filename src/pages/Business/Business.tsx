import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import styles from './Business.module.css';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import CardSectionDisplay from '../../components/Cards/CardSectionDisplay/CardSectionDisplay';
import LoyaltyOfferCard from '../../components/Cards/LoyaltyOfferCard/LoyaltyOfferCard';
import OfferCard from '../../components/Cards/OfferCard/OfferCard';

import { getBusiness } from '../../services/BusinessService';
import { getOffersByBusiness } from '../../services/OfferService';
import { useAuth } from '../../context/AuthContext';

const Business: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const businessId = parseInt(id ?? "-1");

	const [business, setBusiness] = useState<any>(null);
	const [offers, setOffers] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (businessId) {
			Promise.all([
				getBusiness(businessId),
				getOffersByBusiness(businessId)
			])
			.then(([businessData, offersData]) => {
				setBusiness(businessData);
				setOffers(offersData);
			})
			.catch(console.error)
			.finally(() => setLoading(false));
		}
	}, [businessId]);

	if (loading || !business) return <p>Chargement...</p>;

	const isOwner = user?.Id === business.ownerId;

	return (
		<div id='app' className='nomargin'>
			<Header nobg>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='medium'
					navigateTo='back'
				/>
				<></>
			</Header>

			<section className={styles.descriptionSection}>
				<img src="../assets/business/1/avatar.webp" alt="Avatar" className={styles.avatar} />
				<div className={styles.descriptionWrapper}>
					<div className={styles.description}>
						<h3>{business.name}</h3>
						<p className='summary'>{business.description}</p>
					</div>
					<div className={styles.userPoints}>
						{!isOwner ? '50 Points' : 'Propriétaire'}
					</div>
				</div>
			</section>

			{!isOwner ? (
				<CardSectionDisplay title={'Offres de fidélité'} mode='wrap' itemsPerRow={1}>
					{offers.map((offer, index) => (
						<LoyaltyOfferCard
							key={index}
							image={'../assets/business/1/avatar.webp'}
							service={offer.name}
							duration={offer.duration}
							description={offer.description}
							rating={4.5}
							reviewCount={101}
							pricePoints={20}
						/>
					))}
				</CardSectionDisplay>
			) : (
				<div className={styles.addOfferContainer}>
					<button
						className={styles.addOfferButton}
						onClick={() => navigate(`/business/${businessId}/offers/create`)}
					>
						Ajouter une offre
					</button>
				</div>
			)}

			<CardSectionDisplay 
				title={'Toutes les offres'} mode='wrap' 
				className={isOwner ? styles.offers : undefined}
			>
				{offers.map((offer, index) => (
					<OfferCard
						key={index}
						image={'../assets/business/1/avatar.webp'}
						service={offer.name}
						duration={offer.duration}
						description={offer.description}
						rating={4.5}
						reviewCount={101}
						price={offer.price}
					/>
				))}
			</CardSectionDisplay>
		</div>
	);
};

export default Business;