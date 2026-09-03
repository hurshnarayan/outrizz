import React, { useState, useRef } from 'react';
import { X, Upload, Flame, ShieldAlert, AlertCircle, CheckCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function PostModal({ isOpen, onClose, onSubmitSuccess }) {
  const [handle, setHandle] = useState('');
  const [caption, setCaption] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be under 5MB');
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photoPreview) {
      setError('Please upload a photo of yourself or your rizz');
      return;
    }
    if (!caption.trim()) {
      setError('Please enter your rizz caption');
      return;
    }
    if (!handle.trim()) {
      setError('Please enter your Instagram handle');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate upload & moderation review flow
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => {
        onSubmitSuccess({
          name: handle.replace(/^@/, ''),
          handle: handle.startsWith('@') ? handle : `@${handle}`,
          photo: photoPreview,
          caption: caption.trim()
        });
        // reset
        setSubmissionSuccess(false);
        setPhotoPreview(null);
        setCaption('');
        setHandle('');
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Flame className="w-4 h-4 fill-red-600" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-zinc-900 leading-tight">
                Submit Your Rizz Entry
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                Climb the leaderboard and drive real clicks to your Instagram
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submissionSuccess ? (
            <div className="py-10 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-zinc-900 mb-1">
                Entry Submitted!
              </h3>
              <p className="text-sm text-zinc-600 max-w-xs mb-3">
                Your post is passing automated content moderation and will appear on the leaderboard.
              </p>
              <div className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                ⏳ Moderation Status: Approved
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Photo Upload Box */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-1.5">
                  1. Upload Photo <span className="text-red-500">*</span>
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    photoPreview
                      ? 'border-red-500/40 bg-zinc-50'
                      : 'border-zinc-300 hover:border-red-400 bg-zinc-50/60 hover:bg-red-50/20'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {photoPreview ? (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden group">
                      <img
                        src={photoPreview}
                        alt="Upload preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold transition-opacity">
                        Click to change photo
                      </div>
                    </div>
                  ) : (
                    <div className="py-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-2">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-bold text-zinc-800">
                        Drag and drop your photo, or <span className="text-red-600 underline">browse</span>
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">
                        High resolution portrait recommended (Max 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Instagram Handle Input */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-1.5">
                  2. Instagram Handle <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-zinc-400">
                    <InstagramIcon className="w-4 h-4 text-red-500" />
                    <span className="font-bold text-zinc-400">@</span>
                  </div>
                  <input
                    type="text"
                    value={handle.replace(/^@/, '')}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="yourhandle"
                    className="w-full pl-12 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Every vote will link directly to your Instagram profile
                </p>
              </div>

              {/* Caption Text Area */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-600">
                    3. Your Rizz Line / Caption <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] font-bold text-zinc-400">
                    {caption.length}/140
                  </span>
                </div>
                <textarea
                  value={caption}
                  maxLength={140}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Drop your smoothest line or caption that proves your rizz..."
                  rows={3}
                  className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                />
              </div>

              {/* Fee Notice Box */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center flex-shrink-0 text-xs font-black">
                  ₹
                </div>
                <div className="text-xs text-amber-900">
                  <span className="font-bold">Posting Fee: ₹10 only</span>
                  <p className="text-amber-800/80 mt-0.5 leading-snug">
                    A token fee solely to prevent bot spam and keep outrizz.lol 100% genuine and high signal.
                  </p>
                </div>
              </div>

              {/* Content Safety Notice */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>Text + photo only. Automated moderation reviews all entries before posting.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md shadow-red-600/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Submission & Review...</span>
                  </>
                ) : (
                  <>
                    <Flame className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span>Post Rizz (₹10)</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
