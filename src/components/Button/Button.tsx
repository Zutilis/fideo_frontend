import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'circle';
type ButtonSize = 'small' | 'medium' | 'big';

interface ButtonProps {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize,
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  iconLeft,
  iconRight,
  variant = 'primary',
  size = 'medium',
}) => {
  return (
    <button
      className={clsx(styles.button, variant, size)}
      onClick={onClick}
    >
      {iconLeft && <span className={clsx(styles.icon)}>{iconLeft}</span>}
      {text && <span>{text}</span>}
      {iconRight && <span className={clsx(styles.icon)}>{iconRight}</span>}
    </button>
  );
};

export default Button;