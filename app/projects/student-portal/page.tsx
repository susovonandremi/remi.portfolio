"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentPortalPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00f0ff] selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-3xl mx-auto w-full">
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="text-sm font-medium">Back to Projects</span>
                    </Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto w-full px-6 pt-32 pb-20">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Case Study: Redesigning the IEMCRP Student Portal
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                        From "Where do I click?" to "Here’s what matters."
                    </p>
                </motion.div>

                {/* Section 1: The Context */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-[#00f0ff] pl-4">The Context</h2>
                    <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                        <p>
                            If you’re a student at UEM, you know the struggle. You log in to check your attendance or routine, and you're immediately hit with a wall of blue buttons, scrolling text, and a layout that feels like it hasn't been updated since the early 2000s.
                        </p>
                        <p>
                            As a Computer Science student (and someone obsessed with how humans interact with digital spaces), looking at our official portal always frustrated me. It wasn't just "ugly"—it was cognitively exhausting. I realized that if I was feeling overwhelmed just trying to find my next class, thousands of other students were too.
                        </p>
                        <p>
                            So, for my portfolio, I decided to stop complaining and start fixing. I treated this not just as a visual update, but as a "User Experience Rescue."
                        </p>
                    </div>
                </motion.section>

                {/* Section 2: The Before */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-red-500 pl-4">The 'Before': Cognitive Overload</h2>

                    <div className="relative aspect-video w-full my-8 bg-neutral-900 rounded-xl overflow-hidden border border-zinc-800">
                        <Image
                            src="/portal-before.png"
                            alt="The original chaotic blue screen of the student portal"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-sm text-zinc-500 text-center mb-10 italic">The original chaotic blue screen</p>

                    <p className="text-lg text-zinc-300 mb-6">The original portal breaks almost every rule of modern design psychology:</p>

                    <ul className="space-y-4 text-zinc-300 list-disc pl-6 leading-relaxed">
                        <li><strong className="text-white">No Hierarchy:</strong> Every button on the left sidebar fights for your attention equally. "Exam Form" looks just as important as "Upload Photo."</li>
                        <li><strong className="text-white">Panic-Inducing UI:</strong> The red text warnings and scrolling banners create a sense of urgency that isn't necessary for a daily dashboard.</li>
                        <li><strong className="text-white">Hidden Value:</strong> Important info (like your daily routine) is buried in a dense table that requires horizontal scanning.</li>
                        <li><strong className="text-white">The Vibe:</strong> It feels robotic and administrative. It treats the user like a database entry number, not a student.</li>
                    </ul>
                </motion.section>

                {/* Section 3: The After */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-[#00f0ff] pl-4">The 'After': Clarity & Calm</h2>

                    <div className="relative aspect-video w-full my-8 bg-neutral-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-900/20 ring-1 ring-white/10">
                        <Image
                            src="/portal-after.png"
                            alt="Redesigned student portal dashboard with card-based layout"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-sm text-zinc-500 text-center mb-10 italic">A modern, focused dashboard that respects the user's attention</p>

                    <p className="text-lg text-zinc-300 mb-8">My redesign focuses on one thing: relevance. When I log in, what do I actually need to know right now?</p>

                    <div className="space-y-8">
                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">1. The 'At-a-Glance' Dashboard</h3>
                            <p className="text-zinc-400 leading-relaxed">Instead of a list of 11 confusing modules, I switched to a card-based layout. Student Identity is front and center. I pulled the most stressful metrics (CGPA and Attendance) out of the shadows and gave them big, clean indicators. (Yes, the "Needs Improvement" is real—we're keeping it honest here!).</p>
                        </div>

                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">2. Smart Routine Tracking</h3>
                            <p className="text-zinc-400 leading-relaxed">This is my favorite feature. The old site showed a static weekly grid. My design includes a "Next Class" card. Psychology check: Students don't care about Thursday's schedule on a Tuesday. We just need to know: "Where do I need to be in 10 minutes?" The "AI Lab: Live Now" indicator solves that instantly.</p>
                        </div>

                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">3. Visual Hierarchy</h3>
                            <p className="text-zinc-400 leading-relaxed">I used a dark sidebar for navigation to separate "tools" from "content." The white space allows the eyes to rest. It feels like a modern SaaS platform, not a legacy government archive.</p>
                        </div>
                    </div>
                </motion.section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 text-center text-zinc-500">
                <p className="mb-4">Thanks for reading.</p>
                <Link href="#contact" className="text-[#00f0ff] hover:underline underline-offset-4">Get in touch to build better products.</Link>
            </footer>

        </div>
    );
}
