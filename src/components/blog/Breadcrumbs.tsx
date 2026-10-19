import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '../../router';

export interface Crumb {
  label: string;
  path: string;
}

export const Breadcrumbs: React.FC<{ items: Crumb[] }> = ({ items }) => {
  return (
    <nav aria-label="Fil d’Ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#252525]/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="text-[#355748] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-[#355748] transition-colors underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-[#91B5A3]" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
