/**
 * Composant HeroSection
 * Section d'accroche avec titre, sous-titre et CTA
 */

"use client";

import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";
import { copyToClipboard } from "@/src/lib/copyToClipboard";

export function HeroSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (key: string, text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1600);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Décors de fond */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/25 to-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 h-56 w-56 rounded-full bg-blue-300/20 blur-2xl" />
        <div className="absolute -bottom-10 left-1/4 h-40 w-40 rounded-full bg-purple-400/20 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Démarrez plus vite avec un Starter moderne
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Next.js 15, TypeScript et Tailwind CSS 4 déjà configurés. Concentrez-vous sur votre produit, pas sur le boilerplate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-purple-600/25 transition-all"
            >
              Explorer les fonctionnalités
            </a>
          </div>
        </div>

        {/* Bloc commande rapide */}
        <div className="mx-auto mt-10 sm:mt-12 max-w-3xl">
          <div id="install" className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 backdrop-blur p-4 sm:p-5 shadow-xl">
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              Installation rapide
            </div>
            {/* 3 étapes */}
            <ol className="mb-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">1</span>
                <span>Cloner le dépôt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">2</span>
                <span>Installer les dépendances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs">3</span>
                <span>Lancer le serveur de dev</span>
              </li>
            </ol>
            {/* Commandes */}
            <div className="font-mono text-sm sm:text-base text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800/60 rounded-xl p-1 sm:p-2 border border-gray-200 dark:border-gray-700 divide-y divide-gray-200/80 dark:divide-gray-700/80">
              {/* git clone */}
              <div className="flex items-center justify-between gap-3 p-2 sm:p-3">
                <div className="flex items-center gap-3 overflow-x-auto">
                  <span className="select-none text-gray-400">$</span>
                  <span className="whitespace-pre">git clone https://github.com/anthonymarandon/next-starter-clean.git</span>
                </div>
                <button
                  aria-label="Copier la commande git clone"
                  onClick={() => handleCopy("clone", "git clone https://github.com/anthonymarandon/next-starter-clean.git")}
                  className="shrink-0 inline-flex items-center justify-center rounded-lg border border-gray-300/70 dark:border-gray-700 p-2 hover:bg-white/60 hover:dark:bg-gray-900/40 transition-colors"
                >
                  {copied === "clone" ? <FiCheck className="text-green-600" /> : <FiCopy className="text-gray-600 dark:text-gray-300" />}
                </button>
              </div>

              {/* install */}
              <div className="flex items-center justify-between gap-3 p-2 sm:p-3">
                <div className="flex items-center gap-3 overflow-x-auto">
                  <span className="select-none text-gray-400">$</span>
                  <span className="whitespace-pre">pnpm install</span>
                </div>
                <button
                  aria-label="Copier la commande pnpm install"
                  onClick={() => handleCopy("install", "pnpm install")}
                  className="shrink-0 inline-flex items-center justify-center rounded-lg border border-gray-300/70 dark:border-gray-700 p-2 hover:bg-white/60 hover:dark:bg-gray-900/40 transition-colors"
                >
                  {copied === "install" ? <FiCheck className="text-green-600" /> : <FiCopy className="text-gray-600 dark:text-gray-300" />}
                </button>
              </div>

              {/* dev */}
              <div className="flex items-center justify-between gap-3 p-2 sm:p-3">
                <div className="flex items-center gap-3 overflow-x-auto">
                  <span className="select-none text-gray-400">$</span>
                  <span className="whitespace-pre">pnpm dev</span>
                </div>
                <button
                  aria-label="Copier la commande pnpm dev"
                  onClick={() => handleCopy("dev", "pnpm dev")}
                  className="shrink-0 inline-flex items-center justify-center rounded-lg border border-gray-300/70 dark:border-gray-700 p-2 hover:bg-white/60 hover:dark:bg-gray-900/40 transition-colors"
                >
                  {copied === "dev" ? <FiCheck className="text-green-600" /> : <FiCopy className="text-gray-600 dark:text-gray-300" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
