"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Hero() {
    const router = useRouter()

    return (
        <div className="relative h-screen w-full">
            {/* Full-screen Image background */}
            <div className="absolute inset-0">
                <Image
                    src="/bg.png"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
                <div className="text-center space-y-6">
                    <h2 className="text-white text-2xl sm:text-3xl font-medium tracking-wide">
                        WELCOME TO
                    </h2>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex justify-center gap-3 sm:gap-4 md:gap-5">
                            <span>N</span>
                            <span>I</span>
                            <span>C</span>
                            <span>V</span>
                            <span>E</span>
                            <span>R</span>
                            <span>S</span>
                            <span>E</span>
                        </span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-white/90 font-medium tracking-wide max-w-3xl mx-auto">
                        <span className="text-yellow-400">✨</span> WHERE MINECRAFT MEETS CREATIVITY <span className="text-yellow-400">✨</span>
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-black/50 hover:bg-black/70 text-white px-12 py-6 
                                     text-xl font-medium tracking-widest uppercase transition-all 
                                     duration-300 hover:scale-105 rounded-xl 
                                      backdrop-blur-sm"
                            onClick={() => router.push('/projects')}
                        >
                            Explore
                        </Button>
                        
                        <Button
                            size="lg"
                            className="bg-black/50 hover:bg-black/70 text-white px-12 py-6 
                                     text-xl font-medium tracking-widest uppercase transition-all 
                                     duration-300 hover:scale-105 rounded-xl 
                                      backdrop-blur-sm"
                            onClick={() => window.open('https://tools.notnicto.com', '_blank')}
                        >
                            Tools
                        </Button>
                    </div>
                </div>
            </div>
        </div>


    )
}
