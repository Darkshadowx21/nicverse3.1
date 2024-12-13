'use client';

import { motion } from "framer-motion";
import { Shield, Check, X, AlertTriangle } from "lucide-react";

export default function TermsPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <main className="container mx-auto py-12 px-4 min-h-screen">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto"
            >
                {/* Header */}
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <Shield className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground">
                        Please read these terms carefully before using our texture packs
                    </p>
                </motion.div>

                {/* Allowed Section */}
                <motion.div 
                    variants={itemVariants}
                    className="mb-8 backdrop-blur-sm bg-green-500/5 border border-green-500/10 p-8 rounded-xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Check className="w-8 h-8 text-green-500" />
                        <h2 className="text-2xl font-semibold text-green-500">Allowed</h2>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Showcase the Addon/Texture Pack in videos with proper credit to me, notnicto and a link to MCPEDL/CURSEFORGE/NICVERSE",
                            "Modify the Addon/Texture Pack for personal use",
                            "Share the texture pack using the MCPEDL/Curseforge/NICVERSE link"
                        ].map((item, index) => (
                            <motion.li 
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-3"
                            >
                                <Check className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Prohibited Section */}
                <motion.div 
                    variants={itemVariants}
                    className="mb-8 backdrop-blur-sm bg-red-500/5 border border-red-500/10 p-8 rounded-xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <X className="w-8 h-8 text-red-500" />
                        <h2 className="text-2xl font-semibold text-red-500">Prohibited</h2>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Claim the Addon/Texture Pack as your own",
                            "Modify the Addon/Texture Pack for public use",
                            "Upload the Addon/Texture Pack on any third-party website (Ex: 9Minecraft, MinecraftMods) or App",
                            "Showcase or use the Addon/Texture Pack without providing proper credits",
                            "Use mediafire or direct links for downloading the pack"
                        ].map((item, index) => (
                            <motion.li 
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-3"
                            >
                                <X className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Legal Notice */}
                <motion.div 
                    variants={itemVariants}
                    className="mb-8 backdrop-blur-sm bg-orange-500/5 border border-orange-500/10 p-8 rounded-xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-orange-500" />
                        <h2 className="text-2xl font-semibold text-orange-500">Legal Notice</h2>
                    </div>
                    <p className="text-orange-500/90 flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                        Legal actions will be pursued against those who fail to comply with these terms of use.
                    </p>
                </motion.div>

                {/* Footer */}
                <motion.div 
                    variants={itemVariants}
                    className="text-sm text-muted-foreground text-center border-t border-border pt-8"
                >
                    <p>Last updated: {formatDate(new Date())}</p>
                    <p className="mt-2">These terms are subject to change without notice. Please check regularly for updates.</p>
                </motion.div>
            </motion.div>
        </main>
    );
} 