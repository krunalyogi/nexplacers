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
          src="https://www.googletagmanager.com/gtag/js?id=G-FGSVJJC43D"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FGSVJJC43D');
            `,
          }}
        />
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
