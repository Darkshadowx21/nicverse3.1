'use client';

import Script from 'next/script';

export default function GoogleAdsScript() {
    return (
        <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            async
            onError={(e) => {
                console.error('Script failed to load', e);
            }}
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
        />
    );
} 