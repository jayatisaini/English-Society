import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

type Page = 'home' | 'student-corner' | 'resources';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onAdminClick: () => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home',           page: 'home' },
  { label: 'Student Corner', page: 'student-corner' },
  { label: 'Resources',      page: 'resources' },
];

export default function Navbar({ currentPage, onNavigate, onAdminClick }: Props) {
  const { isAdmin } = useAdmin();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="glass-nav fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo + title */}
        <button
          onClick={() => { onNavigate('home'); setMenuOpen(false); }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <img
            src="/assets/images/English_Club.jpeg"
            alt="Society Seal"
            className="w-9 h-9 rounded-full object-cover ring-1 ring-gold-500/40 group-hover:ring-gold-500/80 transition-all"
          />
          <div className="hidden sm:block leading-none">
            <p className="font-display text-[11px] text-white tracking-wider leading-tight">
              The Society of Letters &amp; Eloquence
            </p>
            <p className="font-sans text-[10px] text-gold-500/80 tracking-wide mt-0.5">
              OP Jindal Modern School, Hisar
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all ${
                currentPage === page
                  ? 'bg-gold-500/20 text-gold-400 ring-1 ring-gold-500/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
          {isAdmin && (
            <span className="ml-2 px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-[11px] font-sans font-medium tracking-wide ring-1 ring-gold-500/30">
              Admin
            </span>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-white/70 hover:text-white p-2 rounded-lg"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gold-500/15 bg-burgundy-950/95 backdrop-blur-sm px-4 pb-4 pt-2 flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); setMenuOpen(false); }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-sans font-medium transition-all ${
                currentPage === page
                  ? 'bg-gold-500/20 text-gold-400'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
          {isAdmin && (
            <span className="mt-1 self-start px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-[11px] font-sans font-medium">
              Admin Mode Active
            </span>
          )}
        </div>
      )}
    </header>
  );
}
