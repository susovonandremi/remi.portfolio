import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CompareSlider from "@/components/ui/CompareSlider";



export default function Projects() {
    return (
        <section id="projects" className="w-full bg-[#050505] text-white py-32 px-4 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Projects</h2>

                {/* Project 0: Student Portal Redesign (Interactive Slider) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="group flex flex-col md:flex-row gap-20"
                >
                    {/* Image (Slider) */}
                    <div className="w-full md:w-1/2 aspect-video bg-neutral-800 rounded-2xl overflow-hidden relative">
                        <CompareSlider
                            beforeImage="/portal-before.png"
                            afterImage="/portal-after.png"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#00f0ff] transition-colors">
                            Student Portal Redesign
                        </h3>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            A complete UX overhaul of the college identity portal, streamlining navigation and improving accessibility for thousands of students.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/projects/student-portal">
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                    View Case Study
                                </button>
                            </Link>
                            <a
                                href="https://www.figma.com/design/NmXpfAg1ompr7mj1e2C1Sn/STUDENT-PORTAL-MOBILE?node-id=31-250&t=xm6681PKtbIiVwgG-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                    Open in Figma
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 1: Architect (PlotAI) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group flex flex-col md:flex-row gap-20"
                >
                    {/* Image */}
                    <a href="https://github.com/susovonandremi/plot-it" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 aspect-video bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/0 transition-all duration-500 hover:ring-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <Image
                            src="/architect-project.png"
                            alt="Architect Blueprint Engine"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </a>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <a href="https://github.com/susovonandremi/plot-it" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#00f0ff] transition-colors">
                                Architect
                            </h3>
                        </a>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            A production-ready architectural engine that deterministically generates professional-grade, CAD-standard SVG blueprints using a rigorous backend constraint solver.
                        </p>
                        <a href="https://github.com/susovonandremi/plot-it" target="_blank" rel="noopener noreferrer">
                            <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                Project Overview
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Project 2: Peel (Browser Extension) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group flex flex-col md:flex-row gap-20"
                >
                    {/* Image */}
                    <a href="https://github.com/susovonandremi/peel" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 aspect-video bg-neutral-950 rounded-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/0 transition-all duration-500 hover:ring-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center group/img">
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute w-40 h-40 bg-[#00f0ff]/5 rounded-full blur-[80px] pointer-events-none group-hover/img:bg-[#00f0ff]/15 transition-all duration-500" />
                        <div className="relative w-28 h-28 md:w-32 md:h-32 transition-transform duration-700 group-hover/img:scale-105">
                            <Image
                                src="/Peel-icon.png"
                                alt="Peel Icon"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </a>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <a href="https://github.com/susovonandremi/peel" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#00f0ff] transition-colors">
                                Peel
                            </h3>
                        </a>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            A browser extension designed to peel away web clutter and interface friction, providing a clean, context-aware AI UI directly in your active browser window.
                        </p>
                        <div className="flex gap-6 flex-wrap">
                            <Link href="/projects/peel">
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                    View Case Study
                                </button>
                            </Link>
                            <a
                                href="https://github.com/susovonandremi/peel/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                    Download from GitHub
                                </button>
                            </a>
                            <a
                                href="https://github.com/susovonandremi/peel"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                    Source Code
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 3: AI UI Generator (Static) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group flex flex-col md:flex-row gap-20"
                >
                    {/* Image */}
                    <Link href="https://prompt-ut.vercel.app" target="_blank" className="w-full md:w-1/2 aspect-video bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/0 transition-all duration-500 hover:ring-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <Image
                            src="/ai-ui-generator.png"
                            alt="AI UI Generator"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </Link>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                        <Link href="https://prompt-ut.vercel.app" target="_blank">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#00f0ff] transition-colors">
                                AI UI Generator
                            </h3>
                        </Link>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            An intelligent design assistant that transforms natural language prompts into production-ready UI layouts using generative AI.
                        </p>
                        <Link href="https://github.com/susovonandremi/prompt-ut" target="_blank">
                            <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors">
                                Project Overview
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
