import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'circle';

interface ButtonProps {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  iconLeft,
  iconRight,
  variant = 'primary',
}) => {
  return (
    <button
      className={clsx(styles.button, styles[variant])}
      onClick={onClick}
    >
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {text && <span>{text}</span>}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
};

export default Button;