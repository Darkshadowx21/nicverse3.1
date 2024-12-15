import React from 'react';
import Image from 'next/image';
import { Star, Download } from 'lucide-react';
import { Project } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const categoryStyles = {
  'texture-pack': {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    hover: 'hover:text-blue-500',
    gradient: 'from-blue-500 to-blue-600'
  },
  'addon': {
    text: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    hover: 'hover:text-green-500',
    gradient: 'from-green-500 to-green-600'
  },
  'skin': {
    text: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    hover: 'hover:text-orange-500',
    gradient: 'from-orange-500 to-orange-600'
  },
  'map': {
    text: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    hover: 'hover:text-red-500',
    gradient: 'from-red-500 to-red-600'
  }
} as const;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();
  const styles = categoryStyles[project.category as keyof typeof categoryStyles] || {
    text: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    hover: 'hover:text-purple-500',
    gradient: 'from-purple-500 to-purple-600'
  };

  return (
    <Card 
      className={`group overflow-hidden h-full flex flex-col transition-all duration-300 
        border-2 shadow-sm hover:shadow-md ${styles.border} 
        hover:scale-[1.02] hover:${styles.bg}`}
    >
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={project.previewImages[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`font-semibold text-base sm:text-lg line-clamp-2 transition-colors ${styles.text}`}>
            {project.title}
          </h3>
          <Badge className={`${styles.bg} ${styles.text} border-none`}>
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.shortDescription}</p>

        <div className="flex items-center justify-between">
          {project.author && (
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                <Image
                  src={project.author.avatar}
                  alt={project.author.name}
                  fill
                  className="rounded-full object-cover border border-gray-200 dark:border-gray-800"
                  sizes="(max-width: 640px) 24px, 28px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.author.name}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  {project.author.role}
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Star className={`w-4 h-4 ${styles.text}`} /> {project.stars}
            </span>
            <span className="text-sm text-muted-foreground">{project.version}</span>
            <span className="text-sm text-muted-foreground">{project.size}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => router.push(`/projects/${project.id}`)}
          variant="outline"
          size="sm"
          className={`w-full ${styles.border} ${styles.bg} ${styles.text}`}
        >
          <Download className="w-4 h-4 mr-2" /> Download
        </Button>
      </CardFooter>
    </Card>
  );
};

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <input
        type="search"
        placeholder="Search projects..."
        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-800 
          bg-white dark:bg-gray-900 focus:outline-none focus:border-purple-500 
          dark:focus:border-purple-400 transition-colors"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export { SearchBar };
export default ProjectCard; 