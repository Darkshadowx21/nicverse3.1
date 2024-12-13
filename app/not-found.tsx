'use client';

import { motion } from 'framer-motion';
import { Home, Mail, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] px-4">
            <div className="text-center space-y-8">
                <div>
                    <h1 className="text-7xl font-bold text-primary">404</h1>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a 
                        href="/"
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Home className="w-4 h-4" />
                        <span>Go Home</span>
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </motion.a>

                    <motion.a 
                        href="/contact"
                        className="group flex items-center justify-center gap-2 px-6 py-3 border border-border hover:bg-muted rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                        <span className="group-hover:text-primary transition-colors">Contact Support</span>
                    </motion.a>
                </div>
            </div>
        </div>
    );
}