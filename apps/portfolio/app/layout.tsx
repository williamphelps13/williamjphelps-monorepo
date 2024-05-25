import type { Metadata } from 'next'
import { Oxygen } from 'next/font/google'

import './globals.css'

const oxygen = Oxygen({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "William Phelps' Portfolio",
  description:
    'Showcases the software engineering work and experience of William Phelps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={oxygen.className}>{children}</body>
    </html>
  )
}
