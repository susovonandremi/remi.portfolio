"use client";

import { motion } from "framer-motion";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/susovon-sarkar-b325a8235/" },
  { label: "GitHub", href: "https://github.com/susovonandremi" },
];

export default function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="text-[10vw] leading-none font-bold text-white tracking-tighter mb-6">
            READY TO CONTRIBUTE.
          </h2>
          <p className="text-xl text-secondary mb-12">
            Currently looking for Design Engineering Internships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-16"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-lg text-secondary hover:text-white transition-colors underline underline-offset-4"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-secondary"
        >
          © 2026 Susovon Sarkar. Built with Next.js & Framer.
        </motion.p>
      </div>
    </footer>
  );
}
