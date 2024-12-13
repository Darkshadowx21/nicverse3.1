'use client';

import React, { useState, useEffect } from 'react';
import { projects } from './data';
import ProjectCard from './components/ProjectCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter projects based on both category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Minecraft Projects',
      description: 'Collection of Minecraft Bedrock texture packs, add-ons, skins, and maps',
      url: 'https://notnicto.com/projects',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'CreativeWork',
        position: index + 1,
        name: project.title,
        description: project.shortDescription,
        url: `https://notnicto.com/projects/${project.id}`,
        image: project.previewImages[0],
        category: project.category,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="container py-4 px-4 sm:py-8 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-transparent bg-clip-text">
          Minecraft Projects
        </h1>

        {/* Search Bar with updated styling */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-500" />
          <Input
            placeholder="Search projects..."
            className="pl-9 border-purple-200 dark:border-purple-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs
        defaultValue="all"
        className="mb-6 sm:mb-8"
        value={selectedCategory}
        onValueChange={setSelectedCategory}
      >
        <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-transparent">
          <TabsTrigger
            value="all"
            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          >
            All
            <span className="ml-2 text-xs opacity-70">
              ({projects.length})
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="texture-pack"
            className="flex-1 data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            Texture Packs
            <span className="ml-2 text-xs opacity-70">
              ({projects.filter(p => p.category === 'texture-pack').length})
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="addon"
            className="flex-1 data-[state=active]:bg-green-500 data-[state=active]:text-white hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
          >
            Add-ons
            <span className="ml-2 text-xs opacity-70">
              ({projects.filter(p => p.category === 'addon').length})
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="skin"
            className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
          >
            Skins
            <span className="ml-2 text-xs opacity-70">
              ({projects.filter(p => p.category === 'skin').length})
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="map"
            className="flex-1 data-[state=active]:bg-red-500 data-[state=active]:text-white hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          >
            Maps
            <span className="ml-2 text-xs opacity-70">
              ({projects.filter(p => p.category === 'map').length})
            </span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-100 dark:border-purple-900/30">
              No projects found matching your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;