"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import Reveal, { SectionTitle } from "@/components/Reveal";

type Status = "idle" | "sending" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portföy İletişim — ${form.name}`);
    const body = encodeURIComponent(
      `İsim: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 800);
  };

  const channels = [
    {
      label: "E-posta",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </>
      ),
    },
    {
      label: "WhatsApp",
      value: personal.whatsapp,
      href: `https://wa.me/${personal.whatsappRaw}`,
      icon: (
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      ),
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className="glow-orb left-1/2 top-[20%] h-72 w-72 -translate-x-1/2 bg-brand-600/25" />
      <div className="section-pad">
        <SectionTitle
          eyebrow="İletişim"
          title="Birlikte çalışalım"
          description="Bir proje fikriniz mi var ya da sadece selam mı vermek istiyorsunuz? Bana ulaşmaktan çekinmeyin."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-500/20 to-accent-400/20 text-brand-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-muted">{c.label}</p>
                    <p className="truncate font-medium group-hover:text-brand-300">
                      {c.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={2}>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm text-muted">
                  Genellikle <span className="text-brand-300">24 saat</span>{" "}
                  içinde yanıt veriyorum. Yeni fırsatlara ve iş birliklerine her
                  zaman açığım.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    İsim
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Adınız"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm outline-none transition-colors focus:border-brand-400"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    E-posta
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ornek@email.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm outline-none transition-colors focus:border-brand-400"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm outline-none transition-colors focus:border-brand-400"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full disabled:opacity-60"
              >
                {status === "sending"
                  ? "Gönderiliyor..."
                  : status === "success"
                  ? "Teşekkürler! ✓"
                  : "Mesaj Gönder"}
              </motion.button>

              {status === "success" && (
                <p className="mt-3 text-center text-sm text-green-400">
                  E-posta uygulamanız açıldı. En kısa sürede dönüş yapacağım!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
