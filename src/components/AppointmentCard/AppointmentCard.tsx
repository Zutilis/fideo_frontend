import React from 'react';
import Card from '../Card/Card';
import { getMonthName, formatDetails } from '../../utils/utils';

interface AppointmentProps {
  name: string;
  image: string;
  day: number;
  month: number;
  hour: number;
  minute: number;
  service?: string;
  identity?: string;
  duration?: number;
  price?: number;
  onClick?: () => void;
}

const AppointmentCard: React.FC<AppointmentProps> = ({
  name,
  image,
  day,
  month,
  hour,
  minute,
  service,
  identity,
  duration,
  price,
  onClick,
}) => {
  const date = `${day} ${getMonthName(month)} ⸱ ${hour}h${minute.toString().padStart(2, '0')}`;
  const summary = formatDetails(service, identity, duration && `${duration}m`, price && `${price}€`);

  return (
    <Card
      image={image}
      title={name}
      subTitle={date}
      summary={summary}
      onClick={onClick}
    />
  );
};

export default AppointmentCard;