import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

const rootElement: HTMLElement | null = document.querySelector('#root')

if (!rootElement) {
	throw new Error('Root element not found')
}

const root = createRoot(rootElement)

const app: React.ReactElement = <App />
root.render(app)