import React from 'react';
import Image from 'next/image';
import { Star,Download } from 'lucide-react';
import { Project } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const categoryStyles = {
  'texture-pack': {
    card: 'hover:border-blue-500/30 hover:bg-blue-500/10',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    title: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
  },
  'addon': {
    card: 'hover:border-green-500/30 hover:bg-green-500/10',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    title: 'group-hover:text-green-600 dark:group-hover:text-green-400',
  },
  'skin': {
    card: 'hover:border-orange-500/30 hover:bg-orange-500/10',
    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    title: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
  },
  'map': {
    card: 'hover:border-red-500/30 hover:bg-red-500/10',
    badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    title: 'group-hover:text-red-600 dark:group-hover:text-red-400',
  }
} as const;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();
  const styles = categoryStyles[project.category as keyof typeof categoryStyles] || {
    card: 'hover:border-purple-500/30 hover:bg-purple-500/10',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    title: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
  };

  return (
    <Card className={`group overflow-hidden h-full flex flex-col transition-all duration-300 ${styles.card}`}>
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={project.previewImages[0]}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`font-semibold text-base sm:text-lg line-clamp-2 transition-colors ${styles.title}`}>
            {project.title}
          </h3>
          <Badge className={styles.badge}>{project.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Star className={`w-4 h-4 ${styles.title}`} /> {project.stars}
          </span>
          <span>{project.version}</span>
          <span>{project.size}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => router.push(`/projects/${project.id}`)}
          variant="outline"
          size="sm"
          className={`w-full ${styles.card}`}
        >
          <Download className="w-4 h-4 mr-2" /> Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard; 