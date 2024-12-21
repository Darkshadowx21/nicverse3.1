'use client';

import { useEffect, useRef, useState } from 'react';
import { useAdsenseContext } from './AdsenseProvider';

interface AdUnitProps {
    adSlot: string;
    adFormat?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
    style?: React.CSSProperties;
}

export default function AdUnit({ adSlot, adFormat = 'auto', className = '', style }: AdUnitProps) {
    const adRef = useRef<HTMLDivElement>(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { isReady, isBlocked } = useAdsenseContext();
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

    useEffect(() => {
        if (!adSlot || !clientId || isError || !isReady || isBlocked) return;

        const loadAd = async () => {
            if (!adRef.current) return;

            try {
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, Math.random() * 500));

                const adsbygoogle = (window as any).adsbygoogle || [];

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

                if (typeof adsbygoogle.push === 'function') {
                    adsbygoogle.push({});
                    setIsLoading(false);
                } else {
                    const checkAdsbyGoogle = setInterval(() => {
                        if (typeof adsbygoogle.push === 'function') {
                            adsbygoogle.push({});
                            setIsLoading(false);
                            clearInterval(checkAdsbyGoogle);
                        }
                    }, 300);

                    setTimeout(() => {
                        clearInterval(checkAdsbyGoogle);
                        if (isLoading) {
                            setIsError(true);
                            setIsLoading(false);
                        }
                    }, 5000);
                }
            } catch (err) {
                console.error('Error loading ad:', err);
                setIsError(true);
                setIsLoading(false);
            }
        };

        loadAd();

        return () => {
            if (adRef.current) {
                adRef.current.innerHTML = '';
            }
        };
    }, [adSlot, adFormat, clientId, isError, isReady, isBlocked]);

    if (isError || !adSlot || !clientId || !isReady || isBlocked) return null;

    return (
        <div ref={adRef} className={`min-h-[100px] w-full ${className}`} style={style}>
            {isLoading ? (
                <div className="text-center text-sm text-gray-500 animate-pulse">
                    Loading advertisement...
                </div>
            ) : (
                <div className="text-center text-sm text-gray-500">
                    Advertisement
                </div>
            )}
        </div>
    );
} 