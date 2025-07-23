import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import CrispChat from '@/components/crisp-chat'
import Script from 'next/script'

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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SM31Z69SM9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SM31Z69SM9');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <CrispChat />
      </body>
    </html>
  )
}
