import React from 'react';
import { FileDown } from 'lucide-react';

interface Resource {
  title: string;
  author?: string;
  url: string;
}

const RESOURCES: Resource[] = [
  {
    title: 'Practice of English Language Teaching',
    author: 'Jeremy Harmer',
    url: 'https://drive.google.com/file/d/1KmVtfiuAQ6A_oKmsGlMhzzv-m0ZyVv0a/view?usp=sharing',
  },
  {
    title: 'English Vocabulary in Use - Upper Intermediate',
    url: 'https://drive.google.com/file/d/1w0IZxvRGNENZm4VD48ZNbuSyGLosSm_K/view?usp=sharing',
  },
  {
    title: 'English Vocabulary in Use - Book with Answers',
    url: 'https://drive.google.com/file/d/1MGxAWODX3W8Vy1KNzeLuwgM0ZOSXNNti/view?usp=sharing',
  },
  {
    title: 'The Vocabulary Builder Workbook',
    url: 'https://drive.google.com/file/d/1M1Sm0-lEr5pZNNnGza_-A283hMyj6f2D/view?usp=sharing',
  },
  {
    title: 'A Year in the Life of an ESL Student',
    url: 'https://drive.google.com/file/d/10FpdJjHZKFePABob9osG2pPF_ml7KgbS/view?usp=sharing',
  },
  {
    title: 'Vocabulary Activities',
    url: 'https://drive.google.com/file/d/1yCgaHHoXdPFsimYw_8B6NFGyAA6c9-C4/view?usp=sharing',
  },
  {
    title: 'Wordbuilder',
    url: 'https://drive.google.com/file/d/17mndYXCv9UkVNLW4u7FPljUQEw2prAmn/view?usp=sharing',
  },
  {
    title: 'Word Perfect: Vocabulary for Fluency',
    url: 'https://drive.google.com/file/d/1VoxLqkN2Ng7Y78WrutriO_vwruiDPY-t/view?usp=sharing',
  },
];

export default function ResourcesPage() {
  return (
    <main className="pt-16 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-burgundy-950/8">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <p className="font-serif-lit italic text-gold-600 text-sm tracking-widest uppercase mb-2">Library</p>
          <h1 className="font-display text-2xl sm:text-3xl text-burgundy-950 leading-tight mb-4">
            Academic &amp; Exam Resources
          </h1>
          <p className="font-sans text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
            Curated reference books, vocabulary manuals, and language guides for the 2026-27 session.
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-gold-500/50 rounded-full" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESOURCES.map(r => (
            <div
              key={r.title}
              className="card-hover group flex flex-col justify-between gap-5 rounded-2xl bg-white border border-charcoal/10 hover:border-gold-500/30 shadow-sm p-6"
            >
              <div className="flex flex-col gap-3">
                <span className="self-start inline-flex items-center gap-1.5 font-sans text-[11px] font-medium text-burgundy-950/80 bg-burgundy-950/6 border border-burgundy-950/12 px-2.5 py-1 rounded-full">
                  <FileDown className="w-3 h-3" />
                  PDF Resource
                </span>
                <h3 className="font-serif-lit text-lg font-semibold text-charcoal leading-snug">
                  {r.title}
                </h3>
                {r.author && (
                  <p className="font-sans text-xs text-charcoal/60 font-medium -mt-1">
                    by {r.author}
                  </p>
                )}
              </div>

              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-burgundy-950 hover:bg-burgundy-800 text-white font-sans text-sm font-medium transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Open PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
