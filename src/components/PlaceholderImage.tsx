import React from 'react';
import { ImageOff } from 'lucide-react';
import { YarnIcon } from './YarnIcon';

interface PlaceholderImageProps {
  label: string;
  alt?: string;
  className?: string;
}

/** Branded local placeholder used until real product photos are added. */
export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  label,
  alt,
  className = '',
}) => (
  <div
    className={`${className} bg-gradient-to-br from-[#355748] via-[#2D4539] to-[#1E3027] flex flex-col items-center justify-center text-center p-6 min-h-[220px]`}
    role="img"
    aria-label={alt ?? `${label} — visuel à venir`}
  >
    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#91B5A3] mb-3 backdrop-blur-sm">
      <YarnIcon className="w-7 h-7" />
    </div>
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#91B5A3] mb-1.5">
      {label}
    </span>
    <span className="text-[13px] text-[#FFF9F2]/70 leading-snug max-w-[240px] inline-flex items-center gap-1.5">
      <ImageOff className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      Photos du produit en cours de préparation
    </span>
  </div>
);
