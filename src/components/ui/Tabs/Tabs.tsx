'use client'

import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
	titles: string[]
	onSwitch: (index: number) => void
	className?: string
	variant?: 'outlined'
	checkedIndex: number
}
// TODO: A Voir
export default function Tabs({ checkedIndex = 0, titles, onSwitch, className, variant }: Props) {
	const buttonsRef = useRef<HTMLButtonElement>()
	const [{ marginLeft, width }, setPosXWidth] = useState({ marginLeft: 0, width: 0 })

	useEffect(() => {
		if (buttonsRef.current) {
			setPosXWidth({
				marginLeft: Math.abs(buttonsRef.current?.offsetLeft),
				width: buttonsRef.current?.offsetWidth
			})
		}
	}, [checkedIndex])

	return (
		<div
			className={twMerge(
				'relative flex h-full w-max items-center rounded-full p-3',
				className,
				!variant && 'bg-gray-100 dark:bg-gray-900'
			)}
		>
			<div className='absolute left-0 top-0 h-full p-2'>
				<div
					className={twMerge(
						'flex h-full items-center justify-center transition-all duration-700 ease-in-out',
						variant ? 'border-b-2 border-red-500' : 'rounded-full bg-white dark:bg-slate-800'
					)}
					style={{ width, marginLeft: marginLeft - 8 }}
				/>
			</div>
			<div className='z-20 flex w-full justify-between space-x-3'>
				{Array.from({ length: titles.length }, (_, index) => (
					<button
						ref={(el) => {
							if (checkedIndex === index && el) buttonsRef.current = el
						}}
						key={index}
						className={twMerge(
							'h-full w-auto p-3 text-sm font-semibold text-gray-500',
							checkedIndex === index && 'text-red-500'
						)}
						onClick={() => onSwitch(index)}
					>
						{titles && titles[index]}
					</button>
				))}
			</div>
		</div>
	)
}
