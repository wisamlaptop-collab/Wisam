"use client";

import { motion } from "framer-motion";
import { personal, stats } from "@/lib/data";
import Reveal, { SectionTitle } from "@/components/Reveal";

const highlights = [
  {
    title: "Tutkulu Öğrenci",
    text: "Yeni teknolojileri öğrenmeyi ve sınırlarımı zorlamayı seviyorum.",
    icon: (
      <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" />
    ),
  },
  {
    title: "Problem Çözücü",
    text: "Karmaşık problemleri sade ve etkili çözümlere dönüştürürüm.",
    icon: <path d="M9 21h6M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />,
  },
  {
    title: "Yapay Zeka Meraklısı",
    text: "AI ve makine öğrenmesi ile geleceğin uygulamalarını inşa ediyorum.",
    icon: <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8V6a4 4 0 0 0-4-4z" />,
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="Hakkımda"
          title="Genç bir geliştiricinin hikayesi"
          description="Teknolojiye olan tutkum ve sürekli öğrenme arzumla yazılım dünyasında ilerliyorum."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Merhaba, ben{" "}
                <span className="gradient-text">{personal.name}</span> 👋
              </h3>
              <div className="mt-5 space-y-4 text-muted">
                <p>
                  Irak&apos;tan genç ve tutkulu bir yazılım geliştiricisiyim.
                  Programlama, yazılım geliştirme, yapay zeka ve modern
                  teknolojilere derin bir ilgi duyuyorum.
                </p>
                <p>
                  Yeni teknolojiler öğrenmekten, faydalı uygulamalar
                  geliştirmekten ve teknik becerilerimi sürekli olarak
                  iyileştirmekten büyük keyif alıyorum. Her proje benim için yeni
                  bir öğrenme fırsatı.
                </p>
                <p>
                  Hedefim, edindiğim bilgi ve deneyimle gerçek dünyada fark
                  yaratan, insanların hayatını kolaylaştıran yazılımlar üretmek.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-[var(--border)] p-3">
                  <span className="text-muted">Uyruk</span>
                  <p className="font-semibold">{personal.nationality}</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] p-3">
                  <span className="text-muted">Doğum Tarihi</span>
                  <p className="font-semibold">{personal.birth}</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] p-3">
                  <span className="text-muted">Rol</span>
                  <p className="font-semibold">{personal.role}</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] p-3">
                  <span className="text-muted">Durum</span>
                  <p className="font-semibold text-green-400">Müsait</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i}>
                <div className="glass group flex gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-500/20 to-accent-400/20 text-brand-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {h.icon}
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold">{h.title}</h4>
                    <p className="mt-1 text-sm text-muted">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-extrabold gradient-text sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
