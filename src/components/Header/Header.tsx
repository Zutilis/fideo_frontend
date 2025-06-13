import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';

interface HeaderProps {
  children: [React.ReactNode, React.ReactNode?];
  nomargin?: boolean;
  bgImage?: string;
}

const Header: React.FC<HeaderProps> = ({ children, nomargin, bgImage }) => {
  const [left, right] = children;

  return (
    <header
      className={clsx(styles.header, { [styles.nomargin]: nomargin }, { [styles.bgImage]: bgImage })}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className={styles.left}>{left}</div>
      {right && <div className={styles.right}>{right}</div>}
    </header>
  );
};

export default Header;