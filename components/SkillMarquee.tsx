"use client";


export default function SkillMarquee() {
    return (
        <div className="w-full py-20 overflow-hidden bg-[#050505]">
            <div className="relative w-full flex whitespace-nowrap overflow-hidden">
                <div className="animate-marquee flex whitespace-nowrap">
                    {Array(4)
                        .fill("UX RESEARCH • UI DESIGN • FRONTEND DEV • AI INTEGRATION • PRODUCT DESIGN • ")
                        .map((item, index) => (
                            <span
                                key={index}
                                className="text-8xl md:text-9xl font-bold text-white/30 mr-12 select-none"
                            >
                                {item}
                            </span>
                        ))}
                </div>
                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap">
                    {Array(4)
                        .fill("UX RESEARCH • UI DESIGN • FRONTEND DEV • AI INTEGRATION • PRODUCT DESIGN • ")
                        .map((item, index) => (
                            <span
                                key={index}
                                className="text-8xl md:text-9xl font-bold text-white/30 mr-12 select-none"
                            >
                                {item}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}
