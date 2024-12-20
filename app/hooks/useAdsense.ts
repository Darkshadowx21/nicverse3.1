import { useState, useEffect } from 'react';

export function useAdsense() {
    const [isAdsBlocked, setIsAdsBlocked] = useState(false);

    useEffect(() => {
        const checkAdsBlocked = () => {
            if (typeof window === 'undefined') return;

            const isBlocked = !(window as any).adsbygoogle;
            setIsAdsBlocked(isBlocked);
        };

        // Check after a delay to ensure script has time to load
        setTimeout(checkAdsBlocked, 2000);
    }, []);

    return { isAdsBlocked };
} 