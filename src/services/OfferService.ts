import axios from 'axios';

const API_URL = 'http://localhost:5148';

export interface OfferCreateData {
	Name: string;
	Description: string;
	Price: number;
	Duration: number;
}

export const createOffer = async (businessId: number, data: OfferCreateData) => {
	const token = localStorage.getItem('token');
	console.log(token);

	const response = await axios.post(
		`${API_URL}/businesses/${businessId}/offers/create`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return response.data;
};

export const getOffersByBusiness = async (businessId: number) => {
	const token = localStorage.getItem('token');

	const response = await axios.get(
		`${API_URL}/businesses/${businessId}/offers`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};