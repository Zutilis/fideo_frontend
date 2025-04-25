import React from 'react';
import clsx from 'clsx';
import styles from './ProfileItemRow.module.css';
import { ChevronRight } from 'lucide-react';

type ColorVariant = 'blue' | 'red';

interface ProfileItemRowProps {
	label: string;
	value?: string;
	color?: ColorVariant;
	onClick?: () => void;
}

const ProfileItemRow: React.FC<ProfileItemRowProps> = ({
	label,
	value,
	onClick,
	color = 'blue',
}) => {
	return (
		<div
			className={clsx(styles.row, `c-${color}`)}
			onClick={onClick}
		>
			<div className={styles.textContainer}>
				<p className={styles.label}>{label}</p>
				{value && <p className={styles.value}>{value}</p>}
			</div>
			<ChevronRight size={16} color={`var(--color-${color})`} />
		</div>
	);
};

export default ProfileItemRow;