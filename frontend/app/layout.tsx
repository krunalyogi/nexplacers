import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import  CrispChat  from '@/components/crisp-chat'

export const metadata: Metadata = {
  title: 'nexplacers',
  description: 'Created with moj masti',
  generator: 'khabar nai',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />      {/* ✅ Keep this only once */}
        <CrispChat />
      </body>
    </html>
  )
}
