import React from 'react'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './styles.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Dorina Fodrász | Fodrászat Miskolc',
  description:
    'Dorina Fodrász Miskolcon — női és férfi hajvágás, festés, balayage, melír, styling. Stílus és gondoskodás minden vendégnek. Foglalj időpontot online!',
  openGraph: {
    title: 'Dorina Fodrász | Fodrászat Miskolc',
    description:
      'Stílus és gondoskodás minden vendégnek. Női és férfi hajvágás, festés, balayage, melír, styling Miskolcon.',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`scroll-smooth ${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-rose-400 selection:text-white">
        {children}
      </body>
    </html>
  )
}
