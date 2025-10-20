import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-3xl' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div
        className={`relative w-full ${maxWidth} overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-blueprint-blue/20`}
      >
        <div className="relative border-b border-slate-100 bg-gradient-to-r from-blueprint-blue/10 via-white to-white px-8 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-semibold text-slate-900">{title}</h2>
            <button
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-500 transition hover:border-blueprint-blue/30 hover:text-blueprint-blue"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="max-h-[80vh] overflow-y-auto px-8 py-6 bg-white/95">
          {children}
        </div>
      </div>
    </div>
  );
}

