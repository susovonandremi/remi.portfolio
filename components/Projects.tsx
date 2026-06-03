import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CompareSlider from "@/components/ui/CompareSlider";



export default function Projects() {
    return (
        <section id="projects" className="w-full bg-[#050505] text-white py-32 px-4 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>

                {/* Project Grid: 2x2 on Desktop, 1 column on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">

                    {/* Project 0: Student Portal Redesign (Interactive Slider) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="group flex flex-col gap-6"
                    >
                        {/* Image (Slider) */}
                        <div className="w-full aspect-video bg-neutral-800 rounded-2xl overflow-hidden relative">
                            <CompareSlider
                                beforeImage="/portal-before.png"
                                afterImage="/portal-after.png"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full flex flex-col items-start mt-2">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#00f0ff] transition-colors">
                                Student Portal Redesign
                            </h3>
                            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                                A complete UX overhaul of the college identity portal, streamlining navigation and improving accessibility for thousands of students.
                            </p>
                            <div className="flex gap-6 flex-wrap">
                                <Link href="/projects/student-portal">
                                    <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors cursor-pointer">
                                        View Case Study
                                    </button>
                                </Link>
                                <a
                                    href="https://www.figma.com/design/NmXpfAg1ompr7mj1e2C1Sn/STUDENT-PORTAL-MOBILE?node-id=31-250&t=xm6681PKtbIiVwgG-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors cursor-pointer">
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
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="group flex flex-col gap-6"
                    >
                        {/* Image */}
                        <a href="https://github.com/susovonandremi/plot-it" target="_blank" rel="noopener noreferrer" className="w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/0 transition-all duration-500 hover:ring-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
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
                        <div className="w-full flex flex-col items-start mt-2">
                            <a href="https://github.com/susovonandremi/plot-it" target="_blank" rel="noopener noreferrer">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#00f0ff] transition-colors">
                                    Architect
                                </h3>
                            </a>
                            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                                A production-ready architectural engine that deterministically generates professional-grade, CAD-standard SVG blueprints using a rigorous backend constraint solver.
                            </p>
                            <a href="https://github.com/susovonandremi/plot-it" target="_blank" rel="noopener noreferrer">
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors cursor-pointer">
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
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="group flex flex-col gap-6"
                    >
                        {/* Image */}
                        <a href="https://github.com/susovonandremi/peel" target="_blank" rel="noopener noreferrer" className="w-full aspect-video bg-neutral-950 rounded-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/0 transition-all duration-500 hover:ring-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center group/img">
                            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute w-40 h-40 bg-[#00f0ff]/5 rounded-full blur-[80px] pointer-events-none group-hover/img:bg-[#00f0ff]/15 transition-all duration-500" />
                            <Image
                                src="/Peel-icon.png"
                                alt="Peel Icon"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </a>

                        {/* Content */}
                        <div className="w-full flex flex-col items-start mt-2">
                            <a href="https://github.com/susovonandremi/peel" target="_blank" rel="noopener noreferrer">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#00f0ff] transition-colors">
                                    Peel
                                </h3>
                            </a>
                            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                                A browser extension designed to peel away web clutter and interface friction, providing a clean, context-aware AI UI directly in your active browser window.
                            </p>
                            <div className="flex gap-6 flex-wrap">
                                <a
                                    href="https://github.com/susovonandremi/peel/releases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors cursor-pointer">
                                        Download from GitHub
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/susovonandremi/peel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors cursor-pointer">
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
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="group flex flex-col gap-6"
                    >
                        {/* Image */}
                        <Link href="https://prompt-ut.vercel.app" target="_blank" className="w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/5 ring-1 ring-white/0 transition-all duration-500 hover:ring-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
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
                        <div className="w-full flex flex-col items-start mt-2">
                            <Link href="https://prompt-ut.vercel.app" target="_blank">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#00f0ff] transition-colors">
                                    AI UI Generator
                                </h3>
                            </Link>
                            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                                An intelligent design assistant that transforms natural language prompts into production-ready UI layouts using generative AI.
                            </p>
                            <Link href="https://github.com/susovonandremi/prompt-ut" target="_blank">
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-[#00f0ff] pb-1 hover:text-[#00f0ff] transition-colors cursor-pointer">
                                    Project Overview
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
