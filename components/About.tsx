"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#050505] text-white py-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Profile Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm mx-auto aspect-[3/4] bg-neutral-900 rounded-2xl relative overflow-hidden ring-1 ring-white/10"
        >
          <Image
            src="/profile.png"
            alt="Susovon"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <div className="px-3 py-1 text-xs border border-white/20 rounded-full mb-8">About</div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Solving real problems with purposeful, user-first thinking.
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            I&apos;m a design engineer who thrives on turning ambiguity into clarity. my approach combines technical depth with creative intuition to build digital products that feel natural and perform beautifully.
          </p>

          <a
            href="https://drive.google.com/file/d/1pr9mYTUV_xJBD5jkAQV2XMfdpO4siWVK/view?usp=sharing"
            target="_blank"
            className="bg-[#00f0ff] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00f0ff]/80 transition-transform hover:scale-105"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
