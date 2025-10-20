import { Mail } from 'lucide-react';
import Header from '../common/Header';
import EmailReport from './EmailReport';
import ListingDescriptionGenerator from './ListingDescriptionGenerator';

export default function MarketingCenter() {
  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
              <Mail className="h-4 w-4" /> Marketing Center
            </div>
            <h2 className="text-3xl font-heading font-semibold text-slate-900">Marketing Center</h2>
            <p className="text-slate-600">Deliver MLS-branded campaigns with AI-authored insights and ready-to-send emails.</p>
          </div>
          <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
            <p className="font-semibold text-blueprint-blue">Automation Health</p>
            <p className="text-blueprint-blue/80">All campaigns synced · 2 new templates available</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <EmailReport />
          <ListingDescriptionGenerator />
        </div>

        <div className="mt-10 flex flex-wrap gap-4 rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-5 text-sm text-blueprint-blue shadow-sm">
          <div className="flex items-center gap-3 rounded-2xl border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-2">
            <span className="font-semibold">Custom branding ready for Dayton Realtors MLS</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-2">
            <span className="font-semibold">98% open rate</span>
            <span>with personalised narratives</span>
          </div>
        </div>
      </main>
    </div>
  );
}

