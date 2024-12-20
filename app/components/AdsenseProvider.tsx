'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useAdsense } from '../hooks/useAdsense';

interface AdsenseContextType {
    isReady: boolean;
    isBlocked: boolean;
}

const AdsenseContext = createContext<AdsenseContextType>({
    isReady: false,
    isBlocked: false,
});

export function AdsenseProvider({ children }: { children: React.ReactNode }) {
    const { isAdsBlocked } = useAdsense();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Set ready state after initial check
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AdsenseContext.Provider
            value={{
                isReady,
                isBlocked: isAdsBlocked,
            }}
        >
            {children}
        </AdsenseContext.Provider>
    );
}

export function useAdsenseContext() {
    return useContext(AdsenseContext);
} 