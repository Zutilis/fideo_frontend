import axios from 'axios';

const API_URL = 'http://localhost:5148';

export interface BusinessCreateData {
	Name: string;
	Description: string;
	Street: string;
	City: string;
	PostalCode: string;
	Country: string;
	PhoneNumber: string;
	PointsPerEuro: number;
	CreatedAt: string;
	OwnerId: string;
}

export const createBusiness = async (data: BusinessCreateData) => {
	const token = localStorage.getItem('token');

	const response = await axios.post(`${API_URL}/businesses/create`, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};

export const getBusinesses = async () => {
	const token = localStorage.getItem('token');

	const response = await axios.get(`${API_URL}/businesses`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};

export const getBusiness = async (id: number) => {
	const token = localStorage.getItem('token');

	const response = await axios.get(`${API_URL}/businesses/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};

export const getBusinessByUser = async (user_id: string) => {
	const token = localStorage.getItem('token');

	const response = await axios.get(`${API_URL}/businesses/me`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};