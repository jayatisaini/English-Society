import React, { useState, useEffect } from 'react';
import { X, Trash2, BookOpen, FileText, Feather, PenLine, ScrollText } from 'lucide-react';
import { supabase, StudentSubmission } from '@/lib/supabase';
import { useAdmin } from '@/context/AdminContext';
import { useToast } from '@/context/ToastContext';

const TYPES = ['Book Review', 'Poem Review', 'Short Story', 'Poetry', 'Essay'] as const;
const LOCAL_STORAGE_KEY = 'society-student-submissions';
type SubmissionType = typeof TYPES[number];

const TYPE_COLORS: Record<SubmissionType, string> = {
  'Book Review':  'bg-blue-50 text-blue-700 border-blue-200',
  'Poem Review':  'bg-violet-50 text-violet-700 border-violet-200',
  'Short Story':  'bg-amber-50 text-amber-700 border-amber-200',
  'Poetry':       'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Essay':        'bg-rose-50 text-rose-700 border-rose-200',
};

const TYPE_ICONS: Record<SubmissionType, React.ElementType> = {
  'Book Review':  BookOpen,
  'Poem Review':  Feather,
  'Short Story':  ScrollText,
  'Poetry':       PenLine,
  'Essay':        FileText,
};

function typeColor(t: string) {
  return TYPE_COLORS[t as SubmissionType] ?? 'bg-gray-50 text-gray-600 border-gray-200';
}
function typeIcon(t: string): React.ElementType {
  return TYPE_ICONS[t as SubmissionType] ?? FileText;
}

function excerpt(text: string, max = 180) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + '…';
}

