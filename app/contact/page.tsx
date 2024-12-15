'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Animation variants for staggered animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default function ContactPage() {
    const router = useRouter()

    return (
        <AnimatePresence>
            <motion.div
                className="min-h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Hero Section */}
                <motion.section
                    aria-label="Introduction"
                    className="container relative px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Background gradients */}
                    <div className="absolute inset-0 grid grid-cols-3 -z-10 opacity-10">
                        <div className="bg-gradient-to-br from-purple-500 blur-3xl" />
                        <div className="bg-gradient-to-r from-purple-600 blur-3xl" />
                        <div className="bg-gradient-to-bl from-purple-700 blur-3xl" />
                    </div>

                    <motion.div
                        className="flex flex-col items-center space-y-6 sm:space-y-8"
                        variants={itemVariants}
                    >
                        <motion.div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 blur-sm" />
                            <Image
                                src="/notNicto.png"
                                alt="Creator Logo"
                                width={180}
                                height={180}
                                priority
                                className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-[180px] md:h-[180px] rounded-full border-2 border-purple-500/50 shadow-xl"
                            />
                        </motion.div>

                        <motion.div
                            className="text-center space-y-3 sm:space-y-4 px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                notNicto
                            </h1>
                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                                Crafting Amazing Minecraft Contents Since 2020
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.div
                    className="container relative mx-auto px-4 py-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Contact Section */}
                    <motion.div
                        variants={itemVariants}
                        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 mb-24
                       border border-gray-200 dark:border-gray-800"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="text-center mb-8"
                            variants={itemVariants}
                        >
                            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect!</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Want to collaborate or have questions? Feel free to reach out!
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                            variants={containerVariants}
                        >
                            <motion.a
                                href="mailto:info@notnicto.com"
                                className="flex-1 px-6 py-3 rounded-full font-medium bg-purple-600 hover:bg-purple-700 
                                  text-white text-center transition-all shadow-lg hover:shadow-xl
                                  hover:shadow-purple-500/25"
                                whileHover={{ scale: 1.05 }}
                                variants={itemVariants}
                            >
                                Contact Me
                            </motion.a>

                            <motion.button
                                onClick={() => router.push('/projects')}
                                className="flex-1 px-6 py-3 rounded-full font-medium 
                                  bg-gray-100 hover:bg-gray-200 text-gray-900
                                  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white 
                                  text-center transition-all shadow-lg hover:shadow-xl
                                  hover:shadow-gray-500/25 dark:hover:shadow-gray-950/50"
                                whileHover={{ scale: 1.05 }}
                                variants={itemVariants}
                            >
                                Download Content
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            variants={itemVariants}
                        >
                            <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                                <span role="img" aria-label="email">📧</span> Email Us
                            </div>
                            <div className="text-purple-600 dark:text-purple-400">
                                info@notnicto.com
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.section
                        aria-label="Statistics"
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                        variants={containerVariants}
                    >
                        {[
                            ['14+', 'Projects Completed', '🎯'],
                            ['600k+', 'Community Members', '👥'],
                            ['100M+', 'Video views', '🎬'],
                            ['400k+', 'Total Downloads', '⭐']
                        ].map(([number, label, emoji], index) => (
                            <motion.div
                                key={label}
                                variants={itemVariants}
                                custom={index}
                                className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center 
                         shadow-xl border border-gray-200 dark:border-gray-800 
                         hover:border-purple-500/40 transition-all"
                            >
                                <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">
                                    {emoji}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-500">
                                    {number}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                    {label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.section>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}