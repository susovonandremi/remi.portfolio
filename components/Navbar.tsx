"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#expertise" },
    { name: "About", href: "#about" },
    { name: "Get in Touch", href: "#contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 flex items-center gap-8 transform-gpu"
        >
            {/* Brand */}
            <Link href="/" className="font-bold text-white text-sm tracking-tight">
                Susovon's Portfolio
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-sm transition-colors hover:text-white ${link.name === "Get in Touch" ? "ml-4 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-medium text-white" : "text-zinc-400"}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>


        </motion.nav>
    );
}
