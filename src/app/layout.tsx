import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rosemond Films',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900 text-slate-300 mx-auto`}>
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
