import React from 'react';
import { ImageOff } from 'lucide-react';
import { YarnIcon } from './YarnIcon';
import type { Product } from '../config/catalog';

interface ProductVisualProps {
  product: Product;
  /** Extra classes for the outer wrapper. */
  className?: string;
  /** Classes for the <img> when a real photo exists. */
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Renders the product photo, or a branded placeholder block when the
 * product has no real visual yet (swap in images via `catalog.ts`).
 */
export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
}) => {
  const firstImage = product.images[0];

  if (firstImage) {
    return (
      <div className={className}>
        <img
          src={firstImage.src}
          alt={firstImage.alt}
          className={imgClassName}
          loading={loading}
        />
      </div>
    );
  }

  return (
    <div
      className={`${className} bg-gradient-to-br from-[#355748] via-[#2D4539] to-[#1E3027] flex flex-col items-center justify-center text-center p-6`}
      role="img"
      aria-label={`${product.name} — visuel à venir`}
    >
      <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#91B5A3] mb-3 backdrop-blur-sm">
        <YarnIcon className="w-7 h-7" />
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#91B5A3] mb-1.5">
        Visuel à venir
      </span>
      <span className="text-[13px] text-[#FFF9F2]/70 leading-snug max-w-[220px] inline-flex items-center gap-1.5">
        <ImageOff className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        Photos du produit en cours de préparation
      </span>
    </div>
  );
};
