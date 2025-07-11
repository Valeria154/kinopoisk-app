import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: ReactNode
	className?: string
}

export function Input({ icon, className = '', ...props }: InputProps) {
	return (
		<div className="relative w-full">
			<input
				className={
					'w-full pl-10 pr-4 py-1 bg-transparent focus:outline-none focus:ring transition-colors ' + className
				}
				{...props}
			/>
			{icon &&
				<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
					{icon}
				</div>
			}
		</div>
	)
}