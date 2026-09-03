import React from 'react';
import { Crown, Trophy, Award } from 'lucide-react';

export default function RankBadge({ rank, size = 'md' }) {

  if (rank === 1) {
    return (
      <div className={`inline-flex items-center gap-1.5 font-extrabold rounded-full shadow-sm bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-black border border-amber-500/30 ${
        size === 'lg' ? 'px-3.5 py-1.5 text-sm' : size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
      }`}>
        <Crown className={size === 'lg' ? 'w-4 h-4 fill-black text-black' : 'w-3.5 h-3.5 fill-black text-black'} />
        <span>#1 Rizz Lord</span>
      </div>
    );
  }

  if (rank === 2) {
    return (
      <div className={`inline-flex items-center gap-1.5 font-bold rounded-full shadow-sm bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 text-zinc-900 border border-zinc-300 ${
        size === 'lg' ? 'px-3.5 py-1.5 text-sm' : size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
      }`}>
        <Trophy className={size === 'lg' ? 'w-4 h-4 text-zinc-800' : 'w-3.5 h-3.5 text-zinc-800'} />
        <span>#2 Rank</span>
      </div>
    );
  }

  if (rank === 3) {
    return (
      <div className={`inline-flex items-center gap-1.5 font-bold rounded-full shadow-sm bg-gradient-to-r from-amber-600/20 via-orange-500/20 to-amber-700/20 text-amber-900 border border-amber-600/30 ${
        size === 'lg' ? 'px-3.5 py-1.5 text-sm' : size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
      }`}>
        <Award className={size === 'lg' ? 'w-4 h-4 text-amber-700' : 'w-3.5 h-3.5 text-amber-700'} />
        <span>#3 Rank</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center font-bold text-zinc-600 rounded-full bg-zinc-100 border border-zinc-200 ${
      size === 'lg' ? 'px-3 py-1 text-sm' : size === 'sm' ? 'px-1.5 py-0.5 text-[11px]' : 'px-2 py-0.5 text-xs'
    }`}>
      <span>#{rank}</span>
    </div>
  );
}
