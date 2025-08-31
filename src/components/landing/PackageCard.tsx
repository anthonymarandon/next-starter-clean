/**
 * Composant PackageCard
 * Affiche une carte de package avec icône, titre et description
 */

interface PackageCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export function PackageCard({ icon, title, description, bgColor, iconColor }: PackageCardProps) {
  const IconComponent = icon;
  
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:ring-1 hover:ring-blue-500/20 dark:hover:ring-blue-400/20 transition-all duration-300 hover:-translate-y-1">
      <div className={`flex items-center justify-center w-12 h-12 ${bgColor} rounded-lg mb-4 ring-1 ring-black/5 dark:ring-white/10`}>
        <IconComponent className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
}
