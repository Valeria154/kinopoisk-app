import { get } from '../config/api/client'
import { baseUrl, moviesEndpoint, movieByIdEndpoint } from '../config/api/api'
import type { MovieType } from '../types/movie'

// Универсальный набор параметров для запроса списка фильмов
const defaultParams = {
	order: 'RATING',
	type: 'FILM',
	ratingFrom: 0,
	ratingTo: 10,
	yearFrom: 1000,
	yearTo: 3000,
	page: 1,
}

export async function requestMovieList(page = 1): Promise<MovieType[] | void> {
	try {
		const response = await get(baseUrl + moviesEndpoint, {
			params: {
				...defaultParams,
				page,
			},
		})
		return response.data.items
	} catch (error: unknown) {
		if (error instanceof Error) console.log(error.message)
	}
}

export async function requestMovie(id: string | number): Promise<MovieType | void> {
	try {
		const response = await get(`${movieByIdEndpoint}/${id}`)
		return response.data
	} catch (error: unknown) {
		if (error instanceof Error) console.log(error.message)
	}
}