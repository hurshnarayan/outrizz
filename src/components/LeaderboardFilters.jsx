import React from 'react';
import { CATEGORIES } from '../data/mockEntries';
import { Clock, Search, Trophy } from 'lucide-react';

export default function LeaderboardFilters({
  activeTab,
  onTabChange,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  resetTimer
}) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200/80 p-3.5 sm:p-4 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Left side: Today / All-time Switcher Toggle */}
      <div className="flex items-center gap-2">
        <div className="inline-flex p-1 bg-zinc-100 rounded-xl border border-zinc-200/70">
          <button
            onClick={() => onTabChange('today')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition-all ${
              activeTab === 'today'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Clock className={`w-3.5 h-3.5 ${activeTab === 'today' ? 'text-amber-300' : 'text-zinc-400'}`} />
            <span>Today's Board</span>
            {activeTab === 'today' && resetTimer && (
              <span className="hidden sm:inline-block bg-red-700/80 px-1.5 py-0.5 rounded text-[10px] font-bold">
                {resetTimer.formatted} left
              </span>
            )}
          </button>

          <button
            onClick={() => onTabChange('all-time')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-black transition-all ${
              activeTab === 'all-time'
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Trophy className={`w-3.5 h-3.5 ${activeTab === 'all-time' ? 'text-amber-400' : 'text-zinc-400'}`} />
            <span>All-Time</span>
          </button>
        </div>
      </div>

      {/* Center: Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900'
              }`}
            >
              {cat === 'Trending' && '🔥 '}
              {cat === 'Daily' && '⚡ '}
              {cat === 'New' && '✨ '}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Right side: Search Box */}
      <div className="relative min-w-[200px] sm:w-64">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search name or @handle..."
          className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-700 p-0.5"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
