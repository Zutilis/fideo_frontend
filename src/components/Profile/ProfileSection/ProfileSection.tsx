import React from 'react';
import clsx from 'clsx';
import styles from './ProfileSection.module.css';

interface ProfileSectionProps {
	title: string;
	children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, children }) => (
	<section className={clsx('border', styles.section)}>
		<h3>{title}</h3>
		{children}
	</section>
);

export default ProfileSection;