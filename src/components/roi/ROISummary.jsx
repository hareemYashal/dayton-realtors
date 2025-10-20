import { TrendingUp, DollarSign, Award, Users, Rocket, CheckCircle, PieChart } from 'lucide-react';
import Header from '../common/Header';
import Card from '../common/Card';

export default function ROISummary() {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'Member Retention Increase',
      value: '23%',
      description: 'Higher agent satisfaction and reduced churn',
      accent: 'from-blueprint-blue via-blue-500 to-blue-300'
    },
    {
      icon: DollarSign,
      label: 'New Revenue Stream',
      value: '$360K/year',
      description: '$20/agent/month × 1,500 members',
      accent: 'from-emerald-500 via-teal-500 to-blue-300'
    },
    {
      icon: Award,
      label: 'MLS Innovation',
      value: 'First in Ohio',
      description: 'AI-powered MLS platform',
      accent: 'from-indigo-500 via-blue-500 to-blue-300'
    },
    {
      icon: Users,
      label: 'Pilot Program',
      value: '100 Agents',
      description: '60-day trial cohort',
      accent: 'from-amber-500 via-orange-500 to-rose-400'
    }
  ];

  const benefits = [
    'Instant lead response with AI chat assistant',
    'Professional CMAs generated in under 30 seconds',
    'Real-time market insights with interactive heatmaps',
    'Automated marketing emails and content generation',
    'Client retention tools with equity tracking',
    'Mobile-responsive dashboard accessible anywhere',
    'Zero manual data entry – fully automated',
    'White-labeled with Dayton Realtors MLS branding'
  ];

  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-blueprint-blue/20 bg-blueprint-blue/10 text-blueprint-blue shadow-sm">
            <Rocket className="h-10 w-10" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.5em] text-blueprint-blue">
            MLS Transformation Briefing
          </p>
          <h1 className="mt-3 text-4xl font-heading font-semibold text-slate-900 md:text-5xl">
            AI-Powered MLS Platform Impact
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Quantifying the business case for Dayton Realtors MLS and the Haines AI partnership. Demonstrate retention, revenue
            diversification, and first-mover advantage across Ohio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ icon: Icon, value, label, description, accent }) => (
            <Card key={label} className="h-full border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" hover={false}>
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-blueprint-blue/10`}>
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-6 text-3xl font-heading font-semibold text-slate-900">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">{label}</p>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,_420px)_1fr]">
          <Card className="border border-slate-200 bg-white p-8 text-slate-900 shadow-sm" hover={false}>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-blueprint-blue" />
              <div>
                <h3 className="text-2xl font-heading font-semibold text-slate-900">Key Benefits</h3>
                <p className="text-sm text-slate-500">MLS-exclusive capabilities delivered through a unified AI workspace.</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border border-slate-200 bg-white p-8 text-slate-900 shadow-sm" hover={false}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-slate-900">Pilot Offer</h3>
                <p className="text-sm text-slate-500">Unlock ROI fast with a focused 60-day trial.</p>
              </div>
              <div className="rounded-full border border-blueprint-blue/30 bg-blueprint-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
                Early Access
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blueprint-blue/20 bg-blueprint-blue/10 p-4 text-blueprint-blue">
                <p className="text-xs font-semibold uppercase tracking-[0.35em]">Trial</p>
                <p className="mt-2 text-2xl font-heading font-semibold">60 Days</p>
                <p className="text-xs text-blueprint-blue/80">Full platform access</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.35em]">Agents</p>
                <p className="mt-2 text-2xl font-heading font-semibold">100 Seats</p>
                <p className="text-xs text-slate-500">Pilot cohort</p>
              </div>
              <div className="rounded-2xl border border-blueprint-blue/20 bg-blueprint-blue/10 p-4 text-blueprint-blue">
                <p className="text-xs font-semibold uppercase tracking-[0.35em]">Pricing</p>
                <p className="mt-2 text-2xl font-heading font-semibold">$20/mo</p>
                <p className="text-xs text-blueprint-blue/80">Post-trial</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-slate-700">
                <PieChart className="h-5 w-5 text-blueprint-blue" />
                <span className="text-sm font-semibold">Revenue projection: +$360K/year at full adoption</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Includes onboarding concierge, live training for pilot agents, and dashboard customization.
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-12 items-center justify-between gap-6 border border-slate-200 bg-white px-8 py-10 text-slate-600 shadow-sm" hover={false}>
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blueprint-blue">Next Steps</p>
            <h3 className="text-2xl font-heading font-semibold text-slate-900">Ready to Transform Your MLS?</h3>
            <p className="text-sm text-slate-600">
              Join the first AI-powered MLS in Ohio and give your agents the competitive edge they need.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-center md:flex-row">
            <div className="cursor-pointer rounded-full border border-blueprint-blue/30 bg-blueprint-blue/10 px-8 py-3 text-sm font-semibold text-blueprint-blue transition hover:bg-blueprint-blue/20">
              Start Pilot Program
            </div>
            <div className="cursor-pointer rounded-full border border-blueprint-blue bg-blueprint-blue px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Schedule Executive Demo
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

