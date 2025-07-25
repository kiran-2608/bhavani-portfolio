"use client"
import Image from "next/image"
import { motion,animate, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"




const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate `0px 4px 24px ${color}`

    return (
        <motion.section
        style={{
            backgroundImage
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
        
             <div className="z-10 flex flex-col items-center text-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/40 text-5x1 md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
                text-transparent text-5xl md:text-7xl">
                    Thukkapuram Bhavani
                </h1>
                <Image
                    src="/assets/profilepic3.png"
                    alt="profile pic"
                    width={250}
                    height={250}
                />
                
                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                   <Image
                        src="/assets/obj1.png"
                        alt="object 1"
                        width={30}
                        height={30}
                        className="rounded-2x1 mx-auto"
                    />
                    <Image
                        src="/assets/obj1.png"
                        alt="object 1"
                        width={30}
                        height={30}
                        className="rounded-2x1 mx-auto"

                    />
                    <Image
                        src="/assets/obj1.png"
                        alt="object 1"
                        width={30}
                        height={30}
                        className="rounded-2x1 mx-auto"

                    />
                    <p className="font-medium">10+ Happy Clients</p>
                </div>

                <p className="my-6 max-w-xl text-center mx-auto">Software Developer with over 1 year of experience</p>

                <motion.button
                    style={{
                        border,
                        boxShadow
                    }}
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale:0.985
                    }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                
                >
        
                    
                </motion.button>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    )
}
