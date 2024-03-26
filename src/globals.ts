import axios, { AxiosResponse } from "axios";
import Cookies from "cookies-ts";

const cookies = new Cookies();
const api = import.meta.env.VITE_APP_API_URL;

function getToken(): string | null {
	const token = cookies.get("token");

	if (token === null) {
		return null;
	}
	return token;
}

export async function fetchRequest(
	url: string
): Promise<{ data: any; error: any }> {
	try {
		const token = getToken();
		const res: AxiosResponse = await axios.get(`${api}/${url}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return { data: res.data, error: null };
	} catch (error: any) {
		console.error("Error fetching data:", error);
		return {
			data: null,
			error: error.response?.data || error.message || "Unknown error",
		};
	}
}

export async function postRequest(
	url: string,
	payload: any
): Promise<{ data: any; error: any }> {
	try {
		const token = getToken();
		const res: AxiosResponse = await axios.post(`${api}/${url}`, payload, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return { data: res.data, error: null };
	} catch (error: any) {
		console.error("Error posting data:", error);
		return {
			data: null,
			error: error.response?.data || error.message || "Unknown error",
		};
	}
}

export async function postRequestNonAuth(
	url: string,
	payload: any
): Promise<{ data: any; error: any }> {
	try {
		const res: AxiosResponse = await axios.post(
			`http://localhost:8080/v1${url}`,
			payload,
			{}
		);
		return { data: res.data, error: null };
	} catch (error: any) {
		console.error("Error posting data:", error);
		return {
			data: null,
			error: error.response?.data || error.message || "Unknown error",
		};
	}
}

export async function putRequest(
	url: string,
	payload: any
): Promise<{ data: any; error: any }> {
	try {
		const token = getToken();
		const res: AxiosResponse = await axios.put(`${api}/${url}`, payload, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return { data: res.data, error: null };
	} catch (error: any) {
		console.error("Error updating data:", error);
		return {
			data: null,
			error: error.response?.data || error.message || "Unknown error",
		};
	}
}

export async function deleteRequest(
	url: string
): Promise<{ data: any; error: any }> {
	try {
		const token = getToken();
		const res: AxiosResponse = await axios.delete(`${api}/${url}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return { data: res.data, error: null };
	} catch (error: any) {
		console.error("Error deleting data:", error);
		return {
			data: null,
			error: error.response?.data || error.message || "Unknown error",
		};
	}
}
