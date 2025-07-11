import { NavItem } from '../nav-item/NavItem'
import { House, Flame, Bookmark, Settings } from 'lucide-react'

const items = [
	{ to: "/", icon: <House size={18} />, label: "Home" },
	{ to: "/trends", icon: <Flame size={18} />, label: "Trends" },
	{ to: "/favorites", icon: <Bookmark size={18} />, label: "Favorites" },
	{ to: "/settings", icon: <Settings size={18} />, label: "Setting" },
]

interface Props {
	vertical?: boolean
	onClose?: () => void
}

export function NavBar({ vertical = false, onClose }: Props) {
	const base = vertical ? 'flex flex-col gap-3 py-2' : 'flex gap-4 items-center'

	return (
		<nav className={base}>
			{items.map(({ to, icon, label }) => (
				<NavItem to={to} key={to} onClick={onClose}>
					{icon}
					<span>{label}</span>
				</NavItem>
			))}
		</nav>
	)
}