export default function StudentCornerPage() {
  const { isAdmin }  = useAdmin();
  const { show }     = useToast();

  const [submissions, setSubmissions] = useState<StudentSubmission[]>([]);
  const [loading, setLoading]         = useState(true);
  const [readPost, setReadPost]       = useState<StudentSubmission | null>(null);

  const [form, setForm] = useState({
    student_name: '',
    class_section: '',
    submission_type: 'Book Review' as SubmissionType,
    title: '',
    content: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  async function fetchSubmissions() {
    setLoading(true);

    if (!supabase) {
      try {
        const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        setSubmissions(stored ? JSON.parse(stored) as StudentSubmission[] : []);
      } catch {
        setSubmissions([]);
      }
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('student_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setSubmissions(data as StudentSubmission[]);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim() || !form.student_name.trim()) return;
    setSubmitting(true);

    let data: StudentSubmission | null = null;
    let error: Error | null = null;

    if (supabase) {
      const response = await supabase
        .from('student_submissions')
        .insert([form])
        .select()
        .single();
      data = response.data as StudentSubmission | null;
      error = response.error ? new Error(response.error.message) : null;
    } else {
      data = {
        ...form,
        id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now()}`,
        created_at: new Date().toISOString(),
      };
    }

    if (error || !data) {
      show('Could not publish your work. Please try again.', 'error');
    } else {
      const nextSubmissions = [data, ...submissions];
      setSubmissions(nextSubmissions);
      if (!supabase) window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextSubmissions));
      setForm({ student_name: '', class_section: '', submission_type: 'Book Review', title: '', content: '' });
      show('Your work has been published to the Student Corner!', 'success');
    }
    setSubmitting(false);
  }

  async function handleDelete(id: string) {
    if (!supabase) {
      const nextSubmissions = submissions.filter(s => s.id !== id);
      setSubmissions(nextSubmissions);
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextSubmissions));
      return;
    }

    const { error } = await supabase.from('student_submissions').delete().eq('id', id);
    if (error) {
      show('Could not delete this submission.', 'error');
    } else {
      setSubmissions(prev => prev.filter(s => s.id !== id));
    }
  }

  return (
    <main className="pt-16 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-burgundy-950/8">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <p className="font-serif-lit italic text-gold-500 text-sm tracking-widest uppercase mb-2">Student Voices</p>
          <h1 className="font-display text-2xl sm:text-3xl text-burgundy-950 leading-tight mb-4">
            Student Reviews &amp; Creative Corner
          </h1>
          <p className="font-sans text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
            A place for students to share book reviews, poem analyses, original prose, and literary reflections.
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-gold-500/50 rounded-full" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-10 grid lg:grid-cols-5 gap-10">

        {/* Submissions feed */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {loading ? (
            <div className="flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-2xl bg-white border border-charcoal/8 h-40 animate-pulse" />
              ))}
            </div>
          ) : submissions.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-burgundy-950/15 bg-white px-8 py-14 text-center">
              <BookOpen className="w-10 h-10 text-burgundy-950/25 mx-auto mb-3" />
              <p className="font-sans text-charcoal/50 text-sm leading-relaxed">
                No student reviews posted yet. Be the first to submit your work below!
              </p>
            </div>
          ) : (
            submissions.map(sub => {
              const Icon = typeIcon(sub.submission_type);
              return (
                <div
                  key={sub.id}
                  className="card-hover group rounded-2xl bg-white border border-charcoal/8 hover:border-gold-500/30 shadow-sm p-6 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-sans font-medium px-2.5 py-1 rounded-full border ${typeColor(sub.submission_type)}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {sub.submission_type}
                    </span>
                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="shrink-0 flex items-center gap-1 text-[11px] font-sans text-red-500 hover:text-red-700 border border-red-200 hover:border-red-400 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    )}
                  </div>

                  <h3 className="font-serif-lit text-xl text-charcoal leading-snug">{sub.title}</h3>
                  <p className="font-sans text-charcoal/55 text-sm leading-relaxed">
                    {excerpt(sub.content)}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-charcoal/6">
                    <div>
                      <p className="font-sans text-sm font-medium text-charcoal">{sub.student_name}</p>
                      <p className="font-sans text-[11px] text-charcoal/45 mt-0.5">{sub.class_section}</p>
                    </div>
                    <button
                      onClick={() => setReadPost(sub)}
                      className="text-[12px] font-sans font-medium text-burgundy-950 hover:text-gold-500 border border-burgundy-950/20 hover:border-gold-500/40 px-3.5 py-1.5 rounded-lg transition-all"
                    >
                      Read Full Piece
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Submission Form */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl bg-white border border-charcoal/10 shadow-sm p-6">
            <h2 className="font-display text-base text-burgundy-950 mb-1">Submit Your Work</h2>
            <p className="font-sans text-xs text-charcoal/45 mb-5 leading-relaxed">
              Share your literary creations with the society.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide">Full Name</span>
                <input
                  required
                  value={form.student_name}
                  onChange={e => setForm(f => ({ ...f, student_name: e.target.value }))}
                  placeholder="Your full name"
                  className="px-3.5 py-2.5 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy-950/20 bg-cream placeholder:text-charcoal/30"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide">Class &amp; Section</span>
                <input
                  value={form.class_section}
                  onChange={e => setForm(f => ({ ...f, class_section: e.target.value }))}
                  placeholder="e.g. Class XI-D"
                  className="px-3.5 py-2.5 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy-950/20 bg-cream placeholder:text-charcoal/30"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide">Submission Type</span>
                <select
                  value={form.submission_type}
                  onChange={e => setForm(f => ({ ...f, submission_type: e.target.value as SubmissionType }))}
                  className="px-3.5 py-2.5 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy-950/20 bg-cream"
                >
                  {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide">Title</span>
                <input
                  required
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="Title of your work"
                  className="px-3.5 py-2.5 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy-950/20 bg-cream placeholder:text-charcoal/30"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide">Content</span>
                <textarea
                  required
                  rows={6}
                  value={form.content}
                  onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                  placeholder="Write your piece here…"
                  className="px-3.5 py-2.5 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy-950/20 bg-cream resize-none placeholder:text-charcoal/30"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-burgundy-950 hover:bg-burgundy-800 disabled:opacity-60 text-white font-sans font-medium text-sm transition-colors"
              >
                {submitting ? 'Publishing…' : 'Publish to Student Corner'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Full-piece modal */}
      {readPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={() => setReadPost(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 border border-charcoal/10">
            <button
              onClick={() => setReadPost(null)}
              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal/70 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className={`inline-flex items-center gap-1.5 text-[11px] font-sans font-medium px-2.5 py-1 rounded-full border mb-4 ${typeColor(readPost.submission_type)}`}>
              {readPost.submission_type}
            </span>
            <h2 className="font-serif-lit text-2xl font-semibold text-charcoal mb-1">{readPost.title}</h2>
            <p className="font-sans text-sm text-charcoal/50 mb-6">
              {readPost.student_name} &mdash; {readPost.class_section}
            </p>
            <div className="font-sans text-charcoal/80 text-sm leading-[1.8] whitespace-pre-wrap">
              {readPost.content}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
