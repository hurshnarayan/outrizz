import React from 'react';
import { X, Flame, Trophy } from 'lucide-react';

export default function HowItWorksModal({ isOpen, onClose, onOpenPostModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Flame className="w-5 h-5 fill-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-zinc-900 leading-tight">
                How outrizz.lol Works
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                The viral growth loop powering free Instagram clicks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-zinc-800">
          {/* Steps */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-zinc-900">
                  Drop Your Rizz & Instagram Handle
                </h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Post your best photo and your sharpest rizz line. Pay a nominal ₹10 fee (anti-spam filter) and your submission goes live after instant moderation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-black text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-zinc-900">
                  Rally Your Friends to Vote
                </h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Every user gets 1 free vote per entry. Share your unique entry card to WhatsApp, Instagram Stories, and group chats to stack up votes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-amber-300 flex items-center justify-center font-black text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-zinc-900">
                  Take the #1 Crown & Win Free Exposure
                </h4>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Leaderboards update in real-time. The top entries sit in the featured hero podium where tens of thousands of visitors click directly through to your Instagram.
                </p>
              </div>
            </div>
          </div>

          {/* Reset System info */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
            <Trophy className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950">
              <span className="font-extrabold">Two Live Leaderboards:</span>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-amber-900">
                <li><strong>Today's Board:</strong> Resets every 24 hours at midnight UTC. Anyone can win on any given day.</li>
                <li><strong>All-Time Board:</strong> The permanent Hall of Fame for legendary rizz scores.</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-600 hover:text-zinc-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPostModal();
              }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-5 py-2.5 rounded-xl shadow-md text-xs cursor-pointer"
            >
              <Flame className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Enter Today's Race (₹10)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
