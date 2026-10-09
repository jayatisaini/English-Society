import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function ToastContainer() {
  const { toasts } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`toast-enter flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-sans font-medium border ${
            t.type === 'success'
              ? 'bg-white border-gold-500/40 text-charcoal'
              : 'bg-white border-red-400/40 text-red-700'
          }`}
        >
          {t.type === 'success'
            ? <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
            : <XCircle    className="w-5 h-5 text-red-500 shrink-0" />}
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
