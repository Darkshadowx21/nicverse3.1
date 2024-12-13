'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingSpinner from './components/LoadingSpinner'
import Hero from './components/Hero'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingSpinner key="loader" />
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col min-h-screen"
                    >
                        <Hero />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}