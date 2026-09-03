import React from 'react';
import { Flame, X } from 'lucide-react';

export default function Toast({ toast, onDismiss }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-200">
      <div className="bg-zinc-900 text-white rounded-2xl p-4 shadow-2xl border border-zinc-800 flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-red-600/30 text-red-400 flex items-center justify-center flex-shrink-0">
          <Flame className="w-4 h-4 fill-red-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-black tracking-wide text-zinc-200">
            {toast.title || 'outrizz.lol Notification'}
          </div>
          <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
            {toast.message}
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="text-zinc-500 hover:text-zinc-300 p-1 -mr-1 -mt-1 rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
