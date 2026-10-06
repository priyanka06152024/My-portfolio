import coke from "../assets/coke.webp";
import k72 from "../assets/k72.webp";
import shopquick from "../assets/shopquick.webp";

export const projects = [
  {
    id: "01",
    slug: "coca-cola",
    title: "Coca-Cola",
    category: "Interactive 3D Experience",
    year: "2026",
    description:
      "An immersive product experience combining React, Three.js, React Three Fiber and GSAP.",
    tech: ["React", "Three.js", "R3F", "GSAP"],
    image: coke,

    liveUrl: "https://coca-cola-interactive-landing-page.vercel.app/",
  },

  {
    id: "02",
    slug: "k72",
    title: "K72",
    category: "Creative Agency Experience",
    year: "2026",
    description:
      "A motion-focused agency website inspired by editorial layouts and cinematic transitions.",
    tech: ["React", "GSAP", "ScrollTrigger", "Lenis"],
    image: k72,

    liveUrl: "https://coca-cola-interactive-landing-page.vercel.app/",
  },

  {
    id: "03",
    slug: "shopquick",
    title: "ShopQuick",
    category: "E-Commerce Experience",
    year: "2026",
    description:
      "A clean React e-commerce interface focused on product discovery and smooth interactions.",
    tech: ["React", "Tailwind", "React Router"],
    image: shopquick,

    liveUrl: "https://shop-quick-drnzjyaep-student-4842.vercel.app/",
  },
];