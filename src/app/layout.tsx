'use client'

import { queryClient } from '@/api/queries/queryClient.query'
import Base from '@/components/layouts/Base'
import { themeAtom } from '@/hooks/atoms/useTheme'
import '@/styles/globals.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const [theme] = useAtom(themeAtom)

  return (
    <html lang="en">
				<body className={twJoin('transition-colors duration-500 ease-in-out', theme === 'dark' && 'dark:bg-black dark:text-white' )}>
        <QueryClientProvider client={queryClient}>
          <Base>
            {children}
          </Base>
        </QueryClientProvider>
        </body>
    </html>
  )
}
