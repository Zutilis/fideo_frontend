import axios from 'axios';

const API_URL = 'http://localhost:5148';

export interface LoginData {
	Email: string;
	Password: string;
}

export interface SigninData {
	Email: string;
	Password: string;
	FirstName: string;
	LastName: string;
}

export const loginApi = async (data: LoginData) => {
	const response = await axios.post(`${API_URL}/login`, data);
	return response.data;
};

export const signinApi = async (data: SigninData) => {
	const response = await axios.post(`${API_URL}/signin`, data);
	return response.data;
};