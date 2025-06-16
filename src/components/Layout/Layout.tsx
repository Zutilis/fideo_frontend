import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, FileText, User, Plus, Store } from 'lucide-react';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

interface LayoutProps {
	children: React.ReactNode;
	showNavbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNavbar = true }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const navItems = [
		{ 
			label: 'Accueil', icon: <Home />, 
			isActive: location.pathname === '/', 
			onClick: () => navigate('/') },
		{ 
			label: 'Parcourir', icon: <Search />, 
			isActive: location.pathname === '/browse', 
			onClick: () => navigate('/browse') 
		},
		{ 
			label: 'Mes commerces', icon: <Store />, 
			isActive: location.pathname === '/my-businesses', 
			onClick: () => navigate('/my-businesses')
		},
		{ 
			label: 'Mes Réservations', icon: <FileText />, 
			isActive: location.pathname === '/appointments', 
			onClick: () => navigate('/appointments') 
		},
		{ 
			label: 'Compte', icon: <User />, 
			isActive: location.pathname === '/profile', 
			onClick: () => navigate('/profile') 
		},
	];

	return (
		<div style={{ paddingBottom: showNavbar ? 'var(--navbar-height)' : 0 }}>
			{children}
			{showNavbar && <MobileNavbar items={navItems} />}
		</div>
	);
};

export default Layout;