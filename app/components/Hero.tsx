"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Hero() {
    const router = useRouter()

    return (
        <div className="relative h-screen w-full">
            {/* Full-screen video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
                <div className="text-center space-y-6">
                    <h2 className="text-white text-2xl sm:text-3xl font-medium tracking-wide">
                        WELCOME TO
                    </h2>
                    
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider">
                        <span className="text-[#FF00FF] flex justify-center gap-3 sm:gap-4 md:gap-5">
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

                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="bg-black/50 hover:bg-black/70 text-white px-12 py-6 
                                     text-xl font-medium tracking-widest uppercase transition-all 
                                     duration-300 hover:scale-105 rounded-lg
                                     backdrop-blur-sm"
                            onClick={() => router.push('/projects')}
                        >
                            Explore
                        </Button>
                    </div>
                </div>
            </div>
        </div>

       
    )
}
