import React from 'react';
import Card from '../../Cards/Card/Card';

interface NearbyBusinessProps {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  onClick?: () => void;
}

const NearbyBusinessCard: React.FC<NearbyBusinessProps> = ({
  name,
  image,
  rating,
  reviewCount,
  onClick,
}) => {
  const summary = `${rating}★ (${reviewCount > 100 ? '+100' : reviewCount})`;

  return (
    <Card
      image={image}
      title={name}
      summary={summary}
      onClick={onClick}
    />
  );
};

export default NearbyBusinessCard;