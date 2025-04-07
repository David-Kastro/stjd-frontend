import type { Metadata } from 'next'
import '../polyfills'

import './globals.css'

import MenuTop from '@/_components/MenuTop'
import Footer from '@/_components/Footer'

import { Inter, Fira_Sans } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const firaSans = Fira_Sans({
  subsets: ['latin'],
  variable: '--font-fira-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'STJD | Superior Tribunal de Justiça Desportiva',
  description: 'Superior Tribunal de Justiça Deportiva',
  keywords: [
    'stjd',
    'Superior Tribunal de Justiça Deportiva do Futebol',
    'Futebol',
    'Campeonados',
    'CBF',
    'FIFA',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="preload"
          href="/next/static/media/Antique-Bronze.svg"
          as="image"
        />
      </head>
      <body className={inter.className + ' ' + firaSans.variable}>
        <MenuTop />
        {children}
        <Footer />
      </body>
    </html>
  )
}
