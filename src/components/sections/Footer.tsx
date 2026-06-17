"use client";

import { navLinks, personal } from "@/lib/data";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/wisam",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${personal.whatsappRaw}`,
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 font-mono text-lg font-bold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-500 to-accent-400 text-white">
                W
              </span>
              {personal.name}
            </button>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Genç ve tutkulu bir yazılım geliştirici. Modern teknolojilerle
              geleceği inşa ediyorum.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Navigasyon
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-muted transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Sosyal Medya
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all hover:-translate-y-1 hover:text-brand-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="mt-4 block text-sm text-muted transition-colors hover:text-brand-300"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {personal.name}. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Next.js & Tailwind ile</span>
            <span className="text-red-400">♥</span>
            <span>tasarlandı</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
