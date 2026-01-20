"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-32 pb-20 bg-[#050505] text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl grid md:grid-cols-2 gap-16"
            >
                {/* Left Column: Heading */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
                        Let's build<br />something<br /><span className="text-[#00f0ff]">meaningful.</span>
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-md">
                        I'm currently available for freelance projects and open to full-time opportunities.
                    </p>
                </div>

                {/* Right Column: Form */}
                <form className="flex flex-col gap-6 w-full">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Name</label>
                            <input
                                type="text"
                                className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Subject</label>
                        <input
                            type="text"
                            className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Message</label>
                        <textarea
                            rows={6}
                            className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700 resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-[#00f0ff] text-black font-bold py-4 px-8 rounded-full hover:bg-[#00f0ff]/80 transition-transform hover:scale-[1.02] active:scale-[0.98] w-full"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
