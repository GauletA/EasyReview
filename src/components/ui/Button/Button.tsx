"use client"

import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
    children: ReactNode
    onClick: () => void
    className?: string
}

export default function Button({children,  className, onClick}: Props) {
    return (
        <button
            className={twMerge("group px-3 py-1 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", className)}
            onClick={() => {
                onClick()
            }}>
                {children}
        </button>
    ) 
}