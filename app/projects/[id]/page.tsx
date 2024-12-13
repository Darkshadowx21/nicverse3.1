'use client';

import React, { useState } from 'react';
import { Star, Download, ArrowLeft } from 'lucide-react';
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
import SpoilerPreview from '../components/SpoilerPreview';
import { FeaturePreview } from '../components/FeaturePreview';
import ImageGallery from '../components/ImageGallery';
import { AdsDialog } from '../components/AdsDialog';
import Script from 'next/script'
import AdUnit from '../../components/AdUnit';

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const project = projects.find((p) => p.id === params.id);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [showAdsDialog, setShowAdsDialog] = useState(false);

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
            <div className="container max-w-4xl py-4 px-4 sm:py-8 sm:px-6">
                <Button variant="ghost" onClick={() => router.back()} className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>

                <AdUnit 
                    adSlot={process.env.NEXT_PUBLIC_ADSENSE_PROJECT_TOP_SLOT || ''} 
                    className="my-6"
                />

                <div className="space-y-6">
                    {/* Header */}
                    <header className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
                            <Badge variant="secondary" className="w-fit">
                                {project.category}
                            </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm" aria-label="Project statistics">
                            <span className="flex items-center gap-1">
                                <Star className="w-4 h-4" aria-hidden="true" />
                                <span aria-label="Star rating">{project.stars}</span>
                            </span>
                            <span className="text-muted-foreground">
                                <span className="sr-only">Version:</span> {project.version}
                            </span>
                            <span className="text-muted-foreground">
                                <span className="sr-only">Size:</span> {project.size}
                            </span>
                        </div>
                    </header>

                    {/* Description */}
                    <p className="text-muted-foreground">
                        {project.fullDescription}
                    </p>

                   

                    {/* Preview Image */}
                    <div 
                        className="mb-6 cursor-pointer"
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
                        <div>
                            <h2 className="font-semibold mb-4">KEY FEATURES</h2>
                            <FeaturePreview features={project.features} />
                        </div>
                    )}

                    <AdUnit 
                        adSlot={process.env.NEXT_PUBLIC_ADSENSE_PROJECT_MIDDLE_SLOT || ''} 
                        className="my-6"
                    />

                    {/* Existing Screenshots & Credits & Terms */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="screenshots" className="border-blue-500/20">
                            <AccordionTrigger className="hover:text-blue-500">
                                <span className="text-blue-500 font-semibold">SCREENSHOTS</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-2 gap-2">
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

                    <AdUnit 
                        adSlot={process.env.NEXT_PUBLIC_ADSENSE_PROJECT_BOTTOM_SLOT || ''} 
                        className="my-6"
                    />

                    {/* Download Button */}
                    <div className="flex justify-center gap-4">
                        <Button 
                            size="lg" 
                            className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                            onClick={() => setShowAdsDialog(true)}
                        >
                            <Download className="w-5 h-5 mr-2" /> Download
                        </Button>
                    </div>

                    <AdsDialog
                        isOpen={showAdsDialog}
                        onClose={() => {
                            setShowAdsDialog(false);
                        }}
                        onComplete={() => {
                            // Handle completion
                        }}
                        downloadUrl={project.downloadUrl}
                    />

                    <ImageGallery
                        images={project.previewImages}
                        initialIndex={selectedImageIndex}
                        isOpen={galleryOpen}
                        onClose={() => setGalleryOpen(false)}
                    />
                </div>
            </div>
        </>
    );
};

export default ProjectDetailPage; 