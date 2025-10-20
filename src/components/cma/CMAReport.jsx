import { Home } from 'lucide-react';
import Modal from '../common/Modal';
import { formatCurrency, formatDate } from '../../utils/helpers';

export default function CMAReport({ isOpen, onClose, data }) {
  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="CMA Report Preview" maxWidth="max-w-5xl">
      <div className="space-y-8 text-slate-900">
        <div className="rounded-3xl border border-blueprint-blue/20 bg-blueprint-blue/5 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">Comparative Market Analysis</p>
              <h1 className="mt-2 text-3xl font-heading font-semibold text-blueprint-blue">Executive Summary</h1>
              <p className="mt-2 text-sm text-slate-600">Prepared for Sarah Miller · Dayton Realtors MLS · Powered by Haines AI Realty</p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blueprint-blue text-white shadow">
              <Home className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,_340px)_1fr]">
          <div className="rounded-3xl border border-blueprint-blue/20 bg-blueprint-blue/10 p-6 text-blueprint-blue">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue/80">Subject Property</p>
            <p className="mt-2 text-lg font-heading text-blueprint-blue">{data.address}</p>
            <p className="mt-2 text-sm text-blueprint-blue/80">
              AI-synthesized estimate combines MLS comps, absorption rates, and current demand signals.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue">Estimated Value</p>
            <p className="mt-3 text-4xl font-heading font-semibold text-blueprint-blue">{formatCurrency(data.estimatedValue)}</p>
            <p className="mt-2 text-sm text-slate-600">
              Valuation range: <span className="font-medium">{formatCurrency(data.variance.low)}</span> –{' '}
              <span className="font-medium">{formatCurrency(data.variance.high)}</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
              Confidence band derived from MLS comps within 0.5 mi radius.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-heading font-semibold text-slate-900">Comparable Sales</h2>
          <p className="text-sm text-slate-500">Recent MLS transactions with highest similarity weighting.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <tr>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Sq Ft</th>
                  <th className="px-4 py-3 text-right">Sold Date</th>
                  <th className="px-4 py-3 text-right">Distance</th>
                </tr>
              </thead>
              <tbody>
                {data.comparables.map((comp, index) => (
                  <tr key={index} className="border-b border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-700">{comp.address}</td>
                    <td className="px-4 py-3 text-right font-semibold text-blueprint-blue">{formatCurrency(comp.price)}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{comp.sqft.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{formatDate(comp.soldDate)}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{comp.distance} mi</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 text-center text-sm text-slate-500 shadow-sm">
          <p>MLS-authenticated CMA generated via Haines AI valuation engine</p>
          <p className="mt-2">© {new Date().getFullYear()} Dayton Realtors MLS · Haines AI Realty</p>
        </div>
      </div>
    </Modal>
  );
}

