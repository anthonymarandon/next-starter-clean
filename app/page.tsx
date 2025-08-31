/**
 * Page d'accueil du Starter Kit
 * 
 * Cette page présente les fonctionnalités principales du starter kit
 * avec une interface moderne et responsive.
 */

import { Header } from "@/src/components/landing/Header";
import { HeroSection } from "@/src/components/landing/HeroSection";
import { FeaturesSection } from "@/src/components/landing/FeaturesSection";
import { WhyNextSection } from "@/src/components/landing/WhyNextSection";
import { ReadyToUseSection } from "@/src/components/landing/ReadyToUseSection";
import { Footer } from "@/src/components/landing/Footer";

/**
 * Composant principal de la page d'accueil
 * Assemble tous les composants dans une mise en page responsive
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyNextSection />
      <ReadyToUseSection />
      <Footer />
    </div>
  );
}
