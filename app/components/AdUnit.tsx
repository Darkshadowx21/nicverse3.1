'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
    adSlot: string;
    adFormat?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
}

export default function AdUnit({ adSlot, adFormat = 'auto', className = '' }: AdUnitProps) {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!adSlot || !process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) return;

        if (adRef.current) {
            try {
                const adsbygoogle = (window as any).adsbygoogle || [];
                const adElement = document.createElement('ins');
                adElement.className = 'adsbygoogle';
                adElement.style.display = 'block';
                adElement.dataset.adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
                adElement.dataset.adSlot = adSlot;
                adElement.dataset.adFormat = adFormat;
                adElement.dataset.fullWidthResponsive = 'true';

                // Clear previous ad if any
                if (adRef.current.firstChild) {
                    adRef.current.innerHTML = '';
                }
                
                adRef.current.appendChild(adElement);
                
                // Push the ad only if adsbygoogle is loaded
                if (typeof adsbygoogle.push === 'function') {
                    adsbygoogle.push({});
                }
            } catch (err) {
                console.error('Error loading ad:', err);
            }
        }
    }, [adSlot, adFormat]);

    return (
        <div ref={adRef} className={`min-h-[100px] w-full ${className}`}>
            <div className="text-center text-sm text-gray-500">Advertisement</div>
        </div>
    );
} 