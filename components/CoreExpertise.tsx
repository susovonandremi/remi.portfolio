"use client";

import { motion } from "framer-motion";
import { PenTool, Code, Sparkles } from "lucide-react";

const expertise = [
    {
        title: "UI/UX Design",
        icon: <PenTool size={32} className="text-[#00f0ff]" />,
        description: "Crafting intuitive, user-centric digital experiences with a focus on human psychology and accessibility.",
        tags: ["Figma", "Prototyping", "User Research"],
        id: 1,
    },
    {
        title: "Frontend Engineering",
        icon: <Code size={32} className="text-[#00f0ff]" />,
        description: "Building responsive, pixel-perfect web applications that bridge the gap between design and functionality.",
        tags: ["React.js", "Tailwind", "Interaction Design"],
        id: 2,
    },
    {
        title: "AI-Driven Design",
        icon: <Sparkles size={32} className="text-[#00f0ff]" />,
        description: "Leveraging Machine Learning and LLMs to create adaptive, intelligent interfaces (Generative UI).",
        tags: ["Python", "AI Integration", "Prompt Engineering"],
        id: 3,
    },
];

export default function CoreExpertise() {
    return (
        <section className="w-full bg-[#050505] text-white py-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Core Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between h-auto min-h-[300px] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:border-[#00f0ff]/30 transition-all duration-500"
                        >
                            <div>
                                <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#00f0ff]/10 transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00f0ff] transition-colors">{item.title}</h3>
                                <p className="text-neutral-400 leading-relaxed mb-8">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
