import { Metadata, ResolvingMetadata } from 'next'
import { projects } from '../data'

type Props = {
  params: { id: string }
  children: React.ReactNode
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    return {
      title: 'Minecraft Resource Not Found',
      description: 'The requested Minecraft resource pack or addon could not be found.',
    }
  }

  const images = project.previewImages.map(img => ({
    url: img,
    width: 1200,
    height: 630,
    alt: `${project.title} - Minecraft ${project.category} preview`,
  }))

  return {
    title: `${project.title} - Minecraft ${project.category} | NicVerse`,
    description: `${project.fullDescription} Compatible with Minecraft ${project.features.includes('Java') ? 'Java Edition' : 'Bedrock Edition'}.`,
    keywords: [
      project.category,
      ...project.features,
      'minecraft',
      'minecraft resource pack',
      'minecraft texture pack',
      'minecraft addon',
      'minecraft mod',
      project.title.toLowerCase(),
      'minecraft customization',
      'game modification',
      project.features.includes('Java') ? 'minecraft java' : 'minecraft bedrock',
    ],
    openGraph: {
      title: `${project.title} - Minecraft ${project.category}`,
      description: project.fullDescription,
      images: images,
      type: 'website',
      locale: 'en_US',
      siteName: 'NicVerse',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Minecraft ${project.category}`,
      description: project.fullDescription,
      images: images,
      creator: '@notnicto',
    },
    alternates: {
      canonical: `https://notnicto.com/projects/${params.id}`,
    },
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
    authors: [{ name: 'notNicto' }],
    category: `Minecraft ${project.category}`,
  }
}

function generateStructuredData(project: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${project.title} - Minecraft ${project.category}`,
    description: project.fullDescription,
    applicationCategory: 'GameModification',
    operatingSystem: project.features.includes('Java') ? 'Windows, macOS, Linux' : 'Windows 10+, iOS, Android',
    image: project.previewImages[0],
    author: {
      '@type': 'Person',
      name: 'notNicto',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/OnlineOnly',
      price: '0',
      priceCurrency: 'USD',
    },
    softwareRequirements: `Minecraft ${project.features.includes('Java') ? 'Java Edition' : 'Bedrock Edition'}`,
    genre: 'Gaming',
    gamePlatform: project.features.includes('Java') ? 'Minecraft Java Edition' : 'Minecraft Bedrock Edition',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Content Type',
        value: project.category
      },
      {
        '@type': 'PropertyValue',
        name: 'Minecraft Compatibility',
        value: project.features.includes('Java') ? 'Java Edition' : 'Bedrock Edition'
      }
    ]
  }
}

export default function ProjectLayout({ params, children }: Props) {
  // Find the project to generate structured data
  const project = projects.find(p => p.id === params.id)
  
  return (
    <>
      {project && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(project)),
          }}
        />
      )}
      {children}
    </>
  )
} 