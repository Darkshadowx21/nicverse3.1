'use client';

import React from 'react';
import AdUnit from './AdUnit';

interface SideAdProps {
    adSlot: string;
    className?: string;
    side?: 'left' | 'right';
}

const SideAd: React.FC<SideAdProps> = ({ adSlot, className, side = 'left' }) => {
    return (
        <div className={`
            hidden lg:block fixed ${side}-4 top-24 bottom-0 w-[160px]
            ${className}
        `}>
            <div className="sticky top-24 h-[calc(100vh-6rem)]">
                <AdUnit
                    adSlot={adSlot}
                    className="w-full h-full"
                    style={{
                        display: 'inline-block',
                        width: '160px',
                        height: '600px'
                    }}
                />
            </div>
        </div>
    );
};

export default SideAd; 