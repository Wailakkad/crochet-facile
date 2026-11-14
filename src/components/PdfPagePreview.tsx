import React, { useState } from 'react';
import { Check, FileText, ZoomIn } from 'lucide-react';

interface PdfPagePreviewProps {
  /** Public path or URL of the page image. */
  src: string;
  alt: string;
  /** Badge label shown on the frame, e.g. "Page 3". */
  pageLabel: string;
  /** Optional serif card title rendered under the frame. */
  title?: string;
  /** Optional short description rendered under the title. */
  description?: string;
  /** Called when the real image has loaded successfully (lightbox becomes available). */
  onLoad?: () => void;
  /** Called when the image fails to load (placeholder stays, lightbox disabled). */
  onError?: () => void;
}

/**
 * A4-portrait (3:4) frame for one PDF page screenshot.
 * Falls back to a branded dark-green document placeholder when the file is missing.
 * When `title` / `description` are provided, renders the card body + gold "Inclus" line.
 */
export const PdfPagePreview: React.FC<PdfPagePreviewProps> = ({
  src,
  alt,
  pageLabel,
  title,
  description,
  onLoad,
  onError,
}) => {
  const [failed, setFailed] = useState(false);
  const showBody = Boolean(title || description);

  return (
    <>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl bg-[#2D4539]/5">
        {failed ? (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#355748] via-[#2D4539] to-[#1E3027] flex flex-col items-center justify-center text-center p-4"
            role="img"
            aria-label={alt}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#91B5A3] mb-3 backdrop-blur-sm">
              <FileText className="w-6 h-6" aria-hidden="true" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#91B5A3] pdf-shimmer">
              Aperçu de la page
            </span>
            <span className="mt-1.5 text-sm font-medium text-[#FFF9F2]/85">{pageLabel}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top"
            onLoad={onLoad}
            onError={() => {
              setFailed(true);
              onError?.();
            }}
          />
        )}

        {/* Round page badge — top left */}
        <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center rounded-full bg-[#FFF9F2]/95 px-2.5 py-1 text-[11px] font-semibold text-[#355748] shadow-xs border border-[#355748]/10">
          {pageLabel}
        </span>

        {/* Zoom hint — bottom right (only when the real image is shown) */}
        {!failed && (
          <span
            className="absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-[#FFF9F2]/95 border border-[#355748]/10 text-[#355748] flex items-center justify-center shadow-sm"
            aria-hidden="true"
          >
            <ZoomIn className="w-4 h-4" />
          </span>
        )}
      </div>

      {showBody && (
        <div className="p-5 flex flex-col grow">
          {title && (
            <h4 className="font-serif text-xl font-semibold text-[#252525] mb-1.5">
              {title}
            </h4>
          )}
          {description && (
            <p className="text-sm text-[#252525]/75 leading-relaxed line-clamp-3 grow">
              {description}
            </p>
          )}
          <span className="mt-4 pt-3 border-t border-[#355748]/10 inline-flex items-center gap-1.5 text-xs font-semibold text-[#355748]">
            <Check className="w-3.5 h-3.5 text-[#D8B876]" aria-hidden="true" />
            <span>Inclus</span>
          </span>
        </div>
      )}
    </>
  );
};
