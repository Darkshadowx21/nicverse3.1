'use client';

import React from 'react';
import Image from 'next/image';

interface SpoilerPreviewProps {
    image: string;
}

const SpoilerPreview = ({ image }: SpoilerPreviewProps) => {
    return (
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
                src={image}
                alt="Preview"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
                priority
            />
        </div>
    );
};

export default SpoilerPreview; 