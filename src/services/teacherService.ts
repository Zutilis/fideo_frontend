export const apiFetch = async (url: string, options: RequestInit = {}) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP Error ! Status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
}