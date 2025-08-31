/**
 * Composant WhyNextSection
 * Met en avant les avantages concrets de Next.js pour un site web
 */

import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
import {
  FiZap,
  FiSearch,
  FiLayers,
  FiImage,
  FiServer,
  FiCommand,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiZap,
    title: "Performance de pointe",
    description:
      "Rendu hybride (SSR/SSG/ISR), streaming et cache pour des pages ultra rapides.",
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: FiSearch,
    title: "SEO prêt pour la prod",
    description:
      "Structure optimisée, métadonnées, vitesse et meilleures pratiques pour ranker vite.",
    bgColor: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FiLayers,
    title: "Routage flexible",
    description:
      "App Router, layouts imbriqués et segments dynamiques pour des sites multi‑pages.",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: FiImage,
    title: "Médias optimisés",
    description:
      "Images et polices optimisées automatiquement pour une UX irréprochable.",
    bgColor: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: FiServer,
    title: "Scalable et moderne",
    description:
      "API Routes, Edge Runtime et ISR pour grandir sans douleur.",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: FiCommand,
    title: "DX excellente",
    description:
      "TypeScript, hot refresh et Server Actions pour développer plus vite.",
    bgColor: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
];

export function WhyNextSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <SectionHeader
        id="why-next"
        title="Pourquoi Next.js pour votre site web ?"
        subtitle="Des performances, un SEO solide et une expérience de développement moderne pour construire une vitrine élégante ou un site complet multi‑pages."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {benefits.map((item, i) => (
          <FeatureCard key={i} feature={item as any} />
        ))}
      </div>
    </section>
  );
}

