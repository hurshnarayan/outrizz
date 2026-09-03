import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import MascotIcon from './MascotIcon';

export default function Navbar({
  onOpenPostModal,
  onOpenAboutModal,
  onScrollToSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-zinc-200/80 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Mascot Logo + Wordmark */}
        <a
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          {/* Mascot icon */}
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
            <MascotIcon className="w-8 h-8" />
          </div>

          <span className="font-black text-2xl tracking-tight text-zinc-950">
            outrizz
          </span>
        </a>

        {/* Right: Navigation Links + Post Now Button */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-zinc-700">
          <button
            onClick={() => onScrollToSection('leaderboard')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Leaderboard
          </button>
          <button
            onClick={() => onScrollToSection('leaderboard')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Categories
          </button>
          <button
            onClick={onOpenAboutModal}
            className="hover:text-black transition-colors cursor-pointer"
          >
            About
          </button>

          <button
            onClick={onOpenPostModal}
            className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-black text-white px-4 py-2 rounded-full text-xs font-black transition-all active:scale-95 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Post Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-zinc-200 px-4 py-3 flex flex-col gap-2.5 text-sm font-bold text-zinc-800">
          <button
            onClick={() => {
              onScrollToSection('leaderboard');
              setMobileMenuOpen(false);
            }}
            className="text-left py-1.5"
          >
            Leaderboard
          </button>
          <button
            onClick={() => {
              onScrollToSection('leaderboard');
              setMobileMenuOpen(false);
            }}
            className="text-left py-1.5"
          >
            Categories
          </button>
          <button
            onClick={() => {
              onOpenAboutModal();
              setMobileMenuOpen(false);
            }}
            className="text-left py-1.5"
          >
            About
          </button>
          <button
            onClick={() => {
              onOpenPostModal();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 bg-zinc-900 text-white rounded-xl text-center font-black mt-1"
          >
            + Post Now
          </button>
        </div>
      )}
    </header>
  );
}
