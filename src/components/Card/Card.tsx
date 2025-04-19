import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

interface CardProps {
  image?: string;
  title?: string;
  subTitle?: string;
  summary?: string;
  bottomButton?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subTitle,
  summary,
  bottomButton,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.card, 'border')}
      onClick={onClick}
    >
      {image && <img src={image}/>}
      <div className={clsx(styles.description)}>
        {title && <p className={styles.title}>{title}</p>}
        {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        {summary && <p className={styles.summary}>{summary}</p>}
      </div>
      {bottomButton && <span className={styles.bottomButton}>{bottomButton}</span>}
    </div>
  );
};

export default Card;