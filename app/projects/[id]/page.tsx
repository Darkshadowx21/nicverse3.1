'use client';

import React, { useState } from 'react';
import { Star, Download, ArrowLeft, ChevronDown, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { projects } from '../data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import SpoilerPreview from '../components/SpoilerPreview';
import { FeaturePreview } from '../components/FeaturePreview';
import ImageGallery from '../components/ImageGallery';
import Script from 'next/script'
import Breadcrumb from '../../components/Breadcrumb';

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const project = projects.find((p) => p.id === params.id);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedVersion, setSelectedVersion] = useState(project?.version || "");
    const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
    
    // Get available versions from project data, filtered by enabled status
    const availableVersions = project?.versionLinks
        ?.filter(v => v.isEnabled !== false) // Show if isEnabled is true or undefined
        ?.map(v => v.version) || 
        // Fallback to current version only if no versionLinks provided
        (project ? [project.version] : []);

    // Check if we have multiple versions available
    const hasMultipleVersions = availableVersions.length > 1;

    const handleDownload = (version: string) => {
        // Find the specific version link or use default
        const versionLink = project?.versionLinks?.find(v => v.version === version)?.downloadUrl || project?.downloadUrl;
        window.open(versionLink, '_blank');
        setIsDownloadDialogOpen(false);
        setSelectedVersion(version);
    };

    const getCategoryStyles = (category: string) => {
        switch (category) {
            case 'texture-pack':
                return {
                    text: 'text-blue-600 dark:text-blue-400',
                    bg: 'bg-blue-500/10',
                    border: 'border-blue-500/30',
                    gradient: 'from-blue-500 to-blue-600'
                };
            case 'addon':
                return {
                    text: 'text-green-600 dark:text-green-400',
                    bg: 'bg-green-500/10',
                    border: 'border-green-500/30',
                    gradient: 'from-green-500 to-green-600'
                };
            case 'skin':
                return {
                    text: 'text-orange-600 dark:text-orange-400',
                    bg: 'bg-orange-500/10',
                    border: 'border-orange-500/30',
                    gradient: 'from-orange-500 to-orange-600'
                };
            case 'map':
                return {
                    text: 'text-red-600 dark:text-red-400',
                    bg: 'bg-red-500/10',
                    border: 'border-red-500/30',
                    gradient: 'from-red-500 to-red-600'
                };
            default:
                return {
                    text: 'text-purple-600 dark:text-purple-400',
                    bg: 'bg-purple-500/10',
                    border: 'border-purple-500/30',
                    gradient: 'from-purple-500 to-purple-600'
                };
        }
    };

    if (!project) {
        return (
            <div className="container py-4 px-4 sm:py-8 sm:px-6">
                <Button variant="ghost" onClick={() => router.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <div className="text-center mt-8">Project not found</div>
            </div>
        );
    }

    const categoryStyle = getCategoryStyles(project.category);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: project.title,
        description: project.fullDescription,
        image: project.previewImages[0],
        category: project.category,
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD'
        }
    };

    return (
        <>
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="relative">
                <div className="container max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-8 lg:py-12">
                    <Breadcrumb
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Projects', href: '/projects' },
                            { label: project.title }
                        ]}
                        className="text-sm sm:text-base"
                    />

                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        {/* Header */}
                        <header className="space-y-4">
                            {/* Title and Category Row */}
                            <div className="flex items-start justify-between gap-3">
                                <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${categoryStyle.text} break-words flex-1`}>
                                    {project.title}
                                </h1>
                                <Badge
                                    variant="outline"
                                    className={`shrink-0 text-xs sm:text-sm ${categoryStyle.border} ${categoryStyle.bg} ${categoryStyle.text}`}
                                >
                                    {project.category}
                                </Badge>
                            </div>

                            {/* Author and Stats Row */}
                            <div className="flex items-center justify-between gap-4">
                                {project.author && (
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-8 h-8">
                                            <Image
                                                src={project.author.avatar}
                                                alt={project.author.name}
                                                fill
                                                className="rounded-full object-cover border-2 border-gray-200 dark:border-gray-800"
                                                sizes="32px"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">
                                                {project.author.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {project.author.role}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-3" aria-label="Project statistics">
                                    <span className="flex items-center gap-1">
                                        <Star className={`w-4 h-4 ${categoryStyle.text}`} />
                                        <span className="text-sm">{project.stars}</span>
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {project.version}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {project.size}
                                    </span>
                                </div>
                            </div>
                        </header>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {project.fullDescription}
                        </p>

                        {/* Preview Image */}
                        <div
                            className="cursor-pointer rounded-lg overflow-hidden"
                            onClick={() => {
                                setSelectedImageIndex(0);
                                setGalleryOpen(true);
                            }}
                            role="button"
                            aria-label="Open preview image in gallery"
                        >
                            <SpoilerPreview image={project.previewImages[0]} />
                        </div>

                        {/* Features Section */}
                        {project.features.length > 0 && (
                            <div className="space-y-3 sm:space-y-4">
                                <h2 className="text-lg sm:text-xl font-semibold">KEY FEATURES</h2>
                                <FeaturePreview features={project.features} />
                            </div>
                        )}

                        {/* Existing Screenshots & Credits & Terms */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="screenshots" className={`border-${categoryStyle.text}/20`}>
                                <AccordionTrigger className={`hover:${categoryStyle.text}`}>
                                    <span className={`${categoryStyle.text} font-semibold text-sm sm:text-base`}>
                                        SCREENSHOTS
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                        {project.previewImages.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer group"
                                                onClick={() => {
                                                    setSelectedImageIndex(idx);
                                                    setGalleryOpen(true);
                                                }}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Screenshot ${idx + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    priority={idx === 0}
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                                    <span className="text-white text-sm px-3 py-1 rounded-full bg-black/50">
                                                        {img.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ')}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="credits" className="border-purple-500/20">
                                <AccordionTrigger className="hover:text-purple-500">
                                    <span className="text-purple-500 font-semibold">CREDITS</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2">
                                        {project.credits.map((credit, index) => (
                                            <li key={index}>
                                                {credit.name}: {credit.author} [
                                                <a
                                                    href={credit.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 hover:text-blue-600 hover:underline"
                                                >
                                                    {credit.project}
                                                </a>
                                                ]
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="terms" className="border-orange-500/20">
                                <AccordionTrigger className="hover:text-orange-500">
                                    <span className="text-orange-500 font-semibold">TERMS OF USE</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-green-500 mb-2">Allowed</h3>
                                            <ul className="space-y-2">
                                                {project.terms.allowed.map((item, index) => (
                                                    <li key={index}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-red-500 mb-2">Prohibited</h3>
                                            <ul className="space-y-2">
                                                {project.terms.prohibited.map((item, index) => (
                                                    <li key={index}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Download Button */}
                        <div className="flex justify-center px-4 sm:px-0">
                            <Button
                                size="lg"
                                className={`w-full max-w-md bg-gradient-to-r ${categoryStyle.gradient} 
                                    hover:opacity-90 text-white text-sm sm:text-base py-6 sm:py-8 flex items-center justify-center font-medium shadow-md rounded-lg`}
                                onClick={() => {
                                    if (hasMultipleVersions) {
                                        setIsDownloadDialogOpen(true);
                                    } else {
                                        // If only one version, download it directly
                                        handleDownload(availableVersions[0]);
                                    }
                                }}
                            >
                                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" /> 
                                Download {selectedVersion ? `(${selectedVersion})` : ''}
                            </Button>
                        </div>

                        {/* Download Dialog - Only shown if multiple versions available */}
                        {hasMultipleVersions && (
                            <Dialog open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle className="text-center text-xl font-bold">Select Version</DialogTitle>
                                        <DialogDescription className="text-center">
                                            Choose the version you want to download
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        {availableVersions.map((version) => (
                                            <Button
                                                key={version}
                                                onClick={() => handleDownload(version)}
                                                className={`w-full py-6 text-base font-medium ${
                                                    version === project.version 
                                                    ? `bg-gradient-to-r ${categoryStyle.gradient} text-white hover:opacity-90` 
                                                    : 'bg-secondary hover:bg-secondary/80'
                                                }`}
                                            >
                                                Version {version}
                                            </Button>
                                        ))}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        )}

                        <ImageGallery
                            images={project.previewImages}
                            initialIndex={selectedImageIndex}
                            isOpen={galleryOpen}
                            onClose={() => setGalleryOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailPage; 