import Navbar from '@/components/Global/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Global/Footer'
import { AOSInit } from '@/components/AOSInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScrpytX',
  description: 'Preserve Your Privacy with Unbreakable Email Security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='overflow-x-hidden'>
        <AOSInit/>
        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
