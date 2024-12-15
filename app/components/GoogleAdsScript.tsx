'use client';

import Script from 'next/script';

export default function GoogleAdsScript() {
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

    if (!clientId) return null;

    return (
        <Script
            id="adsbygoogle-init"
            async
            onError={(e) => {
                console.error('Error loading Google Ads script:', e);
            }}
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        />
    );
} 