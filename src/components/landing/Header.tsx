/**
 * Composant Header pour la page d'accueil
 * Affiche le logo et le titre du starter kit
 */

import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo et titre */}
          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-white border border-gray-300 dark:border-gray-600 rounded-[10px] p-1 shadow-sm">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
              Starter Kit
            </span>
          </div>

          {/* Faux-nav / ancres */}
          <nav className="hidden sm:flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Fonctionnalités</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
