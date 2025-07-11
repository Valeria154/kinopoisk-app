import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavBar } from '../nav-bar/NavBar'

export function BurgerMenu() {
	const [mobileOpen, setMobileOpen] = useState(false)

	function toggleMenu() {
		setMobileOpen((open) => !open)
	}

	function closeMenu() {
		setMobileOpen(false)
	}

	return (
		<div className="relative lg:hidden">
			<button
				className="text-white mr-2"
				onClick={toggleMenu}
			>
				{mobileOpen ? <X size={24} /> : <Menu size={24} />}
			</button >

			{/* Мобильное меню */}
			{mobileOpen && (
				<div className="absolute left-0 top-12 w-screen z-50 bg-white dark:bg-gray-900 shadow-md">
					<NavBar vertical onClose={closeMenu} />
				</div>
			)}
		</div>
	)
}