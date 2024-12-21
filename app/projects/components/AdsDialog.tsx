'use client';

import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import AdUnit from '../../components/AdUnit';
import { useAdsenseContext } from '../../components/AdsenseProvider';

interface AdsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: () => void;
    downloadUrl: string;
}

export function AdsDialog({ isOpen, onClose, onComplete, downloadUrl }: AdsDialogProps) {
    const [timeLeft, setTimeLeft] = useState(15);
    const [hasDownloaded, setHasDownloaded] = useState(false);
    const { isReady } = useAdsenseContext();

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isOpen && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && !hasDownloaded) {
            onComplete();
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timeLeft, isOpen, onComplete, hasDownloaded]);

    useEffect(() => {
        if (isOpen) {
            setTimeLeft(20);
            setHasDownloaded(false);
        }
    }, [isOpen]);

    const handleDownload = () => {
        if (timeLeft === 0) {
            setHasDownloaded(true);
            // Open in new tab and ensure it's not blocked by popup blockers
            const newWindow = window.open(downloadUrl, '_blank');
            if (newWindow) {
                newWindow.focus();
            } else {
                // Fallback if popup is blocked
                window.location.href = downloadUrl;
            }
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Preparing Your Download</DialogTitle>
                    <DialogDescription>
                        {timeLeft > 0
                            ? `Your download will be ready in ${timeLeft} seconds.`
                            : 'Your download is ready!'
                        }
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 py-4">
                    <AdUnit
                        adSlot={process.env.NEXT_PUBLIC_ADSENSE_DOWNLOAD_SLOT || ''}
                        adFormat="rectangle"
                        className="w-full min-h-[250px]"
                    />

                    <Button
                        disabled={timeLeft > 0}
                        onClick={handleDownload}
                        className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        {timeLeft > 0 ? (
                            `Please wait ${timeLeft} seconds...`
                        ) : (
                            <>
                                <Download className="w-5 h-5 mr-2" /> Download Now
                            </>
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
} 