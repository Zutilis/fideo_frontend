import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type ButtonVariant = 'primary' | 'circle';
type ButtonSize = 'small' | 'medium' | 'big';

interface ButtonProps {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  navigateTo?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  iconLeft,
  iconRight,
  variant = 'primary',
  size,
  navigateTo,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo === 'back') {
      navigate(-1);
    } else if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={clsx(styles.button, variant, size)}
      onClick={handleClick}
    >
      {typeof iconLeft === 'string' ? (
        <img
          src={iconLeft}
          alt=""
          className={clsx(styles.avatar)}
        />
      ) : (
        iconLeft && <span className={clsx(styles.icon)}>{iconLeft}</span>
      )}
      {text && <span>{text}</span>}
      {iconRight && <span className={clsx(styles.icon)}>{iconRight}</span>}
    </button>
  );
};

export default Button;