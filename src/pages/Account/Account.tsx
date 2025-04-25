import React from 'react';

import styles from './Account.module.css';

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import ProfileSection from '../../components/Profile/ProfileSection/ProfileSection';
import ProfileItemRow from '../../components/Profile/ProfileItemRow/ProfilItemRow';

const Account: React.FC = () => {
	return (
		<div id='app'>
			<Header>
				<h1>Jules Ducrot</h1>
				<Button iconLeft={'assets/user/1/avatar.jpg'} variant='circle' navigateTo='/account'/>
			</Header>
			<div className={styles.section}>
				<ProfileSection title={'Informations Personelles'}>
					<ProfileItemRow label={"Modifier l'avatar"}/>
					<ProfileItemRow label={"Nom"} value={"Jules Ducrot"}/>
					<ProfileItemRow label={"Email"} value={"jules1.ducrot@gmail.com"}/>
				</ProfileSection>
				<ProfileSection title={'Sécurité'}>
					<ProfileItemRow label={"Mot de passe"}/>
					<ProfileItemRow label={"Suppression du compte"}/>
					<ProfileItemRow label={"Se déconnecter"}/>
				</ProfileSection>
				<ProfileSection title={'A propos'}>
					<ProfileItemRow label={"Mentions Légales"}/>
				</ProfileSection>
			</div>
		</div>
	);
};

export default Account;