import React from 'react';
import clsx from 'clsx';

import styles from './ScrollableCardList.module.css';
import { ArrowRight } from 'lucide-react';

import Button from '../Button/Button';

interface ScrollableCardListProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollableCardList: React.FC<ScrollableCardListProps> = ({ title, children, className }) => {
  return (
    <section className={clsx(styles['section-scrollable-list'], className)}>
      <div className={styles['scrollable-list-header']}>
        <h3>{title}</h3>
        <Button iconLeft={<ArrowRight width={15} height={15}/>} variant='circle' size='small' />
      </div>
      <div className={clsx(styles['scrollable-card-container'])}>
        {children}
      </div>
    </section>
  );
};

export default ScrollableCardList;