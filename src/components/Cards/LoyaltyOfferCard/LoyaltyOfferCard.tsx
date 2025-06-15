import React from 'react';
import Card from '../Card/Card';
import styles from './LoyaltyOfferCard.module.css';
import { formatDetails } from '../../../utils/utils';
import clsx from 'clsx';

interface LoyaltyOfferCardProps {
  service: string;
  description: string;
  image: string;
  duration: number;
  rating: number;
  reviewCount: number;
  pricePoints: number;
  onClick?: () => void;
}

const LoyaltyOfferCard: React.FC<LoyaltyOfferCardProps> = ({
  service,
  description,
  image,
  duration,
  rating,
  reviewCount,
  pricePoints,
  onClick,
}) => {
  const summary = formatDetails(
    `${description}`, `${duration}m`,
    `${rating}★ (${reviewCount > 100 ? '+100' : reviewCount})`);

  return (
    <Card
      image={image}
      title={service}
      summary={summary}
      onClick={onClick}
      direction='row'
      bottomButton={
        <a className={clsx('subTitle', styles.button)}>
          { formatDetails('Réserver', `${pricePoints} Points`) }
        </a>
      }
    />
  );
};

export default LoyaltyOfferCard;