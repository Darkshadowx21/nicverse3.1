'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
    name: string
    email: string
    message: string
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 py-16"
        >
            <h1 className="text-4xl font-bold mb-8 dark:text-white text-center">
                Get in Touch
            </h1>

            <div className="max-w-2xl mx-auto">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="Your name"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="your@email.com"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="Your message..."
                            required
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-6 py-3 rounded-lg transition-all transform hover:scale-[1.02] ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600'
                            } text-white`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : 'Send Message'}
                    </motion.button>
                </form>

                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg"
                    >
                        Thank you for your message! We'll get back to you soon.
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg"
                    >
                        Something went wrong. Please try again later.
                    </motion.div>
                )}

                <motion.div
                    className="mt-12 grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-xl font-semibold mb-4 dark:text-white">Email Us</h2>
                        <p className="dark:text-gray-300">info@notnicto.com</p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-xl font-semibold mb-4 dark:text-white">Follow Us</h2>
                        <div className="flex space-x-4 dark:text-gray-300">
                            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
} 