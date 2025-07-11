//Movies
export interface MovieType {
	kinopoiskId: number
	ratingImdb?: number
	filmLength?: number
	nameRu?: string
	nameEn: string
	posterUrl?: string
	posterUrlPreview: string
	ratingKinopoisk: number
	genres: { genre: string }[]
	year: number
	countries: { country: string }[]
	description?: string
	ratingAgeLimits?: string
}

export interface MoviesListResponse {
	total: number
	totalPages: number
	items: MovieType[]
}

