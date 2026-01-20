"use client";

import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="w-full bg-[#050505] py-40 px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Let's Get in Touch.
            </h2>
            <p className="text-neutral-400 text-xl mb-12 max-w-xl mx-auto">
                Let's connect and start your project. Whether you have a specific idea or just need some design advice.
            </p>
            <Link
                href="/contact"
                className="bg-[#00f0ff] text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-[#00f0ff]/80 transition-transform hover:scale-105 inline-block"
            >
                Drop me a message
            </Link>
        </section>
    );
}
