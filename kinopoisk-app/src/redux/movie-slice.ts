import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { requestMovieList, requestMovie } from '../services/movies'
import type { MovieType } from '../types/movie'

interface MovieState {
	list: MovieType[]
	current: MovieType | null
	isLoading: boolean
	error: string | null
}

const initialState: MovieState = {
	list: [],
	current: null,
	isLoading: false,
	error: null,
}
export const fetchMovieList = createAsyncThunk<MovieType[], number>(
	'movie/fetchList',
	async (page) => {
		const data = await requestMovieList(page)
		return data || []
	}
)

export const fetchMovieById = createAsyncThunk<MovieType, string>(
	'movie/fetchById',
	async (id) => {
		const data = await requestMovie(id)
		return data!
	}
)

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovieList.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchMovieList.rejected, (state, action) => {
				state.error = action.error.message || null
				state.isLoading = false
			})
			.addCase(fetchMovieList.fulfilled, (state, action: PayloadAction<MovieType[]>) => {
				state.list = action.payload
				state.isLoading = false
			})
			.addCase(fetchMovieById.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchMovieById.rejected, (state, action) => {
				state.error = action.error.message || null
				state.isLoading = false
			})
			.addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<MovieType>) => {
				state.current = action.payload
				state.isLoading = false
			})
	}
})

export const movieReducer = movieSlice.reducer