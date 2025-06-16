import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
	Id: string;
	Email: string;
	FirstName: string;
	LastName: string;
}

interface AuthContextType {
	user: JwtPayload | null;
	isAuthenticated: boolean;
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<JwtPayload | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			try {
				const decoded = jwtDecode<JwtPayload>(token);
				setUser(decoded);
			} catch {
				setUser(null);
			}
		}
		setLoading(false);
	}, []);

	const login = (token: string) => {
		localStorage.setItem('token', token);
		const decoded = jwtDecode<JwtPayload>(token);
		console.log(decoded);
		setUser(decoded);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	if (loading) return <div>Chargement...</div>; // ou un vrai spinner

	return (
		<AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext)!;