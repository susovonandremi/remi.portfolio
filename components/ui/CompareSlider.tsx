"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CompareSliderProps {
    beforeImage: string;
    afterImage: string;
    className?: string;
}

export default function CompareSlider({
    beforeImage,
    afterImage,
    className = "",
}: CompareSliderProps) {
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
            // Start in the middle
            x.set(containerRef.current.offsetWidth / 2);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth);
                // Reset to middle on resize to avoid out of bounds
                x.set(containerRef.current.offsetWidth / 2);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [x]);

    const clipPathObject = useTransform(x, (value) => {
        return `inset(0 ${width - value}px 0 0)`;
    });

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden select-none ${className}`}
        >
            {/* After Image (Background/Bottom Layer) */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            {/* Before Image (Top Layer - Clipped) */}
            <motion.div
                style={{ clipPath: clipPathObject }}
                className="absolute inset-0 w-full h-full z-10"
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </motion.div>

            {/* Slider Handle */}
            <motion.div
                style={{ x }}
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0}
                dragMomentum={false}
                className="absolute top-0 bottom-0 z-20 w-1 cursor-ew-resize bg-white"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-black"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            className="rotate-90 origin-center"
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full">
                    Before
                </span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full">
                    After
                </span>
            </div>
        </div>
    );
}
