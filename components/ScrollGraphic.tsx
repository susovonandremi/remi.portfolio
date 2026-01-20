"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollGraphic() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 15,
        restDelta: 0.001
    });

    const rotate = useTransform(smoothProgress, [0, 1], [0, 180]);
    const y = useTransform(smoothProgress, [0, 1], [0, 100]);

    return (
        <motion.div
            style={{ rotate, y }}
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none relative z-0"
        >
            <Image
                src="/asset/chrome-flower.avif"
                alt="Scroll Graphic"
                fill
                className="object-contain"
                priority
            />
        </motion.div>
    );
}
