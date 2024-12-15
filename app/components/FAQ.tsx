'use client'
import { useState } from 'react'


interface FAQItem {
    question: string
    answer: string
}

interface FAQProps {
    faqs: FAQItem[]
}

export default function FAQ({ faqs }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="space-y-6">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                    <button
                        className="w-full px-8 py-6 text-left flex justify-between items-center group"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className="text-lg font-semibold group-hover:text-primary-500 transition-colors">
                            {faq.question}
                        </h3>
                        <span className="ml-6 transition-transform duration-200" 
                              style={{ transform: openIndex === index ? 'rotate(-180deg)' : 'rotate(0)' }}>
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>
                    <div 
                        className={`px-8 overflow-hidden transition-all duration-200 ease-in-out ${
                            openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                        }`}
                    >
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
} 