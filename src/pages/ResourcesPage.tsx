import React from 'react';
import { FileDown } from 'lucide-react';

interface Resource {
  title: string;
  author?: string;
  description: string;
  url: string;
}

const RESOURCES: Resource[] = [
  {
    title: 'Practice of English Language Teaching',
    author: 'Jeremy Harmer',
    description: 'The definitive guide to teaching English as a foreign or second language, covering methodology, classroom practice, and modern approaches.',
    url: '#',
  },
  {
    title: 'English Vocabulary in Use — Upper Intermediate (4th Edition)',
    description: 'Essential vocabulary building for B2-level learners, with over 100 units of contextualised vocabulary practice.',
    url: '#',
  },
  {
    title: 'English Vocabulary in Use — Book with Answers',
    description: 'Self-study vocabulary resource for intermediate to upper-intermediate students with a full answer key included.',
    url: '#',
  },
  {
    title: 'The Vocabulary Builder Workbook',
    description: 'Simple lessons and activities to teach yourself over 1,400 must-know words for smarter reading, writing, and conversation.',
    url: '#',
  },
  {
    title: 'A Year in the Life of an ESL Student',
    description: 'A practical companion for English-language learners, combining real-life stories with focused language exercises.',
    url: '#',
  },
  {
    title: 'Vocabulary Activities',
    description: 'A rich collection of classroom-ready vocabulary exercises and games designed for active, communicative learning.',
    url: '#',
  },
  {
    title: 'Wordbuilder',
    description: 'An intermediate learner\'s reference and practice book focusing on word families, collocations, and formation.',
    url: '#',
  },
  {
    title: 'Word Perfect: Vocabulary for Fluency',
    description: 'Comprehensive vocabulary guide aimed at advanced learners who want to use English with precision and natural fluency.',
    url: '#',
  },
];

export default function ResourcesPage() {
  return (
    <main className="pt-16 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-burgundy-950/8">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <p className="font-serif-lit italic text-gold-500 text-sm tracking-widest uppercase mb-2">Library</p>
          <h1 className="font-display text-2xl sm:text-3xl text-burgundy-950 leading-tight mb-4">
            Academic &amp; Exam Resources
          </h1>
          <p className="font-sans text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
            Curated reference books, vocabulary manuals, and language guides.
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-gold-500/50 rounded-full" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESOURCES.map((r, i) => (
            <div
              key={i}
              className="card-hover group flex flex-col justify-between gap-4 rounded-2xl bg-white border border-charcoal/10 hover:border-gold-500/30 shadow-sm p-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium text-burgundy-950/70 bg-burgundy-950/6 border border-burgundy-950/12 px-2.5 py-1 rounded-full">
                    <FileDown className="w-3 h-3" />
                    PDF Resource
                  </span>
                </div>
                <h3 className="font-serif-lit text-lg font-semibold text-charcoal leading-snug">
                  {r.title}
                </h3>
                {r.author && (
                  <p className="font-sans text-xs text-charcoal/50 font-medium -mt-1">
                    by {r.author}
                  </p>
                )}
                <p className="font-sans text-sm text-charcoal/55 leading-relaxed">
                  {r.description}
                </p>
              </div>

              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-burgundy-950 hover:bg-burgundy-800 text-white font-sans text-sm font-medium transition-colors"
              >
                <FileDown className="w-4 h-4" />
                View / Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
