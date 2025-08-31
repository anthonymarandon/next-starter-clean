/**
 * Composant SectionHeader
 * Titre + sous-titre cohérent entre sections
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div id={id} className="text-center mb-10 sm:mb-14 max-w-4xl mx-auto">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

