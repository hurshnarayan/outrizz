import React from 'react';
import RibbonMedal from './RibbonMedal';
import MascotIcon from './MascotIcon';
import { getInstagramUrl } from '../utils/formatters';
import { Check, ExternalLink } from 'lucide-react';

export default function EntryCard({
  entry,
  hasVoted,
  onVote
}) {
  return (
    <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative min-h-[350px]">
      {/* Top Bar: Author Meta (Secondary) on Left, Ribbon Medal on Right */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-100 flex-shrink-0 border border-zinc-200">
            <img
              src={entry.photo}
              alt={entry.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <span className="text-xs font-bold text-zinc-900 block truncate leading-tight">
              {entry.name}
            </span>
            <a
              href={getInstagramUrl(entry.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[11px] font-medium text-zinc-400 hover:text-red-600 transition-colors truncate leading-tight"
            >
              <span>{entry.handle}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* Ribbon Medal (#1, #2, #3) */}
        <RibbonMedal rank={entry.rank} />
      </div>

      {/* PRIMARY ATTRACTION: THE RIZZ QUOTE (Thin font and in italics with suitable padding) */}
      <div className="my-auto py-8 sm:py-10 px-3 sm:px-4 text-center">
        <p className="font-serif italic font-normal text-2xl sm:text-[26px] text-zinc-950 leading-relaxed tracking-normal group-hover:text-red-600 transition-colors">
          “{entry.caption}”
        </p>
      </div>

      {/* Bottom Area: Red Vote Count + Mascot Watermark + Direct VOTE button */}
      <div className="pt-4 border-t border-zinc-100 mt-2">
        <div className="flex items-center justify-center relative mb-3">
          <div className="text-center">
            <span className="text-red-600 font-black text-lg sm:text-xl">
              {entry.votes.toLocaleString()}
            </span>{' '}
            <span className="text-zinc-900 font-bold text-sm">Votes</span>
          </div>

          {/* Mascot watermark peek icon on right */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <MascotIcon className="w-6 h-6" variant="watermark" />
          </div>
        </div>

        {/* Bottom Vote Button - Direct 1-Click Vote */}
        {hasVoted ? (
          <button
            disabled
            className="w-full py-2.5 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-700 font-black text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-default"
          >
            <Check className="w-4 h-4 text-emerald-600" />
            <span>VOTED</span>
          </button>
        ) : (
          <button
            onClick={() => onVote(entry.id)}
            className="w-full py-2.5 rounded-xl border-2 border-zinc-900 bg-white hover:bg-zinc-900 text-zinc-900 hover:text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-98"
          >
            <span>VOTE</span>
            <MascotIcon className="w-4 h-4 inline-block" />
          </button>
        )}
      </div>
    </div>
  );
}
