import React from 'react';
import clsx from 'clsx';
import styles from './CardSectionDisplay.module.css';
import { ArrowRight } from 'lucide-react';
import Button from '../../Button/Button';

interface CardSectionDisplayProps {
  title: string;
  navigateTo?: string;
  children: React.ReactNode;
  className?: string;
  showButton?: boolean;
  mode?: 'slider' | 'wrap';
  itemsPerRow?: number;
}

const CardSectionDisplay: React.FC<CardSectionDisplayProps> = ({
  title,
  navigateTo,
  children,
  className,
  showButton = true,
  mode = 'slider',
  itemsPerRow = 2,
}) => {
  return (
    <section className={clsx(styles.section, className)}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {showButton && navigateTo && (
          <Button
            iconLeft={<ArrowRight width={20} height={20} />}
            variant="circle"
            size="small"
            navigateTo={navigateTo}
          />
        )}
      </div>

      <div
        className={clsx(
          styles.cardContainer,
          mode === 'slider' ? styles.slider : styles.wrap,
          mode === 'slider' && itemsPerRow && styles[`slider${itemsPerRow}`],
          mode === 'wrap' && itemsPerRow && styles[`wrap${itemsPerRow}`]
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default CardSectionDisplay;