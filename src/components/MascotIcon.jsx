import React from 'react';

export default function MascotIcon({ className = 'w-5 h-5', variant = 'default' }) {
  if (variant === 'watermark') {
    return (
      <img
        src="/mascots/mascot-icon-transparent.png"
        alt="outrizz mascot"
        className={`${className} object-contain opacity-25 grayscale hover:grayscale-0 hover:opacity-100 transition-all select-none`}
        draggable="false"
      />
    );
  }

  return (
    <img
      src="/mascots/mascot-icon-transparent.png"
      alt="outrizz mascot"
      className={`${className} object-contain select-none`}
      draggable="false"
    />
  );
}
