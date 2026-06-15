import React from 'react'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'
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

const defaultSeoTitle = 'Dorina Fodrász | Fodrászat Miskolc'
const defaultSeoDescription =
  'Dorina Fodrász Miskolcon — női és férfi hajvágás, festés, balayage, melír, styling. Stílus és gondoskodás minden vendégnek. Foglalj időpontot online!'

export async function generateMetadata(): Promise<Metadata> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'settings' }).catch(() => null)

  const title = settings?.seoTitle || defaultSeoTitle
  const description = settings?.seoDescription || defaultSeoDescription

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: 'hu_HU',
      type: 'website',
    },
  }
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
