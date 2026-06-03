"use client";

import Link from "next/link";
import { ArrowLeft, Download, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function PeelPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00f0ff] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-3xl mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto w-full px-6 pt-32 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-mono text-[#00f0ff] tracking-widest uppercase mb-4">
            Browser Extension
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Peel
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Context-aware browser assistant designed to peel away clutter and surface smart actions directly inside your web flow.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Browser Extension", "AI UI", "JavaScript", "Manifest V3"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-zinc-400 border border-white/10 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Section: Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-[#00f0ff] pl-4">
            Overview
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Peel is a powerful browser extension that rethinks how you interact with elements on the web. Instead of navigating through complex inspector menus or copying text to external chat windows, Peel embeds itself directly into your workspace.
            </p>
            <p>
              By detecting active DOM elements and predicting user intentions, Peel peels away distracting layouts and provides a contextual UI layer that helps developers and designers extract, manipulate, and generate content on the fly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://github.com/susovonandremi/peel/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00f0ff] text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#00f0ff]/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <Download className="w-4 h-4" />
              Download from GitHub
            </a>
            <a
              href="https://github.com/susovonandremi/peel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-zinc-500">
        <p className="mb-4">Thanks for reading.</p>
        <Link
          href="/#contact"
          className="text-[#00f0ff] hover:underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Get in touch to build better products. →
        </Link>
      </footer>
    </div>
  );
}
