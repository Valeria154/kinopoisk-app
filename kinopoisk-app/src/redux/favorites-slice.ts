import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
	favorites: number[]
}

const loadFromStorage = (): number[] => {
	try {
		const store = localStorage.getItem('favorites')
		return store ? JSON.parse(store) : []
	} catch {
		return []
	}
}

const initialState: FavoritesState = {
	favorites: loadFromStorage()
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<number>) => {
			const id = action.payload
			const exists = state.favorites.includes(id)

			if (exists) {
				state.favorites = state.favorites.filter(item => item !== id)
			} else {
				state.favorites.push(id)
			}

			localStorage.setItem('favorites', JSON.stringify(state.favorites))
		}
	}
})

export const { toggleFavorite } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer