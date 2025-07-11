import type { ReactNode } from "react"

interface ContainerProps {
	children: ReactNode
	className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
	return (
		<div
			className={'max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8' + className}
		>
			{children}
		</div >
	)
}