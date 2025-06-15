import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

interface CardProps {
  image?: string;
  title?: string;
  subTitle?: string;
  summary?: string;
  bottomButton?: React.ReactNode;
  direction?: 'column' | 'row';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subTitle,
  summary,
  bottomButton,
  direction = 'column',
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.card, 'border', {
        [styles.row]: direction === 'row',
        [styles.column]: direction === 'column',
      })}
      onClick={onClick}
    >
      {image && <img src={image}/>}
      <div className={clsx(styles.description)}>
        {title && <p className='title'>{title}</p>}
        {subTitle && <p className='subTitle'>{subTitle}</p>}
        {summary && <p className='summary'>{summary}</p>}
        {bottomButton && <div className={styles.bottomButton}>{bottomButton}</div>}
      </div>
    </div>
  );
};

export default Card;