import React from 'react';
import { BookOpen, Pen, Brain, Star } from 'lucide-react';

const PILLARS = [
  { icon: BookOpen, label: 'Read',    desc: 'Dive deep into literature, classics, and contemporary works that broaden the mind.' },
  { icon: Pen,      label: 'Express', desc: 'Craft compelling essays, poetry, and prose that give your voice its truest form.' },
  { icon: Brain,    label: 'Think',   desc: 'Sharpen critical thinking through debate, analysis, and intellectual discourse.' },
  { icon: Star,     label: 'Lead',    desc: 'Inspire others, mentor peers, and champion the culture of language and learning.' },
];

const LEADERSHIP = [
  { role: 'Patron',                       name: 'Ms. Nandita Sahu', subtitle: 'Principal, OP Jindal Modern School' },
  { role: 'Faculty Founder & In-Charge',  name: 'Mr. Mahesh Dutt',  subtitle: 'English Department' },
  { role: 'Founder & President',          name: 'Jayati Saini',     subtitle: 'Student Founder' },
  { role: 'Co-Founder & Vice President',  name: 'Rishabh Jain',     subtitle: 'Student Founder' },
];

const MEMBERS = [
  { name: 'Veronica Sihag',        cls: 'Class IX-F'   },
  { name: 'Amrit Singh',           cls: 'Class IX-L'   },
  { name: 'Bhuvnesh Nain',         cls: 'Class IX-N'   },
  { name: 'Ekanshi Patel',         cls: 'Class X-D'    },
  { name: 'Tavisha',               cls: 'Class X-G'    },
  { name: 'Saanvi Arora',          cls: 'Class X-G'    },
  { name: 'Gunika Bhardwaj',       cls: 'Class X-H'    },
  { name: 'Vivaan Khetarpal',      cls: 'Class X-H'    },
  { name: 'Kashvi Singh',          cls: 'Class X-K'    },
  { name: 'Yanna Singh',           cls: 'Class X-M'    },
  { name: 'Mishka Gupta',          cls: 'Class XI-C'   },
  { name: 'Aira Mehla',            cls: 'Class XI-C'   },
  { name: 'Harman',                cls: 'Class XI-C'   },
  { name: 'Jayesh Goyal',          cls: 'Class XI-D'   },
  { name: 'Yuvraj Jangra',         cls: 'Class XI-D'   },
  { name: 'Yuvanshi',              cls: 'Class XI-D'   },
  { name: 'Nikunj Soni',           cls: 'Class XI-D'   },
  { name: 'Molik Gupta',           cls: 'Class XI-D'   },
  { name: 'Lipi Garg',             cls: 'Class XI-E'   },
  { name: 'Bhavya Singh',          cls: 'Class XI-F'   },
  { name: 'Navya',                 cls: 'Class XI-G'   },
  { name: 'Grisha Narang',         cls: 'Class XI-G'   },
  { name: 'Manvi',                 cls: 'Class XI-H'   },
  { name: 'Vidita Saini',          cls: 'Class XI-H'   },
  { name: 'Bhrigu Radhey',         cls: 'Class XI-J'   },
  { name: 'Niyati',                cls: 'Class XI-J'   },
  { name: 'Avanti Singh',          cls: 'Class XI-J'   },
  { name: 'Aous Bhambhu',          cls: 'Class XII-C'  },
  { name: 'Ojaswi Goel',           cls: 'Class XII-D'  },
  { name: 'Vipul Jindal',          cls: 'Class XII-D'  },
  { name: 'Shaurya Agarwal',       cls: 'Class XII-E'  },
  { name: 'Divyanshi Shekhawat',   cls: 'Class XII-H'  },
];

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="hero-grid-bg relative overflow-hidden">
        {/* Decorative grid lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,175,55,1) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,1) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center gap-6">
          {/* Seal */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-gold-500/20 scale-125" aria-hidden />
            <img
              src="/assets/images/English_Club.jpeg"
              alt="The Society of Letters & Eloquence Seal"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-2 ring-gold-500/40 shadow-2xl"
            />
          </div>

          {/* Main title — EXPLICIT RULE: brilliant white, ornate serif */}
          <h1
            className="font-display text-2xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-wide"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)' }}
          >
            THE SOCIETY OF LETTERS &amp; ELOQUENCE
          </h1>

          {/* Motto */}
          <p className="font-serif-lit italic text-gold-400 text-xl sm:text-2xl font-light tracking-wide">
            In Pursuit of Words, Wisdom &amp; Eloquence
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 w-48">
            <span className="flex-1 h-px bg-gold-500/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
            <span className="flex-1 h-px bg-gold-500/40" />
          </div>

          {/* Vision */}
          <p className="font-sans text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            To cultivate a vibrant culture of reading, critical thinking, articulate expression and
            creative writing while empowering students to use language with confidence, clarity and purpose.
          </p>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-3xl">
            {PILLARS.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="card-hover gold-glow group flex flex-col items-center gap-3 p-5 rounded-xl border border-gold-500/20 bg-white/5 backdrop-blur-sm cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center group-hover:bg-gold-500/25 transition-colors">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <span className="font-display text-sm text-white">{label}</span>
                <p className="font-sans text-[11px] text-white/50 leading-relaxed text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-serif-lit italic text-gold-500 text-sm tracking-widest uppercase mb-2">Governance</p>
          <h2 className="font-display text-2xl sm:text-3xl text-burgundy-950 leading-tight">
            Leadership &amp; Founding Board
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold-500/50 rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-5">
          {LEADERSHIP.map((person, i) => (
            <div
              key={i}
              className="card-hover w-full max-w-md rounded-2xl border border-gold-500/30 bg-burgundy-950 px-8 py-7 text-center shadow-lg"
            >
              <p className="font-sans text-[11px] text-gold-500/70 uppercase tracking-[0.2em] mb-2">
                {person.role}
              </p>
              <h3 className="font-display text-lg sm:text-xl text-white leading-snug mb-1">
                {person.name}
              </h3>
              <p className="font-serif-lit italic text-gold-400/80 text-sm">{person.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Members ── */}
      <section className="bg-white border-t border-burgundy-950/8 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-serif-lit italic text-gold-500 text-sm tracking-widest uppercase mb-2">Our Community</p>
            <h2 className="font-display text-2xl sm:text-3xl text-burgundy-950 leading-tight">
              Society Members
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-gold-500/50 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MEMBERS.map((m, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl bg-cream border border-burgundy-950/8 hover:border-gold-500/30 hover:shadow-sm transition-all"
              >
                <span className="font-sans text-sm text-charcoal font-normal">{m.name}</span>
                <span className="shrink-0 font-sans text-[11px] text-burgundy-950/60 bg-burgundy-950/6 px-2.5 py-1 rounded-full border border-burgundy-950/10">
                  {m.cls}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-sans text-xs text-charcoal/35 italic">
            {MEMBERS.length} registered members &mdash; Session 2025&ndash;26
          </p>
        </div>
      </section>
    </main>
  );
}
