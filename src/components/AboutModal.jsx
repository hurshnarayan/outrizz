import React from 'react';
import { X } from 'lucide-react';
import MascotIcon from './MascotIcon';

export default function AboutModal({ isOpen, onClose, onOpenPostModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-zinc-200 p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <MascotIcon className="w-9 h-9" />
          <div>
            <h2 className="text-xl font-black text-zinc-900">About outrizz</h2>
            <p className="text-xs text-zinc-400">Social rizz leaderboard</p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
          <p>
            <strong>outrizz.lol</strong> is a live public leaderboard where users submit their photo, Instagram handle, and best rizz line.
          </p>
          <p>
            Community votes push people up the rankings. Every entry links out to the creator's Instagram profile — driving real, free profile visits to anyone who climbs to the top.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5 text-xs text-zinc-700 space-y-1.5">
            <div>🔥 <strong>Today's Board:</strong> Resets every 24 hours at midnight UTC.</div>
            <div>🏆 <strong>All-Time:</strong> The permanent Hall of Fame.</div>
            <div>⚡ <strong>1 Vote / Person:</strong> Authentic votes only.</div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenPostModal();
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white font-black text-xs transition-colors cursor-pointer"
          >
            Post Your Entry (₹10)
          </button>
        </div>
      </div>
    </div>
  );
}
