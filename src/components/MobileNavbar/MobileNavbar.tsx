import React from 'react';
import clsx from 'clsx';
import styles from './MobileNavbar.module.css';

interface NavItem {
	label: string;
	icon: React.ReactNode;
	isActive: boolean;
	onClick: () => void;
}

interface MobileNavbarProps {
	items: NavItem[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ items }) => {
	return (
		<nav className={styles.navbar}>
			{items.map((item, index) => (
				<button
					key={index}
					className={clsx(styles.navItem, { [styles.active]: item.isActive })}
					onClick={item.onClick}
				>
					<div className={styles.icon}>{item.icon}</div>
					<span className={styles.label}>{item.label}</span>
				</button>
			))}
		</nav>
	);
};

export default MobileNavbar;