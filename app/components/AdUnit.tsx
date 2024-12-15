'use client';

import { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
    adSlot: string;
    adFormat?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
}

export default function AdUnit({ adSlot, adFormat = 'auto', className = '' }: AdUnitProps) {
    const adRef = useRef<HTMLDivElement>(null);
    const [isError, setIsError] = useState(false);
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

    useEffect(() => {
        if (!adSlot || !clientId || isError) return;

        const loadAd = async () => {
            if (!adRef.current) return;

            try {
                const adsbygoogle = (window as any).adsbygoogle || [];

                // Clean up any existing ad
                if (adRef.current.firstChild) {
                    adRef.current.innerHTML = '';
                }

                const adElement = document.createElement('ins');
                adElement.className = 'adsbygoogle';
                adElement.style.display = 'block';
                adElement.dataset.adClient = clientId;
                adElement.dataset.adSlot = adSlot;
                adElement.dataset.adFormat = adFormat;
                adElement.dataset.fullWidthResponsive = 'true';

                adRef.current.appendChild(adElement);

                // Wait for adsbygoogle to be ready
                if (typeof adsbygoogle.push === 'function') {
                    adsbygoogle.push({});
                } else {
                    // Retry after a short delay if adsbygoogle is not ready
                    setTimeout(() => {
                        if (typeof adsbygoogle.push === 'function') {
                            adsbygoogle.push({});
                        }
                    }, 1000);
                }
            } catch (err) {
                console.error('Error loading ad:', err);
                setIsError(true);
            }
        };

        loadAd();

        return () => {
            if (adRef.current) {
                adRef.current.innerHTML = '';
            }
        };
    }, [adSlot, adFormat, clientId, isError]);

    if (isError || !adSlot || !clientId) return null;

    return (
        <div ref={adRef} className={`min-h-[100px] w-full ${className}`}>
            <div className="text-center text-sm text-gray-500">Advertisement</div>
        </div>
    );
} 