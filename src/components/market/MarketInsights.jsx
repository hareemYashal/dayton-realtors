import { useState } from 'react';
import { BarChart2, Target, TrendingUp, Clock, Percent } from 'lucide-react';
import Header from '../common/Header';
import HeatMap from './HeatMap';
import TopZIPsList from './TopZIPsList';
import Button from '../common/Button';

export default function MarketInsights() {
  const [metric, setMetric] = useState('demand');

  const metrics = [
    { id: 'demand', label: 'Demand Index', icon: Target, description: 'Buyer urgency score and absorption rate' },
    { id: 'price', label: 'Median Price', icon: TrendingUp, description: 'Active listing median price position' },
    { id: 'dom', label: 'Days on Market', icon: Clock, description: 'Time to contract velocity (median)' },
    { id: 'roi', label: 'Investor ROI', icon: Percent, description: 'Investor yield based on net operating income' }
  ];

  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
              <BarChart2 className="h-4 w-4" /> Market Insights Dashboard
            </div>
            <h2 className="text-3xl font-heading font-semibold text-slate-900">Market Insights Dashboard</h2>
            <p className="text-slate-600">
              Interactive MLS heatmap with AI-driven demand signals and ZIP-level performance.
            </p>
          </div>
          <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
            <p className="font-semibold text-blueprint-blue">Realtime Status</p>
            <p className="text-blueprint-blue/80">Updating every 30 minutes · 8 ZIP clusters monitored</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,_320px)_1fr]">
          <div className="space-y-4">
            {metrics.map(({ id, label, icon: Icon, description }) => {
              const isActive = metric === id;
              return (
                <Button
                  key={id}
                  onClick={() => setMetric(id)}
                  variant={isActive ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full justify-start"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <div className="text-left">
                      <p className="text-sm font-semibold">{label}</p>
                      <p className="text-xs font-normal text-blueprint-blue/80">{description}</p>
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">Geo Intelligence</p>
                <p className="mt-2 text-2xl font-heading text-slate-900">Dayton Metro Heatmap</p>
                <p className="text-sm text-slate-600">
                  Select a metric to view dynamic choropleth intensity across ZIP clusters.
                </p>
              </div>
              <div className="rounded-full border border-blueprint-blue/30 bg-blueprint-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
                MapLibre + MLS Data
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4">
              <HeatMap metric={metric} theme="light" />
            </div>

            <div className="mt-6">
              <TopZIPsList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

