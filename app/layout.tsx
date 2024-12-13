import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./components/ThemeProvider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './globals.css'
import GoogleAdsScript from './components/GoogleAdsScript'
import ConditionalAds from './components/ConditionalAds'
import AdUnit from './components/AdUnit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://notnicto.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  title: 'NicVerse | Minecraft Bedrock Creations',
  description: 'Discover high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps at NicVerse. Enhance your Minecraft experience with our curated collection.',
  keywords: 'minecraft, bedrock, texture packs, addons, skins, maps, nicverse',
  openGraph: {
    title: 'NicVerse | Minecraft Bedrock Creations',
    description: 'Discover high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps.',
    type: 'website',
    url: 'https://notnicto.com',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NicVerse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NicVerse | Minecraft Bedrock Creations',
    description: 'Discover high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps.',
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <GoogleAdsScript />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
            <Header />
            <ConditionalAds />
            <main className="flex-grow">
              {children}
            </main>
            <div className="container mx-auto px-4">
              <AdUnit
                adSlot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || ''}
                className="my-4"
              />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
