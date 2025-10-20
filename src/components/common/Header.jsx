import { Compass, Home, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="relative border-b border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blueprint-blue/20 via-blueprint-blue/40 to-blueprint-blue/20" />
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
            <Compass className="h-4 w-4" /> Dayton Realtors MLS
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blueprint-blue text-white">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-semibold text-slate-900">Dayton Realtors AI Dashboard</h1>
              <p className="flex items-center gap-2 text-sm text-slate-500">
                Powered by Haines AI Realty
                <Sparkles className="h-4 w-4 text-amber-400" />
              </p>
            </div>
          </div>
        </div>
        {!isHome && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/30 bg-white px-5 py-2 text-sm font-semibold text-blueprint-blue transition hover:bg-blueprint-blue/10"
          >
            ← Back to Home
          </Link>
        )}
      </div>
    </header>
  );
}

