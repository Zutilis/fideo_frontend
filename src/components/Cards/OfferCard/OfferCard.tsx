import React from 'react';
import Card from '../Card/Card';
import styles from './OfferCard.module.css';
import { formatDetails } from '../../../utils/utils';
import clsx from 'clsx';

interface OfferCardProps {
  service: string;
  description: string;
  image: string;
  duration: number;
  rating: number;
  reviewCount: number;
  price: number;
  onClick?: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({
  service,
  description,
  image,
  duration,
  rating,
  reviewCount,
  price,
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
      bottomButton={
        <a className={clsx('subTitle', styles.button)}>
          { formatDetails('Réserver', `${price}€`) }
        </a>
      }
    />
  );
};

export default OfferCard;