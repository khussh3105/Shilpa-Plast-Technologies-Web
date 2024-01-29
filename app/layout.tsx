import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shilpa',
  description: 'Website for Shilpa Plastic (India) || Shilpa Plast Technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}