import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const theme = localStorage.getItem('theme')
		setIsDark(theme === 'dark')
	}, [])

	useEffect(() => {
		const root = document.documentElement
		if (isDark) {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	function handleToggleTheme() {
		setIsDark((prev) => !prev)
	}

	return (
		<button
			className="text-gray-300 p-2 rounded focus:outline-none focus:ring"
			onClick={handleToggleTheme}
		>
			{isDark ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	)
}