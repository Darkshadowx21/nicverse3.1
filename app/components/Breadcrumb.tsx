import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}

const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <nav 
      className={`mb-4 md:mb-6 lg:mb-8 px-2 sm:px-0 w-full overflow-x-auto ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center text-xs sm:text-sm font-bold min-w-max">
        {items.map((item, index) => (
          <li key={index} className="flex items-center whitespace-nowrap">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-2 sm:mx-3 text-gray-400 flex-shrink-0" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center"
              >
                {index === 0 && <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />}
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="text-purple-500 dark:text-purple-400"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;