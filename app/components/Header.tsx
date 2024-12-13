"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from './ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { theme, toggleTheme } = useTheme()

    // Add viewport width tracking
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint in Tailwind
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
                unlockScroll()
            }
        }

        if (typeof window !== 'undefined') {
            checkMobile()
            window.addEventListener('resize', checkMobile)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', checkMobile)
            }
        }
    }, [])

    const lockScroll = useCallback(() => {
        if (!isMobile) return // Only lock scroll on mobile

        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${scrollBarWidth}px`
        // Prevent iOS bounce
        document.documentElement.style.position = 'fixed'
        document.documentElement.style.width = '100%'
        document.documentElement.style.top = `-${window.scrollY}px`
    }, [isMobile])

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
        // Restore iOS scroll position
        if (document.documentElement.style.position === 'fixed') {
            const scrollY = document.documentElement.style.top
            document.documentElement.style.position = ''
            document.documentElement.style.width = ''
            document.documentElement.style.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isMenuOpen && isMobile) {
                lockScroll()
            } else {
                unlockScroll()
            }
        }

        return () => {
            unlockScroll()
        }
    }, [isMenuOpen, isMobile, lockScroll, unlockScroll])

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 2 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    const navigationLinks = [
        {
            href: "/",
            label: "Home",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 13V12h6v10"
                    />
                </svg>
            )
        },
        {
            href: "/projects",
            label: "Projects",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                    />
                </svg>
            )
        },
        {
            href: "/about",
            label: "About",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm8 18a8 8 0 1 0-16 0"
                    />
                </svg>
            )
        },
        {
            href: "/contact",
            label: "Contact",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            )
        }
    ]

    return (
        <>
            <AnimatePresence>
                {isLoading && <LoadingSpinner />}
            </AnimatePresence>
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-3 py-2 sm:px-4 sm:py-3">
                    <nav className="flex items-center justify-between relative z-50 h-[50px]">
                        <Link href="/" className="relative h-[50px] w-[50px]">
                            <Image
                                src="/logo.png"
                                alt="Nicverse Logo"
                                fill
                                sizes="50px"
                                className="object-contain"
                                priority
                            />
                        </Link>

                        <div className="hidden md:flex items-center space-x-6">
                            {navigationLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-lg font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
                                        } transition-colors`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Theme Toggle Button with Animation */}
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: theme === 'light' ? 0 : 180 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {theme === 'light' ? (
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-6 h-6 text-yellow-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    )}
                                </motion.div>
                            </motion.button>

                            {/* Menu Toggle Button */}
                            <div className="md:hidden">
                                <button
                                    className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                >
                                    <motion.span
                                        animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-6 h-0.5 block ${isMenuOpen
                                            ? theme === 'dark' ? 'bg-white' : 'bg-black'
                                            : 'bg-black dark:bg-white'
                                            }`}
                                    />
                                    <motion.span
                                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-6 h-0.5 block ${isMenuOpen
                                            ? theme === 'dark' ? 'bg-white' : 'bg-black'
                                            : 'bg-black dark:bg-white'
                                            }`}
                                    />
                                    <motion.span
                                        animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-6 h-0.5 block ${isMenuOpen
                                            ? theme === 'dark' ? 'bg-white' : 'bg-black'
                                            : 'bg-black dark:bg-white'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                aria-label="Mobile menu"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`fixed inset-0 ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white'} z-40`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Escape') {
                                        setIsMenuOpen(false)
                                    }
                                }}
                                tabIndex={0}
                            >
                                <div className="flex flex-col items-center pt-20">
                                    {/* Navigation Links */}
                                    <div className="w-full text-center space-y-8">
                                        {navigationLinks.map((item) => (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center justify-center gap-3 text-2xl font-medium ${theme === 'dark'
                                                        ? 'text-white hover:text-blue-400'
                                                        : 'text-gray-900 hover:text-blue-600'
                                                        } transition-colors`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </>
    )
}

export default Header