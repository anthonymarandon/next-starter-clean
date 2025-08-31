/**
 * Composant FeaturesSection
 * Affiche la section des fonctionnalités principales
 */

import { FeatureCard } from "./FeatureCard";
import { SectionHeader } from "./SectionHeader";
import { 
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const mainFeatures = [
  {
    icon: SiNextdotjs,
    title: "Performance optimisée",
    description: "Next.js 15 avec App Router pour des performances exceptionnelles.",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: SiTailwindcss,
    title: "Design moderne",
    description: "Tailwind CSS pour un design responsive et des composants personnalisables.",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: SiTypescript,
    title: "TypeScript intégré",
    description: "Configuration TypeScript complète pour un développement plus sûr et productif.",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400"
  }
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <SectionHeader
        id="features"
        title="Tout ce dont vous avez besoin"
        subtitle="Un starter kit pensé pour créer rapidement un site web moderne: une page vitrine élégante ou un site complet multi‑pages, avec la possibilité d’ajouter facilement une section actualités/blog et une bibliothèque de contenus."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {mainFeatures.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
}
