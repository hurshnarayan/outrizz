import React from 'react';
import { Flame } from 'lucide-react';

export default function Footer({ onOpenHowItWorks, onOpenPostModal }) {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Left: Brand + Mascot */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              {/* Mascot floating without box/frame */}
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img
                  src="/mascots/mascot-icon-transparent.png"
                  alt="outrizz mascot"
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                  draggable="false"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-zinc-900 tracking-tight">
                  outrizz
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-zinc-900 text-amber-300">
                  .lol
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
              The premier social leaderboard for certified rizz. Post your photo, collect community votes, and drive thousands of genuine visitors directly to your Instagram.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Rankings reset automatically daily at 00:00 UTC</span>
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs sm:text-sm">
            <div>
              <h4 className="font-black text-zinc-900 uppercase tracking-wider text-xs mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-zinc-500 font-semibold">
                <li>
                  <a href="#leaderboard" className="hover:text-red-600 transition-colors">
                    Daily Leaderboard
                  </a>
                </li>
                <li>
                  <a href="#leaderboard" className="hover:text-red-600 transition-colors">
                    All-Time Hall of Fame
                  </a>
                </li>
                <li>
                  <button onClick={onOpenHowItWorks} className="hover:text-red-600 transition-colors text-left cursor-pointer">
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-zinc-900 uppercase tracking-wider text-xs mb-3">
                Participate
              </h4>
              <ul className="space-y-2 text-zinc-500 font-semibold">
                <li>
                  <button onClick={onOpenPostModal} className="hover:text-red-600 transition-colors text-left cursor-pointer font-bold text-red-600">
                    Post Rizz (₹10)
                  </button>
                </li>
                <li>
                  <span className="text-zinc-400">Vote on Entries</span>
                </li>
                <li>
                  <span className="text-zinc-400">Claim Profile</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-zinc-900 uppercase tracking-wider text-xs mb-3">
                Trust & Safety
              </h4>
              <ul className="space-y-2 text-zinc-500 font-semibold">
                <li>
                  <span className="text-zinc-400">Content Guidelines</span>
                </li>
                <li>
                  <span className="text-zinc-400">Anti-Spam Policy</span>
                </li>
                <li>
                  <span className="text-zinc-400">Moderation Rules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-medium">
          <div>
            © {new Date().getFullYear()} outrizz.lol — All rights reserved. Not affiliated with Instagram or Meta.
          </div>

          <div className="flex items-center gap-1">
            <span>Built for pure charisma & confidence</span>
            <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
