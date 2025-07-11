import { NavLink } from 'react-router'
import type { ReactNode } from 'react'

function navLinkClass(isActive: boolean): string {
	const base = 'hover:bg-gray-300 hover:text-gray-700 hover:rounded py-2 flex items-center gap-2 space-x-1'
	const active = 'text-violet-400'
	const inactive = 'text-gray-300'

	return `${base} ${isActive ? active : inactive}`
}

interface NavItemProps {
	to: string
	children: ReactNode
	onClick?: () => void
}

export function NavItem({ to, children, onClick }: NavItemProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => navLinkClass(isActive)}
			onClick={onClick}
		>
			{children}
		</NavLink >
	)
}