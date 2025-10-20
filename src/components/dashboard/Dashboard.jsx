import { Link } from 'react-router-dom';
import {
  MessageSquare,
  FileText,
  TrendingUp,
  Mail,
  Users,
  DollarSign,
  Sparkles,
  Compass,
  Home
} from 'lucide-react';
import QuickStats from './QuickStats';
import Card from '../common/Card';

const modules = [
  {
    title: 'AI Chat Assistant',
    description: 'Instant lead capture and intelligent buyer conversations powered by Dayton MLS data.',
    icon: MessageSquare,
    path: '/chat',
    accent: 'from-blueprint-blue via-blue-500 to-blue-300'
  },
  {
    title: 'Valuation & CMA Generator',
    description: 'Generate professional, MLS-branded comparative analyses in seconds with AI insights.',
    icon: FileText,
    path: '/cma',
    accent: 'from-emerald-500 via-teal-500 to-blue-300'
  },
  {
    title: 'Market Insights Dashboard',
    description: 'Analyze ZIP-level trends with heatmaps, demand signals, and predictive investor analytics.',
    icon: TrendingUp,
    path: '/market',
    accent: 'from-indigo-500 via-blue-500 to-blue-300'
  },
  {
    title: 'Marketing Center',
    description: 'Publish ready-to-send market reports and AI-crafted listing narratives for every client.',
    icon: Mail,
    path: '/marketing',
    accent: 'from-amber-500 via-orange-500 to-rose-400'
  },
  {
    title: 'Client Retention Hub',
    description: 'Track homeowner equity movement and deliver tailored update campaigns automatically.',
    icon: Users,
    path: '/retention',
    accent: 'from-pink-500 via-rose-400 to-purple-400'
  },
  {
    title: 'ROI & Pilot Summary',
    description: 'Understand the MLS-wide revenue impact and the 60-day pilot program opportunity.',
    icon: DollarSign,
    path: '/roi',
    accent: 'from-slate-600 via-blueprint-blue to-blue-400'
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-12 pt-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-5 py-2 text-sm font-medium text-blueprint-blue">
                <Compass className="h-4 w-4" /> Dayton Realtors MLS
              </div>
              <h1 className="text-4xl font-heading font-semibold text-slate-900 md:text-5xl">
                Dayton Realtors AI Dashboard
              </h1>
              <p className="flex items-center gap-2 text-base text-slate-600">
                Powered by Haines AI Realty
                <Sparkles className="h-4 w-4 text-amber-400" />
              </p>
              <p className="text-lg text-slate-500">Welcome back, <span className="font-semibold text-slate-700">Sarah Miller</span>. Let’s orchestrate your next breakthrough client experience.</p>
            </div>
            <div className="relative grid place-items-center rounded-3xl border border-blueprint-blue/20 bg-blueprint-blue/5 px-10 py-8 text-center shadow-md">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blueprint-blue text-white">
                <Home className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-blueprint-blue">First AI-Powered MLS</p>
              <p className="mt-3 text-xl font-heading text-slate-800">Statewide launch planned Q1</p>
            </div>
          </div>

          <QuickStats />
        </div>
      </div>

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Navigation Hub</p>
            <h2 className="mt-2 text-3xl font-heading font-semibold text-slate-900">Your Modules</h2>
            <p className="mt-1 text-slate-600">Explore how AI elevates every stage of the member journey.</p>
          </div>
          <div className="rounded-full border border-blueprint-blue/20 bg-white px-5 py-2 text-sm text-blueprint-blue shadow-sm">
            <span className="font-semibold text-blueprint-blue">MLS Innovation Index</span> · 4.9 ★
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {modules.map(({ title, description, icon: Icon, path, accent }) => (
            <Link key={path} to={path} className="group">
              <Card className="h-full border border-slate-200 bg-white p-8" hover variant="default">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-blueprint-blue/10 transition-all duration-300 group-hover:scale-105`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-slate-900">{title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue/70">MLS Exclusive</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-600">{description}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blueprint-blue">
                  <span>Open module</span>
                  <span className="h-7 w-7 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 text-center">→</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <footer className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center text-slate-500 shadow-sm">
          <div className="flex gap-3 text-sm font-medium text-blueprint-blue">
            <span className="rounded-full bg-blueprint-blue/10 px-4 py-1">MLS</span>
            <span className="rounded-full bg-blueprint-blue/10 px-4 py-1">Haines AI Realty</span>
          </div>
          <p>© {new Date().getFullYear()} Dayton Realtors MLS · Pioneering AI for Ohio</p>
        </footer>
      </main>
    </div>
  );
}

