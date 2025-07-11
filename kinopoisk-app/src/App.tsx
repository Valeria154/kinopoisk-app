import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouterProvider } from 'react-router'
import { router } from './router'

export function App(): React.ReactElement {

	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}