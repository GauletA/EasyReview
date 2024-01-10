"use client"

import { ReactNode, useEffect } from "react"
import NavBar from "../NavBar/NavBar"
import { themeAtom } from "@/hooks/atoms/useTheme"
import { useAtom } from "jotai"

type Props = {
    children: ReactNode
}

export default function Base({children}: Props) {
    const [theme] = useAtom(themeAtom)

    useEffect(() => {
        console.log(theme);
		switch (theme) {
			case 'dark':
				document.documentElement.classList.add('dark')
				break
			case 'light':
				document.documentElement.classList.remove('dark')
				break
			default:
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.documentElement.classList.add('dark')
				}
		}
	}, [theme])
    
    return (
        <main className='layout min-h-screen w-full'>
            <div className="flex-none h-16"><NavBar /></div>
            <section className='relative flex h-full w-full flex-1 flex-col'>{children}</section>
        </main>
    )
}