"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const images = [
    {src: "/assets/udemy.png", alt:"figma"},
    {src: "/assets/fiverr.png", alt:"fiverr"},
    {src: "/assets/elementor.png", alt:"elementor"},
    {src: "/assets/logitech.png", alt:"logitech"},
    {src: "/assets/oracle.png", alt:"oracle"},
    {src: "/assets/udemy.png", alt:"figma"},
    {src: "/assets/fiverr.png", alt:"fiverr"},
    {src: "/assets/elementor.png", alt:"elementor"},
    {src: "/assets/logitech.png", alt:"logitech"},
    {src: "/assets/oracle.png", alt:"oracle"},
    {src: "/assets/udemy.png", alt:"figma"},
    {src: "/assets/fiverr.png", alt:"fiverr"},
    {src: "/assets/elementor.png", alt:"elementor"},
    {src: "/assets/logitech.png", alt:"logitech"},
    {src: "/assets/oracle.png", alt:"oracle"},
    {src: "/assets/udemy.png", alt:"figma"},
    {src: "/assets/fiverr.png", alt:"fiverr"},
    {src: "/assets/elementor.png", alt:"elementor"},
    {src: "/assets/logitech.png", alt:"logitech"},
    {src: "/assets/oracle.png", alt:"oracle"},
]

export const LogoAnimation = () => {
    return (
        <div className="py-8 bg-purple-200/10 glass opacity-80">
            <div className="w-full mx-auto overflow-hidden">
                <div className="overflow-hidden
                        [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: "-50%"       
                        }}
                        transition={{
                                duration: 35,
                                repeat:Infinity,
                                ease:"linear",
                                repeatType:"loop",
                        }}
                    >
                        {images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    width={80}
                                    height={30}
                                />
                        ))}

                    </motion.div>
                </div>
            </div>

        </div>

    );
};