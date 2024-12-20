'use client';

import Script from 'next/script';

export default function GoogleAdsScript() {
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

    if (!clientId) return null;

    return (
        <Script
            id="adsbygoogle-init"
            async
            crossOrigin="anonymous"
            strategy="afterInteractive"
            onError={(e) => {
                console.error('Error loading Google Ads script:', e);
                // Consider sending to your error tracking service
            }}
            onLoad={() => {
                console.log('Google Ads script loaded successfully');
            }}
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        />
    );
} 