import React from 'react';

export const YarnIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ball circle */}
      <circle cx="12" cy="12" r="9" />
      {/* Yarn swirl curves */}
      <path d="M5.5 8.5C7.5 10.5 11 11.5 15.5 10.5" />
      <path d="M4 13.5C7 15 12 15.5 18 13" />
      <path d="M8 5C10 8.5 13 14 15 19" />
      <path d="M14 4.5C14.5 7.5 13.5 12 11 18.5" />
      {/* Free thread winding out */}
      <path d="M19 16C21 17.5 21.5 20 20 21" strokeDasharray="1 1" />
    </svg>
  );
};

export const PineBranchIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 20L20 4" />
      <path d="M9 15L7 12" />
      <path d="M11 13L14 15" />
      <path d="M13 11L11 8" />
      <path d="M15 9L18 11" />
      <path d="M17 7L15 4" />
    </svg>
  );
};
