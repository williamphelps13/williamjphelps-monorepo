import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
