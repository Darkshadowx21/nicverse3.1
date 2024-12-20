import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./components/ThemeProvider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './globals.css'
import GoogleAdsScript from './components/GoogleAdsScript'
import ConditionalAds from './components/ConditionalAds'
import AdUnit from './components/AdUnit'
import GoogleAnalytics from './components/GoogleAnalytics'
import { AdErrorBoundary } from './components/AdErrorBoundary'
import { AdsenseProvider } from './components/AdsenseProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://notnicto.com'),
  title: {
    template: '%s | NicVerse',
    default: 'NicVerse | Minecraft Bedrock Creations',
  },
  description: 'Discover high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps at NicVerse. Enhance your Minecraft experience with our curated collection.',
  keywords: 'minecraft, bedrock, texture packs, addons, skins, maps, nicverse',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'NicVerse',
    title: 'NicVerse | Minecraft Bedrock Creations',
    description: 'Discover high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps.',
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
  verification: {
    google: '6JQqJ_bae-gvhPS88cObqIziQbXr2Ddx8XQTzf6T5P8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAdsScript />
        <GoogleAnalytics />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <GoogleAdsScript />
        <GoogleAnalytics />

        <AdsenseProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
              <Header />

              <AdErrorBoundary>
                <ConditionalAds />
              </AdErrorBoundary>

              <main className="flex-grow">
                {children}
              </main>

              <div className="container mx-auto px-4">
                <AdErrorBoundary>
                  <AdUnit
                    adSlot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || ''}
                    className="my-4"
                  />
                </AdErrorBoundary>
              </div>

              <Footer />
            </div>
          </ThemeProvider>
        </AdsenseProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (window.adsbygoogle) {
                  const event = new Event('adsLoaded');
                  window.dispatchEvent(event);
                }
              });
            `
          }}
        />
      </body>
    </html>
  )
}
