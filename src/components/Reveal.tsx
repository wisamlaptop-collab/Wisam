"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="chip mx-auto mb-4 font-mono uppercase tracking-widest text-brand-300">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
