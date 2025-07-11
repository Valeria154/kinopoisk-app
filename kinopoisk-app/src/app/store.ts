import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from '../redux/movie-slice'
import { favoritesReducer } from '../redux/favorites-slice'

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		favorites: favoritesReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch