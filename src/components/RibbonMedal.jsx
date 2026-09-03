import React from 'react';

export default function RibbonMedal({ rank }) {
  if (rank === 1) {
    // Gold Medal #1
    return (
      <div className="relative w-12 h-14 flex items-center justify-center filter drop-shadow-sm select-none">
        {/* Ribbon tails */}
        <div className="absolute -bottom-1 left-2 w-3 h-5 bg-amber-600 rotate-12 origin-top rounded-b-xs" />
        <div className="absolute -bottom-1 right-2 w-3 h-5 bg-amber-700 -rotate-12 origin-top rounded-b-xs" />

        {/* Starburst rosette back */}
        <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 p-0.5 shadow-md flex items-center justify-center border border-amber-600/40">
          <div className="w-9 h-9 rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 flex items-center justify-center border border-yellow-200/80 shadow-inner">
            <span className="text-amber-950 font-black text-lg leading-none font-sans drop-shadow-xs">
              1
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (rank === 2) {
    // Silver / Gold-trimmed Medal #2
    return (
      <div className="relative w-12 h-14 flex items-center justify-center filter drop-shadow-sm select-none">
        <div className="absolute -bottom-1 left-2 w-3 h-5 bg-amber-600/80 rotate-12 origin-top rounded-b-xs" />
        <div className="absolute -bottom-1 right-2 w-3 h-5 bg-amber-700/80 -rotate-12 origin-top rounded-b-xs" />

        <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-400 p-0.5 shadow-md flex items-center justify-center border border-amber-500/40">
          <div className="w-9 h-9 rounded-full bg-gradient-to-b from-yellow-200 to-amber-400 flex items-center justify-center border border-yellow-100 shadow-inner">
            <span className="text-amber-950 font-black text-lg leading-none font-sans drop-shadow-xs">
              2
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Bronze Medal #3
  return (
    <div className="relative w-12 h-14 flex items-center justify-center filter drop-shadow-sm select-none">
      <div className="absolute -bottom-1 left-2 w-3 h-5 bg-amber-800 rotate-12 origin-top rounded-b-xs" />
      <div className="absolute -bottom-1 right-2 w-3 h-5 bg-amber-900 -rotate-12 origin-top rounded-b-xs" />

      <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center border border-amber-800/40">
        <div className="w-9 h-9 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 flex items-center justify-center border border-amber-400/50 shadow-inner">
          <span className="text-amber-100 font-black text-lg leading-none font-sans drop-shadow-xs">
            3
          </span>
        </div>
      </div>
    </div>
  );
}
