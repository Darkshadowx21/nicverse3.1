'use client'
import { motion } from 'framer-motion'

const LoadingSpinner = () => {
    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] font-minecraft overflow-hidden px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#FF00FF]/20 via-black to-black"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            

            {/* Content */}
            <div className="relative flex flex-col items-center text-center max-w-full">
                {/* Title */}
                <motion.div
                    className="mb-8 sm:mb-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        <span className="text-white block sm:inline">ENTERING</span>{' '}
                        <motion.span
                            className="bg-gradient-to-r from-[#FF00FF] via-purple-500 to-[#FF00FF] 
                                     text-transparent bg-clip-text inline-block"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            NICVERSE
                        </motion.span>
                    </motion.h1>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    className="text-lg sm:text-xl md:text-2xl text-white/80 tracking-wider font-light"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    Loading world
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                            times: [0, 0.5, 1]
                        }}
                    >
                        ...
                    </motion.span>
                </motion.div>

                {/* Glowing Circle */}
                <motion.div
                    className="absolute -z-10 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,0,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    )
}

export default LoadingSpinner 