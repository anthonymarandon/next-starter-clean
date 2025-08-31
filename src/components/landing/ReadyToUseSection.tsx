/**
 * Composant ReadyToUseSection
 * Affiche la section des packages prêts à l'emploi
 */

import { PackageCard } from "./PackageCard";
import { SectionHeader } from "./SectionHeader";
import { 
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { 
  FiSmile, 
  FiCode,
} from "react-icons/fi";

const readyToUsePackages = [
  {
    icon: SiNextdotjs,
    title: "Next.js 15",
    description: "Framework React moderne avec App Router",
    bgColor: "bg-gray-100 dark:bg-gray-900",
    iconColor: "text-gray-600 dark:text-gray-400"
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    description: "Typage statique pour un code plus sûr",
    bgColor: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-600 dark:text-teal-400"
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS 4",
    description: "Framework CSS utilitaire moderne",
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-600 dark:text-yellow-400"
  },
  {
    icon: FiSmile,
    title: "React Icons",
    description: "Bibliothèque d'icônes complète",
    bgColor: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-600 dark:text-pink-400"
  },
  {
    icon: FiCode,
    title: "Composants UI",
    description: "Composants réutilisables et modulaires",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400"
  }
];

export function ReadyToUseSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <SectionHeader
        title="Technologies intégrées"
        subtitle="Un starter kit minimaliste avec les technologies essentielles pour démarrer rapidement"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {readyToUsePackages.map((packageItem, index) => (
          <PackageCard
            key={index}
            icon={packageItem.icon}
            title={packageItem.title}
            description={packageItem.description}
            bgColor={packageItem.bgColor}
            iconColor={packageItem.iconColor}
          />
        ))}
      </div>
    </section>
  );
}
