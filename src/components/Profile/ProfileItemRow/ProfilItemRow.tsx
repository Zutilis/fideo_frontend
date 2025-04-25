import React from 'react';
import clsx from 'clsx';
import styles from './ProfileItemRow.module.css';
import { ChevronRight } from 'lucide-react';

interface ProfileItemRowProps {
	label: string;
	value?: string;
	onClick?: () => void;
}

const ProfileItemRow: React.FC<ProfileItemRowProps> = ({
	label,
	value,
	onClick,
}) => {
	return (
		<div
			className={clsx(styles.row)}
			onClick={onClick}
		>
			<div className={styles.textContainer}>
				<p className={styles.label}>{label}</p>
				{value && <p className={styles.value}>{value}</p>}
			</div>
			{<ChevronRight size={16} />}
		</div>
	);
};

export default ProfileItemRow;