"use client"

import { useEffect, useState } from "react"
import { twMerge, twJoin } from "tailwind-merge"

type Props = {
    className?: string
    isHidden?: boolean
    str: string
}

export default function ButtonHidden({ className, isHidden = false, str}: Props) {
    const [isHiddenState, setHiddenState] = useState(true)
    const [isStr, setStr] = useState('')

    useEffect(() => {
        setHiddenState(isHidden)
        setStr(str)
    }, [str, isHidden])

    return (
        <button
            className={twMerge("group px-3 py-1 rounded-lg border bg-blue-300 dark:bg-gray-950 border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30", className)}
            onClick={() => {
                setHiddenState(state => !state)
            }}>
                <span className={twJoin("text-xl", isHiddenState && "opacity-0")}>{isStr}</span>
        </button>
    ) 
}