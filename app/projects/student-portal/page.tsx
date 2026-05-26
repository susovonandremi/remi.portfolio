"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

// ─── Reusable phone bezel wrapper ───────────────────────────────────────────
function PhoneBezel({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full max-w-[280px] mx-auto rounded-[2.5rem] border-[8px] border-neutral-800 bg-neutral-900 shadow-2xl shadow-cyan-900/10 overflow-hidden">
      {/* Camera notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-800 rounded-b-2xl z-10" />
      <Image
        src={src}
        alt={alt}
        width={264}
        height={572}
        className="w-full h-auto object-cover"
        quality={95}
      />
    </div>
  );
}

// ─── Mobile screen data ──────────────────────────────────────────────────────
const mobileScreens = [
  {
    src: "/Dasboard.png",
    alt: "Mobile Dashboard — Live Now class indicator and CGPA snapshot",
    label: "01 — Dashboard",
    headline: "Everything you need. Nothing you don't.",
    copy: "The mobile dashboard leads with a \"Live Now\" indicator so a student rushing between buildings knows their next destination before they even unlock their phone. CGPA and attendance sit just below, rendered as large, high-contrast numerals rather than buried table cells — because those two numbers carry the most cognitive weight in a student's day, and surfacing them instantly transforms anxiety into awareness.",
  },
  {
    src: "/Exams.png",
    alt: "Mobile Exams & Schedule — countdown timer and clean timeline",
    label: "02 — Exams & Schedule",
    headline: "Calm under pressure.",
    copy: "Exam season is inherently stressful. The original portal did nothing to help — a static list of dates with no sense of urgency or sequence. The redesigned Exams screen replaces that with a live countdown timer front and center, giving students a clear answer to the question they're already asking: \"How much time do I have?\" Below it, a vertical timeline renders upcoming papers in chronological order, eliminating the need to mentally sort and prioritize.",
  },
  {
    src: "/Results.png",
    alt: "Mobile Results & Analytics — graphical trend charts replacing dense tables",
    label: "03 — Results & Analytics",
    headline: "Your progress, made legible.",
    copy: "Dense mark-sheets are the enemy of self-reflection. When every subject is a row in a table, patterns are invisible. The Results screen replaces those tables with trend-line charts, letting students see at a glance whether they're on an upward trajectory or need to course-correct. A single color-coded arc communicates semester GPA faster than any number can — because humans are wired to read shapes, not spreadsheets.",
  },
  {
    src: "/Library.png",
    alt: "Mobile Library Management — due dates and quick renewal actions",
    label: "04 — Library",
    headline: "Never pay a fine again.",
    copy: "The library module is almost always an afterthought in academic portals — until a student receives a fine notice. The mobile redesign puts due dates front and center with a high-visibility countdown, and surfaces a one-tap \"Renew\" action directly on the card. No navigation, no buried settings page. The friction to perform the single most important library action has been reduced to a single thumb movement.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function StudentPortalPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00f0ff] selection:text-black">

      {/* ── Navigation ── */}
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

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-mono text-[#00f0ff] tracking-widest uppercase mb-4">
            UX Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Redesigning the IEMCRP Student Portal
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            From &ldquo;Where do I click?&rdquo; to &ldquo;Here&apos;s what matters.&rdquo;
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["UX Research", "UI Design", "Mobile-First", "Figma"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-zinc-400 border border-white/10 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Section 1: The Context ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-[#00f0ff] pl-4">
            The Context
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              If you&apos;re a student at UEM, you know the struggle. You log in to check your attendance or routine, and you&apos;re immediately hit with a wall of blue buttons, scrolling text, and a layout that feels like it hasn&apos;t been updated since the early 2000s.
            </p>
            <p>
              As a Computer Science student — and someone obsessed with how humans interact with digital spaces — looking at our official portal always frustrated me. It wasn&apos;t just &ldquo;ugly.&rdquo; It was cognitively exhausting. I realized that if I was feeling overwhelmed just trying to find my next class, thousands of other students were too.
            </p>
            <p>
              So, for my portfolio, I decided to stop complaining and start fixing. I treated this not just as a visual update, but as a <em>User Experience Rescue</em> — a ground-up rethink of what a student portal is for, who uses it, when they use it, and on what device.
            </p>
          </div>
        </motion.section>

        {/* ── Section 2: The Before ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-red-500 pl-4">
            The &lsquo;Before&rsquo;: Cognitive Overload
          </h2>

          <div className="relative aspect-video w-full my-8 bg-neutral-900 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/portal-before.png"
              alt="The original chaotic blue screen of the student portal"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-zinc-500 text-center mb-10 italic">
            The original portal — a masterclass in what not to do.
          </p>

          <p className="text-lg text-zinc-300 mb-6">
            The original portal breaks almost every rule of modern design psychology:
          </p>

          <ul className="space-y-4 text-zinc-300 list-disc pl-6 leading-relaxed">
            <li>
              <strong className="text-white">No Hierarchy:</strong> Every button on the left sidebar fights for your attention equally. &ldquo;Exam Form&rdquo; looks just as important as &ldquo;Upload Photo.&rdquo;
            </li>
            <li>
              <strong className="text-white">Panic-Inducing UI:</strong> Red text warnings and scrolling banners manufacture a sense of urgency that has no place on a daily dashboard.
            </li>
            <li>
              <strong className="text-white">Hidden Value:</strong> Important information — like your daily routine — is buried inside a dense table that demands horizontal scrolling and concentrated effort just to parse.
            </li>
            <li>
              <strong className="text-white">The Vibe:</strong> It feels robotic and administrative. It treats the user like a database record number, not a student.
            </li>
          </ul>
        </motion.section>

        {/* ── Section 3: The After (Desktop) ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-[#00f0ff] pl-4">
            The &lsquo;After&rsquo;: Desktop — Clarity &amp; Calm
          </h2>

          <div className="relative aspect-video w-full my-8 bg-neutral-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-900/20 ring-1 ring-white/10">
            <Image
              src="/portal-after.png"
              alt="Redesigned student portal dashboard with card-based layout"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-zinc-500 text-center mb-10 italic">
            A modern, focused dashboard that respects the user&apos;s attention.
          </p>

          <p className="text-lg text-zinc-300 mb-8">
            My redesign focuses on one principle: <strong className="text-white">relevance</strong>. When you log in, what do you actually need to know <em>right now</em>?
          </p>

          <div className="space-y-8">
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">1. The &lsquo;At-a-Glance&rsquo; Dashboard</h3>
              <p className="text-zinc-400 leading-relaxed">
                Instead of a list of eleven confusing modules, I switched to a card-based layout. Student identity is front and center. CGPA and Attendance — the two metrics that live rent-free in every student&apos;s head — are pulled out of the shadows and given big, clean numerical indicators. (Yes, the &ldquo;Needs Improvement&rdquo; label is real. We&apos;re keeping it honest here.)
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">2. Smart Routine Tracking</h3>
              <p className="text-zinc-400 leading-relaxed">
                This is my favorite feature. The old site showed a static weekly grid — an information dump with no context. My design replaces it with a &ldquo;Next Class&rdquo; card. Students don&apos;t care about Thursday&apos;s schedule on a Tuesday. We just need to know: <em>where do I need to be in 10 minutes?</em> The &ldquo;AI Lab: Live Now&rdquo; indicator answers that in a single glance.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">3. Visual Hierarchy by Design</h3>
              <p className="text-zinc-400 leading-relaxed">
                A dark sidebar cleanly separates navigation (tools) from the main canvas (content). Generous whitespace lets the eyes breathe. The result feels less like a legacy government archive and more like the SaaS dashboards students already use and trust — Notion, Linear, Vercel.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Transition bridge ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 border-t border-white/5 pt-16"
        >
          <p className="text-lg text-zinc-400 leading-relaxed">
            The desktop redesign addressed the core usability failures — but it only solved half the problem. Talking to fellow students revealed an uncomfortable truth: most of them never actually open the portal on a laptop. They check attendance between classes, look up results while waiting for a bus, and search the library catalog from the canteen queue. The real portal experience is mobile. And the original site on a phone? Completely unusable.
          </p>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            That realization turned a desktop redesign into a full product design exercise.
          </p>
        </motion.div>

        {/* ── Section 4: The Mobile-First Experience ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-5 h-5 text-[#00f0ff]" />
            <p className="text-sm font-mono text-[#00f0ff] tracking-widest uppercase">
              Section 04
            </p>
          </div>
          <h2 className="text-2xl font-semibold mb-8 text-white border-l-2 border-[#00f0ff] pl-4">
            The Mobile-First Experience
          </h2>

          {/* UX Copy */}
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed mb-16">
            <p>
              Students don&apos;t sit at desks to use their academic portal. They use it standing at a bus stop, while speed-walking between buildings, phone in one hand and a coffee in the other. That behavioral reality demanded a completely rethought interaction model — one designed for distraction, urgency, and a thumb that can&apos;t comfortably reach the top of the screen.
            </p>
            <p>
              The most foundational decision in the mobile design was replacing a top navigation bar with a persistent <strong className="text-white">bottom tab bar</strong>. This isn&apos;t purely aesthetic — it&apos;s rooted in how hands hold phones. Steven Hoober&apos;s research on mobile interaction patterns found that 75% of users operate their phones with one hand, and the natural reach zone clusters in the lower half of the screen. Placing navigation where thumbs already live reduces cognitive friction before the user even consciously processes the interface.
            </p>
            <p>
              Every screen in the mobile suite was designed around a single question: <em>what is the one thing a student needs from this section, right now, under time pressure?</em> That question determined layout priority, typographic scale, and which actions get surfaced at the primary interaction layer versus buried in secondary flows. The result is a suite of four screens that feel less like a government portal and more like a well-designed productivity tool — familiar, fast, and quietly powerful.
            </p>
          </div>
        </motion.section>

        {/* ── Mobile screens grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {mobileScreens.map((screen, i) => (
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Phone bezel */}
              <PhoneBezel src={screen.src} alt={screen.alt} />

              {/* Screen description */}
              <div className="mt-8 w-full max-w-[280px] mx-auto">
                <p className="text-xs font-mono text-[#00f0ff] tracking-widest uppercase mb-2">
                  {screen.label}
                </p>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {screen.headline}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {screen.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Closing reflection ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white border-l-2 border-[#00f0ff] pl-4">
            The Takeaway
          </h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              This project reinforced a lesson I keep re-learning: <strong className="text-white">the best design is invisible</strong>. When a student opens the redesigned portal and immediately sees their next class without thinking about where to look, the design has succeeded. They won&apos;t notice the carefully chosen typographic scale, the contrast ratios, or the intentional use of whitespace. They&apos;ll just feel like the tool <em>works</em>.
            </p>
            <p>
              The most effective design decisions in this project — the bottom navigation bar, the &ldquo;Live Now&rdquo; indicator, the countdown timers — were all born from one simple discipline: watching how real people actually behave with software, then designing to meet them exactly where they are.
            </p>
          </div>
        </motion.section>

      </main>

      {/* ── Footer ── */}
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
