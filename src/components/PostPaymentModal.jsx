import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ShieldCheck, CreditCard } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function PostPaymentModal({ isOpen, onClose, onSubmitSuccess }) {
  const [slideStep, setSlideStep] = useState(0); // 0 = write rizz, 1 = payment review
  const [handle, setHandle] = useState('');
  const [caption, setCaption] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setSlideStep(0);
    setError('');
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be under 5MB');
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGoToPayment = (e) => {
    e.preventDefault();
    if (!caption.trim()) {
      setError('Please write your rizz quote');
      return;
    }
    if (!handle.trim()) {
      setError('Please enter your Instagram handle');
      return;
    }
    setError('');
    // Smooth horizontal slide to payment step
    setSlideStep(1);
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSubmitSuccess({
        name: handle.replace(/^@/, ''),
        handle: handle.startsWith('@') ? handle : `@${handle}`,
        photo: photoPreview || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        caption: caption.trim()
      });
      handleClose();
    }, 650);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col"
      >
        {/* Horizontal Sliding Carousel Container (Step 0 Details -> Step 1 Payment) */}
        <div
          className="flex w-[200%] transition-transform duration-300 ease-in-out"
          style={{ transform: slideStep === 1 ? 'translateX(-50%)' : 'translateX(0%)' }}
        >
          {/* SLIDE 1: Rizz Entry Form */}
          <div className="w-1/2 p-6 sm:p-7 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
              <div>
                <span className="text-xs font-black text-zinc-400 uppercase tracking-wider block">
                  Step 1 of 2
                </span>
                <h3 className="text-lg font-black text-zinc-950">
                  Write Your Rizz
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1 text-zinc-400 hover:text-zinc-800 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Fields */}
            <form onSubmit={handleGoToPayment} className="space-y-4">
              {error && (
                <div className="text-xs font-bold text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              {/* Rizz Quote Input */}
              <div>
                <label className="block text-xs font-black uppercase text-zinc-500 mb-1.5">
                  Your Rizz Line (Centerpiece)
                </label>
                <textarea
                  value={caption}
                  maxLength={140}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="“Drop your smoothest rizz quote here...”"
                  rows={3}
                  className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl font-serif italic text-base text-zinc-950 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Instagram Handle & Photo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black uppercase text-zinc-500 mb-1">
                    Instagram Handle
                  </label>
                  <div className="relative">
                    <InstagramIcon className="w-4 h-4 text-red-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={handle.replace(/^@/, '')}
                      onChange={(e) => setHandle(e.target.value)}
                      placeholder="username"
                      className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-zinc-500 mb-1">
                    Photo (Optional)
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 border border-dashed border-zinc-300 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-center cursor-pointer text-xs font-bold text-zinc-600 truncate"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {photoPreview ? '✓ Photo Attached' : '+ Attach Photo'}
                  </div>
                </div>
              </div>

              {/* CTA to slide to payment */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-zinc-950 hover:bg-black text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <span>Continue to Payment (₹10)</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>

          {/* SLIDE 2: Payment Review (Horizontal Slide-In, StockX Style) */}
          <div className="w-1/2 p-6 sm:p-7 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
              <button
                onClick={() => setSlideStep(0)}
                className="inline-flex items-center gap-1 text-xs font-black text-zinc-700 hover:text-black cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <span className="text-xs font-black text-zinc-950 uppercase tracking-wider">
                Review & Confirm
              </span>

              <button
                onClick={handleClose}
                className="p-1 text-zinc-400 hover:text-zinc-800 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Rizz Preview Quote (Thin Font & Italics) */}
            <div className="my-auto py-2 space-y-3.5">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">
                <p className="font-serif italic font-normal text-xl sm:text-2xl text-zinc-950 leading-relaxed">
                  “{caption}”
                </p>
                <span className="text-xs font-bold text-red-600 mt-2 block">
                  @{handle.replace(/^@/, '')}
                </span>
              </div>

              {/* Payment Breakdown Table (StockX Checkout Breakdown) */}
              <div className="bg-zinc-50/80 p-3.5 rounded-2xl border border-zinc-100 text-xs space-y-2">
                <div className="flex justify-between text-zinc-600">
                  <span>Entry Submission Fee:</span>
                  <span className="font-bold text-zinc-900">₹10.00</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Spam Bot Protection:</span>
                  <span className="font-bold text-emerald-600">Included</span>
                </div>
                <div className="border-t border-zinc-200 pt-2 flex justify-between font-black text-sm text-zinc-950">
                  <span>Total Amount:</span>
                  <span>₹10.00</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-zinc-400 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>1-Click Mock Checkout (UPI / Card / GPay)</span>
              </div>
            </div>

            {/* Big Green Confirm & Pay Button */}
            <div className="pt-2">
              <button
                onClick={handleConfirmPayment}
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Payment...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Confirm & Pay ₹10</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
