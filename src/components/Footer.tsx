import React from 'react';
import { useAdmin } from '@/context/AdminContext';

interface Props {
  onAdminClick: () => void;
}

export default function Footer({ onAdminClick }: Props) {
  const { isAdmin, lock } = useAdmin();

  return (
    <footer className="bg-burgundy-950 text-white/70 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/images/English_Club.jpeg"
              alt="Seal"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-gold-500/30"
            />
            <span className="font-display text-[11px] text-white/90 tracking-wider">
              The Society of Letters &amp; Eloquence
            </span>
          </div>
          <p className="text-xs font-sans text-gold-500/70">
            OP Jindal Modern School, Hisar &mdash; English Literary Society
          </p>
          <p className="text-xs font-sans text-white/40 italic">
            A Student-Led Initiative under the Guidance of the English Department.
          </p>
          <p className="text-xs font-sans text-white/30 mt-1">
            &copy; {new Date().getFullYear()} The Society of Letters &amp; Eloquence. All rights reserved.
          </p>
          <p className="text-[10px] font-sans text-white/25 tracking-wide mt-1">
            Website Credits - Jayati Saini
          </p>
        </div>

        {/* Right */}
        <button
          onClick={isAdmin ? lock : onAdminClick}
          className={`text-xs font-sans transition-colors border px-3 py-1.5 rounded-lg ${
            isAdmin
              ? 'text-red-300/70 hover:text-red-200 border-red-300/20 hover:border-red-300/40'
              : 'text-white/30 hover:text-gold-500/60 border-white/10 hover:border-gold-500/20'
          }`}
        >
          {isAdmin ? 'Admin Logout' : 'Admin Login'}
        </button>
      </div>
    </footer>
  );
}
