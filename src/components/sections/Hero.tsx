"use client";

import { motion } from "framer-motion";
import { personal, typingPhrases, skills } from "@/lib/data";
import TypingAnimation from "@/components/effects/TypingAnimation";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="glow-orb left-[-10%] top-[10%] h-72 w-72 bg-brand-600/40" />
      <div className="glow-orb right-[-5%] top-[30%] h-80 w-80 bg-accent-500/30" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:42px_42px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="section-pad grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-muted">Yeni projelere açığım</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
          >
            Merhaba, ben{" "}
            <span className="gradient-text animate-gradient-x">
              {personal.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-xl font-semibold sm:text-2xl md:text-3xl"
          >
            <TypingAnimation phrases={typingPhrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Irak&apos;tan genç ve tutkulu bir yazılım geliştiricisiyim.
            Programlama, yapay zeka ve modern teknolojilerle faydalı uygulamalar
            geliştiriyor, her gün kendimi geliştirmeye devam ediyorum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button onClick={() => scrollTo("contact")} className="btn-primary">
              İletişime Geç
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => scrollTo("projects")} className="btn-ghost">
              Projeleri Gör
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            <span className="text-xs text-muted">Teknolojiler:</span>
            {skills.map((s) => (
              <span key={s.name} className="chip font-mono">
                {s.name}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="absolute -inset-4 animate-float rounded-3xl bg-gradient-to-tr from-brand-500/30 to-accent-400/20 blur-2xl" />
          <div className="glass relative animate-float-slow rounded-3xl p-1.5 shadow-2xl">
            <div className="rounded-[1.35rem] bg-[var(--bg-soft)] p-5 font-mono text-sm">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="leading-relaxed text-muted">
                <span className="text-brand-300">const</span>{" "}
                <span className="text-accent-400">developer</span> = {"{"}
                {"\n"}  {""}ad:{" "}
                <span className="text-green-400">&apos;Wisam&apos;</span>,{"\n"}  {""}
                rol:{" "}
                <span className="text-green-400">&apos;Developer&apos;</span>,{"\n"}  {""}
                ulke:{" "}
                <span className="text-green-400">&apos;Irak&apos;</span>,{"\n"}  {""}
                tutku:{" "}
                <span className="text-green-400">&apos;∞&apos;</span>,{"\n"}
                {"}"};
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="text-xs">Kaydır</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--border)] p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-brand-400"
          />
        </span>
      </button>
    </section>
  );
}
