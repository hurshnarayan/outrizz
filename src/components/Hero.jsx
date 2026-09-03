import React from 'react';

const CATEGORIES = ['All', 'Trending', 'New', 'Daily', 'Creators'];

export default function Hero({
  activeCategory,
  onCategoryChange,
  activeTab,
  onTabChange
}) {
  return (
    <section className="pt-10 pb-8 text-center max-w-2xl mx-auto">
      {/* Centered Main Headline */}
      <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight mb-2">
        Climb to #1
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-zinc-600 font-medium mb-6">
        Post rizz. Get voted up. Get seen on Instagram.
      </p>

      {/* Centered Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Centered Today vs All-time Toggle Pill */}
      <div className="inline-flex items-center p-1 bg-zinc-100 rounded-full border border-zinc-200/80 text-xs font-bold">
        <button
          onClick={() => onTabChange('today')}
          className={`px-4 py-1 rounded-full transition-all cursor-pointer ${
            activeTab === 'today'
              ? 'bg-white text-zinc-950 shadow-xs font-black'
              : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          Today
        </button>

        <span className="px-2 text-zinc-400 font-normal select-none">vs</span>

        <button
          onClick={() => onTabChange('all-time')}
          className={`px-4 py-1 rounded-full transition-all cursor-pointer ${
            activeTab === 'all-time'
              ? 'bg-white text-zinc-950 shadow-xs font-black'
              : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          All-time
        </button>
      </div>
    </section>
  );
}
