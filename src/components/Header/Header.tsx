import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';

interface HeaderProps {
  children: [React.ReactNode, React.ReactNode?];
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [left, right] = children;

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.left)}>{left}</div>
      {right && <div className={clsx(styles.right)}>{right}</div>}
    </header>
  );
};

export default Header;