import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import styles from './Profile.module.css';

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import ProfileSection from '../../components/Profile/ProfileSection/ProfileSection';
import ProfileItemRow from '../../components/Profile/ProfileItemRow/ProfilItemRow';

const Profile: React.FC = () => {
	const { logout, user } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<div id='app'>
			<Header>
				<h1>{user?.FirstName} {user?.LastName}</h1>
				<Button iconLeft={'assets/user/1/avatar.jpg'} variant='circle' navigateTo='/profile' />
			</Header>
			<div className={styles.section}>
				<ProfileSection title={'Informations Personelles'}>
					<ProfileItemRow label={"Modifier l'avatar"} />
					<ProfileItemRow label={"Nom"} value={user?.FirstName + " " + user?.LastName} />
					<ProfileItemRow label={"Email"} value={user?.Email} />
				</ProfileSection>
				<ProfileSection title={'Sécurité'}>
					<ProfileItemRow label={"Mot de passe"} />
					<ProfileItemRow label={"Suppression du compte"} />
					<ProfileItemRow label={"Se déconnecter"} color='red' onClick={handleLogout} />
				</ProfileSection>
				<ProfileSection title={'A propos'}>
					<ProfileItemRow label={"Mentions Légales"} />
				</ProfileSection>
			</div>
		</div>
	);
};

export default Profile;