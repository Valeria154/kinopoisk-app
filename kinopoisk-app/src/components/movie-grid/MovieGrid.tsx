import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchMovieList } from '../../redux/movie-slice'
import { MovieCard } from '../movie-card/MovieCard'
import { useParams } from 'react-router'

export function MovieGrid() {
	const dispatch = useAppDispatch()
	const { list: movies, isLoading, error } = useAppSelector((state) => state.movie)

	const params = useParams<{ currentPage?: string }>() //Забираем currentPage из url 
	const pageNum = Number(params.currentPage) || 1 // приводим к number

	useEffect(() => {
		dispatch(fetchMovieList(pageNum))
	}, [dispatch, pageNum])

	if (isLoading) return <p className="text-gray-500">Loading...</p>
	if (error) return <p className="text-red-500">{error}</p>

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
			{movies.map((movie) => (
				<MovieCard key={movie.kinopoiskId} movie={movie} />
			))}
		</div>
	)
}