import { TrendingUp, Zap, Clock } from 'lucide-react';

const stats = [
  {
    label: 'New Leads',
    value: '7',
    description: 'Qualified opportunities captured this week',
    icon: TrendingUp,
    accent: 'from-blueprint-blue via-blue-500 to-blue-300'
  },
  {
    label: 'Avg Response Time',
    value: 'Instant',
    description: 'Automated AI follow-up within seconds',
    icon: Zap,
    accent: 'from-emerald-500 via-teal-400 to-blue-300'
  },
  {
    label: 'Saved Hours This Week',
    value: '4.3',
    description: 'Hours reclaimed from manual tasks',
    icon: Clock,
    accent: 'from-violet-500 via-indigo-400 to-blue-300'
  }
];

export default function QuickStats() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm">
        <span className="inline-flex items-center gap-1 rounded-full bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blueprint-blue">Today</span>
        <span className="flex items-center gap-2 text-slate-600">New Leads <span className="text-blueprint-blue">(7)</span></span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-2 text-slate-600">Avg Response Time <span className="text-blueprint-blue">(Instant)</span></span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-2 text-slate-600">Saved Hours <span className="text-blueprint-blue">(4.3)</span></span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map(({ label, value, description, icon: Icon, accent }) => (
          <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${accent} p-3 text-white shadow-md`}> 
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-heading font-semibold text-slate-900">{value}</p>
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

