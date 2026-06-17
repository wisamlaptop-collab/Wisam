"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import Reveal, { SectionTitle } from "@/components/Reveal";

export default function Journey() {
  return (
    <section id="journey" className="relative">
      <div className="glow-orb right-[-8%] top-[30%] h-72 w-72 bg-brand-600/20" />
      <div className="section-pad">
        <SectionTitle
          eyebrow="Yolculuk"
          title="Öğrenme & deneyim yolculuğum"
          description="Programlamaya başladığım günden bugüne öğrenme sürecim ve gelişimim."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500 via-accent-400 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i % 3}>
                <div
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />

                  <div className="relative z-10 flex-shrink-0">
                    <motion.span
                      whileInView={{ scale: [0.6, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-brand-500 to-accent-400 text-xs font-bold text-white shadow-lg shadow-brand-500/30 sm:-translate-x-1/2"
                    >
                      {i + 1}
                    </motion.span>
                  </div>

                  <div className="flex-1">
                    <div
                      className={`glass rounded-2xl p-5 ${
                        i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                      }`}
                    >
                      <span className="font-mono text-sm font-bold text-brand-300">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
