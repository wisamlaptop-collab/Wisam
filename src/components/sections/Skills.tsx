"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Reveal, { SectionTitle } from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="glow-orb left-[-8%] top-[20%] h-64 w-64 bg-accent-500/20" />
      <div className="section-pad">
        <SectionTitle
          eyebrow="Yetenekler"
          title="Teknik becerilerim"
          description="Modern uygulamalar geliştirmek için kullandığım diller, framework'ler ve teknolojiler."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ background: skill.color }}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl font-mono text-lg font-bold"
                      style={{
                        background: `${skill.color}22`,
                        color: skill.color,
                      }}
                    >
                      {skill.name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <span className="text-xs text-muted">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-semibold text-muted">
                    {skill.level}%
                  </span>
                </div>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, #22d3ee)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
