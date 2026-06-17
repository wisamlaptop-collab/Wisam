# Wisam — Kişisel Portföy Web Sitesi

Genç yazılım geliştirici Wisam için modern, premium ve tamamen responsive kişisel portföy sitesi.

## ✨ Özellikler

- **Modern UI/UX** — Glassmorphism efektleri ve premium tasarım
- **Karanlık/Aydınlık tema** — Varsayılan karanlık tema + tema değiştirici
- **Animasyonlar** — Framer Motion ile akıcı geçişler ve hover efektleri
- **Animasyonlu parçacık arka planı** — Canvas tabanlı, fareyle etkileşimli
- **Hero'da yazı animasyonu** — Typing efekti
- **Scroll ilerleme göstergesi** — Sayfa üstünde
- **Mobile-first responsive tasarım**
- **SEO optimizasyonu** — Metadata, Open Graph, sitemap, robots
- **Erişilebilirlik** — Semantik HTML, ARIA etiketleri, reduced-motion desteği

## 🧩 Bölümler

Hero · Hakkımda · Yetenekler · Projeler · Öğrenme Yolculuğu (timeline) · İletişim (form) · Footer

## 🛠 Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## 🚀 Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm run start
```

Geliştirme sunucusu varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── globals.css        # Global stiller + tema değişkenleri
│   ├── layout.tsx         # Kök layout, fontlar, metadata
│   ├── page.tsx           # Ana sayfa kompozisyonu
│   ├── robots.ts          # robots.txt
│   └── sitemap.ts         # sitemap.xml
├── components/
│   ├── effects/           # Particles, ScrollProgress, Typing, Preloader, BackToTop
│   ├── sections/          # Hero, About, Skills, Projects, Journey, Contact, Footer
│   ├── Navbar.tsx
│   ├── Reveal.tsx         # Scroll reveal + section başlığı
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
└── lib/
    └── data.ts            # Tüm içerik & yapılandırma
```

## ✏️ İçeriği Düzenleme

Tüm metinler, projeler, yetenekler ve kişisel bilgiler `src/lib/data.ts` dosyasında merkezi olarak tutulur.

## 📦 Deploy

[Vercel](https://vercel.com) ile tek tıkla deploy edilebilir. Repoyu bağlayın; ek yapılandırma gerekmez.

---

© Wisam · Next.js & Tailwind ile tasarlandı.
