import React from 'react';
import Card from '../../Cards/Card/Card';
import { formatDetails } from '../../../utils/utils';

interface FavoriteBusinessProps {
  name: string;
  image: string;
  userPoints: number;
  userPointsOffers: number;
  rating: number;
  reviewCount: number;
  onClick?: () => void;
}

const FavoriteBusinessCard: React.FC<FavoriteBusinessProps> = ({
  name,
  image,
  userPoints,
  userPointsOffers,
  rating,
  reviewCount,
  onClick,
}) => {
  const summary = formatDetails(
    `${userPoints} Points`,
    `${userPointsOffers} offres`,
    `${rating}★ (${reviewCount > 100 ? '+100' : reviewCount})`);

  return (
    <Card
      image={image}
      title={name}
      summary={summary}
      onClick={onClick}
    />
  );
};

export default FavoriteBusinessCard;