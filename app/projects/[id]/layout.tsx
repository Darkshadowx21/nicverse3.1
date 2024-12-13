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
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - NicVerse`,
    description: project.fullDescription,
    openGraph: {
      title: project.title,
      description: project.fullDescription,
      images: [project.previewImages[0]],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.fullDescription,
      images: [project.previewImages[0]],
    },
    keywords: [project.category, ...project.features],
  }
}

export default function ProjectLayout({ children }: Props) {
  return children
} 