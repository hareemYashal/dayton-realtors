import { TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../utils/helpers';
import marketData from '../../data/market-data.json';

export default function TopZIPsList() {
  const topZIPs = [...marketData].sort((a, b) => b.yoyChange - a.yoyChange).slice(0, 5);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-slate-900">Top Rising ZIPs</h3>
        <span className="rounded-full bg-blueprint-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue">
          YoY Momentum
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {topZIPs.map((zip, index) => (
          <div key={zip.zip} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-blueprint-blue/40 hover:bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blueprint-blue/70">ZIP {zip.zip}</p>
                <p className="mt-1 text-base font-medium text-slate-800">{zip.name}</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-blueprint-blue/10 px-3 py-1 text-sm font-semibold text-blueprint-blue">
                <TrendingUp className="h-4 w-4" /> +{zip.yoyChange}%
              </div>
            </div>
            <div className="mt-3 grid gap-3 text-xs text-slate-500 md:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-400">Median Price</p>
                <p className="text-sm text-slate-600">{formatCurrency(zip.medianPrice)}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-400">Demand Index</p>
                <p className="text-sm text-slate-600">{zip.demandIndex}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-400">DOM · ROI</p>
                <p className="text-sm text-slate-600">{zip.daysOnMarket} days · {zip.investorROI}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

