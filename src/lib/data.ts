export const personal = {
  name: "Wisam",
  role: "Yazılım Geliştirici",
  headline: "Genç Yazılım Geliştirici & Teknoloji Tutkunu",
  email: "wisamcuneyt@gmail.com",
  whatsapp: "+90 501 058 1966",
  whatsappRaw: "905010581966",
  nationality: "Iraklı",
  location: "Irak",
  birth: "27 Aralık 2009",
};

export const navLinks = [
  { id: "home", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yetenekler" },
  { id: "projects", label: "Projeler" },
  { id: "journey", label: "Yolculuk" },
  { id: "contact", label: "İletişim" },
];

export const typingPhrases = [
  "Yazılım Geliştirici",
  "Mobil Uygulama Geliştirici",
  "Yapay Zeka Meraklısı",
  "Sürekli Öğrenen",
];

export type Skill = {
  name: string;
  level: number;
  category: string;
  color: string;
};

export const skills: Skill[] = [
  { name: "Python", level: 88, category: "Dil", color: "#3776ab" },
  { name: "JavaScript", level: 82, category: "Dil", color: "#f7df1e" },
  { name: "Flutter", level: 80, category: "Framework", color: "#02569b" },
  { name: "React Native", level: 76, category: "Framework", color: "#61dafb" },
  { name: "HTML", level: 92, category: "Web", color: "#e34f26" },
  { name: "CSS", level: 88, category: "Web", color: "#1572b6" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Çalışma Asistanı",
    description:
      "Öğrencilerin ders çalışma sürecini kişiselleştiren, soru üreten ve konu özetleyen yapay zeka destekli bir asistan uygulaması.",
    tech: ["Python", "AI", "Flask"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/wisam",
    demo: "#",
    featured: true,
  },
  {
    title: "Görev Yönetim Uygulaması",
    description:
      "Sürükle-bırak destekli, gerçek zamanlı senkronizasyona sahip modern bir görev ve proje takip uygulaması.",
    tech: ["React Native", "JavaScript", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/wisam",
    demo: "#",
    featured: true,
  },
  {
    title: "Flutter Mobil Uygulama",
    description:
      "Akıcı animasyonlar ve şık arayüzü ile çoklu platform desteği sunan, performans odaklı bir Flutter mobil uygulaması.",
    tech: ["Flutter", "Dart"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/wisam",
    demo: "#",
  },
  {
    title: "Portföy Web Sitesi",
    description:
      "Modern tasarım ilkeleri, glassmorphism ve akıcı animasyonlarla tasarlanmış kişisel portföy web sitesi.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/wisam",
    demo: "#",
  },
  {
    title: "Verimlilik Aracı",
    description:
      "Pomodoro zamanlayıcı, alışkanlık takibi ve odak istatistikleri ile günlük üretkenliği artıran bir masaüstü aracı.",
    tech: ["Python", "JavaScript", "Electron"],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/wisam",
    demo: "#",
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2021",
    title: "İlk Kod Satırları",
    description:
      "Programlamaya olan ilgim Python ile başladı. Temel algoritmaları ve problem çözmeyi öğrenerek yazılım dünyasına ilk adımımı attım.",
  },
  {
    year: "2022",
    title: "Web Geliştirmeye Geçiş",
    description:
      "HTML, CSS ve JavaScript öğrenerek interaktif web sayfaları oluşturmaya başladım. Frontend geliştirmenin temellerini kavradım.",
  },
  {
    year: "2023",
    title: "Mobil Uygulama Dünyası",
    description:
      "Flutter ve React Native ile çoklu platform mobil uygulamalar geliştirmeyi öğrendim. İlk mobil projelerimi hayata geçirdim.",
  },
  {
    year: "2024",
    title: "Yapay Zeka & Modern Teknolojiler",
    description:
      "Yapay zeka, makine öğrenmesi ve modern web framework'lerine yöneldim. Daha karmaşık ve faydalı projeler üretmeye odaklandım.",
  },
  {
    year: "2025",
    title: "Sürekli Gelişim",
    description:
      "Açık kaynak projelere katkı sağlayarak ve yeni teknolojiler öğrenerek teknik becerilerimi sürekli geliştiriyorum.",
  },
];

export type Stat = { label: string; value: string };

export const stats: Stat[] = [
  { label: "Yıl Deneyim", value: "4+" },
  { label: "Tamamlanan Proje", value: "10+" },
  { label: "Teknoloji", value: "6+" },
  { label: "Öğrenme Tutkusu", value: "∞" },
];
