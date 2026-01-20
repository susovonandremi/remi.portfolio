"use client";
import { motion } from "framer-motion";
import ScrollGraphic from "@/components/ScrollGraphic";

interface HeroProps {
  isLoaded: boolean;
}

export default function Hero({ isLoaded }: HeroProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 text-center bg-[#050505] overflow-hidden">

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative rounded-full px-3 py-1 text-xs text-white bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          Hi, I'm Remi 👋
        </motion.div>

        {/* H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-tight text-white mb-6"
        >
          Design Engineer
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-2xl md:text-3xl font-light text-neutral-200 py-4"
        >
          Creating Designs with a Soul
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8"
        >
          <a
            href="https://drive.google.com/file/d/1pr9mYTUV_xJBD5jkAQV2XMfdpO4siWVK/view?usp=sharing"
            target="_blank"
            className="bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 font-bold rounded-full w-fit px-8 py-3 transition-transform hover:scale-105 relative z-10"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Graphic - Absolutely Positioned Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center z-0 pointer-events-none translate-y-[30%]">
        <ScrollGraphic />
      </div>

      {/* Hero Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </div>
  );
}
