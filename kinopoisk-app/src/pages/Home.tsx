import { useParams } from 'react-router'
import { MovieGrid } from '../components/movie-grid/MovieGrid'
import { Pagination } from '../components/pagination/pagination'

export function Home() {
	const { currentPage } = useParams<{ currentPage?: string }>()
	const pageNum = Number(currentPage) || 1

	return (
		<>
			<MovieGrid />
			<Pagination currentPage={pageNum} basePath="/movies/all" />
		</>
	)
}