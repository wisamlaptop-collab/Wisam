"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-20 w-20"
            >
              <div className="absolute inset-0 animate-spin-slow rounded-2xl bg-gradient-to-tr from-brand-500 to-accent-400" />
              <div className="absolute inset-[3px] flex items-center justify-center rounded-2xl bg-[var(--bg)]">
                <span className="font-mono text-2xl font-bold gradient-text">
                  W
                </span>
              </div>
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-500 to-accent-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
            <p className="font-mono text-xs tracking-[0.3em] text-muted">
              YÜKLENİYOR
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
