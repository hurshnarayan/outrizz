import React, { useState } from 'react';
import { Flame, Check } from 'lucide-react';
import { formatNumber } from '../utils/formatters';

export default function VoteButton({
  entryId,
  votes,
  hasVoted,
  onVote,
  size = 'md',
  showLabel = true,
  className = ''
}) {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (hasVoted) return;

    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 600);
    onVote(entryId);
  };

  if (hasVoted) {
    return (
      <button
        disabled
        className={`inline-flex items-center justify-center gap-1.5 font-bold rounded-xl transition-all duration-200 cursor-default bg-emerald-50 text-emerald-700 border border-emerald-200 ${
          size === 'lg' ? 'px-4 py-2.5 text-sm' : size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-2 text-xs'
        } ${className}`}
        title="You have already voted for this entry"
      >
        <Check className={size === 'lg' ? 'w-4 h-4 text-emerald-600' : 'w-3.5 h-3.5 text-emerald-600'} />
        {showLabel && <span>Voted</span>}
        <span className="font-extrabold text-emerald-800">({formatNumber(votes)})</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center gap-1.5 font-bold rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow ${
        size === 'lg'
          ? 'px-4 py-2.5 text-sm bg-red-600 hover:bg-red-700 text-white'
          : size === 'sm'
          ? 'px-2.5 py-1 text-xs bg-red-600 hover:bg-red-700 text-white'
          : 'px-3.5 py-2 text-xs bg-red-600 hover:bg-red-700 text-white'
      } ${isBouncing ? 'scale-110' : ''} ${className}`}
      title="Vote for this rizz entry (1 free vote)"
    >
      <Flame
        className={`${
          size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'
        } text-amber-300 transition-transform group-hover:scale-125 group-hover:rotate-12 ${
          isBouncing ? 'animate-bounce' : ''
        }`}
      />
      {showLabel && <span>Vote Rizz</span>}
      <span className="bg-red-700/60 px-1.5 py-0.5 rounded-md text-[11px] font-extrabold tracking-wide">
        {formatNumber(votes)}
      </span>
    </button>
  );
}
