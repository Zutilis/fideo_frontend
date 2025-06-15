import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';

interface HeaderProps {
  children: [React.ReactNode, React.ReactNode?];
  nobg?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, nobg = false }) => {
  const [left, right] = children;

  return (
    <header
      className={clsx(styles.header, { [styles.nobg]: nobg }) }
    >
      <div className={styles.left}>{left}</div>
      {right && <div className={styles.right}>{right}</div>}
    </header>
  );
};

export default Header;