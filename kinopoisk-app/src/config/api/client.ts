import axios from 'axios'
import { baseUrl, API_KEY } from './api'

const client = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json',
	}
})

client.interceptors.request.use((config) => {
	config.headers['X-API-KEY'] = API_KEY
	return config
})

export const get = client.get