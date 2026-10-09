import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { useToast } from '@/context/ToastContext';

interface Props {
  onClose: () => void;
}

export default function AdminLoginModal({ onClose }: Props) {
  const { unlock } = useAdmin();
  const { show }   = useToast();
  const [pin, setPin]     = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (unlock(pin)) {
      show('Admin Security Unlocked', 'success');
      onClose();
    } else {
      setError('Invalid Passcode. Access Denied.');
      setPin('');
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 border border-burgundy-950/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal/70 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-burgundy-950 flex items-center justify-center">
            <Lock className="w-6 h-6 text-gold-500" />
          </div>
          <h2 className="font-display text-xl text-burgundy-950 leading-tight text-center">
            Admin Access
          </h2>
          <p className="text-sm font-sans text-charcoal/50 text-center">
            Enter the 8-digit security passcode
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            inputMode="numeric"
            maxLength={8}
            placeholder="••••••••"
            value={pin}
            onChange={e => { setPin(e.target.value); setError(''); }}
            className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-center text-xl tracking-[0.4em] font-sans focus:outline-none focus:ring-2 focus:ring-burgundy-950/30 bg-cream"
            autoFocus
          />

          {error && (
            <p className="text-sm text-red-600 font-sans text-center font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-burgundy-950 hover:bg-burgundy-800 text-white font-sans font-medium text-sm transition-colors"
          >
            Unlock Admin Mode
          </button>
        </form>
      </div>
    </div>
  );
}
