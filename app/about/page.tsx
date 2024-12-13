import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

// Add static page declaration
export const dynamic = 'force-static'

// Add metadata
export const metadata: Metadata = {
    title: 'About NotNicto | Minecraft Content Creator & Map Designer',
    description: 'Learn about NotNicto - A passionate Minecraft content creator since 2020. Specializing in custom maps, resource packs, tutorials, and community events. Over 1M+ downloads and 660K+ community members.',
    openGraph: {
        title: 'About NotNicto | Minecraft Content Creator',
        description: 'Discover NotNicto - Creating custom Minecraft maps, resource packs, and tutorials since 2020. Join our 600k+ community members!',
        images: [
            {
                url: '/logo.png',
                width: 180,
                height: 180,
                alt: 'notnicto Logo',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About NotNicto | Minecraft Content Creator',
        description: 'Discover NotNicto - Creating custom Minecraft maps, resource packs, and tutorials since 2020. Join our 600k+ community members!',
        images: ['/logo.png'],
    },
    keywords: [
        'Minecraft creator',
        'Minecraft maps',
        'Minecraft resource packs',
        'Minecraft tutorials',
        'custom maps',
        'texture pack',
        'PvP pack',
        'minecraft bedrock',
        'Minecraft content creator',
        'Minecraft builds',
        'Minecraft building tutorials',
        'Minecraft texture packs',
        'Minecraft datapack creator',
        'NotNicto Minecraft',
        'Minecraft building tips',
        'Minecraft architecture',
        'Minecraft game modifications',
        'Minecraft creative mode',
        'Minecraft world downloads',
        'Minecraft building techniques',
        'Minecraft content creation',
        'Minecraft education',
        'Minecraft community'

    ],
}

function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-purple-500/10">
            {/* Hero Section with Floating Effect */}
            <section aria-label="Introduction" className="container relative px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
                <div className="absolute inset-0 grid grid-cols-3 -z-10 opacity-10">
                    <div className="bg-gradient-to-br from-purple-500 blur-3xl" />
                    <div className="bg-gradient-to-r from-purple-600 blur-3xl" />
                    <div className="bg-gradient-to-bl from-purple-700 blur-3xl" />
                </div>

                <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 blur-sm" />
                        <Image
                            src="/notNicto.png"
                            alt="Creator Logo"
                            width={180}
                            height={180}
                            className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-[180px] md:h-[180px] rounded-full border-2 border-purple-500/50 shadow-xl"
                        />
                    </div>

                    <div className="text-center space-y-3 sm:space-y-4 px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                            notNicto
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                            Crafting Amazing Minecraft Contents Since 2020
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Sections with Cards */}
            <section aria-label="Content" className="container px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-24">
                {/* About Section */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    <article className="bg-background/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-purple-500">👋</span> About Me
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            Hey there! I&apos;m a passionate Minecraft content creator focused on building
                            incredible worlds and sharing my creative journey with the community.
                            With over 3 years of experience, I specialize in creating custom maps,
                            resource packs, and engaging gameplay content.
                        </p>
                    </article>

                    <article className="bg-background/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-500/20">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-purple-500">💫</span> What I Do
                        </h2>
                        <ul className="space-y-3 sm:space-y-4">
                            {[
                                ['🎨', 'Resource Pack Development', 'Creating beautiful textures and designs'],
                                ['📺', 'YouTube Content', 'Sharing knowledge and entertainment'],
                                ['🏗️', 'Custom Map Creation', 'Building unique worlds and experiences'],
                                ['🎮', 'Minecraft Tutorials', 'Teaching techniques and tricks'],
                                ['🤝', 'Community Events', 'Bringing players together']
                            ].map(([emoji, title, desc]) => (
                                <li key={title} className="flex items-start gap-3 group">
                                    <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">
                                        {emoji}
                                    </span>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>

                {/* Stats Section */}
                <section aria-label="Statistics" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {[
                        ['14+', 'Projects Completed', '🎯'],
                        ['600k+', 'Community Members', '👥'],
                        ['100M+', 'Video views', '🎬'],
                        ['400k+', 'Total Downloads', '⭐']
                    ].map(([number, label, emoji]) => (
                        <div key={label}
                            className="bg-background/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center 
                                     shadow-xl border border-purple-500/20 hover:border-purple-500/40 
                                     transition-all hover:-translate-y-1">
                            <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">{emoji}</span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-purple-500">{number}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
                        </div>
                    ))}
                </section>

                {/* Contact CTA */}
                <section aria-label="Contact" className="bg-background/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center 
                               shadow-xl border border-purple-500/20 max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Let's Connect!</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                        Want to collaborate or have questions? Feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 
                                     rounded-lg sm:rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all 
                                     hover:-translate-y-1 text-sm sm:text-base"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="/projects"
                            className="bg-background hover:bg-purple-500/10 border border-purple-500/50 
                                     px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-purple-500/25 
                                     transition-all hover:-translate-y-1 text-sm sm:text-base"
                        >
                            Download Content
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default AboutPage
