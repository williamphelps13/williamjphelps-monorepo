import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Provider from '../utils/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To Dos App',
  description: 'A To Dos app built with Next.js and FastAPI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
