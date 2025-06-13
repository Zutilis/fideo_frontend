import React from 'react';
import { ArrowLeft } from 'lucide-react';

import './Business.module.css';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Business: React.FC = () => {
	return (
		<div id='app' className='nomargin'>
			<Header bgImage="assets/business/1/avatar.webp" nomargin>
				<Button
					iconLeft={<ArrowLeft width={20} height={20} />}
					variant='circle'
					size='small'
					navigateTo='back'
				/>
				<></>
			</Header>
		</div>
	);
};

export default Business;