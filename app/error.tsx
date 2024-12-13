'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-xl font-semibold mb-4">Something went wrong!</h2>
            <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
} 