import React from 'react';
import clsx from 'clsx';
import styles from './ProfileItemRow.module.css';
import { ChevronRight } from 'lucide-react';

interface ProfileItemRowProps {
	label: string;
	value?: string;
	color?: 'blue' | 'red';
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
				<p className='subTitle'>{label}</p>
				{value && <p className='summary'>{value}</p>}
			</div>
			<ChevronRight size={16} color={`var(--color-${color})`} />
		</div>
	);
};

export default ProfileItemRow;