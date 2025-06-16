import React from 'react';
import Card from '../Card/Card';
import styles from './MyBusinessCard.module.css';
import { formatDetails } from '../../../utils/utils';
import clsx from 'clsx';

interface MyBusinessCardProps {
  name: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const MyBusinessCard: React.FC<MyBusinessCardProps> = ({
  name,
  description,
  image,
  onClick,
}) => {
  return (
    <Card
      image={image}
      title={name}
      summary={description}
      onClick={onClick}
      direction='row'
      bottomButton={
        <a className={clsx('subTitle', styles.button)}>
          { formatDetails('Modifier') }
        </a>
      }
    />
  );
};

export default MyBusinessCard;