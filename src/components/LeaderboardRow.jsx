import React from 'react';
import MascotIcon from './MascotIcon';
import { getInstagramUrl } from '../utils/formatters';
import { Check, ExternalLink } from 'lucide-react';

export default function LeaderboardRow({
  entry,
  hasVoted,
  onVote
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-3 sm:px-4 border-b border-zinc-100 hover:bg-zinc-50/70 rounded-2xl transition-colors gap-3">
      {/* Left: Rank + The Rizz Line (Thin Italic Hero) + Secondary Author */}
      <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
        {/* Rank number */}
        <span className="w-6 text-center text-base font-black text-zinc-400 flex-shrink-0 pt-0.5 sm:pt-0">
          {entry.rank}
        </span>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* THE RIZZ - Thin font and in italics */}
          <p className="font-serif italic font-normal text-base sm:text-lg text-zinc-950 leading-relaxed tracking-normal py-1 group-hover:text-red-600 transition-colors">
            “{entry.caption}”
          </p>

          {/* Secondary author meta: small avatar + name + @handle */}
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <div className="w-5 h-5 rounded-full overflow-hidden bg-zinc-100 flex-shrink-0 border border-zinc-200">
              <img
                src={entry.photo}
                alt={entry.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-bold text-zinc-700">
              {entry.name}
            </span>
            <span className="text-zinc-300 text-xs">•</span>
            <a
              href={getInstagramUrl(entry.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-xs font-semibold text-zinc-400 hover:text-red-600 transition-colors"
            >
              <span>{entry.handle}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right: Mascot Icon + Vote count + Direct Vote Action */}
      <div className="flex items-center justify-end gap-3 sm:gap-4 flex-shrink-0 self-end sm:self-center">
        <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-zinc-900">
          <MascotIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          <span className="text-red-600 font-black">{entry.votes.toLocaleString()}</span>
          <span className="text-zinc-600">Votes</span>
        </div>

        {hasVoted ? (
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            <span>Voted</span>
          </span>
        ) : (
          <button
            onClick={() => onVote(entry.id)}
            className="px-3.5 py-1 rounded-lg border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 font-black text-xs transition-colors cursor-pointer active:scale-95"
          >
            Vote
          </button>
        )}
      </div>
    </div>
  );
}
