"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic Validation
        if (!name || !email || !subject || !message) {
            setSubmitStatus("error");
            setErrorMessage("All fields are required.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
            setSubmitStatus("error");
            setErrorMessage("Web3Forms Access Key is not configured. Please set the NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY environment variable.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name,
                    email,
                    subject,
                    message,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                setSubmitStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-32 pb-20 bg-[#050505] text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-4xl mx-auto w-full">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                </div>
            </nav>

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
                        I'm currently available for freelance projects and open to full-time opportunities. Feel free to drop me a line!
                    </p>
                </div>

                {/* Right Column: Form & Feedback */}
                <div className="flex flex-col gap-6 w-full bg-neutral-950 p-8 rounded-2xl border border-white/5 shadow-2xl">
                    <AnimatePresence mode="wait">
                        {submitStatus === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center text-center py-12 gap-4"
                            >
                                <CheckCircle2 className="w-16 h-16 text-[#00f0ff]" />
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-neutral-400 max-w-xs">
                                    Thank you for reaching out. I'll get back to you as soon as possible!
                                </p>
                                <button
                                    onClick={() => setSubmitStatus("idle")}
                                    className="mt-6 border border-white/10 hover:bg-white/5 text-sm font-semibold py-2 px-6 rounded-full transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-6 w-full"
                            >
                                {submitStatus === "error" && (
                                    <div className="flex items-start gap-3 bg-red-950/40 border border-red-500/30 p-4 rounded-lg text-red-200 text-sm">
                                        <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Message</label>
                                    <textarea
                                        rows={5}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg focus:outline-none focus:border-[#00f0ff] transition-colors text-white placeholder-neutral-700 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-4 bg-[#00f0ff] text-black font-bold py-4 px-8 rounded-full hover:bg-[#00f0ff]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-[1.02] active:scale-[0.98] w-full flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <span>Send Message</span>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
