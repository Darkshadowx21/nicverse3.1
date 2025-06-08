import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Project } from '../types';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  return (
    <Card 
      className="group overflow-hidden bg-black rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer relative h-[240px]"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      {/* Main image that fills the entire card */}
      <div className="relative w-full h-full">
        <Image
          src={project.previewImages[0]}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* Title and subtitle */}
      <div className="absolute bottom-14 left-0 right-0 px-4">
        <h3 className="font-medium text-xl text-white">
          {project.title}
        </h3>
        {/* {project.shortDescription && (
          <h4 className="text-base text-white/70 truncate">
            {project.shortDescription.split(' ').slice(0, 2).join(' ')}
          </h4>
        )} */}
      </div>
      
      {/* Bottom bar with rating and app details */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center">
        {/* Rating */}
        <div className="flex items-center">
          <span className="font-medium text-sm mr-1 text-white">{project.stars.toFixed(1)}</span>
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </div>
        
        {/* Google Play icon */}
        {/* <div className="mx-2">
          <svg className="w-4 h-4" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
          </svg>
        </div> */}
        
        {/* Right side - App icon or price */}
        <div className="ml-auto">
          {(project as any).price ? (
            <span className="text-sm font-medium text-white">₹{(project as any).price}</span>
          ) : (
            project.author && (
              <div className="relative">
                <div className="w-10 h-10 relative rounded-xl overflow-hidden border border-gray-700">
                  <Image
                    src={project.author.avatar}
                    alt={`${project.title} icon`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
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