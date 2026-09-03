import React from 'react';
import { Flame, Clock, Users, ArrowUpRight } from 'lucide-react';
import { formatNumber } from '../utils/formatters';

export default function StatsBar({ stats, resetTimer }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
      {/* Stat 1: Daily Reset Countdown */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 shadow-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Daily Reset In
          </div>
          <div className="text-base sm:text-lg font-black text-zinc-900 font-mono">
            {resetTimer ? `${resetTimer.hours}:${resetTimer.minutes}:${resetTimer.seconds}` : '07:42:15'}
          </div>
        </div>
      </div>

      {/* Stat 2: Votes Today */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 shadow-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
          <Flame className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Votes Today
          </div>
          <div className="text-base sm:text-lg font-black text-zinc-900">
            {formatNumber(stats.totalVotesToday)}
          </div>
        </div>
      </div>

      {/* Stat 3: Instagram Visits Driven */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 shadow-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
          <ArrowUpRight className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Instagram Clicks
          </div>
          <div className="text-base sm:text-lg font-black text-zinc-900">
            {formatNumber(stats.instagramClicksToday)}
          </div>
        </div>
      </div>

      {/* Stat 4: Active Rizz Entries */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 shadow-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Active Entries
          </div>
          <div className="text-base sm:text-lg font-black text-zinc-900">
            {formatNumber(stats.totalSubmissions)}
          </div>
        </div>
      </div>
    </div>
  );
}
