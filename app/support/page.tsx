import Head from 'next/head';
import FAQ from "../components/FAQ";
import { faqs } from "../data/faqs";
import Breadcrumb from "../components/Breadcrumb";
import { Metadata } from 'next';
import { SupportCard } from './guide/SupportCard';
import InstallationGuide from "./InstallationGuide";
import { SUPPORT_CARDS } from "./constants/supportCards";

export const metadata: Metadata = {
    title: 'Minecraft support center | nicVerse Resource Pack Installation & FAQ',
    description: 'Get help with Minecraft resource pack installation, troubleshooting guides, and answers to frequently asked questions. Step-by-step installation guides for all platforms.',
    openGraph: {
        title: 'Minecraft support center | nicVerse Resource Pack Installation & FAQ',
        description: 'Get help with Minecraft resource pack installation, troubleshooting guides, and answers to frequently asked questions.',
        type: 'website',
        siteName: 'nicVerse',
        locale: 'en_US',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Minecraft support center | nicVerse'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Minecraft support center | nicVerse Resource Pack Installation & FAQ',
        description: 'Get help with Minecraft resource pack installation, troubleshooting guides, and answers to frequently asked questions.',
        images: ['/logo.png'],
    },
    alternates: {
        canonical: 'https://notnicto.com/support'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    keywords: [
        'Minecraft resource pack installation',
        'resource pack FAQ',
        'Minecraft texture pack help',
        'installation guide',
        'resource pack troubleshooting',
        'Minecraft support',
        'how to install Minecraft resource packs',
        'Minecraft texture pack installation guide',
        'resource pack not working',
        'fix resource pack issues',
        'Minecraft pack installation error',
        'resource pack compatibility',
        'Minecraft texture pack support',
        'resource pack loading problems',
        'Minecraft pack troubleshooting',
        'resource pack installation steps',
        'Minecraft texture pack FAQ',
        'how to use resource packs',
        'Minecraft pack help guide',
        'resource pack setup tutorial',
        'Minecraft texture pack problems',
        'resource pack installation tutorial',
        'Minecraft pack setup guide',
        'texture pack not loading',
        'resource pack installation help',
        'Minecraft pack error fixes',
        'Java resource pack installation',
        'Bedrock texture pack help',
        'PE resource pack support',
        'Windows 10 Minecraft packs',
        'Mobile resource pack guide',
        'Minecraft 1.20 resource packs',
        'latest version texture packs',
        'Minecraft update pack support',
        'resource pack load failed',
        'texture pack black screen',
        'Minecraft pack crash fix',
        'resource pack incompatible',
        'pack format version error'
    ]
};

export default function SupportPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'HowTo',
                name: 'How to Install Minecraft Resource Packs',
                description: 'Step-by-step guide for installing resource packs in Minecraft',
                step: [
                    {
                        '@type': 'HowToStep',
                        name: 'Download Resource Pack',
                        text: 'Download the resource pack from nicVerse'
                    },
                    {
                        '@type': 'HowToStep',
                        name: 'Locate Resource Pack Folder',
                        text: 'Find your Minecraft resource pack folder'
                    },
                    {
                        '@type': 'HowToStep',
                        name: 'Install Pack',
                        text: 'Move the downloaded pack to the resource pack folder'
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <main
                className="container mx-auto px-4 py-16"
                role="main"
                aria-labelledby="support-title"
            >
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Support' }
                    ]}
                />
                <div className="max-w-5xl mx-auto">
                    <header className="text-center mb-16">
                        <h1
                            id="support-title"
                            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x"
                        >
                            Support Center
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Get help with installation, troubleshooting, and more
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                        {SUPPORT_CARDS.map(card => (
                            <SupportCard
                                key={card.id}
                                {...card}
                            />
                        ))}
                    </div>

                    <div className="space-y-20">
                        <section
                            id="faqs"
                            className="scroll-mt-16"
                            aria-labelledby="faq-title"
                        >
                            <h2
                                id="faq-title"
                                className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
                            >
                                Frequently Asked Questions
                            </h2>
                            <FAQ faqs={faqs} />
                        </section>

                        <section
                            id="installation"
                            className="scroll-mt-16"
                            aria-labelledby="installation-title"
                        >
                            <h2
                                id="installation-title"
                                className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
                            >
                                Installation Guides
                            </h2>
                            <InstallationGuide />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
} 