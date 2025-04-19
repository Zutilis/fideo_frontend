import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, FileText, User } from 'lucide-react';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

interface LayoutProps {
	children: React.ReactNode;
	showNavbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNavbar = true }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const navItems = [
		{ label: 'Accueil', icon: <Home />, isActive: location.pathname === '/', onClick: () => navigate('/') },
		{ label: 'Parcourir', icon: <Search />, isActive: location.pathname === '/browse', onClick: () => navigate('/browse') },
		{ label: 'Réservations', icon: <FileText />, isActive: location.pathname === '/reservations', onClick: () => navigate('/reservations') },
		{ label: 'Compte', icon: <User />, isActive: location.pathname === '/account', onClick: () => navigate('/account') },
	];

	return (
		<div style={{ paddingBottom: showNavbar ? 'var(--navbar-height)' : 0 }}>
			{children}
			{showNavbar && <MobileNavbar items={navItems} />}
		</div>
	);
};

export default Layout;