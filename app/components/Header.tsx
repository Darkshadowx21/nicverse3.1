"use client"

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import LoadingSpinner from './LoadingSpinner'

// Define necessary interfaces for type safety
interface NavigationItem {
  label: string;
  href: string;
  icon: React.ReactElement;
}

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === 'dark'
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Create navigation items array
  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      label: 'Projects',
      href: '/projects',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'About',
      href: '/about',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  // Check viewport width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
        unlockScroll()
      }
    }

    if (typeof window !== 'undefined') {
      checkMobile()
      window.addEventListener('resize', checkMobile)

      // Simulate loading
      const timer = setTimeout(() => setIsLoading(false), 1500)

      return () => {
        window.removeEventListener('resize', checkMobile)
        clearTimeout(timer)
      }
    }
  }, [])

  // Scroll locking functions
  const lockScroll = useCallback(() => {
    if (!isMobile) return

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

  // Apply scroll lock effect
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      lockScroll()
    } else {
      unlockScroll()
    }

    return () => {
      unlockScroll()
    }
  }, [isMenuOpen, isMobile, lockScroll, unlockScroll])

  // Logo component - reused in both desktop and mobile views
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 relative">
        <Image
          src="/logo.png"
          alt="Nicverse Logo"
          fill
          sizes="40px"
          className="object-contain"
          priority
        />
      </div>
      <div className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Nicverse
        </span>
      </div>
    </div>
  )

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Logo />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 font-medium relative group
                        ${isActive ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform duration-300
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-200
                  ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
                aria-label="Toggle theme"
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 block bg-gray-900 dark:bg-white transition-colors duration-200"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 block mt-1 bg-gray-900 dark:bg-white transition-colors duration-200"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 block mt-1 bg-gray-900 dark:bg-white transition-colors duration-200"
                  />
                </div>
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-xl overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  {/* Mobile menu header with logo */}
                  <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      <Logo />
                    </Link>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto py-4 px-4">
                    <nav className="h-full">
                      <motion.ul className="space-y-2">
                        {navigationItems.map((item, index) => {
                          const isActive = pathname === item.href
                          return (
                            <motion.li
                              key={item.href}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center space-x-3 text-base font-medium p-3 rounded-lg
                                  ${isActive 
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                  }`}
                              >
                                {item.icon}
                                <span>{item.label}</span>
                              </Link>
                            </motion.li>
                          )
                        })}
                      </motion.ul>
                    </nav>
                  </div>
                  
                  {/* Theme toggle at bottom of sidebar */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors duration-200
                          ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
                        aria-label="Toggle theme"
                      >
                        {isDarkMode ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header