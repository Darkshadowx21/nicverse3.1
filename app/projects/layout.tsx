import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minecraft Projects | NicVerse',
  description: 'Explore our collection of Minecraft Bedrock texture packs, add-ons, skins, and maps. Download high-quality Minecraft resources to enhance your gaming experience.',
  keywords: 'minecraft bedrock, texture packs, minecraft addons, minecraft skins, minecraft maps, nicverse projects',
  openGraph: {
    title: 'Minecraft Projects | NicVerse',
    description: 'Download high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps.',
    type: 'website',
    url: 'https://notnicto.com/projects',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NicVerse Minecraft Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minecraft Projects | NicVerse',
    description: 'Download high-quality Minecraft Bedrock texture packs, add-ons, skins, and maps.',
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://notnicto.com/projects'
  }
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 